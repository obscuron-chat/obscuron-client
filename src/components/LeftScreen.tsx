import React from 'react';

import type { screenTypes, Person } from '../types';

interface LeftScreenProps {
    toggleScreen: (screen: screenTypes, hidden: boolean) => void,
    screenWidth: number,
    chatOperator: {
        authUsername: string;
        setAuthUsername: React.Dispatch<React.SetStateAction<string>>;
        authPubkey: string;
        setAuthPubkey: React.Dispatch<React.SetStateAction<string>>;
        authPrivateKey: string;
        setAuthPrivateKey: React.Dispatch<React.SetStateAction<string>>;
        profileName: string;
        setProfileName: React.Dispatch<React.SetStateAction<string>>;
        profileImage: string;
        setProfileImage: React.Dispatch<React.SetStateAction<string>>;
        currentChat: string;
        setCurrentChat: React.Dispatch<React.SetStateAction<string>>;
        chatData: string;
        setChatData: React.Dispatch<React.SetStateAction<string>>;
        contacts: Person[];
        setContacts: React.Dispatch<React.SetStateAction<Person[]>>;
    };
    chatList: React.ReactElement[];
}

const LeftScreen: React.FC<LeftScreenProps> = ({ screenWidth, toggleScreen, chatOperator, chatList }) => {
    const showSettings = () => {
        toggleScreen('settings', false);
    };

    const showAddContact = async () => {
        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("GET users successful:", data);

            chatOperator.setContacts(data.data.users);

            console.log(chatOperator.contacts);

            toggleScreen('addcontact', false);
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    };

    return (
        <div className="border-0 md:flex flex-col h-full" style={{ width: `${screenWidth}px` }}>
            <div className="h-0 w-0 md:hidden block"></div>
            <div className="py-2 px-3 bg-gray-100 flex flex-row justify-between items-center">
                <div>
                    <button>
                        <img className="w-10 h-10 rounded-full cursor-pointer" src={chatOperator.profileImage} onClick={showSettings}/>
                    </button>
                </div>
                <div className="flex">
                    <button
                        id="addContactbtn"
                        className="flex flex-col justify-center items-center p-2 rounded-full focus:ring-2 hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none cursor-pointer"
                        aria-label="Add"
                        onClick={showAddContact}
                    >
                        <svg className="fill-current h-4 w-4" viewBox="0 0 25 25">
                            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="py-2 px-2 bg-gray-50">
                <input
                    type="text"
                    className="w-full px-5 py-2 text-sm border rounded-3xl"
                    placeholder="Search chat"
                />
            </div>
            <div id="contactList" className="bg-gray-100 flex-1 overflow-auto">
                {chatList}
            </div>
        </div>
    );
};

export default LeftScreen;