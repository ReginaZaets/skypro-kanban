import { useContext } from "react";
import { UserContext } from "./user";
import { CardContext } from "./card";

export function useUserContext() {
    return useContext(UserContext);
    
}

export function useCardContext() {
    return useContext(CardContext);
    
}