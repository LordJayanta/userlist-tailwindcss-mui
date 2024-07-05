import React from 'react'
import { useEffect, useState } from 'react'
import UserCard from '../components/mui/UserCard'
import UserDetailsCard from '../components/mui/UserDetailsCard'
import axios from 'axios'
import Loader from '../components/Loader'
import { Box, Container } from '@mui/material'
import Navbar from '../components/Navbar'

const MuiPage = () => {
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
        <>

            {/* <div className="gap-10 flex-col"> */}
            <Box component={'section'} sx={{ background: '#1E1E1E' }}
                position={'relative'} width={'100vw'} height={'100vh'}
                display={'flex'} alignItems={'center'} justifyContent={'center'} gap={20}
            >
            <Box position={'absolute'} top={0} width={'100%'}>
                <Navbar />
            </Box>

                {usersData.status == 200
                    // ? <div className='w-full m-4'>
                    ? <Box width={'680px'} height={'80vh'} margin={0} overflow={'auto'}>
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
                    </Box>
                    : <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
                        <Loader />
                    </Box>
                }


                {activeUser.status &&
                    <Box
                        // w-full md:w-[450px] md:h-[80vh] md:m-0 m-4 overflow-auto md:static absolute
                        sx={{
                            width: '450px',
                            height: '80vh',
                            margin: 0,
                            overflow: 'auto',
                        }}
                    >
                        <UserDetailsCard user={activeUser.user} onClose={() => setActiveUser({ status: false, user: [] })} />
                    </Box>
                }

            </Box>
        </>
    )
}

export default MuiPage
