
import React from "react"
import contact from "./../contact.jpg"

function Contact() {

    function WhatsApp() {
        window.location.href = "https://wa.me/8691827914"

    }

    function gmail() {
       
    }

    return (
        <>
            <div>
                <div className="py-16 px-16 max-w-2xl mx-auto bg-gray-300

rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-12">
                    <img className="block mx-auto h-52 rounded-full sm:mx-0 sm:shrink-0" src={contact}
                        alt="This is real Hero" />
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-yellow-500 font-semibold">
                                 Govinda Patil
                            </p>
                            <p className="text-slate-500 font-medium">
                                Frontend Devloper
                            </p>
                        </div>
                        <button onClick={WhatsApp}
                            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">WhatsApp</button>
                        <button onClick={gmail}
                            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Gmail</button>
                    </div>
                </div>
            </div>

         


        </>
    )
}

export default Contact;
