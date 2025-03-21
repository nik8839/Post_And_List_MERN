import React, { useState } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
const PostCreate = () => {
  const [title,setTitle]=useState('')

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post('http://localhost:4001/posts',{
      title
    });
    setTitle('')
  }
  return (
    <div className='container'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label>Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control'/> 
        </div>
        <button className='btn btn-primary'>Submit</button>
    </form>
    
    
    </div>
  )
}

export default PostCreate