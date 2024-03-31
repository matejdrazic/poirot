'use client'

import React, { useContext } from "react";

// style
import Style from './UserProfileModal.module.css'

// context
import { AuditLeaderboardContext } from '../../../audit-leaderboard/AuditLeaderboardContext';
// external components

// my components
import UserProfileStatsElement from './UserProfileComponents/UserProfileStatsElement/UserProfileStatsElement'
import UserProfileRewards from './UserProfileComponents/UserProfileRewards/UserProfileRewards'
import topLeader from '../Resources/top_leader.png'
import achievement1 from '../Resources/achievements/achievement1.png'
import achievement2 from '../Resources/achievements/achievement2.png'
import achievement3 from '../Resources/achievements/achievement3.png'
import achievement4 from '../Resources/achievements/achievement4.png'

// components
import Image from "next/image";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";


const ModalUpdateProjectInfo = ( {userData, index} ) => {

    const { userProfileIsOpen , setUserProfileIsOpen, selectedUserId } = useContext(AuditLeaderboardContext);

    const closeModal = () => {
        setUserProfileIsOpen(false);
    }

    return (  
        <div className={Style.ModalContainerOverlay}>
            <div className={Style.Modal}>
                <div className={Style.ModalTopBar}>
                    <button onClick={() => closeModal()} className={Style.CloseModal}>X</button>
                </div>
                <div className={Style.UserProfileContainer}>
                    <div className={Style.UserProfileFirstSection}>
                        <img src={userData[selectedUserId].image} className={Style.UserProfileProfilePhoto} />
                        <div className={Style.UserProfileUsername}>{userData[selectedUserId].username}</div>
                        <div className={Style.UserProfileRole}>{userData[selectedUserId].role}</div>
                        <div className={Style.UserProfileIssues}>
                            <div className={Style.UserProfileStatsTitle}>STATS</div>
                            <div className={Style.UserProfileStats}>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <UserProfileStatsElement title={"High Severity Issues"} value={userData[selectedUserId].stats.highSeverityIssues}/>
                                    <UserProfileStatsElement title={"Medium Severity Issues"} value={userData[selectedUserId].stats.mediumSeverityIssues}/>
                                    <UserProfileStatsElement title={"Low Severity Issues"} value={userData[selectedUserId].stats.lowSeverityIssues}/>
                                </div>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <UserProfileStatsElement title={"Solo High"} value={userData[selectedUserId].stats.soloHigh}/>
                                    <UserProfileStatsElement title={"Solo Medium"} value={userData[selectedUserId].stats.soloMedium}/>
                                    <UserProfileStatsElement title={"First Place"} value={userData[selectedUserId].stats.soloLow}/>
                                </div>
                            </div>
                            <UserProfileRewards value={"288.69K €"}/>
                            <div style={Style.UserProfileTopResults}>Top Results</div>
                            
                        </div>
                    </div>

                    <div className={Style.UserProfileSecondSection}>
                        <div className={Style.UserProfileAchievementsTitle}>Achievements</div>
                        <div className={Style.UserProfileAchievementsList}>
                            {userData[selectedUserId].achievements.map((achievementPath, index) => (
                                <Image style={{marginLeft: "10px", marginRight: "10px"}} key={index} className={Style.UserProfileAchievementsListImage} src={achievementPath} width={100} height={100}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ModalUpdateProjectInfo;