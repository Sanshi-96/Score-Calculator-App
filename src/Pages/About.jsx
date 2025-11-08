import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gal1 from "../assets/gal1.svg";
import gal2 from "../assets/gal2.svg";
import gal3 from "../assets/gal3.svg";
import gal4 from "../assets/gal4.svg";
import gal5 from "../assets/gal5.svg";

export default function About() {
  return (
    <section className="relative w-full py-24 bg-linear-to-br from-purple-700 via-pink-600 to-blue-700 overflow-hidden">

      {/* Top Section: Text & Cards */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
          About This App
        </h2>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
          The Marks Calculator helps students quickly calculate total and average marks, saving time and minimizing errors.
          Clean, responsive, and designed for an intuitive experience across all devices.
        </p>

        {/* Key Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-lg">
            <h3 className="text-white font-bold text-lg mb-2">Real-time Calculation</h3>
            <p className="text-gray-200">See total and average instantly.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-lg">
            <h3 className="text-white font-bold text-lg mb-2">Error Validation</h3>
            <p className="text-gray-200">Avoid incorrect entries with checks.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-lg">
            <h3 className="text-white font-bold text-lg mb-2">Responsive Design</h3>
            <p className="text-gray-200">Works perfectly on all devices.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-lg">
            <h3 className="text-white font-bold text-lg mb-2">Fast & Lightweight</h3>
            <p className="text-gray-200">Smooth performance, minimal load.</p>
          </div>
        </div>

        {/* Future Improvements Card */}
        <div className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl  max-w-3xl mx-auto text-left">
          <h3 className="text-2xl text-center font-semibold mb-3">Future Improvements</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Add grading system for auto categorization</li>
            <li>Export results as PDF</li>
            <li>Store previous results locally</li>
            <li>Optional dark/light mode</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Full Screen Carousel */}
      <div className="w-full mt-16 px-6 md:px-16 py-8">
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          className="w-full h-[80vh] rounded-3xl overflow-hidden"
        >
          {[gal1, gal2, gal3, gal4, gal5].map((img, idx) => (
            <div key={idx} className="w-full h-screen flex justify-center items-center bg-linear-to-tr from-purple-100 via-pink-100 to-blue-100">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="h-3/4 md:h-5/6 w-auto "
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
