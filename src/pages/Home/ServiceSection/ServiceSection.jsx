import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../../../components/ServicesCard/ServicesCard";

const ServiceSection = () => {
    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/employees.json');
                const data = await response.json();
                setEmployees(data);
                // console.log(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return
    }

    const serviceForSection = employees.length > 4 ? employees.slice(0, 4) : employees;

    return (
        <div className="my-10 max-w-6xl mx-auto">
            <h1 className="text-center text-3xl font-bold text-[#0180df]">Services</h1>
            <p className="text-xl text-center text-[#5e6363] mb-5">We offer a team of intelligent and knowledgeable AI professionals that are ready and willing to help you with a wide range of needs.</p>
            {serviceForSection && (
                <div className="grid grid-cols-4 gap-10">
                    {serviceForSection.map((employee, index) => (
                        <ServicesCard key={index} employee={employee}></ServicesCard>
                    ))}
                </div>
            )}
            <p className="text-center mt-5">
                <Link to='/services' className=" text-bold text-lg font-semibold border px-5 py-2 rounded-md text-white bg-[#0180df]">See More</Link>
            </p>
        </div>
    );
};

export default ServiceSection;
