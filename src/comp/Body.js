import {restrauntList} from "../contants"
import RestorantCard from "./RestorantCard"
import {useEffect, useState} from "react";
import Shimmer from "./Shim";
import {Link} from "react-router-dom";
import useOnline from "./useOnline";

function filterdata(searchText , Restaurants){
    return Restaurants.filter((resti) =>
        resti.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
}

const Body = () => {
    const [allRestaurant , setallRestaurant] = useState([]);
    const [filteredRestaurants , setfilteredRestaurants] = useState([])
    const [searchText , setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    } , [])
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.614684&lng=77.060606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setallRestaurant(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline = useOnline();
    if(!isOnline){
        return <h1> Oops No Internet Connection </h1>
    }

    if(!allRestaurant) return null;

    return (allRestaurant.length === 0) ? <Shimmer/> :(
        <>
        <div className = "search-container">
            <input
            type = "text"
            className = "search-input"
            placeholder="search"
            value = {searchText}
            onChange={(e) => {
                setSearchText(e.target.value)
            }}
            />
            <button 
            className = "search-btn"
            onClick={() => {
                const data = filterdata(searchText , allRestaurant);
                setfilteredRestaurants(data);
            }}
            >Search</button>
        </div>
        <div className="restaurant-list">
            {filteredRestaurants.map((resto) => {
                return (
                    <Link to = {"/restaurant/" + resto.info.id}
                    key =  {resto.info.id}
                    > 
                    <RestorantCard {...resto.info}/>  
                    </Link>
                );
            })}
        </div>
        </>
    )
}

export default Body;