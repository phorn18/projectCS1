import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TripItem from './components/TripItem';
import TripPost from './components/TripPost';
import travels from './data/travels';
import TripSearch from './components/TripSearch';

function App() {
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onTripOpenClick(trip) {
        setSelectedTrip(trip);
    }

    function onTripCloseClick() {
        setSelectedTrip(null);
    }

    const tripItems = travels.filter((trip) => {
        return trip.title.includes(searchText);
    }).map((trip, index) => {
        return <TripItem key={index} trip={trip} onTripClick={onTripOpenClick} />;
    });

    let tripPost = null;
    if (!!selectedTrip) {
        tripPost = <TripPost trip={selectedTrip} onBgClick={onTripCloseClick} />;
    }

    return (
        <div className="app">
            <Header />
            {tripPost}
            <section className="app-section">
            <TripSearch value={searchText} onValueChange={setSearchText} />
                <div className="app-container">
                    <div className="app-grid">
                        {tripItems}
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default App;
