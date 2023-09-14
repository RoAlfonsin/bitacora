import React from "react";

export const ProfileContext = React.createContext(
    {
        profile: {
            id: "",
            email: "",
            name: "",
            isVerified: false,
        },
        setProfile: (profileInfo) => {
            console.log("setProfile: ", profileInfo);
            profile.id = profileInfo.id;
            profile.email = profileInfo.email;
            profile.name = profileInfo.name;
            profile.isVerified = profileInfo.isVerified;
        },
    }
);

