import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import LastRoundsArea from "./LastRoundsArea";
import Footer from "./Footer"
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import html2canvas from 'html2canvas';

function App() {
    const [lastRoundsData, setLastRoundsData] = useState({
        winnerTitle: "",
        winnerBand: "",
        winnerTargetSpot: 0
    });

    function lastRoundsDataHandler(data) {
        setLastRoundsData(data);
    }

    function downloadScreenCapture() {
        html2canvas(document.body).then(function(canvas) {
            saveAs(canvas.toDataURL(), 'bracket-game.png');
        });
    }

    function saveAs(uri, filename) {
        var link = document.createElement("a");

        if (typeof link.download === "string") {
            link.href = uri;
            link.download = filename;

            //Firefox requires the link to be in the body
            document.body.appendChild(link);

            //simulate click
            link.click();

            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }

    return (
        <div>
            <Header />
            <Board onLastRoundsDataArrived={lastRoundsDataHandler} />
            <LastRoundsArea lastRoundsData={lastRoundsData} />
            <button className="save-button" onClick={downloadScreenCapture}>Save As Image <SaveAltIcon /></button>
            <Footer />
        </div>
    );
}

export default App;