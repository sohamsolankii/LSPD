import React from 'react';
import LSPDLogo from '/src/assets/lspd-logo.png';

const Starter = () => {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/src/assets/videobg.mp4"
                type="video/mp4"
                autoPlay
                loop={false}
                muted
            ></video>
            <div className="absolute inset-0 bg-black opacity-10"></div> {/* Adjusted overlay opacity */}
            <div className="relative flex items-center text-white w-full max-w-screen-xl px-10">
                <img src={LSPDLogo} alt="LSPD Logo" className="w-[25%] mr-10" />
                <div className="text-left">
                    <h1 className="text-6xl pricedown font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"> {/* Adjusted gradient colors */}
                        Welcome to LSPD Eagle-eye
                    </h1>
                    <p className="text-2xl poppins text-[var(--ltext)] mt-4">
                        Your Digital Hotline for All Things Los Santos! (Yes, Even the Crazy Stuff)
                    </p>
                    <div className="animate-bounce mt-10">
                        <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Starter;
