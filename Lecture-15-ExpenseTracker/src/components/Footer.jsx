import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        
        {/* Left */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-slate-900">Expense Tracker</span>. 
          All rights reserved.
        </p>

        {/* Center — Links */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900 transition">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition">Terms</a>
          <a href="#" className="hover:text-slate-900 transition">Support</a>
        </div>

        {/* Right — Social icons */}
        <div className="flex items-center gap-3">
          <button className="h-8 w-8 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 transition">
            <span className="text-base">🐦</span>
          </button>
          <button className="h-8 w-8 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 transition">
            <span className="text-base">📘</span>
          </button>
          <button className="h-8 w-8 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 transition">
            <span className="text-base">📸</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
