import loadingImage from '../assets/loading.gif';
import '../App.css';
export default function Loading() {
    return (
        <div className="container-loading-image">
            <img src={loadingImage} alt='' />
        </div>
    )
}