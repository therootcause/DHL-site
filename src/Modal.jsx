export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
        <div className="bg-black/20 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
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

