import RawLocation from "../Interfaces/RawLocation";
import csv from '../csvData.csv'
import RawDataCheck from "./RawDataCheck";

const GetLocationFromCsv = ():RawLocation[] => {
    const Locations:RawLocation[] = [];
    for (let index = 0; index < csv.length; index++) {
        const data = csv[index];
        if (RawDataCheck(data)) {
            Locations.push({
                name: data.name,
                images: data.images,
                schedule_openings: data.schedule_openings,
                avg_rating: data.avg_rating,
                nb_ratings: data.nb_ratings,
                phone_number: data.phone_number.length>0?data.phone_number:undefined,
                website: data.website.length>0?data.website:undefined,
                address: data.address,
                longitude: data.longitude,
                latitude: data.latitude
            })
        }
    }
    return (Locations);
}

export default GetLocationFromCsv;