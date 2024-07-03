import React, { useContext } from 'react';
import { UserContext } from "../../context/userContext";
import LSPDLogo from '/src/assets/lspd-logo.png';

const dashboardData = [
    {
        image: "/path/to/image1.jpg",
        title: "Most Wanted List",
        description: "Catch Them if You Can (But Maybe Don’t Try Too Hard)"
    },
    {
        image: "/path/to/image2.jpg",
        title: "Submit a Tip",
        description: "Got a Hot Tip? Let Us Know (or Just Gossip, We’re Not Judging)"
    },
    {
        image: "/path/to/image3.jpg",
        title: "Careers at LSPD",
        description: "From Rookie to All-Star Cop – Start Your Journey in Los Santos"
    },
    {
        image: "/path/to/image4.jpg",
        title: "News and Alerts",
        description: "Stay Informed on the Latest in Los Santos"
    }
];

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bg-[#18284B] text-[#75AAF1] min-h-screen">
            <section className="py-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gold">Welcome to LSPD Eagle-eye</h2>
                    <p className="text-lg">Your Digital Hotline for All Things Los Santos! (Yes, Even the Crazy Stuff)</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
                    {dashboardData.map((item, index) => (
                        <div key={index} className="bg-[#75AAF1] p-6 rounded-lg shadow-lg text-center">
                            <img src={item.image} alt={`Image ${index + 1}`} className="w-full mb-4 rounded" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#75AAF1] p-6 rounded-lg shadow-lg text-center mt-6 mx-4 md:mx-8">
                    <h3 className="text-xl font-bold">Why LSPD Eagle-eye?</h3>
                    <p>
                        The LSPD Eagle-eye portal was created to connect the Los Santos Police Department with its vibrant community. In a dynamic and unpredictable city like Los Santos, staying ahead requires more than just police presence; it needs the vigilance of every citizen. This user-friendly portal allows residents to report crimes, share tips, and stay informed about local safety issues. By harnessing community input, LSPD Eagle-eye aims to enhance public safety, build trust, and ensure a responsive and transparent police force. Whether it’s suspicious activity or crucial information, your input can make a difference.
                    </p>
                    <p className="mt-4">Join us in keeping Los Santos safe and lively, one tip at a time!</p>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
