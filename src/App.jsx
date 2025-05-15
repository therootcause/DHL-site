import React from "react";

function Button({ children, className = "", variant }) {
  const base = "px-4 py-2 rounded font-semibold ";
  const outline = "border border-white ";
  const filled = "bg-white text-black hover:bg-gray-200 ";
  return (
    <button className={base + (variant === "outline" ? outline : filled) + className}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="text-white min-h-screen font-sans bg-black/50">
      <header className="text-center py-0 px-4 ">
        <img src="/dhllogo.png" width="300" height="300" alt="Dragon Hunter Labs Logo" className="mx-auto mb-6" />
        <div className="mt-6 space-x-4 py-4">
          <Button>Let’s Talk</Button>
          <Button variant="outline">See Our Work</Button>
        </div>
      </header>

      <section className="bg-black/70 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">DevOps Engineering</h3>
            <p>Infrastructure automation, CI/CD, GitOps</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">DevSecOps</h3>
            <p>Secure pipelines, compliance, threat modeling</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Cloud Strategy</h3>
            <p>AWS/GCP/Azure, Kubernetes, scaling</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-black/50">
        <h2 className="text-3xl font-semibold mb-4">Legendary DevOps. No fantasy.</h2>
        <ul className="list-none max-w-2xl mx-auto space-y-2">
          <li>• Senior engineers only</li>
          <li>• Secure, scalable, and battle-tested</li>
          <li>• Transparent, iterative, and results-driven</li>
        </ul>
      </section>

      <footer className="text-center h-auto py-8 border-t border-gray-700 bg-black/70">
        <p className="text-sm">Scale. Secure. Slay.</p>
        <p className="text-xs text-gray-400 mt-1">© {new Date().getFullYear()} Dragon Hunter Labs</p>
      </footer>
    </div>
  );
}
