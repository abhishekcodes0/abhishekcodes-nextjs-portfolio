import axios from "axios";
import Link from "next/link";
import { apiUrl } from "@/utils/config";
import { transformDate } from "@/utils/miscFunctions";

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const post = await axios.get(`${apiUrl}/api/blog/get/${params.slug}`);
  const postData = post.data;
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  // return {
  //   title: product.title,
  //   openGraph: {
  //     images: ['/some-specific-page-image.jpg', ...previousImages],
  //   },
  // }
  return {
    title: postData.title,
    description: postData.description,
    // keywords: postData.keywords.join(", "),
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
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await axios.get(`${apiUrl}/api/blog/get`);

  return posts.data.map((post) => ({
    slug: post.slug,
    fallback: "blocking",
  }));
}

function extractH2Tags(htmlString) {
  const h2Regex = /<h2 id="([^"]*)">([^<]*)<\/h2>/g;
  const h2Tags = [];

  let match;
  while ((match = h2Regex.exec(htmlString)) !== null) {
    const id = match[1];
    const text = match[2];
    h2Tags.push({ id, text });
  }

  return h2Tags;
}

const page = async (props) => {
  const blogRes = await axios.get(
    `${apiUrl}/api/blog/get/${props.params.slug}`
  );
  const blog = blogRes.data;

  const extractedH2Tags = extractH2Tags(blog.content);

  return (
    <div className="container mt-16 mx-auto px-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href="/blog"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
                Blog
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                {props.params.slug}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <header className="my-8 border-2 border-blue-200 bg-blue-100 p-4 rounded">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-gray-600">
          Published on {transformDate(blog.createdAt)}
        </p>
        <p className="mt-2 text-lg">{blog.summary}</p>
      </header>
      <div className="flex relative">
        <aside className="w-1/5 pr-4 h-100 p-4">
          <nav className="h-[200px] sticky top-10">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-disc list-inside">
              {extractedH2Tags.map((tag) => (
                <li>
                  <a
                    key={tag.id}
                    href={`#${tag.id}`}
                    className=" hover:underline"
                  >
                    {tag.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="w-4/5 p-4 pr-24 w-[868px]">
          <img src={blog.thumbnail} className="mb-8 rounded" />
          <div
            className="blog-content text-wrap"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default page;
