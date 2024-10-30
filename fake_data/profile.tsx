import { AiFillCreditCard } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaHotel, FaUser, FaUserTimes } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { ImShare2 } from "react-icons/im";
import { IoLockClosedSharp } from "react-icons/io5";
import Profile from "../components/Profile/TripCoin";
import MyAccount from "../components/Profile/MyAccount";
import MyBooking from "../components/Profile/MyBooking";
import { GiCommercialAirplane } from "react-icons/gi";
import img1 from '../assets/profile/historyNotFound.png';
import img2 from '../assets/profile/planeSmallWhite.png';
import img3 from '../assets/profile/hotelBuildingsmallwhite.png';
import img4 from '../assets/profile/holiday-icon-white.png';
import { MdHolidayVillage } from "react-icons/md";
import { TbBrandVisa } from "react-icons/tb";
import TripCoin from "../components/Profile/TripCoin";

export const sideNav = [
    {
        id: "s1",
        link: "my-account",
        title: "My Account",
        logo: <FaUser />,
        element: < MyAccount/>
    },
    {
        id: "s2",
        link: "my-booking",
        title: "My Booking",
        logo: <BsFillBookmarkFill />,
        element: < MyBooking/>
    },
    {
        id: "s3",
        link: "trip-coin",
        title: "Trip Coin",
        logo: <FaUser />,
        element: < TripCoin/>
    },
    {
        id: "s4",
        link: "refer-earn",
        title: "Refer & Earn",
        logo: <ImShare2 />,
        element: < Profile/>
    },
    {
        id: "s5",
        link: "favourite-guest-list",
        title: "Favourite Guest List",
        logo: <HiUserGroup />,
        element: < Profile/>
    },
    {
        id: "s6",
        link: "change-password",
        title: "Change Password",
        logo: <IoLockClosedSharp />,
        element: < Profile/>
    },
    {
        id: "s7",
        link: "save-cards",
        title: "Save Cards",
        logo: <AiFillCreditCard />,
        element: < Profile/>
    },
    {
        id: "s8",
        link: "manage-your-data",
        title: "Manage Your Data",
        logo: <FaUserTimes />,
        element: < Profile/>
    },
]

export const myBooking = [
    {
        id: "s1",
        title: "Flight",
        logo: img2,
        img: img1
    },
    {
        id: "s2",
        title: "Hotel",
        logo: img3,
        img: img1
    },
    {
        id: "s3",
        title: "Holiday",
        logo: img4,
        img: img1
    },
    {
        id: "s4",
        title: "Visa",
        logo: img4,
        img: img1
    },
]