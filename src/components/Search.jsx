import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userContext";
import { Close, NavigateNext, Search } from "@mui/icons-material";
import './styles/Search.scss';

export default function SearchSection() {
    const {
        location, setLocation,
        locationArray, setLocationArray,
        isSearch, setIsSearch
    } = useContext(UserContext)

    const [searchInput, setSearchInput] = useState('');

    useEffect(()=>{
        if(searchInput !== '' && !locationArray.includes(location)){
            setLocationArray([...locationArray, location])
            localStorage.setItem('locations', JSON.stringify(locationArray))
        }
        console.log(locationArray);
    }, [location])

    function handleSearch(e){
        e.preventDefault()
        const newLocation = searchInput.charAt(0).toUpperCase() + searchInput.slice(1).toLowerCase()
        setLocation(newLocation)
        // setIsSearch(!isSearch)
    }

    function handleListClick(e){
        setLocation(e.target.innerText)
        setIsSearch(!isSearch)
    }

    return (
        <section className="Search-Section">
            <div className="close-wrapper">
                <Close className="close-btn"
                       onClick={() => setIsSearch(false)}></Close>
            </div>
            
            <div className="search-bar">
                <span className="searchInput-wrapper">
                    <Search className="search-icon"/>
                    <input type="text" 
                           placeholder="search location" 
                           name="searchInput" 
                           id="searchInput"
                           onChange={(e) => {setSearchInput(e.target.value)}} />
                </span>
                <button onClick={handleSearch}>Search</button>
            </div>
            <ul>
                {locationArray.map(local => {
                    return (
                        <li key={local}
                            onClick={handleListClick}>
                            <p>{local}</p>
                            <NavigateNext className="navigate-next-icon"/>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}