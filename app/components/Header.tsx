const Header = () => {
    return (
        <header className="w-full fixed text-sm z-10">
            <div className="w-full px-28 py-6 grid grid-cols-1fr-auto">
                <div>
                    <p className="w-11 p-2 text-center bg-slate-900 rounded-sm text-lg">DB</p>
                </div>
                <div className="mx-auto bg-zinc-900 backdrop-blur bg-opacity-70 px-16 py-3 border-2 border-solid border-slate-500 rounded-full">
                    <ul className="list-none flex flex-row gap-x-5 text-slate-300">
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50 ">About me</a>
                        </li>
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Projects</a>
                        </li>
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Skills</a>
                        </li>
                        <li>
                            <a href="http://" className="hover:transition ease-in-out delay-75 hover:text-slate-50">Experience</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-end">
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 font-medium rounded-full
            hover:from-amber-500  hover:via-yellow-600 hover:to-yellow-700 hover:cursor-pointer">
                        Contact
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;