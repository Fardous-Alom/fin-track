"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: (
      <svg
        className="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: (
      <svg
        className="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname(); // Get current route

  return (
    <div
      id="hs-application-sidebar"
      className="hs-overlay [--auto-close:lg] 
      hs-overlay-open:translate-x-0 
      -translate-x-full transition-all duration-300 transform 
      w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] 
      bg-white border-e border-gray-200 lg:block lg:translate-x-0 
      dark:bg-neutral-800 dark:border-neutral-700"
      role="dialog"
      tabIndex={-1}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        {/* Logo */}
        <div className="px-6 pt-4">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Preline"
          >
            <svg
              className="w-28 h-auto"
              width="116"
              height="32"
              viewBox="0 0 116 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13"
                cy="16.5214"
                r="5"
                className="fill-blue-600 dark:fill-white"
              />
            </svg>
          </a>
        </div>

        {/* Sidebar Content */}
        <div className="h-full overflow-y-auto">
          <nav className="p-3 w-full flex flex-col flex-wrap">
            <ul className="flex flex-col space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg 
                        hover:bg-gray-100 dark:hover:bg-neutral-700 
                        ${
                          isActive
                            ? "text-purple-600 font-semibold dark:text-purple-400 bg-gray-100"
                            : "text-gray-800 dark:text-neutral-200"
                        }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
