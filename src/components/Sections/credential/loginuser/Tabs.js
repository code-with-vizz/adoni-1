import React, { useState } from 'react';
import Pdfsdowload from './pdfsdowload';
import Iso from './Iso';
import Po from './Po';
import Facility from './Facility';



const Tabs = () => {
    const tabs = [
        {
            title: 'ISO Related',
            content: <Iso />,
        },
        {
            title: 'Customer Purchase Order',
            content: <Po/>,
        },
        {
            title: 'Facility',
            content: <Facility/>,
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='mb-20'>
            <div class="text-center mt-20">
                <h2 class="text-3xl text-gray-950  font-semibold">Welcome in crane buffer credentials !</h2>
                <p class="mt-6 text-gray-700 dark:text-gray-300">Here you can dowload all pdfs.</p>
            </div>
            <div className=" mt-10">
                <div className="mx-auto  flex justify-center gap-5 xs:mx-2 md:gap-10">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={index === activeTab ? 'text-blue-800 border-blue-400 bg-gray-100 font-semibold text-lg border py-2 px-4 rounded-sm' : 'font-semibold px-4 py-2 text-lg text-gray-600 border-blue-400 bg-gray-50 '}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {tabs[activeTab].content}
                </div>
            </div>
          
        </div>
    );
};

export default Tabs;
