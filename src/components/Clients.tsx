import React from 'react';

const clients = [
  { name: 'APEX TECH', description: 'SaaS Platform Redesign' },
  { name: 'GRID SYSTEMS', description: 'Brand Identity & Guidelines' },
  { name: 'STRUCTURE CO', description: 'Digital Product Suite' },
  { name: 'VECTOR LABS', description: 'Design System Architecture' },
  { name: 'FORM STUDIO', description: 'Website & Art Direction' },
  { name: 'AXIS GROUP', description: 'Strategic Rebranding' },
  { name: 'MONO DESIGN', description: 'Information Architecture' },
  { name: 'CORE ANALYTICS', description: 'Data Visualization Platform' },
  { name: 'EDGE COLLECTIVE', description: 'Visual Identity System' },
  { name: 'FRAMEWORK INC', description: 'Product Strategy & UX' },
  { name: 'SOLID STATE', description: 'Brand Development' },
  { name: 'LINEAR DYNAMICS', description: 'Enterprise Dashboard' },
];

export function Clients() {
  return (
    <section className="border-b-2 border-[#2a2a2a] py-32 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Label */}
          <div className="col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#FF0000]"></div>
                <span className="text-xs text-[#888888] tracking-[0.3em]">004</span>
              </div>
              <h2 className="text-4xl font-black text-[#e5e5e5] tracking-tight">OUR CLIENTS</h2>
              <p className="text-sm text-[#888888] mt-6 leading-loose">
                We partner with organizations that value design as a strategic tool, not a cosmetic afterthought.
              </p>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="col-span-9 border-l-2 border-[#2a2a2a] pl-8">
            <div className="grid grid-cols-3 gap-0 border-2 border-[#2a2a2a]">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className={`p-8 border-[#2a2a2a] ${
                    (index + 1) % 3 !== 0 ? 'border-r-2' : ''
                  } ${index < clients.length - 3 ? 'border-b-2' : ''} group hover:bg-[#1a1a1a] transition-colors cursor-default`}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-lg font-black text-[#e5e5e5] mb-2 tracking-tight">
                        {client.name}
                      </div>
                      <div className="text-xs text-[#888888] leading-relaxed">
                        {client.description}
                      </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-[#2a2a2a]">
                      <div className="text-xs text-[#888888] group-hover:text-[#FF0000] transition-colors">
                        VIEW PROJECT →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
