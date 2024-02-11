"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
    const scrollRef = useRef(null)

    return (
        <section className="mt-4">
            <div className="md:grid md:grid-cols-2 mx-5">
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                    whileInView={{ y: 50, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ root: scrollRef }}
                >
                    <h2 className="text-5xl font-raleway font-semibold mb-2">About me</h2>
                    <p className="text-xl font-raleway font-semibold text-slate-300">Take a look at my story</p>
                    <p className="text-sm md:text-base my-3 text-gray-400">
                        Hey, I'm Diego Barrera! I'm passionate about creating software and I've been working on it for more than 2 years. Currently I am Front-end in a company that provides specialized software products to many Latin American universities.
                        <br /> <br />
                        One of my successes is to have been third place in my first NTTDATA Hackathon. This motivated me to continue deepening in this area of technology, in addition to understanding that this can provide solutions to different problems of everyday life, as well as to enhance business, services and other things.
                        <br /> <br />
                        In my free time I like to work on projects like CityUbi in which I seek to help highlight local products and services. I also like to spend time with my friends and family.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 0, y: 200, opacity: 0, scale: 0.6, rotateX: 50, rotateY: -50 }}
                    whileInView={{ y: 50, scale: 1, rotateX: 0, rotateY: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                        ease: "easeOut",
                        duration: 1.3,
                    }}
                    viewport={{ root: scrollRef }}
                >
                    <Image
                        src="/img/utils/me.png"
                        alt="Picture of the author"
                        width={1440}
                        height={720}
                        className="rounded-md w-full md:w-4/5 ml-auto mt-2"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default AboutMe;