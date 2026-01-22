import React from "react";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      {/* Contact Section */}
      <section className="border-b-2 border-[#2a2a2a] py-32 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FF0000]"></div>
                <span className="text-xs text-[#888888] tracking-[0.3em]">
                  006
                </span>
              </div>
              <h2 className="text-4xl font-black text-[#e5e5e5] tracking-tight">
                CONTACT
              </h2>
            </div>

            <div className="col-span-9 border-l-2 border-[#2a2a2a] pl-8">
              <div className="mb-16">
                <p className="text-2xl font-black text-[#e5e5e5] leading-tight tracking-tight mb-8">
                  Ready to build something that matters?
                </p>
                <p className="text-sm text-[#888888] leading-loose max-w-[600px] mb-12">
                  We work with a limited number of clients to ensure quality and
                  focus. If you value clarity, structure, and design as a
                  strategic tool, let's talk.
                </p>
                <a
                  href="mailto:hello@hexdesignstudios.com"
                  className="inline-block bg-[#FF0000] text-[#0a0a0a] px-12 py-4 font-black tracking-tight hover:bg-[#cc0000] transition-colors"
                >
                  hello@hexdesignstudios.com
                </a>
              </div>

              <div className="grid grid-cols-3 gap-0 border-2 border-[#2a2a2a]">
                <div className="p-6 border-r-2 border-[#2a2a2a]">
                  <div className="text-xs text-[#888888] mb-2 tracking-widest">
                    GENERAL
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "mailto:hello@hexdesignstudios.com")
                    }
                    className="text-sm text-[#e5e5e5] cursor-pointer "
                  >
                    hello@hexdesignstudios.com
                  </button>
                </div>
                <div className="p-6 border-r-2 border-[#2a2a2a]">
                  <div className="text-xs text-[#888888] mb-2 tracking-widest">
                    INSTAGRAM
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/hex_design_studios/")
                    }
                    className="text-sm text-[#e5e5e5] cursor-pointer"
                  >
                    @hex_design_studios
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#888888] mb-2 tracking-widest">
                    LINKEDIN
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/hex-design-studios-b1b75429b/")
                    }
                    className="text-sm text-[#e5e5e5] "
                  >
                    @hex-design-studios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="py-8 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="HEX Design Studios Logo"
                className="w-10 h-10"
              />
              <div>
                <div className="text-sm font-black text-[#e5e5e5] tracking-tight">
                  HEX DESIGN STUDIOS
                </div>
                <div className="text-xs text-[#888888]">
                  Structure. Clarity. Purpose.
                </div>
              </div>
            </div>
            <div className="text-xs text-[#888888]">
              © 2026 HEX DESIGN STUDIOS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
