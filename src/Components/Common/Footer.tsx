

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h2 className="footer-title">Services</h2>
                <a href='#' aria-label='Branding' className="link link-hover">Branding</a>
                <a href='#' aria-label='Design' className="link link-hover">Design</a>
                <a href='#' aria-label='Marketing' className="link link-hover">Marketing</a>
                <a href='#' aria-label='Advertisment' className="link link-hover">Advertisement</a>
                <a href='#' aria-label='Open Source' className="link link-hover">Open Source</a>
            </nav>
            <nav>
                <h2 className="footer-title">Company</h2>
                <a href='#' aria-label='About Us' className="link link-hover">About us</a>
                <a href='#' aria-label='Contact' className="link link-hover">Contact</a>
                <a href='#' aria-label='Jobs' className="link link-hover">Jobs</a>
                <a href='#' aria-label='Press kit' className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h2 className="footer-title">Legal</h2>
                <a href='#' aria-label='Terms of use' className="link link-hover">Terms of use</a>
                <a href='#' aria-label='Privacy policy' className="link link-hover">Privacy policy</a>
                <a href='#' aria-label='Cookie policy' className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}