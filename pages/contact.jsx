import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Reach out to Jabbour Tutoring by WhatsApp or Email. Schedule your consultation call today."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-6 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-[Playfair Display] font-bold text-green-800 mb-4">
            Contact Us by WhatsApp or Email for a Consultation Call
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            📞 WhatsApp:{" "}
            <a
              href="https://wa.me/96171855369"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              +961 70 278 248
            </a>
            <p>Or</p>
            <a
              href="https://wa.me/96171855369"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              +961 71 855 369
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-10">
            📧 Email:{" "}
            <a
              href="mailto:jabbourtutoring@example.com"
              className="text-green-700 font-semibold hover:underline"
            >
              jabbourtutoring@example.com
            </a>
          </p>

          <form className="bg-white shadow-md rounded-lg p-8 text-left space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
              >
                <option value="">Select a Subject</option>
                <option value="math">Mathematics</option>
                <option value="english">English</option>
                <option value="physics">Physics</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
