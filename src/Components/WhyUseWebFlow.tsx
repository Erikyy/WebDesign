import {Reason, REASONS_TO_USE} from "../texts.ts";


function ReasonComponent(props: Reason) {
    return <div className='min-w-40 max-w-96 space-y-4'>
        <h3 className='text-4xl font-extrabold'>
            {props.header}
        </h3>
        <p className='text-xl'>{props.content}</p>
    </div>;
}

export default function WhyUseWebFlow() {
    return (
        <section className='w-full bg-base-100 py-12'>
            <div className='w-full text-center py-6'>
                <h2 className='text-4xl font-extrabold'>
                    Why use WebFlow
                </h2>
            </div>
            <div className='w-full flex justify-center px-8 md:px-24 pt-8'>
            <div className='max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16'>
                {
                    REASONS_TO_USE.map((item) => {
                        return <ReasonComponent key={item.header} {...item} />
                    })
                }
            </div>
            </div>
        </section>
    );
}