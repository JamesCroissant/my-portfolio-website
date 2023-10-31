import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 hover:text-white block px-5 py-4 rounded-md text-lg font-medium"
    >
      {title}
    </Link>
  )
}

export default NavLink; 