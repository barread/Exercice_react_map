interface RawLocation {
    name: string;
    images: string;
    avg_rating: string;
    nb_ratings: number;
    schedule_openings: string;
    phone_number?: string;
    website?: string;

    address: string;

    longitude: string;
    latitude: string;
}

export default RawLocation;