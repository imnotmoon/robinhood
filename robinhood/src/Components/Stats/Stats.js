import React, { useState, useEffect } from 'react'
import './Stats.css'
import key from '../../key'
import axios from 'axios'
import StatsRow from '../StatsRow/StatsRow'

const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stats() {

    const [stocksData, setStocksData] = useState([])

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${key}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    }

    useEffect(() => {
        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"]
        let promises = [];
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock)
                    .then((res) => {
                        tempStocksData.push({
                            name: stock,
                            ...res.data
                        });
                    })
            )
        });

        Promise.all(promises).then(() => {
            setStocksData(tempStocksData);
            console.log("stocksData : ", stocksData);
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
                        {stocksData.map(stock => {
                            return (
                                <StatsRow
                                    key={stock.name}
                                    name={stock.name}
                                    openPrice={stock.o}
                                    price={stock.c}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats