import { useState } from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogAdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/save-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setSubmitted(true);
      setTitle("");
      setContent("");
    } else {
      alert("Failed to save blog post.");
    }
  };

  return (
    <>
      <Head>
        <title>Admin | Write a Blog Post</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter] py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-playfair text-center text-green-800 mb-8">
          Write a New Blog Post
        </h1>

        {submitted && (
          <p className="text-green-700 text-center mb-6">
            Post saved successfully!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="10"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition duration-300"
          >
            Publish Post
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
