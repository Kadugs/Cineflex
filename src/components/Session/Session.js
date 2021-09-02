import { useParams } from "react-router";
import "../../App.css";

export default function Session() {
    const { idMovie } = useParams();
    console.log(idMovie);
    return (
        <div className="title">
            <span>Selecione o horário</span>
        </div>
    )
}