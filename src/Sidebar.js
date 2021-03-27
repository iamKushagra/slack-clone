import React from 'react'
import "./Sidebar";
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
    return <div className="sidebar">
            <div className="sidebar__header">
            <div className="sidebar__info">
            <h2>slack-clone</h2>
                <h3>
               <FiberManualRecordIcon/>
                  Abc
                </h3>
            </div>
            <CreateIcon />
            </div>
        </div>;
}

export default Sidebar
