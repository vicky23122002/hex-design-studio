import React from "react";
import logo from "../assets/logo.png";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between border-b-2 border-[#2a2a2a]">
      {/* Header */}
      <header className="border-b-2 border-[#2a2a2a] p-8">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <div className="w-12 h-12 bg-[#FF0000] flex items-center justify-center">
              <div className="text-[#0a0a0a] font-black text-xl tracking-tighter">HEX</div>
            </div> */}
            <img
              src={logo}
              alt="HEX Design Studios Logo"
              className="w-14 h-14"
            />
            <span className="text-[#e5e5e5] font-black text-xl tracking-tight">
              HEX DESIGN STUDIOS
            </span>
          </div>
          <button
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/hex_design_studios/";
            }}
            className="bg-[#FF0000] text-[#0a0a0a] px-8 py-3 font-black tracking-tight hover:bg-[#cc0000] transition-colors"
          >
            START A PROJECT
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-8 py-24">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-10">
              <h1 className="text-[clamp(3rem,8vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#e5e5e5] mb-8">
                FORM FOLLOWS
                <br />
                <span className="text-[#FF0000]">FUNCTION</span>
              </h1>
              <div className="max-w-[600px]">
                <p className="text-base text-[#888888] leading-relaxed mb-8">
                  We build systems. Not decorations. Every pixel serves a
                  purpose. Every decision is deliberate. Design is not what it
                  looks like—it's how it works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid Info */}
      <div className="border-t-2 border-[#2a2a2a] grid grid-cols-3">
        <div className="border-r-2 border-[#2a2a2a] p-8">
          <div className="text-xs text-[#888888] mb-2 tracking-widest">
            LOCATION
          </div>
          <div className="text-base text-[#e5e5e5] font-black">GLOBAL</div>
        </div>
        <div className="border-r-2 border-[#2a2a2a] p-8">
          <div className="text-xs text-[#888888] mb-2 tracking-widest">
            ESTABLISHED
          </div>
          <div className="text-base text-[#e5e5e5] font-black">2020</div>
        </div>
        <div className="p-8">
          <div className="text-xs text-[#888888] mb-2 tracking-widest">
            PROJECTS
          </div>
          <div className="text-base text-[#e5e5e5] font-black">50+</div>
        </div>
      </div>
    </section>
  );
}
