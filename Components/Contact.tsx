export default function Contact () {

    const config = {
        email : 'rajapandiyan1163@gmail.com',
        phone: '9080883914'
    }

    return <section id="contact" style={{minHeight: "90vh" , alignItems: "center"}} className="d-flex bg-indigo-600 flex-column bg-primary px-5 justify-content-center text-white">
    <div className="d-flex flex-column">
        <h1 className="display-4 border-bottom border-secondary mb-5 w-140 font-weight-bold">Contact</h1>
        <p className="pb-5">If you want to discuss more in detail, please contact me</p>
        <p className="py-2 font-weight-bold"><a className="text-white" href="mailto:rajapandiyan1163@gmail.com">Email : {config.email}</a></p>
        <p className="py-2 font-weight-bold"><a href="tel:9080883914" className="text-white ">Phone : {config.phone}</a></p>
    </div>
</section>

}