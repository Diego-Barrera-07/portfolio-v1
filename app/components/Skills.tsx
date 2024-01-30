"use client"
import { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const scrollRef = useRef(null)
    return (
        <motion.section className="mt-20 px-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            viewport={{ root: scrollRef }}
        >
            <p className="text-5xl font-raleway font-semibold mb-8">Skills</p>
            <div className="flex items-center flex-wrap gap-3">
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">JavaScript</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">NextJs</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">ReactJs</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">Tailwindcss</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">NodeJs</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">MySQL</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">MongoDB</div>
            </div>
            <p className="my-4 text-gray-400">
                These are the skills in which he has more mastery, however I have used while studying <span className="text-gray-100">C++</span>,
                <span className="text-gray-100"> JAVA</span> and <span className="text-gray-100">Python</span> in algorithm projects such as a binary tree.
                Also in my work I have used <span className="text-gray-100">Blade</span> and Laravel,
                as in my own projects I have used <span className="text-gray-100">EJS</span> with NodeJs.
            </p>
            <div className="h-screen"></div>
        </motion.section>
    );
}

export default Skills;