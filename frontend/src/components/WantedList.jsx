import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

const characters = [
    { id: 1, name: "Trevor Philips", image: "src/assets/trevor.png" },
    { id: 2, name: "Michael De Santa", image: "src/assets/trevor.png" },
    { id: 3, name: "Franklin Clinton", image: "src/assets/trevor.png" },
    { id: 1, name: "Trevor Philips", image: "src/assets/trevor.png" },
    { id: 2, name: "Michael De Santa", image: "src/assets/trevor.png" },
    { id: 3, name: "Franklin Clinton", image: "src/assets/trevor.png" },
    { id: 3, name: "Franklin Clinton", image: "src/assets/trevor.png" }

    // Add more characters as needed
];

const WantedList = () => {
    return (
        <div className="bg-[var(--bg1)] text-[var(--lblue)] min-h-screen">
            <section className="bg-[var(--bg2)]">
                <img src="/src/assets/element.png" alt="Do Not Cross" className="animate-pulse w-[100%] z-50" />
            </section>
            <section className="relative flex bg-[var(--bg2)] flex-col items-center justify-center">
                <div className="relative text-center p-20">
                    <h1 className="text-3xl poppins font-medium text-[var(--ltext)] m-12 mt-20">You didn’t obey the rule, huh? Just kidding... Welcome to the 'Most Wanted' list!
                        Check out these notorious troublemakers
                    </h1>
                    <p className="text-5xl sign mb-10 text-[var(--lblue)]">and remember – crime doesn’t pay (unless you’re in GTA V!)</p>
                </div>
            </section>
            <Element name="mostWanted" className=" border-y-4 border-[var(--lgold)] py-8 px-4">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <div className="p-6 mb-6">
                            <h2 className="text-4xl pricedown mb-4 text-[var(--lgold)] grad-text">Los Santos' Most Wanted Criminals</h2>
                            <p className="text-xl poppins mb-4 text-[var(--ltext)]">Catch Them if You Can (But Maybe Don’t Try Too Hard)</p>
                        </div>
                        <div className="flex justify-center gap-4 m-4 mb-8">
                            {characters.map((character) => (
                                <div key={character.id} className="bg-[var(--bg1l)] rounded-xl shadow-md p-3 text-[var(--ltext)] hover:shadow-4xl transition-transform duration-300 hover:border-[var(--hover-border-color)] hover:bg-gradient-to-r from-[var(--hover-bg-gradient-start)] to-[var(--hover-bg-gradient-end)]">
                                    <img src={character.image} alt={character.name} className="mb-3 bg-cover p-0 w-[100%]" />
                                    <h3 className="text-md text-left poppins font-medium text-[var(--ltext)]">{character.name}</h3>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-10">
                            <button className="text-xl poppins bg-[var(--hover-bg-gradient-start)] text-[var(--ltext)] py-2 px-20 rounded-md hover:text-[var(--bg1)] hover:font-medium hover:bg-[var(--lgold)] transition ease-in-out duration-1500">Check out entire list</button>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default WantedList;
