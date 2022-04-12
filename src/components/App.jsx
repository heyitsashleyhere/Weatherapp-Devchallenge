import { useContext } from 'react';
// Context
import { UserContext } from './context/userContext.jsx';
// Components
import MainDashboard from './MainDashboard.jsx';
import SubDashboard from './SubDashboard.jsx';
import SearchSection from './Search.jsx';

export default function App() {
    const {isSearch} = useContext(UserContext)

    return (
        <section className="App">
            {isSearch ? 
            <SearchSection /> 
            : <MainDashboard />}
            <SubDashboard />
        </section>
    )
}