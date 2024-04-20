import { FaGithub } from "react-icons/fa";


export default function Header() {
    return (
        <header className="navbar sticky top-0 z-20 bg-base-100 flex justify-between">
            <a href='#' className="btn btn-ghost text-xl">WebFlow</a>
            <div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><a href='#' aria-label='Features'>Features</a></li>
                    <li><a href='#' aria-label='Pricing'>Pricing</a></li>
                    <li><a href='#' aria-label='About Us'>About Us</a></li>
                </ul>
            <button aria-label='Open Source' className='btn btn-ghost text-2xl'>
                <FaGithub title='Github Repo for WebFlow' />
            </button>
            <div className="dropdown">
                <button aria-label='Navigation dropdown' tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
                <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-none w-60 right-0">
                    <li><a href='#' aria-label='Features'>Features</a></li>
                    <li><a href='#' aria-label='Pricing'>Pricing</a></li>
                    <li><a href='#' aria-label='About Us'>About Us</a></li>
                </ul>
            </div>
            </div>
        </header>);
}