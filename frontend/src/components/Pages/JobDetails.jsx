import React, { useState } from 'react';
import Rating from '../Rating'; // Assuming you have a Reviews component
import CSIImage from '/src/assets/place.png';

const JobDetails = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="bg-[var(--bg1)] dark:bg-[var(--dbg1)] min-h-screen text-[var(--lblue)] dark:text-[var(--dlgold)] p-4 md:p-12">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl pricedown mb-4 text-[var(--lblue)] dark:text-[var(--dltext)]">
                        Crime Scene Investigator
                    </h1>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src={CSIImage}
                        alt="Crime Scene Investigator"
                        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="text-left w-full md:w-2/3">
                        <h2 className="text-2xl md:text-4xl poppins mb-4">
                            Forensics Department
                        </h2>
                        <p className="text-lg md:text-xl poppins mb-4">
                            As a Crime Scene Investigator (CSI), you will be responsible for collecting, preserving, and analyzing physical evidence from crime scenes. Your work will play a crucial role in solving crimes and bringing justice to victims.
                        </p>
                        <h3 className="text-xl md:text-2xl poppins mb-2">
                            Responsibilities:
                        </h3>
                        <ul className="list-disc list-inside poppins mb-4">
                            <li>Collect and preserve physical evidence from crime scenes.</li>
                            <li>Analyze evidence in the laboratory.</li>
                            <li>Prepare detailed reports on findings.</li>
                            <li>Testify in court as an expert witness.</li>
                        </ul>
                        <h3 className="text-xl md:text-2xl poppins mb-2">
                            Requirements:
                        </h3>
                        <ul className="list-disc list-inside poppins mb-4">
                            <li>Bachelor's degree in Forensic Science, Criminal Justice, or a related field.</li>
                            <li>Experience in crime scene investigation or related field.</li>
                            <li>Strong analytical and observational skills.</li>
                            <li>Excellent written and verbal communication skills.</li>
                        </ul>
                        <div className="mt-8">
                    <h3 className="text-xl md:text-2xl poppins mb-4">
                        Employee Reviews:
                    </h3>
                    <Rating />
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
