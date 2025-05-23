import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  // 👉 navLink array la ellam icons, names, href store pannirukom
  // Idhu map() la loop pannitu nav items render panrom
  const navLink = [
    {
      name: "Home",
      icon: <FaHome />,
      href: "#",
    },
    {
      name: "About",
      icon: <FaInfoCircle />,
      href: "#",
    },
    {
      name: "Services",
      icon: <FaServicestack />,
      href: "#",
    },
    {
      name: "Contact",
      icon: <FaEnvelope />,
      href: "#",
    },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">🚀MyWebsite</h1>

        <ul className="flex space-x-6">
          {/* 🔽 Old Method (manual hardcoded nav) */}
          {/* 
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-blue-400">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-blue-400">
              <FaInfoCircle /> About
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-blue-400">
              <FaServicestack /> Services
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-blue-400">
              <FaEnvelope /> Contact
            </a>
          </li> 
          */}

          {/* ✅ New Method (dynamic nav using .map()) */}
          {navLink.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="flex items-center gap-1 hover:text-blue-400"
              >
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
