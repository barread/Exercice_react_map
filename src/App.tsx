import { useState, useEffect } from 'react'
import LocationType from './Interfaces/Location'
import './App.css'
import GetLocationFromCsv from './Functions/GetLocationFromCsv';
import ParseLocations from './Functions/ParseLocations';
import LocationBox from './Components/LocationBox';
import Map from './Components/Map';
import ModalSeeMore from './Components/ModalSeeMore';

function App() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1);
  const [Locations, setLocations] = useState<LocationType[]>([])
  const [MapRef, setMapRef] = useState<any>()

  useEffect(() => {
    const RawLocations = GetLocationFromCsv()
    setLocations(ParseLocations(RawLocations));
  }, [])

  useEffect(() => {
    if (selectedLocationIndex >= 0) {
      if (MapRef) MapRef.setView([Locations[selectedLocationIndex].latitude, Locations[selectedLocationIndex].longitude], 17)
    }
  }, [selectedLocationIndex])

  return (
    <>
      <div className='main'>
        {selectedLocationIndex>=0?<ModalSeeMore data={Locations[selectedLocationIndex]} closeModal={() => setSelectedLocationIndex(-1)} />:null}
        <div className='LocationBox-wrapper' style={{ height: window.innerHeight - 20 }}>
          <ul>
            {Locations.map((v, index) => {
              return (
                <li key={`Location_${v.name}`}>
                  <LocationBox data={v} DisplayModalSeeMore={() => setSelectedLocationIndex(index)} />
                </li>
              )
            })}
          </ul>
        </div>
        <Map Locations={Locations} setMap={setMapRef} />
      </div>
    </>
  )
}

export default App
