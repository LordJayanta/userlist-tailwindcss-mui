import React from 'react'
import { useEffect, useState } from 'react'
import UserCard from '../components/telwind/UserCard'
import UserDetailsCard from '../components/telwind/UserDetailsCard'
import axios from 'axios'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'

const TailwindPage = () => {
    const [usersData, setUsersData] = useState([{ data: '' }])
    const [activeUser, setActiveUser] = useState({
        status: false
    })

    const loadData = async (url) => {
        const res = await (await axios.get(url));
        setUsersData(res)
    }
    useEffect(() => {
        loadData('https://602e7c2c4410730017c50b9d.mockapi.io/users');
    }, [])

    return (
        <div className="w-full h-screen bg-[#1E1E1E] flex justify-center items-center gap-10 md:flex-row flex-col relative">
            <div className='absolute top-0 w-full'>
                <Navbar />
            </div>
            {usersData.status == 200
                ? <div className='w-full md:w-[680px] md:h-[80vh] md:m-0 m-4 overflow-auto'>
                    {usersData.data.map((user, index) => {
                        let active = {
                            status: true
                        }
                        return (
                            <div key={index} onClick={() => setActiveUser({ status: true, user: user })}>
                                <UserCard
                                    // active={activeUser.status} 
                                    avatar={user.avatar}
                                    jobTitle={user.jobTitle}
                                    bio={user.Bio}
                                    profile={user.profile}
                                />
                            </div>
                        )
                    })}
                </div>
                : <div className='w-full h-full flex justify-center items-center'>
                    <Loader />
                </div>
            }

            {activeUser.status &&
                <div className='w-full md:w-[450px] md:h-[80vh] h-screen py-32 px-4 md:p-0 md:m-0 m-4 overflow-auto md:static absolute md:bg-transparent bg-[rgba(0,0,0,0.7)]'>
                    <UserDetailsCard user={activeUser.user} onClose={() => setActiveUser({ status: false, user: [] })} />
                </div>
            }
        </div>
    )
}

export default TailwindPage
