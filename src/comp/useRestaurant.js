import {useState , useEffect} from "react";
const useRestaurant = (resId) => {
    const[restaurant , setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    } , []);
    async function getRestaurantInfo(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.614684&lng=77.060606&restaurantId=" + resId
        );
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }
    return restaurant;
}
export default useRestaurant;