'use client'

import React, { useContext } from "react";

// style
import Style from './UserProfileModal.module.css'

// context
import { AuditLeaderboardContext } from '../../../audit-leaderboard/AuditLeaderboardContext';
// external components

const ModalUpdateProjectInfo = () => {

    const { userProfileIsOpen , setUserProfileIsOpen } = useContext(AuditLeaderboardContext);

    const closeModal = () => {
        setUserProfileIsOpen(false)
    }


    return (  
        <div className={Style.ModalContainerOverlay}>
            <div className={Style.Modal}>
                <div className={Style.ModalTopBar}>
                    <button onClick={() => closeModal()} className={Style.CloseModal}>X</button>
                </div>
                <h3>Modal Content</h3>
            </div>
        </div>
    );
}
 
export default ModalUpdateProjectInfo;