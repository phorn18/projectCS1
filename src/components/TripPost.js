import './TripPost.css';

function TripPost(props) {
    const { trip, onBgClick } = props;
    return (
        <div className="travel-post">
            <div className="travel-bg" onClick={onBgClick} />
            <div className="travel-content">
                <img src={trip.fullUrl} />
                <h3>{trip.title}</h3>
                <div className="tattoo-content">
                    <p>{trip.specs}</p>
                </div>
            </div>
        </div>
    );
}

export default TripPost;