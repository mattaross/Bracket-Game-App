import React from "react";

function Competitor(props) {

    function setStyle() {
        if (props.top === "true") {
            return {"borderBottomColor": "black", "borderBottomStyle": "solid", "borderBottomWidth": 1}
        }
    }

    function firstRoundForms() {
        if (props.roundNum === 1) {
            return (
                <div className="input-area">
                    <input className="name-input" type="text" placeholder="Name/title..."></input>
                    <button>+</button>
                    <input className="band-input" type="text" placeholder="Band/description..."></input>
                </div>
            );
        }
    }

    return (
        <div className="competitor" style={setStyle()}>
            {firstRoundForms()}
        </div>
    );
}

export default Competitor;