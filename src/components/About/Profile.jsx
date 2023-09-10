import ProjectHeader from "../Misc/ProjectHeader";
import ProfileTabs from "./ProfileTabs";

function Profile() {
    return (
        <div id="Profile">
            <ProjectHeader header="About Me" buttonNeeded="home" />
            <ProfileTabs/>
        </div>
    );
}

export default Profile;