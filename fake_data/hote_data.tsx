// hotelsData.ts
export interface Hotel {
    id: number;
    city: string;
    property: string;
    checkInDate: string;
    checkOutDate: string;
    guests: number;
    rooms: number;
    description: string;
    amenities: string[];
    pricePerNight: number;
    imageUrl: string;
}

export const hotelsData: Hotel[] = [
    {
        id: 1,
        city: "Cox's Bazar",
        property: "Seaside Hotel & Resort",
        checkInDate: "2024-12-15",
        checkOutDate: "2024-12-18",
        guests: 3,
        rooms: 1,
        description: "A beachfront hotel offering breathtaking views of the Bay of Bengal, with premium facilities and 24/7 room service.",
        amenities: ["Free Wi-Fi", "Breakfast included", "Swimming pool", "Spa", "Airport shuttle"],
        pricePerNight: 120,
        imageUrl: "https://api.sharetrip.net/api/v1/hotel/image?key=y0+H+8v7FjTQPoVf+hvMOI6WOEaOYL/xIkX1cLbLiKb7tR/mGCj36rix8oS3MsoyZbuIUsjaes8wWS5qOiTmog=="
    },
    {
        id: 2,
        city: "Cox's Bazar",
        property: "Ocean Paradise Hotel",
        checkInDate: "2024-12-15",
        checkOutDate: "2024-12-18",
        guests: 3,
        rooms: 1,
        description: "Located at the heart of Cox's Bazar, this luxury hotel offers easy access to the beach, shopping, and local attractions.",
        amenities: ["Free parking", "Gym", "Restaurant", "Bar", "Pet-friendly"],
        pricePerNight: 150,
        imageUrl: "https://api.sharetrip.net/api/v1/hotel/image?key=/MkTJj5hxiEs55U3MVEH/pkQhsyo+xkDioBB1a3+vusfJmWjqUHvBUt2aR/rrlQdcan+B0DOMUFru3Z92Ux22A=="
    },
    {
        id: 3,
        city: "Sylhet",
        property: "Tea Valley Resort",
        checkInDate: "2024-12-20",
        checkOutDate: "2024-12-25",
        guests: 2,
        rooms: 1,
        description: "A serene resort located in the lush tea gardens of Sylhet, ideal for relaxation and rejuvenation.",
        amenities: ["Outdoor pool", "Free breakfast", "Free Wi-Fi", "Nature tours"],
        pricePerNight: 90,
        imageUrl: "https://api.sharetrip.net/api/v1/hotel/image?key=AVYtw3zAVF0jk7cgqz0s/kUmDLy/GB0HtoobpAFFDPmQiAXN8NWreD1M0wvmDs82H9vlPbYwpezgS7nAOJ2HpA=="
    },
    {
        id: 4,
        city: "Dhaka",
        property: "The Grand Dhaka",
        checkInDate: "2024-12-10",
        checkOutDate: "2024-12-12",
        guests: 1,
        rooms: 1,
        description: "A luxurious hotel in the heart of Dhaka, perfect for business and leisure travelers alike.",
        amenities: ["Conference rooms", "24-hour room service", "Free airport transfer", "Fitness center"],
        pricePerNight: 200,
        imageUrl: "https://api.sharetrip.net/api/v1/hotel/image?key=AVYtw3zAVF0jk7cgqz0s/kUmDLy/GB0HtoobpAFFDPmQiAXN8NWreD1M0wvmDs82H9vlPbYwpezgS7nAOJ2HpA=="
    },
    {
        id: 5,
        city: "Chittagong",
        property: "Bay View Resort",
        checkInDate: "2024-12-22",
        checkOutDate: "2024-12-26",
        guests: 4,
        rooms: 2,
        description: "Located on the beach, Bay View Resort offers exclusive beachfront accommodations with family-friendly amenities.",
        amenities: ["Kids' play area", "Private beach access", "Spa", "Free parking"],
        pricePerNight: 180,
        imageUrl: "https://via.placeholder.com/400x300?text=Bay+View+Resort"
    }
];
