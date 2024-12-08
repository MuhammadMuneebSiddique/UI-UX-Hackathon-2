export default function Contact (){
    return(
        <div>
              {/* Contact Section */}
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4">
                <div>
                <h1 className="text-4xl font-bold">Get in touch today!</h1>
                <p className="mt-4 text-gray-600">We know how large objects will act, but things on a small scale.</p>
                <p className="mt-4">
                    <strong>Phone:</strong> +451 215 215<br />
                    <strong>Fax:</strong> +451 215 215
                </p>
                <div className="flex gap-4 mt-4">
                    <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-blue-600"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-blue-600"><i className="fab fa-instagram"></i></a>
                </div>
                </div>
                <div>
                <img src="/contact-image.png" alt="Contact" className="w-full rounded-md" />
                </div>
            </section>

            {/* Office Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold">We help small businesses with big ideas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-md rounded-md">
                    <i className="fas fa-phone text-blue-600 text-3xl"></i>
                    <p className="mt-4 text-gray-600">georgia.young@example.com</p>
                    <p className="text-gray-600">georgia.young@ple.com</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Get Support</button>
                    </div>
                    <div className="p-6 bg-blue-600 text-white shadow-md rounded-md">
                    <i className="fas fa-map-marker-alt text-3xl"></i>
                    <p className="mt-4">georgia.young@example.com</p>
                    <p>georgia.young@ple.com</p>
                    <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-md">Get Support</button>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-md">
                    <i className="fas fa-envelope text-blue-600 text-3xl"></i>
                    <p className="mt-4 text-gray-600">georgia.young@example.com</p>
                    <p className="text-gray-600">georgia.young@ple.com</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Get Support</button>
                    </div>
                </div>
                </div>
            </section>

            {/* Let’s Talk Section */}
            <section className="text-center py-16">
                <h2 className="text-2xl text-gray-700">We Can't Wait to Meet You</h2>
                <h1 className="text-4xl font-bold mt-4">Let’s Talk</h1>
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md">Try it free now</button>
            </section>
        </div>
    )
}