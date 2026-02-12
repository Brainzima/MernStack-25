import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-4">
            Have questions? We’d love to hear from you.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition">
            <Mail className="mx-auto text-indigo-600 w-8 h-8" />
            <h3 className="mt-4 font-semibold text-gray-800">Email</h3>
            <p className="text-gray-500 text-sm mt-2">
              support@biharnaturals.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition">
            <Phone className="mx-auto text-indigo-600 w-8 h-8" />
            <h3 className="mt-4 font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-500 text-sm mt-2">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition">
            <MapPin className="mx-auto text-indigo-600 w-8 h-8" />
            <h3 className="mt-4 font-semibold text-gray-800">Location</h3>
            <p className="text-gray-500 text-sm mt-2">
              Patna, Bihar, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm mt-20 p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Send Us a Message
          </h2>

          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-2xl hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
