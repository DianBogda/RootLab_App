import React, { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className='flex p-2 text-white font-mono bg-red-400 items-center justify-center'>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            Rootstack
          </span>
        </a>
      </footer>
    );
};