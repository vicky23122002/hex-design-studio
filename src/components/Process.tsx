import React from 'react';

const steps = [
  {
    number: '01',
    title: 'DISCOVERY',
    description: 'We listen. We research. We analyze. We map the terrain before we build.',
  },
  {
    number: '02',
    title: 'STRATEGY',
    description: 'We define the problem. We set the constraints. We establish the framework.',
  },
  {
    number: '03',
    title: 'STRUCTURE',
    description: 'We design the system. We build the architecture. We create the foundation.',
  },
  {
    number: '04',
    title: 'EXECUTION',
    description: 'We craft the details. We refine the interface. We deliver the solution.',
  },
  {
    number: '05',
    title: 'ITERATION',
    description: 'We test. We learn. We improve. Design is never finished—only refined.',
  },
];

export function Process() {
  return (
    <section className="border-b-2 border-[#2a2a2a] py-32 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Label */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FF0000]"></div>
                <span className="text-xs text-[#888888] tracking-[0.3em]">003</span>
              </div>
              <h2 className="text-4xl font-black text-[#e5e5e5] tracking-tight">HOW WE WORK</h2>
            </div>
          </div>

          {/* Process Steps */}
          <div className="col-span-9 border-l-2 border-[#2a2a2a] pl-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid grid-cols-12 gap-8 py-12 ${
                    index < steps.length - 1 ? 'border-b-2 border-[#2a2a2a]' : ''
                  }`}
                >
                  <div className="col-span-2">
                    <div className="text-5xl font-black text-[#FF0000] tracking-tighter">
                      {step.number}
                    </div>
                  </div>
                  <div className="col-span-10">
                    <h3 className="text-2xl font-black text-[#e5e5e5] mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#888888] leading-loose max-w-[600px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 p-8 border-2 border-[#2a2a2a] bg-[#0a0a0a]">
              <p className="text-sm text-[#888888] leading-loose">
                Our process is not linear. It is iterative. Collaborative. Adaptive. We work with clients as partners, not vendors. We challenge assumptions. We ask questions. We pursue clarity above all else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
