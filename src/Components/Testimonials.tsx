import {Customer, CUSTOMERS} from "../texts.ts";

function TestimonialCard(customer: Customer) {
    return (
        <div className='w-full rounded-xl md:min-w-[450px] md:max-w-[450px] min-h-48 border-neutral bg-base-200 border-[1px] p-8 px-12 flex flex-col space-y-4'>
            <div className='w-full flex space-x-4 align-middle'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={customer.imageUrl} alt={customer.imgAlt}/>
                    </div>
                </div>
                <div className='flex flex-col align-middle'>
                    <h3 className='font-bold text-xl'>{customer.name}</h3>
                    <p>{customer.profession}</p>
                </div>
            </div>
            <div className='w-full'>
                <p>
                    {customer.feedback}
                </p>
            </div>
        </div>
    );
}


export default function Testimonials() {

    return (
        <section className='w-full flex flex-col space-y-8'>
            <div className='text-center w-full py-4'>
                <h2 className='text-4xl font-extrabold'>Our customers say</h2>
            </div>
            <div className='w-full px-12 flex flex-wrap justify-center gap-3'>
                {
                    CUSTOMERS.map((customer) => {
                        return <TestimonialCard key={customer.name} {...customer} />
                    })
                }
            </div>
        </section>
    );
}