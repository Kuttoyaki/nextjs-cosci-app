"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type AppWelcomeProps = {
    headTitle: string;
    isShow: boolean;
};

export default function AppWelcome({ headTitle, isShow }: AppWelcomeProps) {
    const [title, setTitle] = useState("Welcome to my Page");
    const year = 2025;

    const handleClick = () => {
    setTitle("Welcome to SWU");
    alert("DONKI DONKI");
    };

    return (
    <>
        <h1>{headTitle}</h1>
        <p>{process.env.NEXT_PUBLIC_APP_NAME ?? "COSCI Online Shop"}</p>
        <p>{title.toUpperCase()}</p>

        <Button onClick={handleClick}>Click Me</Button>
        <button
        className="bg-gray-900 p-3 m-3 text-purple-600 rounded-lg"
        onClick={handleClick}
        >
        Click here!
        </button>

        <p>{year}</p>

        {isShow && <p>Date: 27/05/2025</p>}

        {isShow ? <p>Hello Kutto</p> : <p>Hello Kuttoyaki</p>}
    </>
    );
}
