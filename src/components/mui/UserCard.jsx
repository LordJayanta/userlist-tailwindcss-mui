import { Box, Typography, Avatar } from '@mui/material'
import React from 'react'

const UserCard = ({ active = false, avatar, jobTitle, bio, profile = { username: '', firstName: '', lastName: '' } }) => {

    return (
        <div className={active ? 'userCard activeUserCard' : 'userCard deactiveUserCard'}>
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    border: '4px solid #0D87DF',
                    overflow: 'hidden'
                }}
            >
                <Avatar src={avatar} alt="" sx={{ width: '100%', height: '100%' }} />
            </Box>

            <div className="user-details">
                <Typography component={'h3'} variant='h6' fontWeight={'bold'}>
                    {`${profile.firstName} ${profile.lastName}`}
                </Typography>
                <Box className='userCard-info'>
                    <span>@{profile.username}</span>
                    <span>#{jobTitle}</span>
                </Box>
                <Typography
                    // className='text-wrap'
                    fontWeight={'300'}
                    fontSize={14}
                    lineHeight={'16px'}
                    width={'420px'}
                >{bio}</Typography>
            </div>
        </div>
    )
}

export default UserCard
