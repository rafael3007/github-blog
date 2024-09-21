import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../api/axios";
import { ProfileInformations } from "../@types/Profile";

interface ProfileContextType {
    fetchProfileInformations: () => Promise<void>;
    loadingProfile: boolean;
    profileInformations: ProfileInformations;
}

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext<ProfileContextType>({} as ProfileContextType);

export default function ProfileProvider({ children }: ProfileProviderProps) {
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [profileInformations, setProfileInformations] = useState<ProfileInformations>({} as ProfileInformations)
    
    const fetchProfileInformations = async () => {

        setLoadingProfile(true)

        const {data} = await api.get(`/users/rafael3007`)

        setProfileInformations({
            name: data.name,
            bio: data.bio,
            avatar_url: data.avatar_url,
            company: data.company,
            followers: data.followers,
            username: data.login,
            url_profile: data.html_url,
        })

        setLoadingProfile(false)
    }
    
    useEffect(() => {
        setLoadingProfile(true)
        fetchProfileInformations()

    }, [profileInformations])
    

    return (
        <ProfileContext.Provider
            value={{
                fetchProfileInformations,
                loadingProfile,
                profileInformations,
            }}
        >
            {children}
        </ProfileContext.Provider>
    )
}