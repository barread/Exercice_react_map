import Location from "../Interfaces/Location"
import { LatLngExpression } from 'leaflet';

const GetAverageCoordinate = (Locations: Location[]):LatLngExpression => {
    const Lat: number[] = [], Long: number[] = [];
    for (let index = 0; index < Locations.length; index++) {
        const location = Locations[index];
        Lat.push(location.latitude);
        Long.push(location.longitude);
    }
    return (
        [
            (Lat.reduce((partialSum, value) => partialSum + value, 0) / Lat.length),
            (Long.reduce((partialSum, value) => partialSum + value, 0) / Long.length)
        ]
    )
}

export default GetAverageCoordinate