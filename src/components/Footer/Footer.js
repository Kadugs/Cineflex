import './Footer.css';
export default function Footer({image, title, date}) {
    return (
        <footer>
            <img src={image} alt=''/>
            <div>
                <p>{title}</p>
                <p>{date === undefined ? '' : date}</p>    
            </div>
        </footer>
    )
}