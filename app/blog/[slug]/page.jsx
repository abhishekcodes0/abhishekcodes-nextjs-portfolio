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
  openGraph: {
    title: postData.title,
    description: postData.description,
    images: [
      {
        url: postData.image,
        alt: postData.title,
      },
    ],
    url: `https://abhishekcodes.com/blog/${postData.slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: postData.title,
    description: postData.description,
    image: postData.image,
  },
  alternates: {
    canonical: `https://abhishekcodes.com/blog/${postData.slug}`,
  },
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

const page = (props) => {
  return (
    <article className="p-8 bg-gray-200 w-full h-screen flex justify-center items-center">
      <h1>{postData.title}</h1>
      {/* <Image
            src={postData.image}
            alt={postData.title}
            width={600}
            height={400}
          /> */}
      <p>{postData.content}</p>
    </article>
  );
};

export default page;
