import React from 'react'
import AvatarImage from '../AvatarImage'
import { width } from '@mui/system';
import { data } from 'autoprefixer';

const UserDetailsCard = ({ user = {}, onClose }) => {
    // console.log(user);
    const { createdAt, avatar, jobTitle, Bio, profile = { username: '', firstName: '', lastName: '', email: '' } } = user;

    return (
        <div className='relative bg-[#262626] md:w-full w-[90%] md:h-full text-white justify-center border-[3px] border-[#0D87DF] rounded-[30px] md:py-[80px] py-[40px] px-2'>
            <figure className='absolute right-5 top-5' onClick={onClose}>
                <svg className='hover:text-[#0D87DF]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </figure>
            <div className='flex flex-col gap-10 items-center'>
                <figure className='w-[165px] h-[165px] rounded-[50px] border-[4px] border-[#0D87DF] overflow-hidden'>
                    {/* <img className='w-full h-full' src={avatar} alt="" /> */}
                    <AvatarImage sx={{ height: '100%', width: '100%', padding: 0 }} src={avatar} />
                </figure>
                <div className="user-details flex flex-col items-center justify-center">
                    <div className='flex flex-col items-center justify-start'>
                        <h3 className='font-bold text-3xl'
                        >{`${profile.firstName} ${profile.lastName}`}</h3>
                        <div className='text-[#777777] font-normal text-md mb-2 flex gap-3 items-center flex-wrap'>
                            <span>@{profile.username}</span>
                            <span>#{jobTitle}</span>
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-light text-sm leading-4 text-wrap text-center max-w-[340px]'>{Bio}</p>
                    </div>


                    <div className='mt-5'>
                        <div className='user-extra-info'>
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                    <path d="M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M17.111 13.2551C17.2956 13.085 17.3879 13 17.5 13C17.6121 13 17.7044 13.085 17.889 13.2551L18.6017 13.9117C18.6878 13.991 18.7308 14.0307 18.7843 14.0503C18.8378 14.07 18.8963 14.0677 19.0133 14.0631L19.9762 14.0253C20.2241 14.0155 20.3481 14.0107 20.4331 14.0821C20.5181 14.1535 20.5346 14.2765 20.5677 14.5224L20.7004 15.5077C20.7157 15.6216 20.7234 15.6785 20.7511 15.7271C20.7789 15.7757 20.824 15.8112 20.9143 15.8823L21.6898 16.4928C21.8817 16.6439 21.9777 16.7194 21.9967 16.8274C22.0157 16.9354 21.9513 17.0391 21.8225 17.2467L21.2965 18.0943C21.2363 18.1913 21.2063 18.2398 21.1967 18.2946C21.1871 18.3493 21.199 18.4052 21.2228 18.5168L21.4315 19.4952C21.4827 19.7356 21.5084 19.8558 21.4533 19.9513C21.3983 20.0467 21.2814 20.0848 21.0477 20.1609L20.122 20.4624C20.0117 20.4983 19.9565 20.5163 19.9134 20.5528C19.8703 20.5894 19.8436 20.6409 19.7902 20.7439L19.338 21.6154C19.2227 21.8375 19.1651 21.9485 19.0601 21.9868C18.9551 22.0251 18.8395 21.9772 18.6084 21.8813L17.72 21.5128C17.6114 21.4678 17.5572 21.4453 17.5 21.4453C17.4428 21.4453 17.3886 21.4678 17.28 21.5128L16.3916 21.8813C16.1605 21.9772 16.0449 22.0251 15.9399 21.9868C15.8349 21.9485 15.7773 21.8375 15.662 21.6154L15.2098 20.7439C15.1564 20.6409 15.1297 20.5894 15.0866 20.5528C15.0435 20.5163 14.9883 20.4983 14.878 20.4624L13.9523 20.1609C13.7186 20.0848 13.6017 20.0467 13.5467 19.9513C13.4916 19.8558 13.5173 19.7356 13.5685 19.4952L13.7772 18.5168C13.801 18.4052 13.8129 18.3493 13.8033 18.2946C13.7937 18.2398 13.7637 18.1913 13.7035 18.0943L13.1775 17.2467C13.0487 17.0391 12.9843 16.9354 13.0033 16.8274C13.0223 16.7194 13.1183 16.6439 13.3102 16.4928L14.0857 15.8823C14.176 15.8112 14.2211 15.7757 14.2489 15.7271C14.2766 15.6785 14.2843 15.6216 14.2996 15.5077L14.4323 14.5224C14.4654 14.2765 14.4819 14.1535 14.5669 14.0821C14.6519 14.0107 14.7759 14.0155 15.0238 14.0253L15.9867 14.0631C16.1037 14.0677 16.1622 14.07 16.2157 14.0503C16.2692 14.0307 16.3122 13.991 16.3983 13.9117L17.111 13.2551Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </figure>
                            <span>{jobTitle}</span>
                        </div>
                        <div className='user-extra-info'>
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                    <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </figure>
                            <span>{profile.email}</span>
                        </div>
                        <div className='user-extra-info'>
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                    <path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </figure>
                            <span>
                                <span>User seens from  </span>
                                <strong>{createdAt && new Date(createdAt).toDateString()}</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsCard
