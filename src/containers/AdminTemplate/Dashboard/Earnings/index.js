import React from 'react'
import './../css/style.css'

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Assignment from '@mui/icons-material/Assignment';
import MessageIcon from '@mui/icons-material/Message';

export default function Earning() {
    return (
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary bg-primary text-light shadow h-80 pb-3">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1">Earnings (Monthly)</div>
                                <div className="h5 mb-0 font-weight-bold">$40,000</div>
                            </div>
                            <div className="col-auto">
                                <CalendarTodayIcon fontSize="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success bg-success text-light shadow h-80 pb-3">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1">Earnings (annual)</div>
                                <div className="h5 mb-0 font-weight-bold">$215,000</div>
                            </div>
                            <div className="col-auto">
                                <AttachMoneyIcon fontSize="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info bg-info text-light shadow h-80 pb-3">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1">Tasks</div>
                                <div className="h5 mb-0 font-weight-bold">50%</div>
                            </div>
                            <div className="col-auto">
                                <Assignment fontSize="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning bg-warning text-light shadow h-80 pb-3">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1">Pending (Requests)</div>
                                <div className="h5 mb-0 font-weight-bold">18</div>
                            </div>
                            <div className="col-auto">
                                <MessageIcon fontSize="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
