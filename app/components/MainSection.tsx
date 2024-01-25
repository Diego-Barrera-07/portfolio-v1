"use client"
import { motion } from "framer-motion";

const MainSection = () => {
    return (
        <motion.section className="w-full h-screen flex items-center justify-center flex-col"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 0.3 }
            }}
        >
            <h1 className="text-8xl font-raleway font-semibold mb-4">Diego Barrera</h1>
            <p className="text-3xl text-gray-400">Front-end developer & Freelance</p>
            <div className="flex items-center justify-center gap-5 my-8">
                <button className="w-24 bg-gray-800 py-2 rounded-md hover:bg-gray-400">About me</button>
                <button className="w-24 bg-yellow-300 py-2 rounded-md text-black shadow-xl shadow-yellow-300/20 hover:bg-yellow-500">Contact</button>
            </div>
        </motion.section>
    );
}

export default MainSection;