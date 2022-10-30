import React, { FC, useContext } from "react";
import Link from "next/link";
import { userContext, UserContextProps } from '../context/UserContext';

export const Nav: FC = () => {

    const { userName, setUsername, userDetail } = useContext<UserContextProps>(userContext);

    return (
        <nav className="w-full flex gap-5 p-2 items-center text-white font-mono font-bold">
            <div className="h-6 flex">
                <img src="https://www.banderasdelmundo.net/wp-content/uploads/2019/08/bandera-chile.jpg" alt="Bandera Chilena" />
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/platos">
                <a>Platos</a>
            </Link>
            <Link href="/events">
                <a>Eventos</a>
            </Link>

            <div className="flex grow justify-end text-xs">
                {userName && <span>Usuario logueado {userName}</span>} &nbsp; 
                <br/>
                {!userName && <span>Sesión cerrada</span>} &nbsp; 
                <span>{ userDetail.status.enabled }</span> &nbsp; 
                <span>{ userDetail.email }</span> &nbsp; 
                <button className="border shadow" onClick={() => {setUsername('Diana Bogdanic')}}>log in</button>
            </div>
        </nav>
    );
};