import React from 'react'
import './../css/style.css'

export default function Content() {
    return (
        <div className="row">
            {/* Project Card Example */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0  text-primary">Projects</h5>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>

            {/* User */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 text-primary">Users</h5>
                    </div>
                    <table className="table table-striped mb-4">
                        <thead>
                            <tr className="bg-success text-light">
                                <th>#</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Age</th>
                                <th>Full name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>Snow</td>
                                <td>35</td>
                                <td>John Snow</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cersei</td>
                                <td>Lannister</td>
                                <td>27</td>
                                <td>Cersei Lannister</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Arya</td>
                                <td>Stark</td>
                                <td>31</td>
                                <td>Arya Stark</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Daenerys</td>
                                <td>Targaryen</td>
                                <td>24</td>
                                <td>Daenerys Targaryen</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>David</td>
                                <td>Bowie</td>
                                <td>42</td>
                                <td>David Bowie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
