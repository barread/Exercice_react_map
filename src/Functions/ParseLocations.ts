import RawLocation from "../Interfaces/RawLocation";
import Location from "../Interfaces/Location";

const ParseLocations = (RawLocations:RawLocation[]) => {
    const Locations:Location[] = [];
    for (let index = 0; index < RawLocations.length; index++) {
        const RawLocation = RawLocations[index];
        const addressParsed = RawLocation.address.split(', ');
        const cityPostCodeParsed = addressParsed[1].split(' ');

        Locations.push({
            name: RawLocation.name,
            images: RawLocation.images.split('|'),
            schedule_openings: RawLocation.schedule_openings.split('|'),
            avg_rating: RawLocation.avg_rating,
            nb_ratings: Number(RawLocation.nb_ratings),
            phone_number: RawLocation.phone_number??undefined,
            website: RawLocation.website??undefined,

            address: addressParsed[0],
            postcode:cityPostCodeParsed[0],
            city: cityPostCodeParsed[1],
            country: addressParsed[2],

            longitude: Number(RawLocation.longitude),
            latitude: Number(RawLocation.latitude)
        })
    }
    return (Locations);
}

export default ParseLocations;