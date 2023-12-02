import { useEffect, useState } from "react";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import leftArrow from '../../assets/arrow-left-svg.png'

const Services = () => {

    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/employees.json');
                const data = await response.json();
                setEmployees(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="top" className="my-10 max-w-6xl mx-auto">
            <h1 className="text-center text-3xl font-bold text-[#0180df]">Services</h1>
            <p className="text-xl text-center text-[#5e6363] mb-5">We offer a team of intelligent and knowledgeable AI professionals that are ready and willing <br /> to help you with a wide range of needs.</p>
            {employees && (
                <div className="grid grid-cols-4 gap-10">
                    {employees.map((employee, index) => (
                        <ServicesCard key={index} employee={employee}></ServicesCard>
                    ))}
                </div>
            )}
            <p className="mt-5 flex justify-end">
                <a href="#top" className="text-bold text-lg font-semibold border p-3 rounded-full text-white bg-[#0180df]"><img className='h-5 w-5' src={leftArrow} alt="" /></a>
            </p>
        </div>
    );
};

export default Services;