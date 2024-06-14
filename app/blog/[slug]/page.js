import axios from "axios";
import { apiUrl } from "@/utils/config";
import { transformDate } from "@/utils/miscFunctions";

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
    <div className="container mt-16 mx-auto px-4">
      <header className="my-8 border-2 border-blue-200 p-4 rounded">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-gray-600">
          Published on {transformDate(blog.createdAt)}
        </p>
        <p className="mt-2 text-lg">{blog.summary}</p>
      </header>
      <div className="flex">
        <div>
          <div>
            <div class="... sticky top-0">A</div>
            <div>
              <div>
                <img src="..." />
                <p>Abigail Davis</p>
              </div>

              <div>
                <img src="..." />
                <p>Andrew Carter</p>
              </div>
            </div>
          </div>
          <div>
            <div class="sticky top-0">B</div>
            <div>
              <div>
                <img src="..." />
                <p>Benjamin Hughes</p>
              </div>
            </div>
          </div>
        </div>
        {/* <aside className="w-1/5 pr-4 sticky top-0 h-[300px] p-4">
          <nav className="sticky top-0">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-disc list-inside">
              <li>
                <a href="#section1" className="text-blue-500 hover:underline">
                  Section 1
                </a>
              </li>
              <li>
                <a href="#section2" className="text-blue-500 hover:underline">
                  Section 2
                </a>
              </li>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                  Section 3
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                  Section 4
                </a>
              </li>
            </ul>
          </nav>
        </aside> */}
        <article className="w-4/5 p-4 pr-24">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>
    </div>
  );
  return (
    <article className="p-8 w-full flex flex-col p-24">
      <h1 className="text-4xl mb-4">{blog.title}</h1>
      {/* <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
          /> */}
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};

export default page;
