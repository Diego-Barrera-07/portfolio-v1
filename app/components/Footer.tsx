import { AiFillCode } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="w-full bg-slate-900/30 border-solid border-t-2 border-yellow-300">
            <div className="w-10/12 2xl:w-7/12 mx-auto py-10 flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
                <p className="flex items-center gap-2">
                    <span className="text-xl text-yellow-300"><AiFillCode /></span> Diego Barrera / 2024
                </p>
                <div className="flex items-center justify-center gap-3">
                    <a href="https://twitter.com/turingdb" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-300"
                        aria-label="Go to Diego's Twitter(x) profile"
                    >
                        <BsTwitterX />
                    </a>
                    <a href="https://www.linkedin.com/in/diegobarreracoba/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-300"
                          aria-label="Go to Diego's Linkedin profile"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Diego-Barrera-07" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-300"
                          aria-label="Go to Diego's Github profile"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;