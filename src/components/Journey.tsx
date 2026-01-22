import React from "react";

export function Journey() {
  return (
    <section className="border-b-2 border-[#2a2a2a] py-32 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Label */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FF0000]"></div>
                <span className="text-xs text-[#888888] tracking-[0.3em]">
                  005
                </span>
              </div>
              <h2 className="text-4xl font-black text-[#e5e5e5] tracking-tight">
                CREATIVE JOURNEY
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-9 border-l-2 border-[#2a2a2a] pl-8">
            <div className="mb-16">
              <div className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-tighter text-[#FF0000] mb-8">
                50+
              </div>
              <div className="text-2xl font-black text-[#e5e5e5] tracking-tight mb-6">
                CLIENTS CREATIVE JOURNEYS COMPLETED
              </div>
              <div className="max-w-[600px]">
                <p className="text-sm text-[#888888] leading-loose mb-6">
                  Over four years, we have built long-term partnerships with
                  forward-thinking organizations. We don't chase projects—we
                  build relationships.
                </p>
                <p className="text-sm text-[#888888] leading-loose mb-6">
                  Our clients return because we deliver clarity. Because we
                  solve problems, not just create deliverables. Because we
                  understand that great design is an investment, not an expense.
                </p>
                <p className="text-sm text-[#888888] leading-loose">
                  Trust is earned through consistency. Through rigor. Through
                  results that speak louder than promises.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-0 border-2 border-[#2a2a2a]">
              <div className="p-8 border-r-2 border-[#2a2a2a]">
                <div className="text-4xl font-black text-[#FF0000] mb-2 tracking-tighter">
                  92%
                </div>
                <div className="text-xs text-[#888888] tracking-widest">
                  CLIENT RETENTION
                </div>
              </div>
              <div className="p-8 border-r-2 border-[#2a2a2a]">
                <div className="text-4xl font-black text-[#FF0000] mb-2 tracking-tighter">
                  4.8Y
                </div>
                <div className="text-xs text-[#888888] tracking-widest">
                  AVG. PARTNERSHIP
                </div>
              </div>
              <div className="p-8">
                <div className="text-4xl font-black text-[#FF0000] mb-2 tracking-tighter">
                  100%
                </div>
                <div className="text-xs text-[#888888] tracking-widest">
                  ON-TIME DELIVERY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
