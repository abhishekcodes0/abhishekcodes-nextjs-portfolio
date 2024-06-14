import Link from "next/link";

import axios from "axios";
import { apiUrl } from "@/utils/config";

const fetchBlogs = async (params) => {
  const response = await axios.get(`${apiUrl}/api/blog/get`);
  return response.data;
};

const transformDate = (isoDate) => {
  const date = new Date(isoDate);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};

const page = async () => {
  //   const featuredBlogs = await fetchBlogs(`filters[IsFeatured][$eq]=true`);
  const blogs = await fetchBlogs();
  console.log("blogs", blogs);
  const featuredBlog = blogs.filter((itr) => itr.isFeatured)[0] ?? {};

  console.log("===blogs", blogs);
  console.log("===featuredblogs", featuredBlog);

  return (
    <div className="flex flex-col px-24 mt-16">
      <section>
        <h2 className="font-semibold mb-2">Featured Blogs</h2>
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

            <Link
              className="mt-8 text-blue-600"
              href={`/blog/${featuredBlog.slug}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold mb-2">Recent Blogs</h2>

        <div className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogs?.map((blog) => {
              return (
                <div
                  className="w-full rounded flex justify-center flex-col cursor-pointer"
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

                    <Link
                      className="mt-4 text-blue-600"
                      href={`/blog/${blog.slug}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
