import { Menu } from "lucide-react";

const navItems = ["Our Work", "About", "Services", "Team", "We’re Hiring"];

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">PEAKER</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-800 hover:text-black transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="ml-6 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
            CONTACT
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
