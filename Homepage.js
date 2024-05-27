import { useContext } from "react";
import AppContext from "./appContext";


const Homepage = () => {

    const {message} = useContext(AppContext);

    return (
        <div>
            <p>
                {message}
            </p>
        </div>
    )

}