import React from 'react'

const NavBar = () => {
    return (
        <>
            <div className='Navbar_Container flex items-center justify-between p-4 z-[100] w-full absolute'>
                <h1 className='text-primary-red font-bebas text-4xl cursor-pointer'>NETCLONE</h1>
                <div>
                    <button className='text-primary-white pr-4'>Sing In</button>
                    <button className='bg-primary-red font-raleway px-6 py-2 rounded cursor-pointer text-primary-white'>Sing Up</button>
                </div>
            </div>
        </>
    )
}

export default NavBar