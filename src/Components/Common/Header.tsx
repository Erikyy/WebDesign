import { FaGithub } from "react-icons/fa";


export default function Header() {
    return (
        <header className="navbar sticky top-0 z-20 bg-base-100 flex justify-between">
            <a className="btn btn-ghost text-xl">WebFlow</a>
            <div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>About Us</a></li>
                </ul>
            <a href='https://github.com/Erikyy/webdesign' className='btn btn-ghost text-2xl'>
                <FaGithub />
            </a>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-none w-60 right-0">
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            </div>
        </header>);
}