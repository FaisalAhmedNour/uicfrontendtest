import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-6 relative">
            <div className="bg-[#d9d9d9] h-screen sticky top-0">
                <SideBar></SideBar>
            </div>
            <div className="col-span-5 overflow-y-scroll">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;