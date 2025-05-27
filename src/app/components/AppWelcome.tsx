"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

type AppWelcomeProps = {
    headTitle: string;
    isShow: boolean;
}

export default function AppWelcome({headTitle, isShow}: AppWelcomeProps) {
    const [title, seTitle] = useState("Welcome to my Page");
    const year = <p>2025</p>;
    const handleClick = () => {
        seTitle("Welcome to SWU")
        alert("DONKI DONKI");
    }

    return (
        <>
            <h1>{headTitle}</h1>
            <p>{title.toUpperCase()}</p>
            <Button onClick={handleClick}>Click Me</Button>
            <button className="bg-gray-900 p-3 m-3 text-purple-600 rounded-lg" onClick={handleClick}>Click here!</button>
            {year}     
            { 
                isShow && <p>Date: 27/05/2025</p>
            } 
            {
                isShow ? <p>Hello Kutto</p> : <p>Hello Kuttoyaki</p>
            }
        </>
    );
}