import { useState } from "react"

export default function Navigaiton() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navToggle = () =>{
        setIsNavOpen(!isNavOpen)
    }

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center relative">
        <div className="text-white text-2xl">Logo</div>
        <div className="text-white text-3xl cursor-pointer md:hidden" onClick={navToggle}>&#9776;</div>
        <ul className={`md:flex md:items-center md:gap-8 transition-all duration-300 ease-in-out ${isNavOpen ? 'block':"hidden"} absolute md:relative bg-gray-800 w-full md:w-auto left-0 md:left-auto top-16 md:top-auto z-10`}>
            <li><a href="#" className="text-white block p-4 hover:bg-gray-600">Home</a></li>
            <li><a href="#" className="text-white block p-4 hover:bg-gray-600">About</a></li>
            <li><a href="#" className="text-white block p-4 hover:bg-gray-600">Services</a></li>
            <li><a href="#" className="text-white block p-4 hover:bg-gray-600">Contact</a></li>
        </ul>
    </nav>
  )
}
