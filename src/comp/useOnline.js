import { useEffect, useState } from "react";

const useOnline = () => {

    const[isOnline , setIsOnline] = useState(true);
    useEffect(() => {

        const isOn = () => {
            setIsOnline(true);
        }

        const isOff = () => {
            setIsOnline(false);
        }
        window.addEventListener("online" , isOn)
        window.addEventListener("offline" , isOff)

        return () => {
            window.removeEventListener("online" , isOn);    //for clearing the mess we created
            window.removeEventListener("offline" , isOff);  //for clearing the mess we created
        }
        
    } , [])

    return isOnline;
}

export default useOnline;