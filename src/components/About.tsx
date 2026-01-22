import React from 'react';

export function About() {
  return (
    <section className="border-b-2 border-[#2a2a2a] py-32 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Label */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FF0000]"></div>
                <span className="text-xs text-[#888888] tracking-[0.3em]">001</span>
              </div>
              <h2 className="text-4xl font-black text-[#e5e5e5] tracking-tight">MANIFESTO</h2>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-9 border-l-2 border-[#2a2a2a] pl-8">
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-black text-[#e5e5e5] mb-6 tracking-tight">
                  WE REJECT DECORATION
                </h3>
                <p className="text-sm text-[#888888] leading-loose mb-8">
                  Design is not embellishment. It is structure. It is hierarchy. It is logic made visible. We strip away the unnecessary to reveal what matters.
                </p>
                <p className="text-sm text-[#888888] leading-loose">
                  Our work is defined by clarity. By intention. By systems that scale and interfaces that serve. We do not follow trends. We build foundations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#e5e5e5] mb-6 tracking-tight">
                  STRUCTURE OVER STYLE
                </h3>
                <p className="text-sm text-[#888888] leading-loose mb-8">
                  Every grid tells a story. Every constraint creates opportunity. We embrace limitations. We work within systems. We believe that true creativity emerges from discipline.
                </p>
                <p className="text-sm text-[#888888] leading-loose">
                  We design for function first. For users who need solutions, not spectacle. For brands that value substance over surface.
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <div className="mt-24 border-l-4 border-[#FF0000] pl-8 py-4">
              <p className="text-3xl font-black text-[#e5e5e5] leading-tight tracking-tight">
                "Good design is as little design as possible."
              </p>
              <p className="text-sm text-[#888888] mt-4">— DIETER RAMS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
