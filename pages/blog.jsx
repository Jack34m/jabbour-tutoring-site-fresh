// File: pages/blog.jsx
import fs from "fs";
import path from "path";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  let posts = [];
  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    posts = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to load blog posts:", error);
  }

  return {
    props: {
      posts: posts.reverse(), // newest first
    },
  };
}

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Insights and updates from Jabbour Tutoring. Read our latest blog posts about academic success in Lebanon."
        />
      </Head>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-[Playfair Display] font-bold text-green-800 text-center mb-10">
            Jabbour Tutoring Blog
          </h1>

          {posts.length === 0 ? (
            <p className="text-center text-gray-600">
              No blog posts available yet. Check back soon!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-green-700 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-4">
                      {post.content}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-green-700 hover:underline text-sm font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
