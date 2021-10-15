import './TripItem.css';

function TripItem(props) {
    const { trip, onTripClick } = props;
    return (
        <div className="travel-item">
            <img src={trip.thumbnailUrl} onClick={() => onTripClick(trip)} />
            <h4>{trip.titles}</h4>
        </div>



    );
}

export default TripItem;