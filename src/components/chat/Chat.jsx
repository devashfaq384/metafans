import React from 'react'
import UserList from './UsersList/UserList'
import Header from '../Header/Header'
import Messages from './Messages/Messages'

const Chat = () => {
  return (
    <div className='bg-[#111820] min-h-[100vh] ' >
        <Header></Header>
        <UserList></UserList>
    </div>
  )
}

export default Chat