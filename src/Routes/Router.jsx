import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ServicesPurchase from "../pages/ServicesPurchase/ServicesPurchase";
import Payment from "../pages/Payment/Payment";
import OEMS from "../pages/SingleServices/OEMS/OEMS/OEMS";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ContactNoSetup from "../pages/ContactNoSetup/ContactNoSetup";
import ServiceOptionSetup from "../pages/ServiceOptionSetup/ServiceOptionSetup";
import PaymentMethodSetup from "../pages/PaymentMethodSetup/PaymentMethodSetup";
import TermsConditionsSetup from "../pages/TermsConditionsSetup/TermsConditionsSetup";
import BankAccountSetup from "../pages/BankAccountSetup/BankAccountSetup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/purchase-services",
                element: <ServicesPurchase></ServicesPurchase>
            },
            {
                path: "/payment",
                element: <Payment></Payment>
            },
            {
                path: "/oems",
                element: <OEMS></OEMS>,
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "",
                element: <ContactNoSetup></ContactNoSetup>
            },
            {
                path: "service-setup",
                element: <ServiceOptionSetup></ServiceOptionSetup>
            },
            {
                path: "payment-method-setup",
                element: <PaymentMethodSetup></PaymentMethodSetup>
            },
            {
                path: "terms-conditions-setup",
                element: <TermsConditionsSetup></TermsConditionsSetup>
            },
            {
                path: "bank-account-setup",
                element: <BankAccountSetup></BankAccountSetup>
            }
        ]
    }
]);