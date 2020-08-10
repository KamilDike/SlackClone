import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Kamil Dike</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Kotaro
                    </h3>
                </div>
                <CreateIcon/>
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Threads" />
                <SidebarOption Icon={DraftsIcon} title="Threads" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Threads" />
                <SidebarOption Icon={PeopleAltIcon} title="Threads" />
                <SidebarOption Icon={AppsIcon} title="Threads" />
                <SidebarOption Icon={FileCopyIcon} title="Threads" />
                <SidebarOption Icon={ExpandLessIcon} title="Threads" />
                <hr/>
                <SidebarOption Icon={ExpandMoreIcon} title="Threads" />
                <hr/>
            </div>
        </div>
    )
}

export default Sidebar
