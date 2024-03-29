import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import TagIcon from '@mui/icons-material/Tag';
import db from "./firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // Run this code ONCE when the sidebar component load
    db.collection('rooms').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          // doc.data() have both name and message but here we only extract name data.
          name: doc.data().name,
        }))
      );
    });
  }, []);
  
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>slack-clone</h2>
          <h3>
            <FiberManualRecordIcon />
            Kushagra
          </h3>
        </div>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mention & reaction" />
      <SidebarOption Icon={DraftsIcon} title="Saved item" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {/* Connect to Database and list all channel*/}

      { channels.map(channel =>
      <SidebarOption 
      Icon={TagIcon} 
      title={channel.name} 
      id={channel.id} />)
    }
    </div>
  );
}

export default Sidebar;
