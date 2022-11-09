import React from "react";
const Profile = () => {
return(
<React.Fragment>
<iframe
width="480" height="480" frameBorder="0" className="giphy-embed"
allowFullScreen></iframe>
{/* <a
href="https://giphy.com/stickers/TurkishAirlines-fly-airlines-thy-2YgFaAOj
bhvznWSYsF">
</a> */}
<img
src="https://res.cloudinary.com/doulat/image/upload/v1667731798/IMG20221025200038_qyjvii.jpg" width="110px" className="profile-img" alt=""></img>
<h1 className="name">I am Doulat Lalwani</h1>
</React.Fragment>
);
}
export default Profile