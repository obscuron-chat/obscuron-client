export interface Person {
    username: string;
    profileName: string;
    imageURL: string;
    publicKey: string;
}

export type screenTypes = "settings" | "blank" | "auth" | "chat" | "addcontact" | "peerprofile";

export interface TextData {
    sender: string;
    receiver: string;
    message: string;
    hash: string;
    signature: string;
    timestamp: string;
    verified: boolean;
}

export interface PeerChat {
    username: string;
    textData: TextData[];
}

export type ChatData = PeerChat[];