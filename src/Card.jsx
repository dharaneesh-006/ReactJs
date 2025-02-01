import img from "./assets/SPD.jpg"
import "./Card.css"

function Card()
{
    return(
        <div className="card">
            <img src={img} alt="Sample Profile" className="card-image" />
            <h2 className="card-title">This is a Card</h2>
            <p className="card-text">This is the test from Bro's Code</p>
        </div>
    )
}

export default Card