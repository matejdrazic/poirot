// pages/user-profiles/[user-profile].js
import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const { user_profile } = router.query; // Get the dynamic parameter from the URL

  return (
    <div>
      <h1>User Profile</h1>
      <p>User Profile: {user_profile}</p>
    </div>
  );
};

export default UserProfile;