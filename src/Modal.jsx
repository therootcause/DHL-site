import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  shadow-2xl ring- ring-white   bg-black/70 backdrop-blur transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-black/20 rounded-lg shadow-lg max-w-lg w-full p-6 relative transform transition-transform duration-500 scale-95 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}