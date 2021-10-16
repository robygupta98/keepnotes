import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import "../LiveCovidTracker/Covid.css";

const LiveCovidCountry = () => {
    const [data,setData]=useState([]);
    const getCovidData = async () => {
        try {
            const setHeader = {
                headers: {
                    accept: "application/json"
                }
            }
            const res = await fetch("https://data.covid19india.org/data.json")
            const data = await res.json();
            //console.log(data.statewise[0]);
            setData(data.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <section>
                <h1>Live</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                <ul>
                    <li className="card" styl>
                        <div className="card-main">
                            <div className="card_inner">
                                <p className="card_name"><span>OUR</span> COUNTRY</p>
                                <p className="card_total card_samal">INDIA</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card-main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                                <p className="card_total card_samal">{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card-main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> CONFIRMEED</p>
                                <p className="card_total card_samal">{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card-main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> DEATH</p>
                                <p className="card_total card_samal">{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card-main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                                <p className="card_total card_samal">{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card-main">
                            <div className="card_inner">
                                <p className="card_name"><span>LAST</span> UPDATED</p>
                                <p className="card_total card_samal">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default LiveCovidCountry
