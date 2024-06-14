import React, { useState } from 'react';

const ImagePopup = ({ imageSrc, imageAlt }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <img
                className='cursor-pointer w-full h-80'
                id="myImg"
                src={imageSrc}
                alt={imageAlt}
                onClick={openModal}
            />

            {modalOpen && (
                <div id="myModal" className='mx-auto py-[50%] sm:py-[30%] md:py-[10%] block fixed left-0 top-0 w-full  z-10 bg-[rgba(0,0,0,0.6)] ' >
                    <span className="close xs:right-10 right-[25%] text-white " onClick={closeModal} style={{ position: 'absolute', top: '150px',   fontSize: '40px', fontWeight: 'bold', transition: '0.10s', cursor: 'pointer'  }}>&times;</span>
                    <img className="modal-content h-[350px]" src={imageSrc} alt={imageAlt} style={{ margin: 'auto', display: 'block', maxWidth: '700px', animationName: 'zoom', animationDuration: '0.6s' }} />
                    <div id="caption" style={{ margin: 'auto', display: 'block', width: '80%', maxWidth: '700px', textAlign: 'center', color: '#ccc', padding: '10px 0', animationName: 'zoom', animationDuration: '0.6s' }}>{imageAlt}</div>
                </div>
            )}
        </div>
    );
};

export default ImagePopup;
