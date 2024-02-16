function updateFinalPrice(primary,coursePrize) {
    const subTotalPrize=primary+coursePrize;
    return subTotalPrize;
}
function updateCourseSeat(totalSeat,perClickSeat) {
    const totalSeatLeft=totalSeat-perClickSeat;
    return totalSeatLeft;
}
