import { useState } from "react";
import MarksGrid from "../Components/MarksGrid";
import ResultCard from "../Components/ResultCard";
import HeroIllustration from "../assets/hero-illustration.svg";

function Home() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState(Array(9).fill(""));

  const handleChange = (index, value) => {
    const updated = [...marks];
    updated[index] = value;
    setMarks(updated);
  };

  const allFilled = marks.every((val) => val !== "");
  const total = allFilled ? marks.reduce((sum, val) => sum + Number(val), 0) : 0;
  const average = allFilled ? total / marks.length : 0;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 overflow-hidden">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight">
            Fast & Easy Marks Calculator
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Calculate your total and average marks instantly with our clean, minimal, and modern interface.
          </p>
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center z-10">
          <img
            src={HeroIllustration}
            alt="Illustration"
            className="w-3/4 md:w-2/3 max-w-sm drop-shadow-2xl"
          />
        </div>
        {/* Decorative Background Shapes */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </section>

     <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row justify-center items-start gap-12">
      {/* Inputs & Form */}
      <div className="flex-1 bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-shadow duration-500">
        <h2 className="text-2xl md:text-4xl font-semibold text-purple-600 mb-6 text-center md:text-left">
          Marks Input
        </h2>

        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full mb-6 p-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none text-center md:text-left text-gray-700 font-medium placeholder-gray-400 transition"
        />

        {/* Marks Grid */}
        <MarksGrid
          marks={marks}
          handleChange={handleChange}
          className="grid grid-cols-3 gap-4"
        />
      </div>

      {/* Live Result Panel */}
      <div className="flex-1 bg-linear-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl shadow-2xl p-8 text-white">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
          Live Result
        </h2>

        {allFilled ? (
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Name:</span> {name || "Anonymous"}
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Total Marks:</span> {total}
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Average:</span> {average.toFixed(2)}
            </p>
            <button className="mt-4 w-full bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
              Save Result
            </button>
          </div>
        ) : (
          <p className="italic text-gray-100 text-center md:text-left">
            Enter all marks to see your live result
          </p>
        )}
      </div>
    </section>
    </div>
  );
}

export default Home;
