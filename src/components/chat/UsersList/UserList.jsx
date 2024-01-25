import React from 'react'
import SingleUser from './SingleUser'
import { Link } from 'react-router-dom'

const UserList = () => {
  return (
    <div className='w-[98%] sm:w-[80%] md:w-[60%] mx-auto '>
      <div className='text-white md:text-2xl font-bold text-center py-2 border md:border-2 border-gray-200 rounded-full w-full mt-16 md:mt-10 ' >Messages</div>
      <SingleUser></SingleUser>
      <SingleUser></SingleUser>

    </div>
  )
}

export default UserList