const Footer = () => {
    return (
        <div id={"contact"} className="bg-gray-800 text-white py-6 px-8 flex flex-col md:flex-row items-center justify-around">

            {/* Logo */}
            <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-green-600 hover:text-green-400 transition duration-300">
                    RecipeRealm
                </h1>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold mb-2 text-gray-300">Contact</h2>
                <ul>
                    <li className="mb-1">
                        <span className="text-gray-400">Email: </span>
                        <a href="mailto:r555sid@gmail.com" className="text-green-400 hover:text-green-300 transition duration-300">
                            r555sid@gmail.com
                        </a>
                    </li>
                    <li>
                        <span className="text-gray-400">Phone: </span>
                        <a href="tel:+916379118046" className="text-green-400 hover:text-green-300 transition duration-300">
                            +91 6379118046
                        </a>
                    </li>
                </ul>
            </div>

            Thank You !!!
        </div>
    );
}

export default Footer;
