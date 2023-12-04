
const ServicesCard = ({ employee }) => {
    return (
        <div className="flex flex-col max-w-[350px] items-center rounded-2xl overflow-hidden border-b border-[#b1b9c0]">
            <div
                id="card"
                className="h-72 relative group"
            >
                <div
                    id="overlay"
                    className="h-full absolute bottom-72 mb-1 flex justify-center items-center p-5 bg-opacity-70 bg-[#030303] transition-transform duration-1000 transform group-hover:translate-y-full"
                >
                    <p
                        className="text-white text-center"
                    >Welcome to my business coaching services! I specialize in search engine optimization</p>
                </div>
                <img
                    src={employee.image}
                    alt={employee.name}
                />
            </div>
            <p
                className="text-xl font-bold text-[#0180df] my-1"
            >{employee.name}</p>
        </div>
    );
};

export default ServicesCard;