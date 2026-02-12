export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">
            About BiKart
          </h1>
          <p className="text-gray-500 mt-4 leading-relaxed">
            We bring you premium quality Makhana directly sourced from the heart
            of Bihar. Our mission is to deliver healthy, preservative-free snacks
            while supporting local farmers and sustainable practices.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <img
              src="https://www.brainzima.com/brainzima-logo.png"
              alt="Brainzima Logo"
              className="rounded-xl w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Choose Us?
            </h2>

            <div className="mt-6 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="font-semibold text-indigo-600">
                  Premium Quality
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Carefully selected foxnuts roasted with perfection for
                  superior taste and nutrition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="font-semibold text-indigo-600">
                  100% Natural
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  No preservatives, no artificial flavors — only pure goodness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="font-semibold text-indigo-600">
                  Direct from Farmers
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Supporting local farmers in Bihar with fair and ethical sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-800">
            Taste the Purity Today
          </h2>
          <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-2xl hover:bg-indigo-700 transition">
            Explore Products
          </button>
        </div>

      </div>
    </div>
  );
}
