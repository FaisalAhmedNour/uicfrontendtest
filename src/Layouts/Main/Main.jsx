import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;