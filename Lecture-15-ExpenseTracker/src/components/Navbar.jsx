import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ active = "overview", onNavClick }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview", link: '/' },
    { id: "transactions", label: "Transactions", link: '/transaction' },
  ];

  const handleNavClick = (id) => {
    if (onNavClick){ onNavClick(id)};
    setIsMobileOpen(false);
  };

  const baseNavItemClasses =
    "px-3 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer";
  const activeClasses =
    "bg-slate-900 text-white shadow-sm";
  const inactiveClasses =
    "text-slate-600 hover:text-slate-900 hover:bg-slate-100";

  return (
    <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-700 to-indigo-500 text-white font-semibold shadow-md">
            ₹
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900 md:text-base">
              Expense Tracker
            </span>
            <span className="hidden text-xs text-slate-500 md:block">
              Track • Control • Grow
            </span>
          </div>
        </div>

        {/* Desktop Nav + Actions */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Nav items */}
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => handleNavClick(item.id)}
                className={
                  baseNavItemClasses +
                  " " +
                  (active === item.id ? activeClasses : inactiveClasses)
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Fake theme toggle button (UI only) */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50"
            >
              ☾
            </button>

            <Link
              to="/add"
              className="hidden items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 md:inline-flex"
            >
              + Add Expense
            </Link>

            {/* Avatar */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold uppercase text-white shadow-sm"
            >
              MR
            </button>
          </div>
        </div>

        {/* Mobile: Right side (Add + menu) */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/add"
            className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm"
          >
            + Add
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-slate-700" />
              <span className="block h-0.5 w-4 rounded-full bg-slate-700" />
              <span className="block h-0.5 w-4 rounded-full bg-slate-700" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => handleNavClick(item.id)}
                className={
                  "w-full text-left text-sm px-3 py-2 rounded-lg " +
                  (active === item.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100")
                }
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500">Logged in as</span>
              <span className="text-xs font-medium text-slate-800">
                M Rahman
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
