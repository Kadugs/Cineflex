export default function ClientInfos({type, setUserInfo}) {
    return (
        <div className="input-client-infos">
            <span>{type} do comprador:</span>
            <input type="text" placeholder={`Digite seu ${type} ...`} onChange={(e) => setUserInfo(e.target.value)}></input>
        </div>
    );
}