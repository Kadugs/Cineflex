export default function SeatDescription({classSeat, type}) {
    return(
        <div>
            <span className={'seat ' + classSeat}></span>
            <span>{type}</span>
        </div>
    )
}