import React, { useState, useEffect } from "react";

// styles
import Style from './LeaderboardMember.module.css'

// Define an interface for the props
interface LeaderboardMemberProps {
    memberNumber: number;
    memberProfilePhoto: string;
    memberUsername: string; 
    memberPoints: number; 
    memberDays: number; 
    memberPayouts: number; 
}


const LeaderboardMember : React.FC<LeaderboardMemberProps> = ({ memberNumber, memberProfilePhoto, memberUsername, memberPoints, memberDays, memberPayouts }) => {
    
    
    
    return (  
        <div className={Style.LeaderboardMemberContainer}>
            <div className={Style.LeaderboardMemberInfo}>
                <div className={Style.LeaderboardMemberInfoMember}>{memberNumber}</div>
                <img className={Style.LeaderboardMemberInfoProfilePhoto} src={memberProfilePhoto}></img>
                <div className={Style.LeaderboardMemberInfoMember}>{memberUsername}</div>
            </div>
            <div>{memberPoints}</div>
            <div>{memberDays}</div>
            <div>{memberPayouts}</div>
        </div>
    );
}
 
export default LeaderboardMember;