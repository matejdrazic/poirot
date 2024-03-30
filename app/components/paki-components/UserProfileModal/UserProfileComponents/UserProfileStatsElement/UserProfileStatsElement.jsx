import React from "react";

// styles
import Style from './UserProfileStatsElement.module.css'

const UserProfileStatsElement = ({value, title}) => {
    return (  
        <div className={Style.UserProfileIssuesStatsElement}>
            <div className={Style.UserProfileIssuesStatsElementTitle}>
                {title}
            </div>
            <div className={Style.UserProfileIssuesStatsElementValue}>
                {value}
            </div>
        </div>
    );
}
 
export default UserProfileStatsElement;