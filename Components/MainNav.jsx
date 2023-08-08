import React from 'react'

const MainNav = () => {
  return (
    <>
     <div class="main-container">
    <div class="left-menu flex  w-10 flex-col overflow-hidden transition-all hover:w-[100%] ease-in-out duration-500 w-4.5rem bg-white">
        <div class="logo w-20 relative top-4 left-2">
            <img src="" alt="" class="w-full z-10 absolute" />
            <span class="font-bold text-purple-800 uppercase">Geeks Help</span>
        </div>
        <ul class="mt-8 ml-4 flex flex-col items-start">
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-house text-purple-800 text-2xl mr-3"></i>
                    Home
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-user text-purple-800 text-2xl mr-3"></i>
                    User
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-file text-purple-800 text-2xl mr-3"></i>
                    Files
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-store text-purple-800 text-2xl mr-3"></i>
                    Saved
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-calendar-days text-purple-800 text-2xl mr-3"></i>
                    Events
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-message text-purple-800 text-2xl mr-3"></i>
                    Message
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-chart-line text-purple-800 text-2xl mr-3"></i>
                    Analytics
                </a>
            </li>
            <li class="mb-4">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-rocket text-purple-800 text-2xl mr-3"></i>
                    Services
                </a>
            </li>
            <li id="settings">
                <a href="#" class="flex items-center text-purple-800">
                    <i class="fa-solid fa-gear text-purple-800 text-2xl mr-3"></i>
                    Settings
                </a>
            </li>
        </ul>
    </div>
    {/* <!-- Right Content Goes here --> */}
    <div class="right-content"></div>
</div>


           
    </>
  )
}

export default MainNav
