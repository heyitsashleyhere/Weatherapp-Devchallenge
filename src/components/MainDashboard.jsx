import { MyLocation, Place } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "./context/userContext.jsx";

export default function MainDashboard(){

    const {
        location, setLocation,
        unit,
        temp,
        description,
        iconId,
        today,
        isSearch, setIsSearch
    } = useContext(UserContext)

    function handleSearchToggle(){
        setIsSearch(!isSearch)
        console.log(isSearch);
    }

    function handleMyLocation(){
        const defaultLocal = localStorage.getItem('myLocation');
        setLocation(defaultLocal)
    }

    const ICONURL = `http://openweathermap.org/img/wn/${iconId}@4x.png`

    return (
        <section className="Main-Dashboard">
            <nav>
                <button className="Search-toggle-btn"
                        onClick={handleSearchToggle}>
                    Search for places
                </button>
                <MyLocation className="my-location-icon"
                            onClick={handleMyLocation}/>
            </nav>

            <section className="img-section">
                <img src={ICONURL} alt={description} />
                {/* <img src={process.env.PUBLIC_URL + `images/${description}.png`}  alt={description} /> */}
            </section>

            <main>
                <h3 className="temperature">{temp} {unit === 'metric' ? `°C` : `°F`}</h3>
                <h5>{description}</h5>
                <p> Today · {today}</p>

                <div className="location">
                    <Place className="place-icon"/>
                    <h6>{location}</h6>
                </div>
            </main>

        </section>
    )
}