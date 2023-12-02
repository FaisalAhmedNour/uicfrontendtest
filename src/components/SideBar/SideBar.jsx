import { Link } from "react-router-dom";

const commonLinkClasses = "w-full text-center py-1 rounded-sm font-semibold";

const SideBar = () => {
    return (
        <div className="pb-2 px-3 overflow-y-scroll h-screen scroll-my-0 space-y-3">
            <Link
                to=""
                className="flex flex-col items-center"
            >
                <img
                    className="w-[100px]"
                    src="/reshot-icon-phone-9CDYRL3WVF.svg"
                />
                <p
                    className={`bg-[#2e75b6] text-white -mt-2 ${commonLinkClasses}`}
                >Contact No Setup</p>
            </Link>
            <Link
                to="service-setup"
                className="flex flex-col items-center"
            >
                <img
                    className="w-[100px]"
                    src="/reshot-icon-multiple-services-XSTB32NA85.svg"
                />
                <p
                    className={`bg-white text-black mt-1 ${commonLinkClasses}`}
                >Service Option Setup</p>
            </Link>
            <Link
                to="payment-method-setup"
                className="flex flex-col items-center"
            >
                <img
                    className="w-[100px]"
                    src="/reshot-icon-payment-N2H6QK49DU.svg"
                />
                <p
                    className={`bg-white text-black mt-1 ${commonLinkClasses}`}
                >Payment Method Setup</p>
            </Link>
            <Link
                to="terms-conditions-setup"
                className="flex flex-col items-center"
            >
                <img
                    className="w-[100px]"
                    src="/reshot-icon-terms-conditions-U8Z362KE5F.svg"
                />
                <p
                    className={`bg-white text-black mt-1 ${commonLinkClasses}`}
                >Terms & Conditions Setup</p>
            </Link>
            <Link
                to="bank-account-setup"
                className="flex flex-col items-center"
            >
                <img
                    className="w-[100px]"
                    src="/bank-account-setup.svg"
                />
                <p
                    className={`bg-white text-black mt-1 ${commonLinkClasses}`}
                >Bank Account Setup</p>
            </Link>
        </div>
    );
};

export default SideBar;