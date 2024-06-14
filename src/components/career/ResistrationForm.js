import React from 'react';
import { mdiAccountOutline, mdiEmailOutline, mdiFilePdfBox, mdiListBox, mdiLockOutline, mdiPhone } from '@mdi/js';
import Icon from '@mdi/react';

const RegistrationForm = () => {
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center my-20 px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block  w-1/2 bg-white">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 744.84799 747.07702">
            </svg> */}
            <img className='object-cover h-full pt-20 ' src='/adoni/career/form.png'></img>
          </div>
          <div className="w-full md:w-1/2 py-10  md:px-10 ">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl  text-gray-900">Fill Form To Apply</h1>
              <p className='text-[#097cbf] font-semibold mt-2'>Enter your information to apply</p>
            </div>
            <div className='mx-auto'>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="firstName" className="text-xs font-semibold px-1">First name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon path={mdiAccountOutline} size={1} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="lastName" className="text-xs font-semibold px-1">Last name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon path={mdiAccountOutline} size={1} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon path={mdiEmailOutline} size={1} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="phone" className="text-xs font-semibold px-1">Phone</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon path={mdiPhone} size={1} className="text-gray-400" />
                    </div>
                    <input
                      type="Number"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="123456"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="applyFor" className="text-xs font-semibold px-1">Apply For</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon path={mdiListBox} size={1} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Mechanical engineer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="resume" className="text-xs font-semibold px-1">Attche Resume</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon path={mdiFilePdfBox} size={1} className="text-gray-400" />
                    </div>
                    <input
                      type="file"
                      className="w-full bg-white -ml-10  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
         
              <div className="flex justify-end  ">
                <div className="px-2 py-2   mb-5">
                  <button className="block w-full max-w-xs mx-auto bg-[#097cbf] hover:bg-blue-400 focus:bg-[#097cbf] text-white rounded-3xl px-6 py-2 text-sm  font-semibold">
                   Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            rel="noreferrer"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="Buy me a beer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
