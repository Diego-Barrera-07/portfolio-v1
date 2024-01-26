'use client'

import { useRef } from "react";
import { motion } from "framer-motion";
import { TbEaseInOutControlPoints } from "react-icons/tb";

const Experience = () => {
    const scrollRef = useRef(null)

    return (
        <section>
            <h2 className="text-5xl font-raleway font-semibold mb-8">Experience | 2+ years</h2>
            <ol className="relative border-s border-gray-200 ml-3">
                <motion.li className="mb-10 ms-4"
                    initial={{ opacity: 0, y:10 }}
                    whileInView={{ opacity: 1, y: 0  }}
                    transition={{ ease: "linear", duration: 0.5 }}
                    viewport={{ root: scrollRef }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
                    >
                    </div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                        Abr. 2022 - Actualidad
                    </time>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-2">
                        Front-end Developer | <a href="https://www.software-shop.com/" className="text-slate-100" target="_blank">Software Shop</a>
                    </h3>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        I contribute to the development of interactive web applications using HTML, CSS and JavaScript, taking advantage of frameworks and libraries such as React.js and other animations to optimize website development time. Additionally, I use Blade as a PHP template.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Implementation of responsive designs, optimized for a fluid user experience and SEO.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Working closely with Backend designers and developers to ensure the integrity of the final product.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Performing seamless conversion of PDF and Adobe files to code, ensuring a seamless transition from design to web implementation.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Implementation of Git and GitHub to improve the code versioning system in the company, while actively participating in Back-end development meetings and discussions, providing perspectives from my Front-end experience and my training in software engineering.
                    </p>
                </motion.li>

                <motion.li className="mb-10 ms-4"
                    initial={{ opacity: 0, y:10 }}
                    whileInView={{ opacity: 1, y: 0  }}
                    transition={{ ease: "linear", duration: 0.75 }}
                    viewport={{ root: scrollRef }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
                    >
                    </div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                        Jul. 2021 - Apr. 2022
                    </time>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-2">
                        Web Developer |  <span className="text-slate-100">Freelance</span>
                    </h3>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        I contributed significantly to the development of interactive web applications. Using HTML, CSS and JavaScript, I used frameworks such as React.js and incorporated animations to speed up website development. Additionally, I used Blade as a template in PHP, adding a solid layer to the development toolset.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        I specialized in the implementation of responsive designs, ensuring an optimal user experience on different devices. The focus was on achieving fluidity in design, while adhering to SEO best practices, improving the overall performance and visibility of the websites.
                    </p>
                </motion.li>

                <motion.li className="mb-10 ms-4"
                    initial={{ opacity: 0, y:10 }}
                    whileInView={{ opacity: 1, y: 0  }}
                    transition={{ ease: "linear", duration: 1 }}
                    viewport={{ root: scrollRef }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
                    >
                    </div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                        Jan. 2021 - Jun. 2021
                    </time>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-2">
                        Software programming technician | <span className="text-slate-100">Internship</span>
                    </h3>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        I developed the first page, a comprehensive platform that provided detailed information on the chemicals present in various areas of the site. Implemented an updateable inventory that dynamically responded to changes. In addition, I made it possible to view the location and details of each chemical in PDF format, with the versatility of being saved or viewed on any device.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        The second page was designed for real-time recording and monitoring, including the management of hours worked and salary aspects, adjusting to the number of hours worked and the corresponding rate.
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        The third page addressed the problem of requesting appointments, creating a user registration interface. This solution was implemented to overcome previous challenges related to lack of request facilities and efficient organization of appointments.
                    </p>
                </motion.li>

            </ol>
        </section>
    );
}

export default Experience;