export default function Contact () {

    const config = {
        email : 'rajapandiyan1163@gmail.com',
        phone: '9080883914'
    }

    return <section id='contact' style={{alignItems:'center',minHeight:'90vh'}} className='flex bg-indigo-light flex-col  px-5 justify-center text-white'>
        <div style={{alignItems:'center'}} className='flex flex-col '>
           
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold text-decoration-none'><a className="text-white"  href="mailto:rajapandiyan1163@gmail.com">Email : {config.email}</a></span></p>
            <p className='py-2'><span className='font-bold text-decoration-none'><a  className="text-white" href="tel:9080883914">Phone : {config.phone}</a></span></p>        </div>
    </section>
}