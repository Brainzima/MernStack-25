export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-xl font-bold text-indigo-600">BiKart</h2>
          <p className="text-gray-500 mt-4 text-sm">
            Your premium destination for modern lifestyle products.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-indigo-600 cursor-pointer transition">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Products</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
          <div className="flex bg-gray-100 rounded-2xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
            />
            <button className="bg-indigo-600 text-white px-6 hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm py-4 border-t border-gray-100">
        © {new Date().getFullYear()} BiKart. All rights reserved.
      </div>
    </footer>
  );
}
