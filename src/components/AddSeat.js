// Ao clicar num assento, verifica se está disponível, e se já foi clicado antes, depois marca ou desmarca a opção caso seja possível

export default function addSeat(
        seat, 
        userSeats, 
        idSeats, 
        setUserSeats, 
        setIdSeats
        ) {
    if(!seat.isAvailable) {
        alert('Esse assento não está disponível');
        return;
    }
    let isNew = true;
    userSeats.forEach((item) => {
        if(item === seat.name) {
            isNew = false;
        }
    })
    const auxUserSeats = [...userSeats];
    const auxIdSeats = [...idSeats];
    
    setUserSeats(auxUserSeats.filter((item) => {
        if(item !== seat.name) {
            return true;
        }
        return false;
    }))
    setIdSeats(auxIdSeats.filter((item) => {
        if(item !== seat.id) {
            return true;
        }
        return false;
    }))
    if(isNew) {
        setUserSeats([...userSeats, seat.name]);
        setIdSeats([...idSeats, seat.id]);
    }
}