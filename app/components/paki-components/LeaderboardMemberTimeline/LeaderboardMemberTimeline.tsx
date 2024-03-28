import React, { useState, useEffect } from "react";

// styles
import Style from './LeaderboardMemberTimeline.module.css'

// Define an interface for the props
interface LeaderboardMemberProps {
    memberProfilePhoto: string;
    memberUsername: string;
    memberStatus: string;
}


const LeaderboardMemberTimeline : React.FC<LeaderboardMemberProps> = ({ memberProfilePhoto, memberUsername, memberStatus }) => {
    
    
    
    return (  
        <div className={Style.LeaderboardMemberTimelineContainer}>
            <div className={Style.LeaderboardMemberTimelineInfo}>
                <img className={Style.LeaderboardMemberTimelineInfoProfilePhoto} src={memberProfilePhoto}></img>
                <div className={Style.LeaderboardMemberTimelineInfoMember}>{memberUsername}</div>
            </div>
            <div>{memberStatus}</div>
        </div>
    );
}
 
export default LeaderboardMemberTimeline;