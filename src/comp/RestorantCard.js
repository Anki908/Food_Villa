import { IMG_CDN } from "../contants";


const RestorantCard = ({name , cuisines , cloudinaryImageId , costForTwo , locality}) => {
    return(
        <div className = "card">
            <img
            src = {IMG_CDN + 
            cloudinaryImageId
            }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h4>{locality}</h4>
        </div>
    )
}

export default  RestorantCard;
