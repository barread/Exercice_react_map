import { MapContainer, TileLayer } from 'react-leaflet'
import Location from '../Interfaces/Location';
import 'leaflet/dist/leaflet.css';
import SetMarkerMap from './SetMarkerMap'
import GetAverageCoordinate from '../Functions/GetAverageCoordinate';
import './Map.css'

interface Props {
    Locations: Location[];
    setMap: any;
}

function Map({ Locations, setMap }: Props) {
    if (Locations.length > 0)
        return (
            <div className='Map-wrapper'>
                <div className='Map'>
                    <MapContainer ref={setMap} style={{width:"100%"}} center={GetAverageCoordinate(Locations)} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            Locations.map((v) => {
                                return (
                                    <SetMarkerMap key={`Marker_${v.name}`} Location={v} />
                                )
                            })
                        }
                    </MapContainer>
                </div>
            </div>
        )
    else return <></>
}

export default Map;