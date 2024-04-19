import {TEXTS} from "../../texts.ts";


export default function Hero() {
    return (
        <section className="min-h-96 bg-base-200 py-8 flex flex-col justify-center w-full md:px-8">
            <div className="hero-content min-h-80 flex-col !w-full max-w-full md:flex-row text-center md:text-left !md:justify-between">
                <div className="max-w-md space-y-8">
                    <h1 className="text-5xl font-bold">{TEXTS.title}</h1>
                    <h2 className="text-3xl">{TEXTS.heroContent}</h2>
                </div>
                <div className="mockup-browser min-h-80 w-full md:w-[760px] border bg-base-300 shadow-xl">
                    <div className="mockup-browser-toolbar">
                        <div className="input !w-full">https://yourwebsite.com</div>
                    </div>
                    <div className="flex !flex-col !justify-center !h-full min-h-80 text-center bg-neutral">
                        <p>Welcome to your website!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}