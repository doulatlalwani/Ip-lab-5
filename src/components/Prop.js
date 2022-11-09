import React from "react";
import Hobby from './Hobby'
import Skill from'./Skill'
const Prop = () => {
return(
<div>
<table>
<th><td style={{position:'relative',
bottom:'250px'}}>My Hobbies:</td></th>
<tr>
<ul>
{/* <div style={{position:'relative', bottom:
'200px'}}>
<li ><Hobby name="Playing Drums" /></li>
<img
src="https://res.cloudinary.com/djww0nfoy/image/upload/v1659326586/iplab/d
rums_gvbb4l.png" style={{position: 'relative', left: '400px',
bottom:'90px'}}></img>
</div > */}
<div style={{position:'relative', bottom:
'180px'}}>
<li><Hobby name="programming" /></li>
<img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0regbLUcHDW3yIMCaivya34MbGFd4GgobQ&usqp=CAU" style={{position: 'relative', left: '250px',
bottom:'115px'}}></img>
</div>
</ul>
</tr>
</table>
<table style={{position:'relative', bottom:'600px',
left:'1000px'}}>
<th>My Skills:</th>
<br />
<tr>
<ul style={{position:'relative',top:'10px'}}>
<li><Skill name="React" /></li>
<img
src="https://res.cloudinary.com/djww0nfoy/image/upload/v1666462513/iplab/d
ownload-removebg-preview_ic0unq.jpg" width="200px" style={{position:
'relative', left: '200px', bottom:'60px'}}></img>
<li style={{position:'relative',
top:'80px'}}><Skill name="Java" /></li>
<img
src="https://res.cloudinary.com/djww0nfoy/image/upload/v1666462484/iplab/k
isspng-logo-java-runtime-environment-programming-language-java-util-concur
rentmodificationexception-%C3%96mer-5b6766ab2d98b8.1809687115335031471868-
removebg-preview_l1bwji.jpg" width="300px" style={{position: 'relative',
left: '150px', bottom:'5px'}}></img>
</ul>
</tr>
</table>
</div>
);
}
export default Prop;