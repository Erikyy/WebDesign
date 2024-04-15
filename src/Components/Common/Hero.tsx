import {TEXTS} from "../../texts.ts";


export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{TEXTS.title}</h1>
                    <p className="py-6">{TEXTS.heroContent}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}