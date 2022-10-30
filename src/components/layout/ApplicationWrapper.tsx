import Head from "next/head";
import React, {FC, PropsWithChildren} from "react";
import { Nav } from "../common/Nav";
import { Footer } from "../common/Footer";

interface TProps {
    title: string;
    description?: string;  
}

export const ApplicationWrapper : FC<PropsWithChildren<TProps>> = ({
    title,
    description,
    children
}) => {
    const displayTitle = `${title} | Comida Típica Chilena`;

    return (
    <div className="bg-gradient-to-b from-blue-500 to-red-500 min-h-screen flex flex-col">
        <Head>
            <title>{displayTitle}</title>
            {description && <meta name="description" content={description}/>}
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <header className="bg-blue-400 h-10">
            <Nav />
        </header>

        <main className='grow flex flex-col'>
            {children}
        </main>

        <Footer /> 
    </div>
    );
};