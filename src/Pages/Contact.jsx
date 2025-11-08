export default function Contact() {
  return (
    <section className="px-6 py-16 bg-linear-to-r from-purple-700 via-pink-600 to-blue-700 text-white min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
        <p className="text-center text-lg">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="text-center space-y-2">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:help@markscalculator.com" className="text-white hover:text-blue-300 transition-colors">
              help@markscalculator.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-white hover:text-blue-300 transition-colors">
              +1 234 567 890
            </a>
          </p>
        </div>

        {/* Contact Form with Glass Effect */}
        <form className="bg-white/10 backdrop-blur-md text-white p-8 rounded-3xl shadow-lg flex flex-col gap-6 border border-white/20">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/20 placeholder-white/70 text-white p-4 rounded-xl border border-transparent focus:border-gradient-to-r focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white/20 placeholder-white/70 text-white p-4 rounded-xl border border-transparent focus:border-gradient-to-r focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-white/20 placeholder-white/70 text-white p-4 rounded-xl border border-transparent focus:border-gradient-to-r focus:border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
          ></textarea>
          <button className="bg-white text-purple-700 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg">
            Send Message
          </button>
        </form>

        {/* Newsletter / Say Hello with Glass Effect */}
        <div className="text-center">
          <p className="mb-4 text-white/80 text-lg">
            Subscribe to our newsletter for updates or just say hello!
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 placeholder-white/70 text-white p-4 rounded-xl border border-transparent focus:border-gradient-to-r focus:border-blue-400 focus:ring-2 focus:ring-blue-300 focus:outline-none w-full sm:w-80"
            />
            <button className="bg-white text-purple-700 py-3 px-6 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
