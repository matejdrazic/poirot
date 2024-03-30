import React from "react";


// styles
import Style from './UserProfileRewards.module.css'

const UserProfileRewards = ({value}) => {
    return ( 
        <div>
            <div className={Style.UserProfileRewardsTitle}>Rewards</div>
            <div className={Style.UserProfileRewardsValue}>{value}</div>
        </div>
    );
}
 
export default UserProfileRewards;