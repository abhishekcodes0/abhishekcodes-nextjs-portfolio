import Link from "next/link";

import axios from "axios";
import { apiUrl } from "@/utils/config";
import { transformDate } from "@/utils/miscFunctions";

const fetchBlogs = async (params) => {
  const response = await axios.get(`${apiUrl}/api/blog/get`);
  return response.data;
};

const page = async () => {
  const blogs = await fetchBlogs();
  const featuredBlog = blogs.filter((itr) => itr.isFeatured)[0] ?? {};

  return (
    <div className="flex flex-col px-24 mt-16">
      <section>
        <h2 className="font-semibold mb-2">Featured Blogs</h2>
        <Link href={`/blog/${featuredBlog.slug}`}>
          <div className="h-80 flex justify-center gap-8">
            <div className="w-1/2 rounded">
              <img
                className="w-full h-full object-cover"
                src={featuredBlog.thumbnail}
              />
            </div>

            <div className="w-1/2 py-4 flex flex-col">
              <div className="text-sm text-gray-400 mb-1">
                {transformDate(featuredBlog.createdAt)}
              </div>
              <h3 className="text-2xl font-semibold mb-4 w-9/12 text-wrap">
                {featuredBlog.title}
              </h3>
              <p className="w-9/12 text-wrap">{featuredBlog.summary}</p>

              <p className="mt-8 text-blue-600">Read More</p>
            </div>
          </div>
        </Link>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold mb-2">Recent Blogs</h2>

        <div className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogs?.map((blog) => {
              return (
                <Link href={`/blog/${blog.slug}`}>
                  <div
                    className="w-full rounded flex justify-start flex-col cursor-pointer"
                    key={blog._id}
                  >
                    <img
                      className="w-full h-[200px] object-cover"
                      src={blog.thumbnail}
                    />

                    <div className="flex flex-col">
                      <div className="text-sm text-gray-400 mt-2">
                        {transformDate(blog.createdAt)}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-wrap">
                        {blog.title}
                      </h3>
                      <p className="text-wrap">{blog.summary}</p>

                      <p className="mt-4 text-blue-600">Read More</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
