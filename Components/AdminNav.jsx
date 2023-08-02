import React, { useRef, useState, useEffect } from 'react'
import AdminSidebar from './AdminSidebar';

function AdminNav() {
    // to show sidebar 
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
        setShowSidebar((prevState) => !prevState);
    };

    // these are for active design for sidebar items list 
    const [activeItem, setActiveItem] = useState(3);
    const handleItemClick = (itemNumber) => {
        setActiveItem(itemNumber);
    };

  
    // these are the profile dropdown 
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div className='fixed z-50 top-0 bg-white w-full'>
                <div className="flex w-[100%] shadow-md border-b-[1px] border-b-bg-zinc-300 ">
                    {/* logo */}
                    {/*logo for mobile */}
                    <div className='flex items-center md:hidden'>
                        <a href="/">
                            <img src={"/logo-small.png"} alt="" className='mt-1 mx-14 h-[40px] ' />
                        </a>
                    </div>
                    {/*logo for desktop */}
                    <div className='py-2 hidden md:flex items-center'>
                        <a href="/">
                            <img src={"/logo.png"} alt="" className='mt-1 mx-14 h-[40px] ' />
                        </a>
                    </div>
                    {/* sidebar btn */}
                    <button className='text-2xl text-zinc-600 ml-8 ' onClick={toggleSidebar}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* search bar */}
                    <div className='flex ml-8  items-center w-[350px] '>
                        <input className='w-full placeholder-black placeholder:text-sm border-[1px] border-zinc-300 shadow-sm rounded-3xl px-5  py-2 ' type="text" placeholder='Search Here' />
                        <span className='absolute ml-[310px] '>
                            <i className="fa-solid fa-magnifying-glass "></i>
                        </span>
                    </div>

                    {/* profile n notification */}

                    <div className='flex justify-center items-center cursor-pointer '>
                        <button className='absolute right-[80px] py-[14px] px-4 mt-0 hover:bg-zinc-300 '>
                            <span className='absolute ml-5 rounded-xl h-[15px] w-[15px]  bg-blue-800 text-[10px] text-white '>
                                4
                            </span>
                            <i className="text-2xl fa-regular fa-bell"></i>
                        </button>
                    </div>

                    {/* profile */}
                    <div className='absolute right-[5px] cursor-pointer'>
                        <div className='flex hover:bg-zinc-300 px-3 py-[5px] pb-5 '    >
                            <button className='flex' onClick={toggleDropdown} onBlur={() => { setIsOpen(false) }}>
                                <div className='w-[30px] h-[30px] py-2 '>
                                    <img className=' rounded-full' src={"/avatar-01.jpg"} alt="" />
                                </div>
                                <div>
                                    <i className="mt-4 ml-1 text-zinc-700 fa-solid fa-angle-down"></i>
                                </div>
                            </button>
                            {/* dropdown  */}
                            <div className="absolute right-[220px] mt-[60px] ">
                                {isOpen && (
                                    <div className="absolute z-10 w-[240px] bg-white rounded-md shadow-lg">
                                        {/* Dropdown Items */}
                                        <div className=" px-4 py-3 flex border-b-zinc-200 border-b-[1px]">
                                            <div className=' rounded-full '>
                                                <img src={"/avatar-01.jpg"} alt="" className='w-[40px] h-[40px]  rounded-full' />
                                            </div>
                                            <div className='ml-4 flex flex-col'>
                                                <p className='font-semibold text-[14px]'>
                                                    Ayush Bhatt
                                                </p>
                                                <p className='text-[12px] text-zinc-400 font-semibold '>
                                                    Administrator
                                                </p>
                                            </div>

                                        </div>
                                        <div className="px-4 text-[14px] text-gray-500 font-medium py-2 hover:bg-blue-500 hover:text-white border-b-zinc-200 border-b-[1px]">
                                            <a href="/">
                                                My Profile
                                            </a>
                                        </div>
                                        <div className="px-4 text-[14px] text-gray-500 font-medium py-2 hover:bg-blue-500 hover:text-white border-b-zinc-200 border-b-[1px]">
                                            <a href="/">
                                                Settings
                                            </a>
                                        </div>
                                        <div className="px-4 text-[14px] text-gray-500 font-medium py-2 hover:bg-blue-500 hover:text-white border-b-zinc-200 border-b-[1px]">
                                            <a href="/">
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            {showSidebar && (
                <AdminSidebar activeItem={activeItem} handleItemClick={handleItemClick} />
            )}
        </>
    )
}

export default AdminNav
