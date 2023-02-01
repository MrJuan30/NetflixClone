import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const NavBar = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    // console.log(user);

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='Navbar_Container flex items-center justify-between p-4 z-[100] w-full fixed'>
                <Link to='/'>
                    <h1 className='text-primary-red font-bebas text-4xl cursor-pointer'>NETCLONE</h1>    
                </Link>
                {user?.email ? (
                    <div>
                        <Link to='/account'>
                            <button className='text-primary-white pr-4'>Account</button>    
                        </Link>
                        <button onClick={handleLogout} className='bg-primary-red font-raleway px-6 py-2 rounded cursor-pointer text-primary-white'>Logout</button>    
                    </div>
                ):(
                    <div>
                        <Link to='/login'>
                            <button className='text-primary-white pr-4'>Sing In</button>    
                        </Link>
                        <Link to='/signup'>
                            <button className='bg-primary-red font-raleway px-6 py-2 rounded cursor-pointer text-primary-white'>Sing Up</button>    
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default NavBar