import React from 'react'


const UserCard = ({ active = false, avatar, jobTitle, bio, profile = { username: '', firstName: '', lastName: '' } }) => {
    
    return (
        <div className={active ? 'userCard activeUserCard' : 'userCard deactiveUserCard'}>
            <figure className='w-[100px] h-[100px] rounded-full border-[4px] overflow-hidden'>
                <img src={avatar} alt="" />
            </figure>
            <div className="user-details">
                <h3 className='font-bold text-2xl'>{`${profile.firstName} ${profile.lastName}`}</h3>
                <div className='userCard-info'>
                    <span>@{profile.username}</span>
                    <span>#{jobTitle}</span>
                </div>
                <p className='font-light text-sm leading-4 text-wrap w-[420px]'>{bio}</p>
            </div>
        </div>
    )
}

export default UserCard
