import React, { useState, useEffect } from 'react'
import './Stats.css'
import key from '../../key'
import axios from 'axios'
import StatsRow from '../StatsRow/StatsRow'
import { db } from '../../firebase'

const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stats() {

    const [stocksData, setStocksData] = useState([])
    const [myStocks, setMyStocks] = useState([])

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${key}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    }

    const getMyStocks = () => {
        db.collection('myStocks')
            .onSnapshot(snapshot => {
                let promises = []
                let tempData = []
                snapshot.docs.map((doc) => {
                    promises.push(
                        getStockData(doc.data().ticker)
                            .then(res => {
                                tempData.push({
                                    id: doc.id,
                                    data: doc.data(),
                                    info: res.data
                                })
                            })
                    )
                })

                Promise.all(promises).then(() => {
                    console.log(tempData)
                    setMyStocks(tempData);
                })
            });
    }

    useEffect(() => {
        let tempStocksData = []
        const stocksList = ["AAPL", "COUP", "TSLA", "FB", "MRNA", "UBER", "DIS", "SBUX"]
        let promises = [];
        getMyStocks();
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
            setStocksData(tempStocksData)
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
                        {myStocks.map(stock => {
                            return (
                                <StatsRow
                                    key={stock.data.ticker}
                                    name={stock.data.ticker}
                                    openPrice={stock.info.o}
                                    shares={stock.data.shares}
                                    price={stock.info.c} />
                            )
                        }
                        )}
                    </div>
                </div>

                <div className="stats__header stats__lists">
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