import { useRouteError } from "react-router-dom";
const error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops...</h1>
            <h1>Something went wrong</h1>
            <h1>{err.data}</h1>
        </div>
    )
}

export default error;