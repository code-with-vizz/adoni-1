


import React from 'react';

function Service() {
    const steps = [

        {
            icon: "fas fa-plug",
            stepNumber: 1,
            title: 'Initial Assessment and Evaluation:',
            description: ' Our expert technicians conduct a thorough inspection of the used shock absorbers upon arrival at our facility. This assessment includes a detailed evaluation of the condition of each component, identifying any signs of wear, damage, or defects.',
        },
        {
            icon: "fas fa-broom",
            stepNumber: 2,
            title: 'Production of Repair Budget and Quotation',
            description: ' Based on the assessment findings, we prepare a comprehensive repair budget and quotation for our clients. This includes a breakdown of the necessary reconditioning steps, as well as an estimate of the associated costs.',
        },
        {
            icon: "fas fa-truck-pickup",
            stepNumber: 3,
            title: 'Customer Approval and Authorization',
            description: '   Once the repair budget and quotation are presented to the customer, we await their approval and authorization to proceed with the reconditioning process. Our transparent communication ensures that our clients are fully informed and involved in every step of the process',
        },
        {
            icon: "fas fa-wrench",
            stepNumber: 4,
            title: 'Disassembly and Cleaning',
            description: 'With authorization from the customer, our technicians begin the reconditioning process by carefully disassembling the shock absorbers. Each component is thoroughly cleaned to remove any dirt, debris, or contaminants that may affect performance.',
        },
        {
            icon: "fas fa-brush",
            stepNumber: 5,
            title: 'Component Replacement and Assembly',
            description: '  During the reconditioning process, worn-out or damaged components are identified and replaced with high-quality parts. Our technicians meticulously follow the assembly sequence to ensure proper alignment and functionality of the shock absorbers.',
        },
        {
            icon: "fas fa-hammer",
            stepNumber: 6,
            title: 'Sealing and Testing',
            description: 'Once reassembly is complete, the shock absorbers undergo rigorous testing to verify their functionality and performance. This testing may include hydraulic pressure tests, leak tests, and functional tests to ensure that each unit meets our stringent quality standards.',
        },
        {
            icon: "fas fa-plug",
            stepNumber: 7,
            title: 'Final Inspection and Quality Assurance',
            description: ' Following testing, our quality assurance team conducts a final inspection to verify that all reconditioned shock absorbers meet our strict quality criteria. Any necessary adjustments or fine-tuning are made to ensure optimal performance and reliability.',
        },
        {
            icon: "fas fa-plug",
            stepNumber: 8,
            title: 'Remark and Tracking:',
            description: ' Before shipment or delivery, we carefully remark indicators and markings on the reconditioned shock absorbers as necessary. Each unit is assigned a unique refurbished tracking number or QR code, enabling easy identification and future servicing.',
        },
        {
            icon: "fas fa-plug",
            stepNumber: 9,
            title: 'Delivery or Installation',
            description: '  Once the reconditioning process is complete, we coordinate the delivery or installation of the reconditioned shock absorbers according to our clients preferences. Our dedicated logistics team ensures timely and efficient delivery to minimize downtime and disruption to operations.',
        },
        {
            icon: "fas fa-plug",
            stepNumber: 10,
            title: 'Customer Satisfaction and Support',
            description: 'At Adoni Tech, customer satisfaction is our top priority. We provide ongoing support and assistance to our clients, addressing any questions or concerns they may have regarding the reconditioned shock absorbers. Our commitment to excellence extends beyond the reconditioning process, as we strive to build lasting partnerships based on trust, reliability, and superior service.',
        },
    ];

    return (
        <div className='md:pt-20 pt-10 bg-gray-50'>
            <div className="p-4 md:max-w-6xl mx-auto ">
                <h2 className="font-heading flex mb-2 text-3xl font-bold lg:text-4xl">Services <h3 className='lg:text-3xl pt-1 text-gray-600 font-semibold pl-2'> -- Repairs of Imported Buffers</h3></h2>
                <p className='mb-8'>At Adoni Tech, we pride ourselves on offering comprehensive reconditioning services for used shock absorbers, tailored to meet the unique needs of our clients. Our meticulous process ensures that every shock absorber is refurbished to the highest standards, guaranteeing optimal performance and longevity.</p>
                {steps.map((item, key) => {
                    return (
                        <div className="flex" key={key}>
                            <div className="mr-4 flex flex-col items-center" >
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#097cbf]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6  w-6 text-[#097cbf] "
                                        >

                                            <path d="M12 5l0 14"></path>
                                            <path d="M18 13l-6 6"></path>
                                            <path d="M6 13l6 6"></path>
                                        </svg>

                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300 "></div>
                            </div>
                            <div class="icon-wrapper pt-1.5 pr-4">
                                    <i class={item.icon}></i>
                                </div>
                            <div className="pt-1 pb-8">
                             
                                <p className="mb-2 text-2xl font-bold text-gray-900 ">{item.title}</p>
                                <p className="text-gray-600 text-lg ">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
                <div className="flex">
                    <div className="mr-4 flex flex-col items-center">
                        <div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#097cbf] bg-[#097cbf]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-white "
                                >
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="pt-1">
                        <p className="mb-2 text-xl font-bold text-gray-900 ">Complete!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
