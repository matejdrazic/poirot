'use client'

import React from "react";

// style
import Style from './UserProfileModal.module.css'


// external components

const ModalUpdateProjectInfo = () => {

    const handleYesButton = () => {

    }

    const handleNoButton = () => {

    }

    const closeModal = () => {
        
    }

    return (  
        <div className={Style.ModalContainerOverlay}>
            <div>X</div>
            <div className={Style.Modal}>
                <h3>Modal Content</h3>
            </div>
        </div>
    );
}
 
export default ModalUpdateProjectInfo;