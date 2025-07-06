import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Jabbour Tutoring</title>
        <meta
          name="description"
          content="Meet the founders of Jabbour Tutoring — a mother-son team offering tailored academic help to Lebanese students. Lebanses official exam help included. High quality private math and physics tutoring."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">
            Meet the Team
          </h1>
          <h3 className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Jabbour Tutoring is private tutoring center. Jabbour tutoring is proudly co-owned and operated by a mother and son team dedicated to helping students rise to new academic heights
            in English, Mathematics, and Physics. We bring passion, patience,
            and personalized strategies to every lesson. 
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 - Placeholder for You */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder-profile.png" // Replace with your image later
                  alt="James Jabbour"
                  width={128}
                  height={128}
                />
              </div>
              <h2 className="text-xl font-semibold text-green-800">
                James Jabbour
              </h2>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Math and Physics tutor.
                <br />
                James is a third year civil engineering student studying at NDU university. Equipped with over 2 years of tutoring experince, James can often predict where students may get stuck, or misinterpret certain concepts.
              </p>
            </div>

            {/* Card 2 - Placeholder for Your Mother */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder-profile.png" // Replace with her image later
                  alt="Mrs. Jabbour"
                  width={128}
                  height={128}
                />
              </div>
              <h2 className="text-xl font-semibold text-green-800">
                Nicole Jabbour
              </h2>
              <p className="text-sm text-gray-600 mt-2 text-center">
                English and Math tutor.
                <br />
                Mrs Nicole Jabbour holds a graduate degree in English studies as well as a post-graduate degree in teaching from the American University of Science and Technology. In addition, she holds over 4 years in teaching and tutoring experince. In her free time, Nicole enjoys writing poems for her future book.  
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
