export default function VerifySeat(seat, isAvailable, userSeats) {
    let isSelected = false;
    userSeats.forEach((item) => {
        if(item === seat) {
            isSelected = true;
        }
    })
    if(isAvailable && !isSelected) {
        return 'available';
    } else if(isSelected) {
        return 'selected';
    }
    return 'unavailable';
} 