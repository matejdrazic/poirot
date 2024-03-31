'use client'
import React, { useState, useEffect, useContext } from "react";

// styles
import Style from './LeaderboardMember.module.css'

// context - to consume
import { AuditLeaderboardContext } from '../../../audit-leaderboard/AuditLeaderboardContext'

// Define an interface for the props

const LeaderboardMember = ({ userId, memberNumber, memberProfilePhoto, memberUsername, memberPoints, memberDays, memberPayouts }) => {
    
    const { userProfileIsOpen , setUserProfileIsOpen, selectedUserId, setSelectedUserId } = useContext(AuditLeaderboardContext);
    
    const handleOpenUserProfile = () => {

        // set selected user index so correct data can be taken
        setSelectedUserId(userId);
        
        setUserProfileIsOpen(true);
    }

    return (  
        <button onClick={() => handleOpenUserProfile()} className={Style.LeaderboardMemberContainer}>
            <div className={Style.LeaderboardMemberInfo}>
                <div className={Style.LeaderboardMemberInfoElement} style={{marginRight:"5px"}}>{memberNumber}</div>
                <img className={Style.LeaderboardMemberInfoProfilePhoto} src={memberProfilePhoto}></img>
                <div className={Style.LeaderboardMemberInfoElement}>{memberUsername}</div>
            </div>
            <div className={Style.LeaderboardMemberInfoMember}>{memberPoints}</div>
            <div className={Style.LeaderboardMemberInfoMember}>{memberDays}</div>
            <div className={Style.LeaderboardMemberInfoMember}>{memberPayouts}</div>
        </button>
    );
}
 
export default LeaderboardMember;