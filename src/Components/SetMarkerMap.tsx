import { Marker, Popup } from 'react-leaflet'
import Location from '../Interfaces/Location';
import 'leaflet/dist/leaflet.css';
import StarRating from './StarRating';


interface Props {
    Location: Location;
}

function SetMarkerMap({ Location }: Props) {
    return (
        <Marker position={[Location.latitude, Location.longitude]}>
            <Popup>
                <div>
                    <span>{Location.name}</span>
                    <StarRating nb_rating={Location.nb_ratings} avg_rating={Location.avg_rating} />
                </div>
            </Popup>
        </Marker>
    )
}

export default SetMarkerMap;