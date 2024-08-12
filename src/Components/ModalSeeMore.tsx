import './ModalSeeMore.css'
import { useState } from 'react'
import arrowPrev from '../assets/arrow_back.svg'
import arrowNext from '../assets/arrow_forward.svg'
import fdm_good from '../assets/fmd_good.svg'
import close from '../assets/close.svg'
import clock from '../assets/clock.svg'
import website from '../assets/website.svg'
import call from '../assets/call.svg'
import Location from '../Interfaces/Location'
import StarRating from './StarRating'

interface Props {
    data: Location;
    closeModal: () => void;
}

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

function ModalSeeMore({ data, closeModal }: Props) {
    const [imageIndex, setImageIndex] = useState(0);

    const openingTimeDisplay = (): JSX.Element[] => {
        const times: JSX.Element[] = [];
        const rawTimes = data.schedule_openings;
        for (let index = 0; index < rawTimes.length; index++) {
            const rawTime = rawTimes[index] !== "closed" ? rawTimes[index] : "Fermé";
            times.push(<div>{`${days[index]} : ${rawTime !== "open" ? rawTime : "Ouvert"}`}</div>)
        }
        return times;
    }

    return (
        <div className="Modal-wrapper">
            <div className='Modal-wrapper-relative'>
                <div className='Modal'>
                    <div className='Modal--Secondary'>
                        <div className='Modal-wrapper-closeButton' onClick={() => closeModal()}>
                            <img src={close} />
                        </div>
                        <div className="Modal-picNav">
                            <div className="Modal-picNav-arrow Modal-picNav-arrow--left" onClick={() => setImageIndex(imageIndex > 0 ? imageIndex - 1 : imageIndex)}>
                                <img className="Modal-picNav-img" src={arrowPrev} />
                            </div>
                            <div className="Modal-picNav-wrapper">
                                <img className="Modal-picNav-img" src={data.images[imageIndex]} />
                            </div>
                            <div className="Modal-picNav-arrow Modal-picNav-arrow--right" onClick={() => setImageIndex(imageIndex < data.images.length - 1 ? imageIndex + 1 : imageIndex)}>
                                <img className="Modal-picNav-img" src={arrowNext} />
                            </div>
                        </div>
                        <div className='Modal-data'>
                            <div className="Modal-NameRating">
                                <p>
                                    {data.name}
                                </p>
                                <StarRating avg_rating={data.avg_rating} nb_rating={data.nb_ratings} />
                            </div>
                            <div>
                                <img style={{ height: 19 }} src={fdm_good} />{`${data.address}, ${data.postcode} ${data.city}`}
                            </div>
                            <div>
                                <div>
                                    <img style={{ height: 19 }} src={clock} /> Horaires
                                    {openingTimeDisplay()}
                                </div>
                                <div>
                                    {data.website?<div>
                                        <img  style={{ height: 20 }} src={website} /><a target='_blank' href={data.website}>{data.website}</a>
                                    </div>:null}
                                    {data.phone_number?<div>
                                        <img  style={{ height: 20 }} src={call} /><a href={'tel:'+data.phone_number}>{data.phone_number}</a>
                                    </div>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSeeMore