import {Feature} from "../texts.ts";


export interface FeaturesProps {
    features: Feature[]
}


function FeatureInternal(props: {
    feature: Feature
}) {
    const { name, features } = props.feature;
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <div className="card-body w-full space-y-3">
                <h2 className="card-title w-full justify-center">{name}</h2>
                <ul className='list-disc'>
                    {
                        features.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default function Features(props: FeaturesProps) {

    return (
        <>
        <div className='flex flex-col md:flex-row space-y-3 justify-center px-8 md:space-x-3 lg:px-0'>
        {
            props.features.map((item) => {
                return <FeatureInternal feature={item} />
            })
        }
        </div>
        </>
    );
}