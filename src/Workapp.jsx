import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "./Modal";

export default function WorkApp() {
  const [showModal, setShowModal] = useState(false);

  return (
      <div className="text-white min-h-screen font-sans bg-black/70">
        <header className="text-center py-0 px-4 ">
          <img src="/dhllogo.png" width="300" height="300" alt="Dragon Hunter Labs Logo" className="mx-auto mb-6" />
        </header>

        <section className="bg-black/70 py-8 px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Work</h2>
          <p class="text-xl">These are projects from Dragon Hunter Labs. Not all projects are commercial - we also work on open source and experimental initiatives.</p>
        
</section>
<section className="bg-black/50 py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="bg-black/90 rounded-lg p-6 hover:transform hover:-translate-y-1 transition duration-300">
                    <h3 class="text-2xl font-semibold mb-4">DHL Website</h3>
                    <p class="mb-4">This website is generated from two public repositories:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><a href="https://github.com/therootcause/DHL-site" target="_blank" class="text-blue-400 hover:underline">DHL-site</a> - Website content</li>
                        <li><a href="https://github.com/therootcause/DHL-infra" target="_blank" class="text-blue-400 hover:underline">DHL-infra</a> - Infrastructure code</li>
                    </ul>
            </div>
             <div class="bg-black/90 rounded-lg p-6 hover:transform hover:-translate-y-1 transition duration-300">
                    <h3 class="text-2xl font-semibold mb-4">AI Career Coaching</h3>
                    <p class="mb-4">AI driven career guidance.</p>
                    <p class="mb-4">langgraph agent with tools. Rapid development with streamlit and render.com</p>
            </div>
            <div class=""></div>
          </div>
        </section>


        <footer className="text-center h-auto py-8 border-t border-gray-700 bg-black/70">
          <p className="text-sm">Scale. Secure. Slay.</p>
          <p className="text-xs text-gray-400 mt-1">© {new Date().getFullYear()} Dragon Hunter Labs</p>
        </footer>
      </div>
    );
}