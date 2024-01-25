"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const AboutMe = () => {
    const scrollRef = useRef(null)

    return (
        <section className="h-screen">
            <div className="grid grid-cols-2 mx-5">
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                    whileInView={{ y: 50, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ root: scrollRef }}
                >
                    <h2 className="text-5xl font-raleway font-semibold mb-2">About me</h2>
                    <p className="text-xl font-raleway font-semibold text-slate-300">Take a look at my story</p>
                    <p className="text-base my-3 text-gray-400">
                        As a software engineering student and programming technician with over two years of experience, I have directed my career towards Front-end roles while also possessing Back-end knowledge for a comprehensive view of software development.
                        <br /><br />
                        Throughout my career, I've collaborated with both public and private educational entities specializing in the sale of courses and personalized software programs. Additionally, I've had the opportunity to design landing pages for small businesses, broadening my experience in the programming field.
                        <br /><br />
                        I've also participated in a Hackathon organized by NTTDATA, achieving third place due to my skills in software development and teamwork.
                        <br /><br />
                        In parallel to my professional journey, I'm engaged in a personal project, allowing me to apply the knowledge gained in my academic training and previous work experiences. This project showcases my ongoing dedication to learning and the practical application of software engineering.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 0, y: 200, opacity: 0, scale: 0.6, rotateX: 50, rotateY: -50 }}
                    whileInView={{ y: 50, scale: 1, rotateX:0, rotateY: 0 }}
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
                        className="rounded-md w-4/5 ml-auto mt-16"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default AboutMe;