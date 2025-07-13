import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/save-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Blog saved successfully!");
      setTitle("");
      setContent("");
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Blog Panel | Jabbour Tutoring</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white py-16 px-4 text-gray-800 font-[Inter]">
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-semibold text-green-800 mb-6 text-center">
            Write a New Blog Post
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                rows="8"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition duration-300"
            >
              Publish Blog Post
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
