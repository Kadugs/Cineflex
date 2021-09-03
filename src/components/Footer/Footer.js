import './Footer.css';
export default function Footer({title, image, day, hour}) {
    return (
        <footer>
            <img src={image} alt=''/>
            <div>
                <p>{title}</p>
                <p>{day === undefined ? '' : `${day} - ${hour}`}</p>    
            </div>
        </footer>
    )
}