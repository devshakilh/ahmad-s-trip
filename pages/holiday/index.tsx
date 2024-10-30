import HolidayHotelSearchComponent from "../../components/Home/HomeNew/HollidayHotel";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-10">Find Your Hotel</h1>
            <HolidayHotelSearchComponent />
        </div>
    );
};

export default HomePage;
