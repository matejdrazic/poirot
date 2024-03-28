'use client'
import React, { useState, useEffect, useContext } from "react";

// styles
import Style from './LeaderboardMember.module.css'

// context - to consume
import { AuditLeaderboardContext } from '../../../audit-leaderboard/AuditLeaderboardContext'

// Define an interface for the props

const LeaderboardMember = ({ memberNumber, memberProfilePhoto, memberUsername, memberPoints, memberDays, memberPayouts }) => {
    
    const { userProfileIsOpen , setUserProfileIsOpen } = useContext(AuditLeaderboardContext);
    
    const handleOpenUserProfile = () => {
        setUserProfileIsOpen(true);
    }

    return (  
        <button onClick={() => handleOpenUserProfile()} className={Style.LeaderboardMemberContainer}>
            <div className={Style.LeaderboardMemberInfo}>
                <div className={Style.LeaderboardMemberInfoMember} style={{marginRight:"20px"}}>{memberNumber}</div>
                <img className={Style.LeaderboardMemberInfoProfilePhoto} src={memberProfilePhoto}></img>
                <div className={Style.LeaderboardMemberInfoMember}>{memberUsername}</div>
            </div>
            <div className={Style.LeaderboardMemberInfoMember}>{memberPoints}</div>
            <div className={Style.LeaderboardMemberInfoMember}>{memberDays}</div>
            <div className={Style.LeaderboardMemberInfoMember}>{memberPayouts}</div>
        </button>
    );
}
 
export default LeaderboardMember;