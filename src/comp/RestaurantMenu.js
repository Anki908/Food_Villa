import { useEffect , useState} from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN } from "../contants";
import Shimmer from "./Shim";
import useRestaurant from "./useRestaurant";

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const restaurant = useRestaurant(resId);

    return (!restaurant) ? < Shimmer /> : (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src = {IMG_CDN + restaurant.cloudinaryImageId}/>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.areaName}</h3>
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h3>{restaurant.avgRating} stars</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
        </div>
    )
}

export default RestaurantMenu;