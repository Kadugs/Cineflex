import './Success.css';
import { Link } from 'react-router-dom';

export default function Success({informations}) {
    return (
        <>
            <div className="title conclusion-title">
                <span>Pedido feito</span>
                <span> com sucesso!</span>
            </div>
            
            <div className="container-conclusion">
                <div>
                    <p><strong>Filme e sessão</strong></p>
                    <p>{informations[0].movie.title}</p>
                    <p>{informations[0].day.date} {informations[0].name}</p>
                </div>
                <div>
                    <p><strong>Ingressos</strong></p>
                    {informations[1].seats.map((seat, index) => (
                        <p key={index}>Assento {seat}</p>
                    ))}
                </div>
                <div>
                    <p><strong>Comprador</strong></p>
                    <p>Nome: {informations[1].userName}</p>
                    <p>Cpf: {informations[1].userCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
                        (regex, arg1, arg2, arg3, arg4) => {
                            return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;}
                            )}
                    </p>
                </div>
            </div>
            <div className="conclusion-button button">
                <Link to='/'>Voltar para Home</Link>
            </div>
        </>
    )
}