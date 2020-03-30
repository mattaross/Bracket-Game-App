import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function Competitor(props) {
    const [titleEntered, setTitleEntered] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [bandEntered, setBandEntered] = useState(false);
    const [newBand, setNewBand] = useState("");

    function setStyle() {
        if (props.top === "true") {
            return {"borderBottomColor": "black", "borderBottomStyle": "solid", "borderBottomWidth": 1}
        }
    }

    function handleTitleChange(event) {
        const newSongTitle = event.target.value;
        setNewTitle(newSongTitle);
    }

    function handleTitleClick() {
        setTitleEntered(true);
    }

    function handleBandChange(event) {
        const newBandTitle = event.target.value;
        setNewBand(newBandTitle);
    }

    function handleBandClick() {
        setBandEntered(true);
    }

    function firstRoundForms() {
        if (props.roundNum === 1) {
            if (!titleEntered && !bandEntered) {
                return (
                    <div className="input-area">
                        <input className="name-input" onChange={handleTitleChange} value={newTitle} type="text" placeholder="Name/title..." />
                        <button className="add-button" onClick={handleTitleClick}><AddIcon style={{"fontSize": 18}} /></button>
                        <input className="band-input" onChange={handleBandChange} value={newBand} type="text" placeholder="Band/description..." />
                        <button className="add-button" onClick={handleBandClick}><AddIcon style={{"fontSize": 18}} /></button>
                    </div>
                );
            } else if (titleEntered && !bandEntered) {
                return (
                    <div className="input-area">
                        <p className="song-title-text">
                            <strong>{newTitle}</strong>
                        </p>
                        <input className="band-input" onChange={handleBandChange} value={newBand} type="text" placeholder="Band/description..." />
                        <button className="add-button" onClick={handleBandClick}><AddIcon style={{"fontSize": 18}} /></button>
                    </div>
                );
            } else if (!titleEntered & bandEntered) {
                return (
                    <div className="input-area">
                        <input className="name-input" onChange={handleTitleChange} value={newTitle} type="text" placeholder="Name/title..." />
                        <button className="add-button" onClick={handleTitleClick}><AddIcon style={{"fontSize": 18}} /></button>
                        <p className="band-name-text">{newBand}</p>
                    </div>
                );
            } else {
                return (
                    <div className="input-area">
                        <p className="song-title-text">
                            <strong>{newTitle}</strong>
                        </p>
                        <p className="band-name-text">{newBand}</p>
                    </div>
                );
            }
        }
    }

    return (
        <div className="competitor" style={setStyle()}>
            {firstRoundForms()}
        </div>
    );
}

export default Competitor;