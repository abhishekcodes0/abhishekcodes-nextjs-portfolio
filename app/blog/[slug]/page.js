import axios from "axios";
import { apiUrl } from "@/utils/config";

let postData = {
  title: "test-title",
  description: "test-description",
  keywords: ["abc", "bcd"],
  image: "test",
  slug: "test",
  content: "test",
};

export const metadata = {
  title: postData.title,
  description: postData.description,
  keywords: postData.keywords.join(", "),
  //   openGraph: {
  //     title: postData.title,
  //     description: postData.description,
  //     images: [
  //       {
  //         url: postData.image,
  //         alt: postData.title,
  //       },
  //     ],
  //     url: `https://abhishekcodes.com/blog/${postData.slug}`,
  //   },
  //   twitter: {
  //     card: "summary_large_image",
  //     title: postData.title,
  //     description: postData.description,
  //     image: postData.image,
  //   },
  //   alternates: {
  //     canonical: `https://abhishekcodes.com/blog/${postData.slug}`,
  //   },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: postData.title,
      description: postData.description,
      image: postData.image,
      author: {
        "@type": "Person",
        name: postData.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Abhishek Codes",
        logo: {
          "@type": "ImageObject",
          url: "https://abhishekcodes.com/logo.png",
        },
      },
      datePublished: postData.datePublished,
      dateModified: postData.dateModified,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://abhishekcodes.com/blog/${postData.slug}`,
      },
    }),
  },
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  console.log("here");
  const posts = await axios.get(`${apiUrl}/api/blog/get`);

  return posts.data.map((post) => ({
    slug: post.slug,
  }));
}

const page = async (props) => {
  const blogRes = await axios.get(
    `${apiUrl}/api/blog/get/${props.params.slug}`
  );
  const blog = blogRes.data;
  return (
    <article className="p-8 w-full flex justify-center items-center">
      <h1>{blog.title}</h1>
      {/* <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
          /> */}
      <p>{blog.content}</p>
    </article>
  );
};

export default page;
