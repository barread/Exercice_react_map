import Location from "../Interfaces/Location"
import './LocationBox.css'
import { useState } from 'react'
import arrowPrev from '../assets/arrow_back.svg'
import arrowNext from '../assets/arrow_forward.svg'
import StarRating from "./StarRating"

interface Props {
    data: Location;
    DisplayModalSeeMore: () => void;
}

function LocationBox({ data, DisplayModalSeeMore }: Props) {
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <div className="LocationBox">
            <div className="LocationBox-picNav">
                <div className="LocationBox-picNav-arrow LocationBox-picNav-arrow--left" onClick={() => setImageIndex(imageIndex>0?imageIndex-1:imageIndex)}>
                    <img className="LocationBox-picNav-img" src={arrowPrev} />
                </div>
                <div className="LocationBox-picNav-wrapper">
                    <img className="LocationBox-picNav-img" src={data.images[imageIndex]} />
                </div>
                <div className="LocationBox-picNav-arrow LocationBox-picNav-arrow--right" onClick={() => setImageIndex(imageIndex<data.images.length-1?imageIndex+1:imageIndex)}>
                    <img className="LocationBox-picNav-img" src={arrowNext} />
                </div>
            </div>
            <div className="LocationBox-NameRating">
                <p onClick={() => DisplayModalSeeMore()}>
                    {data.name}
                </p>
                <StarRating avg_rating={data.avg_rating} nb_rating={data.nb_ratings} />
            </div>
            <div>
                {`${data.address}, ${data.postcode} ${data.city}`} <br/>
                <div className="LocationBox-SeeMore" onClick={() => DisplayModalSeeMore()}>Voir plus...</div>
            </div>
        </div>
    )
}

export default LocationBox