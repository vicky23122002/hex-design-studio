import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Clients } from './components/Clients';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <About />
      <Services />
      <Process />
      <Clients />
      <Journey />
      <Footer />
    </div>
  );
}
