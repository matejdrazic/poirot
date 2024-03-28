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
        <button className={Style.LeaderboardMemberTimelineContainer}>
            <div className={Style.LeaderboardMemberTimelineInfo}>
                <img className={Style.LeaderboardMemberTimelineInfoProfilePhoto} src={memberProfilePhoto}></img>
                <div className={Style.LeaderboardMemberTimelineInfoMember}>{memberUsername}</div>
            </div>
            <div className={Style.LeaderboardMemberTimelineInfoMember}>{memberStatus}</div>
        </button>
    );
}
 
export default LeaderboardMemberTimeline;