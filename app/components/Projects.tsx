const Projects = () => {
    return (
        <section className="mt-16">
            <div className="mx-5">
                <h2 className="text-5xl font-raleway font-semibold mb-2">Projects</h2>
                <p className="my-4 text-gray-400">In this section you will learn about my personal projects</p>
                {/* If you have more than one project add "justify-content: evenly" for better layout */}
                <div className="w-full flex items-center flex-wrap gap-4 mt-12">
                    <div className="bg-slate-800 rounded-md p-4 md:w-48/100">
                        <p className="text-xl font-semibold mb-4">CityUbi</p>
                        <p className="text-base text-gray-400 mb-4">Make sure your customers don't waste any more time, highlight your local products and services.</p>
                        <a href="https://www.cityubi.com/" target="_blank" className="bg-yellow-300 rounded-sm px-2 py-1 block float-right text-center
                         text-slate-700 font-semibold hover:bg-yellow-100 md:w-1/3">Explorer</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;