"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/sendEmail";

import { FaCheckCircle } from "react-icons/fa";
import { BiSolidMessageAltError } from "react-icons/bi";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [popUp, setPopUp] = useState(false)
    const [status, setStatus] = useState(true)
    const [formMessage, setFormMessage] = useState("")

    const scrollRef = useRef(null)

    useEffect(() => {
        if (popUp) {
            setTimeout(() => {
               setPopUp(false)
            }, 5000)
        }

    }, [popUp, setPopUp])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !email || !message) {
            console.log('Campos vacíos')
            return;
        }

        const formData = {
            name,
            email,
            message
        }

        setData(formData)

        try {
            const response = await sendEmail(data);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setPopUp(true)
                setStatus(true)
                setFormMessage("The information has been sent correctly, I will contact you as soon as possible.")
            } else {
                console.log(response)
                const data = await response.json();
                console.log(data);
                setPopUp(true)
                setStatus(false)
                setFormMessage(data.message)
            }
        } catch (error: any) {
            setPopUp(true)
            setStatus(false)
            setFormMessage(error.message)
        }
    };

    return (
        <>
            <section className="my-16 mx-5" id="contact">
                <div className="flex items-center mb-2">
                    <h6 className="text-5xl font-raleway font-semibold">Contact</h6>
                    <motion.div className="ml-3 hidden md:block"
                        initial={{ opacity: 0, y: 300, x: 1000 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ ease: "linear", duration: 0.5 }}
                        viewport={{ root: scrollRef }}
                    >
                        <Image
                            src="/img/utils/avion-de-papel.png"
                            alt="Picture of the author"
                            width={140}
                            height={20}
                            className="w-14 mt-2"
                        />
                    </motion.div>
                </div>

                <p className="text-sm md:text-base my-3 text-gray-400">
                    Looking for new opportunities, my inbox will be open to answer your questions about my work,
                    I can also give you my services as a Front-end developer with React, NextJs or Vanilla Javascript.
                    In the same way as a Backend developer with NodeJs, I could create your API. I can also help you to make your landing page. Ask me if you haven&apos;t found your desired page, I might make it too!
                </p>

                <div className="w-full md:w-8/12">
                    <form onSubmit={handleSubmit}>

                        {
                            popUp && (
                                <div className="w-full flex items-center gap-2 md:gap-1 text-sm md:text-base text-slate-800 bg-white px-2 py-1 border-2 border-yellow-300 rounded-md">
                                    {
                                        status ? (
                                            <span className="text-sm text-green-400">
                                                <FaCheckCircle />
                                            </span>
                                        ) : (
                                            <span>
                                                <BiSolidMessageAltError />
                                            </span>
                                        )
                                    }
                                    <p>{formMessage}</p>
                                </div>
                            )
                        }

                        <div className="flex flex-col">
                            <label htmlFor="" className="mt-4 mb-1 text-base">
                                Email address
                            </label>
                            <input type="text" id="email"
                                placeholder="Enter your email address here"
                                className="py-1 text-sm md:text-base bg-transparent border-b-2 border-yellow-300 focus:bg-yellow-300/10 outline-none text-yellow-300"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="" className="mb-1 text-base">
                                Your name
                            </label>
                            <input type="text" id="name"
                                placeholder="Enter your name here"
                                className="py-1 text-sm md:text-base bg-transparent border-b-2 border-yellow-300 focus:bg-yellow-300/10 outline-none text-yellow-300"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="" className="mb-1 text-base">
                                Subject
                            </label>
                            <textarea
                                id="message"
                                cols={2}
                                placeholder="Tell me what you need here and I will help you soon"
                                className="py-1 text-sm md:text-base bg-transparent border-b-2 border-yellow-300 resize-none focus:bg-yellow-300/10 outline-none text-gray-300"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <div className="w-full flex md:justify-end">
                            <button type="submit" className="bg-yellow-300 px-3 py-1 mt-8 w-full md:w-5/12 rounded-sm text-gray-600 font-semibold
                                hover:bg-yellow-200
                            ">Send!</button>
                        </div>

                    </form>
                </div>

            </section>
        </>
    );
}

export default Contact;