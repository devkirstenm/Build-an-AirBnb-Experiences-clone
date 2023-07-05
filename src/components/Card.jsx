import React from "react"

// contains display logic on how the data should be used

export default function Card(props) {
    // this is called 'conditional rendering' (we'll learn more about this in the next project)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT" // because this is first, it will display "sold out" first before displaying "online" (which ensures that even if its an online item it will display sold out)
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}