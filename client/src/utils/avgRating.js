const calculateAvgRating = reviews =>{

    const totalrating = reviews?.reduce((acc,item)=> acc + item.rating,0);
    const avgRating = totalrating === 0
            ? ""
            : totalrating === 1
            ? totalrating
            : (totalrating/reviews?.length).toFixed(1); 

    return{
        totalrating,
        avgRating
    }
}
export default calculateAvgRating