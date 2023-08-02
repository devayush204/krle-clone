import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminSidebar = (props,) => {
    let { activeItem, handleItemClick, itemNumber } = props;
    const [sidebarItems, setSidebarItems] = useState([]);

    useEffect(() => {
        axios.get("/sidebaritems.json")
            .then((res) => {
                setSidebarItems(res.data)
                // console.log(res.data)
                console.log(res.data.cat)
            })
    }, [])
    return (
        <>
            <div className='mt-[60px] z-50 '>
                <div className="w-[250px] fixed bg-[#1B5A90] h-screen py-3 px-2 pb-20 overflow-y-auto ">
                    {
                        sidebarItems.map((items, index) => {
                            return (<div className=' px-1  '>
                                <p className='text-white text-sm py-1 mt-2 mb-2 ml-3' key={index + 1}>{items.name}</p>
                                {(items.categories.length != 0)? items.categories.map((item, index)=>{
                                    return(
                                        <>
                                        <ul className=''>
                                            <li className={` cursor-pointer h-10 text-[15px] flex items-center px-5 font-semibold mb-[1px] rounded-sm hover:bg-[#00D0F1]  
                                                ${activeItem === item.id ? 'text-white font-semibold bg-[#00D0F1]' : 'text-white '}` } 
                                                 onClick={() => handleItemClick(itemNumber)} key={index + 1}>{item.name}
                                                 
                                                 

                                                 </li>
                                        </ul>
                                        </>
                                    )
                                }):null}
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AdminSidebar
