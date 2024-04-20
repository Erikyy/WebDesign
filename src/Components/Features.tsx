import {Feature, TEXTS} from "../texts.ts";


export interface FeaturesProps {
    features: Feature[]
}


function FeatureInternal(props: {
    feature: Feature
}) {
    const { name, features, buttonContent, additionalContent, pricing } = props.feature;
    return (
        <div className="card w-full md:w-[320px] min-h-[400px] border-neutral bg-base-200 border-[1px]">
            <div className="card-body w-full justify-between space-y-8">
                <div className='space-y-4'>
                    <div className='space-y-4 min-h-28'>
                        <h2 className="card-title w-full justify-center text-2xl">{name}</h2>
                        <p className='flex w-full justify-center text-center font-light'>{additionalContent}</p>
                    </div>
                    <div className='flex justify-center w-full min-h-10'>
                        {
                            pricing.map((price) => {
                                return (
                                    <div key={price.value} className="flex justify-center items-baseline">
                                        <span className={`mr-2 ${price.small ? 'text-md font-light' : 'text-2xl font-extrabold'}`}>{price.value}</span>
                                        {price.type !== null && <span className="text-gray-500 dark:text-gray-400">{price.type}</span>}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <ul className='list-disc md:px-4'>
                    {
                        features.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                    </ul>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary w-full text-accent">{buttonContent}</button>
                </div>
            </div>
        </div>
    );
}

export default function Features(props: FeaturesProps) {

    return (
        <>
            <div className='flex w-full justify-center py-4 pt-8'>
                <div className='text-center space-y-4'>
                    <h2 className='text-4xl font-bold'>{TEXTS.features.title}</h2>
                    <p className='font-light text-xl'>{TEXTS.features.additionalContent}</p>
                </div>
            </div>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center px-8 md:space-x-3 lg:px-4 py-8'>
            {
                props.features.map((item) => {
                    return <FeatureInternal key={item.name} feature={item} />
                })
            }
            </div>
        </>
    );
}