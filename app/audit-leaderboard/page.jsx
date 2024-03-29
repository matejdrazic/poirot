'use client'

import React, { useState, useEffect } from "react";

// style
import Style from './AuditLeaderboard.module.css'

// data
import { Data } from './AuditLeaderboardData.js'
import { TimelineData } from './AuditLeaderboardTimelineData.js'

// my components
import LeaderboardMember from "@/components/paki-components/LeaderboardMember/LeaderboardMember";
import LeaderboardMemberTimeline from "@/components/paki-components/LeaderboardMemberTimeline/LeaderboardMemberTimeline";
import UserProfileModal from "@/components/paki-components/UserProfileModal/UserProfileModal"

// context
import  { AuditLeaderboardContext } from './AuditLeaderboardContext.js'

const AuditLeaderboard = () => {

    // user profile modal
    const [userProfileIsOpen, setUserProfileIsOpen] = useState(false);

    useEffect(() => {
        if (userProfileIsOpen) {
            // Prevent scrolling on the body element
            document.body.style.overflow = 'hidden';
        } else {
            // Allow scrolling on the body element
            document.body.style.overflow = 'auto';
        }
    }, [userProfileIsOpen]);

    return (
        <AuditLeaderboardContext.Provider value={{userProfileIsOpen, setUserProfileIsOpen}}>
            <div className={Style.AuditLeaderboardContainer}>
                
                {userProfileIsOpen && <UserProfileModal />}

                <div className={Style.AuditLeaderboardList}>
                    <h2 style={{marginBottom:"30px", fontSize:"30px", color: "#ffffff"}}>AUDIT LEADERBOARD</h2>
                    <div className={Style.AuditLeaderboardTopBar}>
                    </div>
                    {Data.map((member, index) => (
                        <LeaderboardMember
                            key={index}
                            memberNumber={index + 1}
                            memberUsername={member.username}
                            memberProfilePhoto={member.image} 
                            memberPoints={member.points} 
                            memberDays={member.days}
                            memberPayouts={member.payouts} 
                        />
                    ))}    
                    
                </div>      
                <div className={Style.AuditLeaderboardTimeline}>
                    <h2 style={{marginBottom:"30px", fontSize:"30px", color: "#ffffff"}}>TIMELINE</h2>
                    <div className={Style.AuditLeaderboardTopBar}>
                    </div>
                    {TimelineData.map((member, index) => (
                        <LeaderboardMemberTimeline
                            key={index}
                            memberNumber={index}
                            memberUsername={member.username}
                            memberStatus={member.status}
                        />
                    ))}    
                </div>
            </div>
        </AuditLeaderboardContext.Provider>
    );
}
 
export default AuditLeaderboard;