

export default function ContactUs() {
    return (
        <div className='w-full flex-col justify-center py-8 space-y-8'>
            <div className='w-full text-center'>
                <h2 className='text-2xl font-extrabold'>Contact us</h2>
            </div>
            <div className='flex w-full justify-center'>
            <div className="card shrink-0 w-full max-w-sm border-neutral bg-base-200 border-[1px]">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-accent">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}