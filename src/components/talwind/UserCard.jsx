import React from 'react'
import AvatarImage from '../AvatarImage'


const UserCard = ({ active = false, avatar, jobTitle, bio, profile = { username: '', firstName: '', lastName: '' } }) => {
    
    return (
        <div className={active ? 'userCard activeUserCard' : 'userCard deactiveUserCard'}>
            <figure className='w-[60px] h-[60px] rounded-full border-[4px] overflow-hidden'>
                {/* <img src={avatar} alt="" /> */}
                <AvatarImage src={avatar}/>
            </figure>
            <div className="user-details">
                <h3 className='font-bold md:text-2xl text-lg'>{`${profile.firstName} ${profile.lastName}`}</h3>
                <div className='userCard-info'>
                    <span>@{profile.username}</span>
                    <span>#{jobTitle}</span>
                </div>
                <p className='font-light md:text-sm text-xs leading-4 text-wrap md:w-[420px] w-[220px]'>{bio}</p>
            </div>
        </div>
    )
}

export default UserCard
