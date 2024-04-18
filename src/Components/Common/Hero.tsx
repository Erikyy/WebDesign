import {TEXTS} from "../../texts.ts";


export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md space-y-8">
                    <h1 className="text-5xl font-bold">{TEXTS.title}</h1>
                    <h2 className="text-3xl">{TEXTS.heroContent}</h2>
                    <button className="btn btn-primary">{TEXTS.buttons.getStarted}</button>
                </div>
            </div>
        </section>
    );
}