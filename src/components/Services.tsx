import React from 'react';

const services = [
  {
    number: '01',
    title: 'BRAND SYSTEMS',
    description: 'Visual identity. Design systems. Brand architecture. Guidelines that scale.',
  },
  {
    number: '02',
    title: 'DIGITAL PRODUCTS',
    description: 'Web platforms. Mobile applications. SaaS interfaces. Tools that work.',
  },
  {
    number: '03',
    title: 'INFORMATION DESIGN',
    description: 'Data visualization. Content strategy. Information architecture. Clarity at scale.',
  },
  {
    number: '04',
    title: 'ART DIRECTION',
    description: 'Campaign concepts. Editorial design. Photography direction. Visual leadership.',
  },
  {
    number: '05',
    title: 'SYSTEMS THINKING',
    description: 'Design operations. Workflow optimization. Team enablement. Infrastructure.',
  },
  {
    number: '06',
    title: 'STRATEGIC DESIGN',
    description: 'Research. Strategy. Positioning. Foundation work that matters.',
  },
];

export function Services() {
  return (
    <section className="border-b-2 border-[#2a2a2a] py-32 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Label */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FF0000]"></div>
                <span className="text-xs text-[#888888] tracking-[0.3em]">002</span>
              </div>
              <h2 className="text-4xl font-black text-[#e5e5e5] tracking-tight">WHAT WE DO</h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className="col-span-9 border-l-2 border-[#2a2a2a] pl-8">
            <div className="grid grid-cols-2 gap-0 border-2 border-[#2a2a2a]">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className={`p-8 border-[#2a2a2a] ${
                    index % 2 === 0 ? 'border-r-2' : ''
                  } ${index < services.length - 2 ? 'border-b-2' : ''} group hover:bg-[#FF0000] transition-colors cursor-default`}
                >
                  <div className="text-xs text-[#888888] group-hover:text-[#0a0a0a] mb-3 tracking-widest">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-black text-[#e5e5e5] group-hover:text-[#0a0a0a] mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#888888] group-hover:text-[#0a0a0a] leading-loose">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
