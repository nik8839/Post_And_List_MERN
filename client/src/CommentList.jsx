import React, { useState ,useEffect} from 'react'
import axios from'axios'
const CommentList = ({postId}) => {
  const [comments,setComments]=useState([])
  const fetchData=async ()=>{
    const res=await axios.get(`http://localhost:4002/posts/${postId}/comments`)
    setComments(res.data)
  }
  useEffect(() => {
    fetchData() 
  }, [])
  
  const renderComments=comments.map((comment)=>{
    return <li key={comment.id}>
        {comment.content}
    </li>
  })
    return (
    <ul>
        {renderComments}
    </ul>
  )
}

export default CommentList