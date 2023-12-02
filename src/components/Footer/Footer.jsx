import { Link } from "react-router-dom";

const Footer = () => {

    const handleNewsLetter = (event) => {
        event.preventDefault()
        const email = event.target.newsletter_email.value;
        console.log(email);
    }

    return (
        <div className="bg-[#666]">
            <div className="max-w-6xl mx-auto grid grid-cols-4 py-10">
                <ul className="text-left mx-auto">
                    <h4 className="text-xl font-semibold text-[#f5f1f1] mb-2">
                        Pages
                    </h4>
                    <Link to="/services">
                        <li className="text-[#ddd]">Services</li>
                    </Link>
                    <Link to='/#'>
                        <li className="text-[#ddd]">About Us</li>
                    </Link>
                    <Link to='/#'>
                        <li className="text-[#ddd]">Tutorial</li>
                    </Link>
                </ul>
                <ul className="text-center col-span-2">
                    <h4 className="text-xl font-semibold text-[#f5f1f1] mb-2">
                        Newsletter
                    </h4>
                    <form onSubmit={handleNewsLetter} className="flex justify-center items-center overflow-hidden h-9 rounded-lg w-[400px] mx-auto my-5">
                        <input
                            type="email"
                            placeholder="Enter email"
                            name='newsletter_email'
                            className="input border-2 px-2 py-3 col-span-3 w-[300px]"
                        />
                        <button type="submit" className="bg-[#0180df] px-3 py-[6px] text-[#e4dfdf] font-bold w[100px] cursor-pointer ">Subscribe</button>
                    </form>
                </ul>
                <ul className="text-left">
                    <h4 className="text-xl font-semibold text-[#f5f1f1] mb-2">
                        Contact Us
                    </h4>
                    <li className="text-[#ddd]">Phone: 01*********</li>
                    <li className="text-[#ddd]">Email: uicommercial@gmail.com</li>
                    <li className="text-[#ddd]">Unknown len, Dhaka</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;