import { FaGithub } from "react-icons/fa";


export default function Header() {
    return (
        <header className="navbar sticky top-0 z-20 bg-base-100 flex justify-between">
            <a className="btn btn-ghost text-xl">WebFlow</a>
            <a href='https://github.com/Erikyy/webdesign' className='btn btn-ghost text-2xl'>
                <FaGithub />
            </a>
        </header>
    );
}