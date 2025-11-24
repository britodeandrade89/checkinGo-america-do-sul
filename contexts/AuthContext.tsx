import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import type { User, UserData } from '../types';
import { getUsers, getUserData, initializeUserData, saveUserData } from '../services/userService';

interface AuthContextType {
    currentUser: User | null;
    userData: UserData | null;
    login: (userId: number) => void;
    logout: () => void;
    updateUserData: (newUserData: UserData) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        // Check for a logged-in user in localStorage on initial load
        const storedUserId = localStorage.getItem('currentUserId');
        if (storedUserId) {
            login(parseInt(storedUserId, 10));
        }
    }, []);

    const login = (userId: number) => {
        const users = getUsers();
        const userToLogin = users.find(u => u.id === userId);
        if (userToLogin) {
            let data = getUserData(userId);
            if (!data) {
                console.log(`Initializing data for user ${userId}`);
                data = initializeUserData(userId);
            }
            setCurrentUser(userToLogin);
            setUserData(data);
            localStorage.setItem('currentUserId', userId.toString());
        }
    };

    const logout = () => {
        setCurrentUser(null);
        setUserData(null);
        localStorage.removeItem('currentUserId');
    };

    const updateUserData = (newUserData: UserData) => {
        if (currentUser) {
            setUserData(newUserData);
            saveUserData(currentUser.id, newUserData);
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, userData, login, logout, updateUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
