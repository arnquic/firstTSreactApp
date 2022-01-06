import ApartmentItem from "../components/ApartmentItem";

import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const HomePage = () => {

    const { apartments, owners } = useContext(AppContext);



    return (
        <div>

        </div>
    )
}

export default HomePage
