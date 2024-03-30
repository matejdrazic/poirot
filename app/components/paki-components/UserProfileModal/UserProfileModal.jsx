'use client'

import React, { useContext } from "react";

// style
import Style from './UserProfileModal.module.css'

// context
import { AuditLeaderboardContext } from '../../../audit-leaderboard/AuditLeaderboardContext';
// external components

const data = {
        profilePhoto : "/one.png",
        username : "username",
        role : "senior",
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
                        <div className={Style.UserProfileRole}>senior</div>
                        <div>
                        <div className={Style.UserProfileIssues}>
                            <div className={Style.UserProfileRecentIssues}>Recent issues</div>
                            <div className={Style.UserProfileStats}>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <div className={Style.UserProfileIssuesStatsElement}>
                                        <div className={Style.UserProfileIssuesStatsElementTitle}>
                                            High severity Issues
                                        </div>
                                        <div className={Style.UserProfileIssuesStatsElementValue}>
                                            7
                                        </div>
                                    </div>
                                    <div className={Style.UserProfileIssuesStatsElement}>2</div>
                                    <div className={Style.UserProfileIssuesStatsElement}>3</div>
                                </div>
                                <div className={Style.UserProfileIssuesStatsSection}>
                                    <div className={Style.UserProfileIssuesStatsElement}>4</div>
                                    <div className={Style.UserProfileIssuesStatsElement}>5</div>
                                    <div className={Style.UserProfileIssuesStatsElement}>6</div>
                                </div>
                            </div>
                            <div style={Style.UserProfileRewards}>213</div>
                            <div style={Style.UserProfileTopResults}>TOP LEADER</div>
                        </div>
                        </div>
                    </div>

                    <div className={Style.UserProfileSecondSection}>
                        <div style={Style.UserProfileMilestones}>
                            <div style={Style.UserProfileMilestone}></div>
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