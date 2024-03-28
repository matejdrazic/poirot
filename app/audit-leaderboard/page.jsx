import React from "react";

// style
import Style from './AuditLeaderboard.module.css'

// data
import { Data } from './AuditLeaderboardData.js'
import { TimelineData } from './AudiLeaderboardTimelineData.js'

// my components
import LeaderboardMember from "@/components/paki-components/LeaderboardMember/LeaderboardMember";
import LeaderboardMemberTimeline from "@/components/paki-components/LeaderboardMemberTimeline/LeaderboardMemberTimeline";


const AuditLeaderboard = () => {
    return (
        <div className={Style.AuditLeaderboardContainer}>
            <div className={Style.AuditLeaderboardList}>
                <h2 style={{marginBottom:"30px", fontSize:"30px"}}>AUDIT LEADERBOARD</h2>
                <div className={Style.AuditLeaderboardTopBar}>
                </div>
                {Data.map((member, index) => (
                    <LeaderboardMember
                        key={index}
                        memberNumber={index}
                        memberUsername={member.username}
                        memberProfilePhoto={member.image} 
                        memberPoints={member.points} 
                        memberDays={member.days}
                        memberPayouts={member.payouts} 
                    />
                ))}    
                
            </div>      
            <div className={Style.AuditLeaderboardTimeline}>
                <h2 style={{marginBottom:"30px", fontSize:"30px"}}>TIMELINE</h2>
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
    );
}
 
export default AuditLeaderboard;