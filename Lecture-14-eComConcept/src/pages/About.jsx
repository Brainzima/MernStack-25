export default function About() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 py-16 px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-pink-400">
            About Our Store
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Quality products, trusted service, and a shopping experience made for you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
              alt="Ecommerce Team"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are an online marketplace dedicated to bringing you premium-quality
              products at honest prices. From fashion to electronics to daily
              essentials — we carefully curate items that deliver comfort,
              performance, and value.
            </p>

            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is simple — make online shopping smooth, secure, and
              affordable. We combine trusted suppliers, efficient delivery, and
              customer-first service to give you an experience you can rely on
              every time you shop.
            </p>

            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Shop With Us?
            </h3>

            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>High-quality, verified products only</li>
              <li>Secure payment and data protection</li>
              <li>Fast delivery with real-time tracking</li>
              <li>Easy returns and 24×7 customer support</li>
              <li>Fair pricing with regular offers & discounts</li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-yellow-200 rounded-3xl p-10 text-center shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Our Promise
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are committed to giving you a safe, delightful, and affordable online
            shopping experience. Every product you see is chosen with care —
            because you deserve the best.
          </p>
        </div>

      </div>
    </>
  );
}
