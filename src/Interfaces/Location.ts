interface Location {
    name: string;
    images: string[];
    avg_rating: string;
    nb_ratings: number;
    schedule_openings: string[];
    phone_number?: string;
    website?: string;

    address: string;
    postcode: string;
    city: string;
    country: string;

    longitude: number;
    latitude: number;
}

export default Location;