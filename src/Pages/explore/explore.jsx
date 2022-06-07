import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostModal } from '../../Components/modal/postModal'
import { Post } from '../../Components/Post/Post'
import { getPost } from '../../features/postSlice'

export const Explore = () => {
  const dispatch = useDispatch()
  const {post}= useSelector(store => store.post)
  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div className="post-display-container">
    <PostModal />
      {post.map((post) => {
        return <Post post={post}/>;
      })}
    </div>
  )
}
