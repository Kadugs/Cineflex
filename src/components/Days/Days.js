import { Link } from "react-router-dom"
import './Days.css';
import '../../App.css';
export default function Days(
    { 
        id,
        weekday,
        date,
        showtimes,
    }
) {
    return (
        <div className="option-of-day">
            <p>{weekday} - {date}</p>
            <section>
            {showtimes.map((time, index) => (
                <div className='hour-button' key={index}>
                    <Link to={`/session/${id}/time/${time.id}`} >
                        {time.name}
                    </Link>
                </div>
            ))}
            </section>
        </div>
    )
} 