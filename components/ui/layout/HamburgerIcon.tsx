"use client";

interface HamburgerIconProps {
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function HamburgerIcon({ onToggle, isOpen }: HamburgerIconProps) {
  const handleClick = () => {
    onToggle(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-transparent focus:outline-none"
      aria-label="Toggle menu"
    >
      <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
      <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  );
}