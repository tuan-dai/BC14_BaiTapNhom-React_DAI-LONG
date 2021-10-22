import React from 'react'
import { Bar, Doughnut } from "react-chartjs-2";

export default function Chart() {
    return (
        <div className="row" >
            {/* AREA CHART */}
            <div className="col-xl-8 col-lg-7">
                <h5 className="text-primary bg-light p-3" >Earning Overview</h5>
                <Bar
                    data={{
                        labels: [
                            "Africa",
                            "Asia",
                            "Europe",
                            "Latin America",
                            "North America"
                        ],
                        datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: [
                                    "#3e95cd",
                                    "#8e5ea2",
                                    "#3cba9f",
                                    "#e8c3b9",
                                    "#c45850"
                                ],
                                data: [2478, 5267, 734, 784, 433]
                            }
                        ]
                    }}
                    options={{
                        legend: { display: false },
                        title: {
                            display: true,
                            text: "Predicted world population (millions) in 2050"
                        }
                    }}
                />

            </div>
            <div className="col-xl-4 col-lg-5">
                <h5 className="text-primary bg-light p-3" >Revenue Sources</h5>
                <Doughnut
                    data={{
                        labels: [
                            "Africa",
                            "Asia",
                            "Europe",
                            "Latin America",
                            "North America"
                        ],
                        datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: [
                                    "#3e95cd",
                                    "#8e5ea2",
                                    "#3cba9f",
                                    "#e8c3b9",
                                    "#c45850"
                                ],
                                data: [2478, 5267, 734, 784, 433]
                            }
                        ]
                    }}
                    option={{
                        title: {
                            display: true,
                            text: "Predicted world population (millions) in 2050"
                        }
                    }}
                />
            </div>

        </div>
    )
}
