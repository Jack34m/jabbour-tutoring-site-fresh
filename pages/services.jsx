import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Jabbour Tutoring</title>
        <meta name="description" content="Discover our personalized private tutoring services, available online or in-person for students of all levels across all Lebanon." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">Our Tutoring Services</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We offer customized one-on-one tutoring in person or online, tailored to meet each student's goals, learning style, and schedule. Our tutoring center operates as a private tutoring service, meaning that only one individual may be present at each session, thus recieving the full and undivided focus of the tutor present. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">Online Tutoring</h2>
              <p className="text-sm text-gray-600">
                Learn from the comfort and convenience of your home through Zoom or Google Meet. Online tutoring is available across all of Lebanon for all age groups. 
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700 mb-2">In-Person Tutoring</h2>
              <p className="text-sm text-gray-600">
                For students in our area, we offer in-person tutoring at our tutoring center. For select students who may lack transportation, we offer unique services that include in-person tutoring at their residence. 
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
