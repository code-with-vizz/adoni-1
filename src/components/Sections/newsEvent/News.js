import React from 'react'

export default function News() {
    return (
        <div className=' bg-gray-200 '>

            <div class="container mx-auto md:px-6">

                <section class="pb-32 pt-24 text-center">
                    <h2 class="mb-12  pb-2 text-center text-3xl font-semibold border-b-2 border-[#097cbf] w-[15vw]">
                        Latest articles
                    </h2>

                    <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12 mx-6">
                        <div class="mb-6 lg:mb-0">
                            <div
                                class="relative  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] :bg-neutral-700">
                                <div class="flex items-center">
                                    <div
                                        class="relative w-[400px]  mx-6 mt-4 overflow-hidden  rounded-lg bg-cover bg-no-repeat shadow-lg :shadow-black/20 "
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src="adoni/newsBlog/ask-4.jpg" class="w-full h-80  " />
                                        <a href="#!">
                                            <div
                                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <h5 class="mb-3 text-lg font-semibold text-[#097cbf] ">Shock absorbers for Cranes </h5>
                                    {/* <p class="mb-4 text-neutral-500 :text-neutral-300">
                                        <small>Published <u>13.01.2022</u> by
                                            <a href="#!">Anna Maria Doe</a></small>
                                    </p> */}
                                    <p class="mb-4 pb-2">
                                    Adonitech has developed capacity to design manufacture and test shock absorbers for Cranes for 325 Kilo Joules capacity. The product is available in foot mounting or Flange mounting.
                                    </p>
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light"
                                        class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-[#097cbf] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] :shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] :hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] :focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] :active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                                        more</a>
                                </div>
                            </div>
                        </div>

                        <div class="mb-6 lg:mb-0">
                            <div
                                class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] :bg-neutral-700">
                                <div class="flex">
                                    <div
                                        class="relative mx-6  w-[400px]  mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg :shadow-black/20"
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src="adoni/newsBlog/2.jpeg" class="w-full h-80" />
                                        <a href="#!">
                                            <div
                                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <h5 class="mb-3 text-lg font-semibold text-[#097cbf]"> Heavy duty Buffers </h5>
                                    {/* <p class="mb-4 text-neutral-500 :text-neutral-300">
                                        <small>Published <u>12.01.2022</u> by
                                            <a href="#!"></a></small>
                                    </p> */}
                                    <p class="mb-10 pb-2">
                                    The Heavy duty Buffers are damped by a controlled orifices and returns to a original position by removal of load
                                    </p>
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light"
                                        class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-[#097cbf] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] :shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] :hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] :focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] :active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                                        more</a>
                                </div>
                            </div>
                        </div>

                        {/* <div class="mb-0">
                            <div
                                class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] :bg-neutral-700">
                                <div class="flex">
                                    <div
                                        class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg :shadow-black/20"
                                        data-te-ripple-init data-te-ripple-color="light">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp" class="w-full" />
                                        <a href="#!">
                                            <div
                                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <h5 class="mb-3 text-lg font-bold">Chasing the sun</h5>
                                    <p class="mb-4 text-neutral-500 :text-neutral-300">
                                        <small>Published <u>10.01.2022</u> by
                                            <a href="#!">Joe Svan</a></small>
                                    </p>
                                    <p class="mb-4 pb-2">
                                        Curabitur tristique, mi a mollis sagittis, metus felis mattis
                                        arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                                        massa volutpat feugiat. Donec.
                                    </p>
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light"
                                        class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] :shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] :hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] :focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] :active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                                        more</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

            </div>

        </div>
    )
}
