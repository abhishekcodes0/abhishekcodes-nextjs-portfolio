import { apiUrl } from "@/utils/config";
import Link from "next/link";

import axios from "axios";

const fetchBlogs = async (params) => {
  const response = await axios.get(`${apiUrl}/api/blog/get`);
  return response.data;
};

const page = async () => {
  //   const featuredBlogs = await fetchBlogs(`filters[IsFeatured][$eq]=true`);
  const blogs = await fetchBlogs();

  //   console.log("===blogs", blogs);
  //   console.log("===featuredblogs", featuredBlogs);

  return (
    <div className="w-full h-full flex gap-8 p-8">
      {blogs?.map((blog) => {
        return (
          <Link href={`/blog/${blog.slug}`} key={blog._id}>
            <div
              className="w-[200px] h-[200px] bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300"
              key={blog._id}
            >
              {blog.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
