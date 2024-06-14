"use client";
import { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import axios from "axios";
import { apiUrl } from "@/utils/config";
import BlogFields from "@/app/components/BlogFields";

// export async function generateStaticParams() {
//   console.log("here");
//   const posts = await axios.get(`${apiUrl}/api/blog/get`);

//   return posts.data.map((post) => ({
//     slug: post.slug,
//   }));
// }

const page = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [blogState, setBlogState] = useState({
    title: undefined,
    summary: undefined,
    slug: undefined,
    category: undefined,
    isFeatured: false,
    status: "draft",
    thumbnail:
      "https://images.unsplash.com/photo-1718146356507-b9c832eeb106?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  useEffect(() => {
    console.log("pirop", props);
    axios
      .get(`${apiUrl}/api/blog/get/${props.searchParams.slug}`)
      .then((res) => {
        console.log("bhi", res);
        if (res.data?._id) {
          setBlogState(res.data);
          let contentState = stateFromHTML(res.data.content);
          const newEditorState = EditorState.createWithContent(contentState);
          setEditorState(newEditorState);
        }
      });
  }, []);
  let htmlcontent = stateToHTML(editorState.getCurrentContent());
  useEffect(() => {
    setIsBlogSaved(false);
  }, [htmlcontent]);

  let payload = {
    ...blogState,
    content: htmlcontent,
  };
  const [isBlogSaved, setIsBlogSaved] = useState(false);

  const handleBlogStateChange = (e) => {
    const { name, value } = e.target;
    setBlogState((prev) => {
      return { ...prev, [name]: value };
    });
    setIsBlogSaved(false);
  };

  const updateBlog = () => {
    let updatePayload = {
      title: payload.title,
      status: "draft",
      summary: payload.summary,
      slug: payload.slug,
      category: payload.category,
      isFeatured: payload.isFeatured,
      thumbnail: payload.thumbnail,
      content: htmlcontent,
    };
    axios
      .put(`${apiUrl}/api/blog/update/${blogState.slug}`, updatePayload, {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        if (res.data._id) {
          setIsBlogSaved(true);
        }
      });
  };

  const publishBlog = () => {
    console.log("cksjdga");
    let updatePayload = { status: "published" };
    axios
      .put(`${apiUrl}/api/blog/update/${blogState.slug}`, updatePayload, {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        if (res.data._id) {
          setIsBlogSaved(false);
        }
      });
  };

  const getSaveDisabled = () => {
    let disabled = true;

    if (
      blogState.title &&
      blogState.summary &&
      blogState.slug &&
      blogState.category &&
      blogState.thumbnail &&
      htmlcontent &&
      !isBlogSaved
    ) {
      disabled = false;
    }

    return disabled;
  };
  return (
    <ProtectedRoute>
      <BlogFields
        {...{
          getSaveDisabled,
          saveBlog: updateBlog,
          editorState,
          setEditorState,
          blogState,
          setBlogState,
          handleBlogStateChange,
          type: "Edit",
          publishBlog,
          isBlogSaved,
          setIsBlogSaved,
        }}
      />
    </ProtectedRoute>
  );
};

export default page;
