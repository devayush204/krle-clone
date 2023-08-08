import React from 'react'

const MainHomenav = () => {
  return (
    <>
      <div className='shadow-sm flex top-0 fixed z-10 w-full '>

        <nav className='flex px-8 '>
          <div className='w-[160px] py-5'>
            <a href="/">
              <img className=' ' src={"/logo2.png"} alt="" />
            </a>
          </div>

          <div className='flex ml-[40px] gap-3 '>
            <div className='flex items-center px-2 group font-semibold hover:text-green-600 '>
              <a href="/">
                <p className='tracking-wide'>Home</p>
              </a>
            </div>



            <div className='relative flex items-center px-3 group transition-transform '>
              <p className='font-semibold tracking-wide'>EMP</p>
              <svg
                className="fill-current duration-0 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              <div className='list-none tracking-wide text-zinc-900 font-semibold w-[280px] text-[14px] transition duration-300 translate-y-5 group-hover:visible group-hover:top-[82px] group-hover:translate-y-0 group-hover:opacity-100 opacity-10 bg-white group-hover:shadow-xl block invisible absolute '>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>EMP Dashboard  </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>EMP Schedule Timing</li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Appointments</li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>EMP Register </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>EMP Lists </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>EMP Add New Speciality </li>
                </a>

              </div>
            </div>

            <div className='relative flex items-center px-3 group transition-transform '>
              <p className='font-semibold tracking-wide'>USR</p>
              <svg
                className="fill-current duration-0 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              <div className='list-none  tracking-wide text-zinc-900 font-semibold w-[280px] text-[14px] transition duration-300 translate-y-5 group-hover:visible group-hover:top-[82px] group-hover:translate-y-0 group-hover:opacity-100 opacity-10 bg-white group-hover:shadow-xl block invisible absolute '>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>USR Dashboard  </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>USR Schedule Timing</li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Appointments</li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>USR Register </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>USR Lists </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>USR Add New  </li>
                </a>

              </div>

            </div>
            <div className='relative flex items-center px-3 group transition-transform '>
              <p className='font-semibold tracking-wide'>Pages</p>
              <svg
                className="fill-current duration-0 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              <div className='list-none tracking-wide text-zinc-900 font-semibold w-[280px] text-[14px] transition duration-300 translate-y-5 group-hover:visible group-hover:top-[82px] group-hover:translate-y-0 group-hover:opacity-100 opacity-10 bg-white group-hover:shadow-xl block invisible absolute '>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Video Call </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Voice Call</li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Calender</li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Invoices </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Register </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Log-In </li>
                </a>

              </div>

            </div>
            <div className='relative flex items-center px-3 group transition-transform '>
              <p className='font-semibold tracking-wide'>Blog</p>
              <svg
                className="fill-current w-4 group-hover:rotate-180 duration-0 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              <div className='list-none tracking-wide text-zinc-900 font-semibold w-[280px] text-[14px] transition duration-300 translate-y-5 group-hover:visible group-hover:top-[82px] group-hover:translate-y-0 group-hover:opacity-100 opacity-10 bg-white group-hover:shadow-xl block invisible absolute '>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Blog Grid  </li>
                </a>
                <a href="/">
                  <li className='px-2 py-[6px] border-b-[1px] border-b-zinc-300 '>Blog Lists</li>
                </a>


              </div>
            </div>

            <div className='flex items-center px-2 group font-semibold hover:text-green-600 '>
              <a href="/">
                <p className='tracking-wide'>Admin</p>
              </a>
            </div>
          </div>

          <div className=' flex ml-[450px] px-2 '>
            <div className='flex items-center gap-1'>
              <span className='flex items-center'>
              <svg fill="black" width={30}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12.5,16.5h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-5,4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm14-6h-3v-4a.99974.99974,0,0,0-1-1H6.5a.99974.99974,0,0,0-1,1v4h-3a.99974.99974,0,0,0-1,1v14a.99974.99974,0,0,0,1,1h19a.99974.99974,0,0,0,1-1V7.5A.99974.99974,0,0,0,21.5,6.5Zm-1,14H3.5V8.5h3a.99974.99974,0,0,0,1-1v-4h9v4a.99974.99974,0,0,0,1,1h3Zm-4-8a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM13.5,7H13V6.5a1,1,0,0,0-2,0V7h-.5a1,1,0,0,0,0,2H11v.5a1,1,0,0,0,2,0V9h.5a1,1,0,0,0,0-2Zm4,9.5h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/></svg>
              </span>
              <span className='flex flex-col text-[12px] text-zinc-600 font-semibold  '>
                <p>Contact</p>
                <p className='text-[14px] txt-black font-bold'>+91 7015842605</p>
              </span>
            </div>

            <div className='ml-3 flex items-center'>
              <button className=' text-green-600 transition duration-500 hover:bg-green-600 hover:text-white py-3 px-5 rounded-lg font-semibold tracking-wide text-[14px] border-[2px] border-green-600 '>
                LOGIN / SIGNUP
              </button>
            </div>
          </div>


        </nav>
      </div>
    </>
  )
}

export default MainHomenav
