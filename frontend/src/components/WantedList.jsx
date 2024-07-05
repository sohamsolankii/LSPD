import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

const WantedList = () => {
    return (
        <div className="bg-blue-900 text-white min-h-screen">
            <section className="relative flex flex-col items-center justify-center h-screen">
                <div className="absolute top-0 w-full">
                    <div className="flex flex-col items-center">
                        <div className="w-full h-24 bg-yellow-700 text-black flex items-center justify-center">
                            <h1 className="text-4xl font-bold">DO NOT CROSS</h1>
                        </div>
                        <div className="w-full h-24 bg-yellow-700 text-black flex items-center justify-center transform rotate-180">
                            <h1 className="text-4xl font-bold">DO NOT CROSS</h1>
                        </div>
                    </div>
                </div>
                <div className="relative text-center mt-48 p-8">
                    <h1 className="text-3xl font-bold mb-4">You didn’t obey the rule, huh? Just kidding... Welcome to the 'Most Wanted' list!</h1>
                    <p className="text-lg mb-4">Check out these notorious troublemakers</p>
                    <p className="italic text-lg mb-10">and remember – crime doesn’t pay (unless you’re in GTA V!)</p>
                    <div className="animate-bounce">
                        <ScrollLink to="mostWanted" smooth={true} duration={500}>
                            <svg className="w-10 h-10 mx-auto text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </ScrollLink>
                    </div>
                </div>
            </section>
            <Element name="mostWanted" className="py-8 px-4">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-4xl text-center">
                        <div className="bg-blue-800 p-6 rounded-md shadow-md mb-6">
                            <h2 className="text-2xl font-bold mb-4">Los Santos' Most Wanted Criminals</h2>
                            <p className="text-lg mb-4">Catch Them if You Can (But Maybe Don’t Try Too Hard)</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* Repeat this block for each character */}
                            <div className="w-48 bg-blue-700 rounded-md shadow-md p-4">
                                <img src="/path/to/character-image.jpg" alt="Trevor Philips" className="w-full rounded-md mb-4" />
                                <h3 className="text-xl font-bold">Trevor "The Tornado" Philips</h3>
                            </div>
                            <div className="w-48 bg-blue-700 rounded-md shadow-md p-4">
                                <img src="/path/to/character-image.jpg" alt="Michael De Santa" className="w-full rounded-md mb-4" />
                                <h3 className="text-xl font-bold">Michael De Santa</h3>
                            </div>
                            <div className="w-48 bg-blue-700 rounded-md shadow-md p-4">
                                <img src="/path/to/character-image.jpg" alt="Franklin Clinton" className="w-full rounded-md mb-4" />
                                <h3 className="text-xl font-bold">Franklin Clinton</h3>
                            </div>
                            {/* Add more characters as needed */}
                        </div>
                        <div className="mt-6">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Check out entire list</button>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default WantedList;
