import React from 'react'
import './StatsRow.css'
import StockSVG from '../../stock.svg'

function StatsRow(props) {
    return (
        <div className="row">
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares + " shares")}</p>
            </div>
            <div className="row__chart">
                {/* StockSVG는 경로 */}
                <img src={StockSVG} height={16} />
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>
                <p className="row__precentage"> + </p>
            </div>
        </div>
    )
}

export default StatsRow
