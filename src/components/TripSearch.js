import './TripSearch.css';

function TripSearch(props) {
    const { value, onValueChange } = props;
    return (
        <div className="app-search">
            <input
                className="app-search-input"
                type="text"
                value={value}
                placeholder="ค้นหา"
                onChange={(event) => onValueChange(event.target.value)}
            /><br/>
            <form className="app-search-add" action="process.php" method="POST">
                <label>อำเภอ : </label>
                <input  type="text" name="district" /> <br/>
                <label>ชื่อสถานที่ : </label>
                <input type="text" name="location" /> <br/>
                <input type="submit" value ="Add" /> <br/>
            </form>
        </div>

    );
}

export default TripSearch;