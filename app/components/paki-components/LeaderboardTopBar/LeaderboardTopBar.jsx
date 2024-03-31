'use client'
import React, { useState, useEffect, useContext } from "react";

// styles
import Style from './LeaderboardTopBar.module.css'

// context - to consume
import { AuditLeaderboardContext } from '../../../audit-leaderboard/AuditLeaderboardContext'

// Define an interface for the props

const LeaderboardTopBar = ({ }) => {
    
    const { userProfileIsOpen , setUserProfileIsOpen } = useContext(AuditLeaderboardContext);
    
    const handleOpenUserProfile = () => {
        setUserProfileIsOpen(true);
    }

    return (  
        <button onClick={() => handleOpenUserProfile()} className={Style.LeaderboardTopBarMemberContainer}>
            <div className={Style.LeaderboardTopBarMemberInfo}>
                <div className={Style.LeaderboardTopBarMemberInfoElement} style={{marginRight:"5px"}}>#</div>
                <div className={Style.LeaderboardMemberInfoElement} style={{marginLeft : "60px"}}>username</div>
            </div>
            <div className={Style.LeaderboardTopBarMemberInfoMember}>points</div>
            <div className={Style.LeaderboardTopBarMemberInfoMember}>days</div>
            <div className={Style.LeaderboardTopBarMemberInfoMember}>payouts</div>
        </button>
    );
}
 
export default LeaderboardTopBar;