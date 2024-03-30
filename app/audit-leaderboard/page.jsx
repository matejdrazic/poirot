'use client'


import React, { useState, useEffect } from "react";

// style
import Style from './AuditLeaderboard.module.css'

// data
import { Data } from './AuditLeaderboardData.js'
import { TimelineData } from './AuditLeaderboardTimelineData.js'

// my components
import LeaderboardMember from "@/components/paki-components/LeaderboardMember/LeaderboardMember";
import LeaderboardTopBar from "@/components/paki-components/LeaderboardTopBar/LeaderboardTopBar";
import LeaderboardMemberTimeline from "@/components/paki-components/LeaderboardMemberTimeline/LeaderboardMemberTimeline";
import UserProfileModal from "@/components/paki-components/UserProfileModal/UserProfileModal"

// context
import  { AuditLeaderboardContext } from './AuditLeaderboardContext.js'

const AuditLeaderboard = () => {

    // user profile modal
    const [userProfileIsOpen, setUserProfileIsOpen] = useState(true);

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
                    <LeaderboardTopBar />
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
            
            </div>
        </AuditLeaderboardContext.Provider>
    );
}
 
export default AuditLeaderboard;