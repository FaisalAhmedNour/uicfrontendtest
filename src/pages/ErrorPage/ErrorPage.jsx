import { Link } from 'react-router-dom';
import leftArrow from '../../assets/arrow-left.svg'

const ErrorPage = () => {
    return (
        <div className="text-center max-w-4xl mx-auto">
            <img src="https://i.ibb.co/zVSjdRw/2420671.jpg" alt="error" />
            <Link className="font-bold text-xl text-[#0180df] flex justify-center items-center hover:underline">
                <img className='h-5 text-[#0180df]' src={leftArrow} alt="" />
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;