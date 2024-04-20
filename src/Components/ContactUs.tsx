

export default function ContactUs() {
    return (
        <div className='w-full flex-col justify-center py-8 space-y-8 pt-20'>

            <div className='flex w-full justify-center'>
                <div className="shrink-0 min-w-80 md:min-w-[540px] md:max-w-[540px] space-y-8">
                    <div className='w-full text-start'>
                        <h2 className='text-4xl font-extrabold'>Need some more professional help? Get in touch with us</h2>
                    </div>
                    <form id='contactUs' className="w-full flex flex-col">
                        <div className="form-control space-y-2">
                            <label htmlFor='email' aria-labelledby='email' className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input id='email' type="email" placeholder="email" className="input input-bordered"
                                   required/>

                            <p className="label-text">We will try to get back to you as soon as possible</p>

                        </div>
                        <div className="form-control mt-6 w-full flex justify-center">
                            <button type='submit' aria-label='submit' className="btn btn-primary text-accent">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}