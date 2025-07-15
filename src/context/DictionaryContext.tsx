import React, { createContext, useContext, useEffect, useState } from "react";
import { Profile } from "../types/Content";

interface ProfileContextProps {
  profile: Profile[] | null;
  loading: boolean;
  error: string | null;
}

const ProfileContext = createContext<ProfileContextProps>({
  profile: null,
  loading: true,
  error: null,
});

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/assets/content.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load dictionary");
        return res.json();
      })
      .then((data: Profile[]) => setProfile(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useDictionary = () => useContext(ProfileContext);
