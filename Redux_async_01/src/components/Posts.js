import React from 'react'
import PropTypes from 'prop-types'

// postsはオブジェクトの配列で、
// 例えば、tokyo関係のスレッド30件弱程度
const Posts = ({posts})=>(
    <ul>
    {posts.map((post,i)=>
    <li key={i}>{post.title}</li>)}
    </ul>
)


Posts.propTypes = {
    posts: PropTypes.array.isRequired
  }
  
  export default Posts