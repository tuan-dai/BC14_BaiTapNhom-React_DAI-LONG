import React from 'react'
import Chart from './Chart'
import Earning from './Earnings'
import Content from './Content'

export default function Dashboard() {
    return (

        <div className="container">
            <h2>Dashboard</h2>
            <Earning />
            <Chart />
            <Content />

        </div>

    )
}
