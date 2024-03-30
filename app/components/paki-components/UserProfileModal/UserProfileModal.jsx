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


const data = {
        profilePhoto : "/one.png",
        username : "DarkChocolate",
        role : "Senior Watson",
        stats : [
            {
                highSeverity : "4",
                mediumSeverityIssues: "5",
                top3Places : "1",
                soloHigh : "2",
                soloMedium : "2",
                firstPlace : "1"
            }
        ],
        rewards : "81.4$"
}

const ModalUpdateProjectInfo = () => {

    const { userProfileIsOpen , setUserProfileIsOpen } = useContext(AuditLeaderboardContext);

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
                        <img src={data.profilePhoto} className={Style.UserProfileProfilePhoto} />
                        <div className={Style.UserProfileUsername}>{data.username}</div>
                        <div className={Style.UserProfileRole}>{data.role}</div>
                        <div className={Style.UserProfileIssues}>
                            <div className={Style.UserProfileRecentIssues}>STATS</div>
                            <div className={Style.UserProfileStats}>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <UserProfileStatsElement title={"High Severity Issues"} value={"5"}/>
                                    <UserProfileStatsElement title={"Medium Severity Issues"} value={"7"}/>
                                    <UserProfileStatsElement title={"Medium Severity Issues"} value={"8"}/>
                                </div>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <UserProfileStatsElement title={"Solo High"} value={"3"}/>
                                    <UserProfileStatsElement title={"Solo Medium"} value={"3"}/>
                                    <UserProfileStatsElement title={"First Place"} value={"9"}/>
                                </div>
                            </div>
                            <UserProfileRewards value={"288.69K €"}/>
                            <div style={Style.UserProfileTopResults}>Top Results</div>

                            <div className={Style.UserProfileStats}>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <UserProfileStatsElement title={"High Severity Issues"} value={"5"}/>
                                    <UserProfileStatsElement title={"Medium Severity Issues"} value={"7"}/>
                                    <UserProfileStatsElement title={"Medium Severity Issues"} value={"8"}/>
                                </div>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <UserProfileStatsElement title={"Solo High"} value={"3"}/>
                                    <UserProfileStatsElement title={"Solo Medium"} value={"3"}/>
                                    <UserProfileStatsElement title={"First Place"} value={"9"}/>    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={Style.UserProfileSecondSection}>
                        <div className={Style.UserProfileAchievementsTitle}>ACHIEVEMENTS</div>
                        <div className={Style.UserProfileAchievementsList}>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement1} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement2} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement3} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement4} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement3} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement4} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement2} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement1} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement3} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement1} width={150} height={150}/>
                            <Image className={Style.UserProfileAchievementsListImage} src={achievement3} width={150} height={150}/>
                        </div>
                        <div className={Style.UserProfileResume}>
                            <div>Event</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ModalUpdateProjectInfo;