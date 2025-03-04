import React from "react";
import './Card.css'

const Card = () => {


    return (
        <div className="card-container">
            <h1 id="subreddit">r/VisionPro</h1>
            <h1 id="title">Vision Pro OS 2.6 is out now!</h1>
            <p id="description">Spatial Gallery app is here! Along with the Vision Pro app on iOS 18.4 beta devices!</p>
            <div className="card-buttons-container">
                <div className="vote-buttons-container">
                <button name="up">Up Vote</button>
                <p>0</p>
                <button name="down">Down Vote</button>
                </div>
                <button name="comments">0 comments</button>
            </div>
            
        </div>
    )
}

export default Card; 