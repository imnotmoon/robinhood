import React from 'react'
import './Newsfeed.css'
import LineGraph from '../LineGraph/LineGraph'

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed_container">
                <div className="newsfeed_chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,656</h1>
                        <p>+44.63 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed