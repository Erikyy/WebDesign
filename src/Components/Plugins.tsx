import {FIRST_PARTY_PLUGINS, THIRD_PARTY_PLUGINS} from "../texts.ts";


export default function Plugins() {

    return (
        <section className='w-full bg-base-200 py-8'>
            <div className='flex flex-col md:flex-row md:justify-center md:space-x-12'>
                <div className='space-y-4'>
                    <div>
                        <h2 className='text-2xl'>Our first party provided plugins</h2>
                    </div>
                    <ul className='list-disc pl-8'>
                        {FIRST_PARTY_PLUGINS.map((item) => {
                            return <li>{item.name}</li>
                        })}
                    </ul>
                    <div className='w-full flex justify-center'>
                        <button className="btn btn-primary text-accent">Browse more</button>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div>
                        <h2 className='text-2xl'>Our community provided plugins</h2>
                    </div>
                    <ul className='list-disc pl-8'>
                        {THIRD_PARTY_PLUGINS.map((item) => {
                            return <li>{item.name}</li>
                        })}
                    </ul>
                    <div className='w-full flex justify-center'>
                        <button className="btn btn-primary text-accent">Browse more</button>
                    </div>
                </div>
            </div>
        </section>
    );

}