import React from 'react';
import LSPDLogo from '/src/assets/lspd-logo.png';

const Starter = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/frontend/Photos/IMG_Starter/StarterBG.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center text-white p-8">
                <img src={LSPDLogo} alt="LSPD Logo" className="mx-auto mb-4 w-24 h-24" />
                <h1 className="text-4xl font-bold mb-2">Welcome to LSPD Eagle-eye</h1>
                <p className="text-lg">Your Digital Hotline for All Things Los Santos! (Yes, Even the Crazy Stuff)</p>
                <div className="animate-bounce mt-10">
                    <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Starter;
