import './StarRating.css'

interface Props {
    nb_rating: number;
    avg_rating: string;
}

function StarRating({ nb_rating, avg_rating }: Props) {
    return (
        <div className='stars-wrapper'>
            <div className="stars"><div className="percent" style={{width:`${(Number(avg_rating)*100)/5}%`}}></div></div>
            <p>
                {nb_rating}
            </p>
        </div>
    )
}

export default StarRating