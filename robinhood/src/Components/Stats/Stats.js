import React, { useState, useEffect } from 'react'
import './Stats.css'
import key from '../../key'
import axios from 'axios'

const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stats() {

    const [stockData, setStockData] = useState([])

    const getStockData = () => {

    }

    useEffect((stock) => {
        return axios
            .get(`${BASE_URL}?${stock}$token=${key}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">

                    </div>
                </div>

                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats