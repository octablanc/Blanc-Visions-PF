import React from "react";
import Button from "@mui/material/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

export default function LogOut() {

    async function handleClick(){
        await signOut(auth);
    }

    return (
        <Button
            onClick={handleClick}
            sx={{
                color: "black",
                fontSize: "20px",
                textTransform: "capitalize",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
            }}
        >
            Log Out
        </Button>
    );
}