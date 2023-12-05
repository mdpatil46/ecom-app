import React from 'react'

export default function IphoneIMG() {
    
    return (
        <>
            <div className="bg-black  ">
                <div className="flex  bg-black justify-center items-center ">
                    <p className='text-white text-3xl font-bold'>iPhone15Pro</p>
                </div>
                <div className='flex justify-center items-center h-screen'>
                    <img src="https://www.apple.com/in/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg" alt="IPHONE 15" className='max-auto' />
                </div>
                <div className='flex justify-center items-center h-screen'>
                    <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/all_colors__eppfcocn9mky_large.jpg" alt="IPHONE 15" className='max-auto' />
                </div>
                <div className='flex justify-center items-center h-screen my-10'>
                    <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/camera/48mp_camera__cxq25ak34nau_medium.jpg" alt="IPHONE 15" className='max-auto' />
                </div>
                <div className='flex justify-center items-center h-screen my-32 '>
                    <img src="https://www.apple.com/in/iphone-15-pro/images/overview/usb-c/usbc__dqdn0phay4mu_medium.jpg" alt="IPHONE 15" className='max-auto mt-3' />
                </div>
            </div>
        </>
    )
}
