"use client"

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Contact = () => {

    const scrollRef = useRef(null)

    return (
        <>
            <section className="mt-16 mx-5 h-screen">
                <div className="flex items-center mb-2">
                    <h2 className="text-5xl font-raleway font-semibold">Contact</h2>
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
                    <form action="">
                        <div className="flex flex-col">
                            <label htmlFor="" className="mt-4 mb-1 text-base">
                                Email address
                            </label>
                            <input type="email" name="" id=""
                                placeholder="Enter your email address here"
                                className="py-1 text-sm md:text-base bg-transparent border-b-2 border-yellow-300 focus:bg-yellow-300/10 outline-none text-yellow-300"
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="" className="mb-1 text-base">
                                Your name
                            </label>
                            <input type="text" name="" id=""
                                placeholder="Enter your name here"
                                className="py-1 text-sm md:text-base bg-transparent border-b-2 border-yellow-300 focus:bg-yellow-300/10 outline-none text-yellow-300"
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="" className="mb-1 text-base">
                                Subject
                            </label>
                            <textarea
                                cols={2}
                                placeholder="Tell me what you need here and I will help you soon"
                                className="py-1 text-sm md:text-base bg-transparent border-b-2 border-yellow-300 resize-none focus:bg-yellow-300/10 outline-none text-gray-300"
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