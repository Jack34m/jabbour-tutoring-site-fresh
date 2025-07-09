// pages/blog.tsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Explore educational blog posts from Jabbour Tutoring. Tips on studying, exams, and subject-specific advice for Lebanese students."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 font-[Playfair Display] mb-6">
            Welcome to our very own personal blog page
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-10">
            Stay updated on the latest research regarding the learning process. Within this blog page we hope to cover numerous tips, tricks, and strategies revolving around learning and attaining information. 
          </p>

          <div className="bg-white shadow-md rounded-lg px-6 py-8">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              📌 Stayed updated for our first blog post!
            </h2>
            <p className="text-gray-600 text-sm">
              Stay tuned as we launch our daily blog post for all lebanese students. 
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
