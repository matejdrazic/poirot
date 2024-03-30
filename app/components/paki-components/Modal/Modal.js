import React, { useState, useEFfect} from "react";

// style
import Style from './ModalUpdateProjectInfo.module.css'

const ModalUpdateProjectInfo = () => {

    const handleYesButton = () => {

    }

    const handleNoButton = () => {

    }

    const closeModal = () => {
        
    }

    return (  
        <div className={Style.ModalContainerOverlay}>
            <div className={Style.Modal}>
                <h3>Završi uređivanje dokumenta?</h3>
                <div className={Style.ModalButtonsContainer}>
                    <button className={Style.ModalButton}>DA</button>
                    <button className={Style.ModalButton}>NE</button>
                </div>
            </div>
        </div>
    );
}
 
export default ModalUpdateProjectInfo;