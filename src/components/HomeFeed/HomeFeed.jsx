import React, { useState } from 'react'
import Header from '../Header/Header'
import Post from '../Post/Post'
import CollectablePost from '../CollectablePost/CollectablePost'
import MyModal from './Modal'
import NewPost from '../AddPost/NewPost'

const HomeFeed = () => {
  return (
    <div className='bg-[#111820] pb-10' >
        <Header ></Header>
        <Post></Post>
        {/* <NewPost></NewPost> */}
        {/* <CollectablePost></CollectablePost> */}
    </div>
  )
}

export default HomeFeed