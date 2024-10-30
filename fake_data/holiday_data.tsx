export interface Hotel {
    id: number;
    hotelName: string;
    location: string;
    rating: string;
    regularPrice: number;
    discount: number;
    img: string;
    tripCoin: { img: string; count: number };
    tripShare: { img: string; count: number };
    availableRooms: number; // Number of available rooms
    availableDates: { start: string; end: string }[]; // Array of available date ranges
}

// Sample hotel data
export const hotelsData: Hotel[] = [
    {
        id: 1,
        hotelName: "Seaside Hotel",
        location: "Cox's Bazar",
        rating: "⭐⭐⭐⭐⭐",
        regularPrice: 150,
        discount: 10,
        img: "https://via.placeholder.com/400x300?text=Seaside+Hotel",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 5 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 3 },
        availableRooms: 10,
        availableDates: [
            { start: "2024-11-01", end: "2024-11-10" },
            { start: "2024-11-15", end: "2024-11-20" },
        ],
    },
    {
        id: 2,
        hotelName: "Mountain Resort",
        location: "Sylhet",
        rating: "⭐⭐⭐⭐",
        regularPrice: 100,
        discount: 15,
        img: "https://via.placeholder.com/400x300?text=Mountain+Resort",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 2 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 4 },
        availableRooms: 5,
        availableDates: [
            { start: "2024-11-05", end: "2024-11-15" },
            { start: "2024-11-18", end: "2024-11-25" },
        ],
    },
    {
        id: 3,
        hotelName: "City Center Hotel",
        location: "Dhaka",
        rating: "⭐⭐⭐⭐",
        regularPrice: 120,
        discount: 5,
        img: "https://via.placeholder.com/400x300?text=City+Center+Hotel",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 3 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 1 },
        availableRooms: 8,
        availableDates: [
            { start: "2024-11-01", end: "2024-11-30" },
            { start: "2024-12-01", end: "2024-12-10" },
        ],
    },
    {
        id: 4,
        hotelName: "Riverside Inn",
        location: "Barisal",
        rating: "⭐⭐⭐⭐",
        regularPrice: 90,
        discount: 20,
        img: "https://via.placeholder.com/400x300?text=Riverside+Inn",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 1 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 2 },
        availableRooms: 1,
        availableDates: [
            { start: "2024-11-10", end: "2024-11-20" },
            { start: "2024-11-25", end: "2024-12-05" },
        ],
    },
    {
        id: 5,
        hotelName: "Forest Retreat",
        location: "Chittagong",
        rating: "⭐⭐⭐⭐⭐",
        regularPrice: 200,
        discount: 30,
        img: "https://via.placeholder.com/400x300?text=Forest+Retreat",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 4 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 3 },
        availableRooms: 8,
        availableDates: [
            { start: "2024-11-05", end: "2024-11-15" },
            { start: "2024-11-21", end: "2024-11-30" },
        ],
    },
    {
        id: 6,
        hotelName: "Luxury Suites",
        location: "Dhaka",
        rating: "⭐⭐⭐⭐⭐",
        regularPrice: 250,
        discount: 50,
        img: "https://via.placeholder.com/400x300?text=Luxury+Suites",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 6 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 5 },
        availableRooms: 3,
        availableDates: [
            { start: "2024-11-01", end: "2024-11-10" },
            { start: "2024-12-01", end: "2024-12-10" },
        ],
    },
    {
        id: 7,
        hotelName: "Business Hotel",
        location: "Narayanganj",
        rating: "⭐⭐⭐⭐",
        regularPrice: 110,
        discount: 20,
        img: "https://via.placeholder.com/400x300?text=Business+Hotel",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 2 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 1 },
        availableRooms: 20,
        availableDates: [
            { start: "2024-11-01", end: "2024-11-15" },
            { start: "2024-11-20", end: "2024-12-05" },
        ],
    },
    {
        id: 8,
        hotelName: "Heritage Hotel",
        location: "Rajshahi",
        rating: "⭐⭐⭐⭐⭐",
        regularPrice: 180,
        discount: 15,
        img: "https://via.placeholder.com/400x300?text=Heritage+Hotel",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 3 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 4 },
        availableRooms: 7,
        availableDates: [
            { start: "2024-11-10", end: "2024-11-20" },
            { start: "2024-12-01", end: "2024-12-10" },
        ],
    },
    {
        id: 9,
        hotelName: "Cozy Cottage",
        location: "Rangpur",
        rating: "⭐⭐⭐⭐",
        regularPrice: 80,
        discount: 10,
        img: "https://via.placeholder.com/400x300?text=Cozy+Cottage",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 1 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 2 },
        availableRooms: 12,
        availableDates: [
            { start: "2024-11-15", end: "2024-11-25" },
        ],
    },
    {
        id: 10,
        hotelName: "Modern Loft",
        location: "Gazipur",
        rating: "⭐⭐⭐⭐",
        regularPrice: 140,
        discount: 25,
        img: "https://via.placeholder.com/400x300?text=Modern+Loft",
        tripCoin: { img: "https://via.placeholder.com/24?text=Coin", count: 4 },
        tripShare: { img: "https://via.placeholder.com/24?text=Share", count: 3 },
        availableRooms: 5,
        availableDates: [
            { start: "2024-11-10", end: "2024-11-15" },
            { start: "2024-12-01", end: "2024-12-10" },
        ],
    },
];

// Example destinations data
export const destinationsData = [
    "Cox's Bazar",
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Rangpur",
    "Narayanganj",
    "Gazipur"
];
