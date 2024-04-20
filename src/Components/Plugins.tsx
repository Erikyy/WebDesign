import {FIRST_PARTY_PLUGINS, TEXTS, THIRD_PARTY_PLUGINS} from "../texts.ts";


export default function Plugins() {

    return (
        <section className='w-full bg-base-100 py-8 flex flex-col space-y-8'>
            <div className={'w-full text-center px-4'}>
                <h2 className='text-4xl font-extrabold'>{TEXTS.plugins.support}</h2>
            </div>
            <div className='w-full flex justify-center'>
            <div className='flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-12 md:space-y-0 px-4'>
                <div className='space-y-4'>
                    <div className='space-y-4 max-w-[350px] min-h-16 text-center'>
                        <h3 className='text-2xl'>Our first party provided plugins:</h3>
                    </div>
                    <ul className='list-disc pl-8 min-h-24'>
                        {FIRST_PARTY_PLUGINS.map((item) => {
                            return <li key={item.name}>{item.name}</li>
                        })}
                    </ul>
                    <div className='w-full flex justify-center'>
                        <button aria-label='Browse more' title='Browse more first party plugins' className="btn btn-primary text-accent">Browse more</button>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='space-y-4 max-w-[350px] min-h-16 text-center'>
                        <h3 className='text-2xl'>Our community provided plugins:</h3>
                    </div>
                    <ul className='list-disc pl-8 min-h-24'>
                        {THIRD_PARTY_PLUGINS.map((item) => {
                            return <li key={item.name}>{item.name}</li>
                        })}
                    </ul>
                    <div className='w-full flex justify-center'>
                        <button aria-label='Browse more' title='Browse more third party plugins' className="btn btn-primary text-accent">Browse more</button>
                    </div>
                </div>
                <div className='space-y-4 max-w-[350px] text-center'>
                    <h3 className='text-2xl min-h-14'>Develop your own plugins</h3>
                    <p className='min-h-[100px]'>Our Open Source sdk allows you to develop your own custom plugins.</p>
                    <div className='w-full flex justify-center'>
                        <button aria-label='Get Sdk here' className="btn btn-primary text-accent">Get Sdk here</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );

}