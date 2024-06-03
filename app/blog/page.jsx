import { apiUrl } from "@/utils/config";
import Link from "next/link";

import axios from "axios";

const token = process.env.BLOG_TOKEN;

// const fetchBlogs = async (params) => {
//   const response = await axios.get(`${apiUrl}/api/blogs?populate=*&${params}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   return response.data.data;
// };

const page = async () => {
  //   const featuredBlogs = await fetchBlogs(`filters[IsFeatured][$eq]=true`);
  //   const blogs = await fetchBlogs();

  //   console.log("===blogs", blogs);
  //   console.log("===featuredblogs", featuredBlogs);
  const blogs = [
    {
      id: 1,
      attributes: {
        Title: "Test Blog 1",
        Slug: "test-blog-1",
      },
    },
    {
      id: 2,
      attributes: {
        Title: "Test Blog 2",
        Slug: "test-blog-2",
      },
    },
  ];

  return (
    <div className="w-full h-full flex gap-8 p-8">
      {blogs.map((blog) => {
        return (
          <Link href={`/blog/${blog.attributes.Slug}`} key={blog.id}>
            <div
              className="w-[200px] h-[200px] bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300"
              key={blog.id}
            >
              {blog.attributes.Title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
