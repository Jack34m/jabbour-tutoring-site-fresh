import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SubjectsPage() {
    return (
    <>
        <Head>
        <title>Subjects | Jabbour Tutoring</title>
        <meta name="description" content="Explore the subjects we specialize in — Math, English, and Physics — for students of all levels in Lebanon. We offer online tutoring across Lebanon" />
        </Head>

        <Navbar />

        <main className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 font-[Inter]">
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-[Playfair Display] font-bold text-green-800 mb-6">Subjects We Teach</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            At Jabbour Tutoring, we offer expert guidance in three core subjects that form the foundation of academic success. Whether you're preparing for exams, citizenship exams abraod, or building confidence, we tailor our approach to your needs. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-green-700 mb-2">Mathematics</h2>
                <p className="text-sm text-gray-600">
                From elementary to high school — we cover algebra, geometry, trigonometry, and calculus with clarity and care.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-green-700 mb-2">English</h2>
                <p className="text-sm text-gray-600">
                Reading, writing, grammar, and literature — we help students develop fluency and confidence in English.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-green-700 mb-2">Physics</h2>
                <p className="text-sm text-gray-600">
                We break down complex physics concepts and problem-solving into manageable lessons across all grades.
                </p>
            </div>
            </div>
        </section>
        </main>

        <Footer />
    </>
    );
}
