import React, { useEffect, useState } from 'react'
import './Blog.css'
import BlogPicture from '../images/blog.jpg';
import { Link } from 'react-router-dom';
import axios from "axios"

const Blog = () => {
  const [ search, setSearch ] = useState('')
  const [ posts, setPosts ] = useState([])
  const [ foundPosts, setFoundPosts ] = useState(posts)
  const PF = "https://life-and-balance.herokuapp.com/images/"

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("https://life-and-balance.herokuapp.com/api/posts")
      setPosts(response.data)
      setFoundPosts(response.data)
    }
    fetchPosts()
  }, [])

  const filterPosts = (e) => {
    const keyword = e.target.value;
    setSearch(keyword)
    if (keyword !== '') {
      const results = posts.filter(post => {
        return post.desc.toLowerCase().includes(keyword.toLowerCase())
          || post.title.toLowerCase().includes(keyword.toLowerCase())
          || post.username.toLowerCase().includes(keyword.toLowerCase())
      })
      setFoundPosts(results)
    } else {
      setFoundPosts(posts)
    }
  }


  return (
    <div className='blog'>
      <img src={BlogPicture} className="blog-picture" alt="blog" />
      <div className="blog-section">
        <div className="blog-posts-container">
          <p className='blog-intro'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            minus porro amet sint, ullam maiores unde, vitae rem facilis obcaecati
            numquam nulla alias, deleniti eos temporibus aspernatur quos odit
            officiis fugit iste ratione at! Aliquid mollitia ab, reprehenderit
            deserunt ea iure autem earum perspiciatis ad ipsum eveniet eum iste
            molestias quibusdam consequuntur quo voluptas! Natus, possimus magnam
            voluptate minima saepe adipisci, assumenda earum impedit esse aliquid
            sint quam inventore odio debitis ex officia autem, eos fuga nostrum
            laborum. Aspernatur provident quas labore cupiditate, amet totam
            accusamus corrupti debitis odio natus temporibus similique ipsum quia
            in! Obcaecati minima non sunt quo.
          </p>
          <div className="search">
            <i className="fas fa-search"></i>
            <input 
              className="search-input"
              type="search" 
              placeholder="Search Title, Name or Keyword..." 
              value={search} 
              onChange={filterPosts} 
            />
          </div>
          <ul className="blog-posts">
            {foundPosts && foundPosts.length > 0 ? (
              foundPosts
                .sort((a, b) => b.createdAt > a.createdAt ? 1: -1)
                .map((post) => {
                  return <li key={post._id} className="blog-post">
                    <Link to={`/blog/${post._id}`} className="blog-faded">
                      <img className="blog-post-picture" src={PF + post.photo} alt="post" />
                      <div className="blog-content-inside">
                        {post.title && post.title.split(" ").length > 3 ? (
                          <h2 className="blog-post-title">{post.title.split(" ").slice(0, 3).join(" ")}...</h2>
                        ) : (
                          <h2 className="blog-post-title">{post.title}</h2>
                        )}
                        <p className="blog-post-author">Author: {post.username}</p>
                        <p className="blog-date">{new Date(post.createdAt).toDateString()}</p>
                        <div className="blog-description" dangerouslySetInnerHTML={{__html: `${post.desc.slice(0, 110)}... <em>READ MORE</em>`}} />
                        {/* <p className="blog-description">{post.desc.slice(0, 110)} ... <em>READ MORE</em></p> */}
                      </div>

                    </Link>
                  </li>
                })
                
              ) : (
                <h2>No Results Found!</h2>
              )
            }
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
