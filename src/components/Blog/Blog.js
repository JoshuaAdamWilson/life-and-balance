import React, { useEffect, useState } from 'react'
import './Blog.css'
import BlogPicture from '../images/blog.jpg';
import { Link } from 'react-router-dom';
import axios from "axios"
// import InfiniteScroll from 'react-infinite-scroller';
import { LazyLoad } from 'react-observer-api';

const Blog = () => {
  const postsPerPage = 10;
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
            Welcome to Life and Balance. As the world continues to fight to
            figure everything out, we must also fight to figure out who we are.
            Here, you can find direction and hope on that path. As an individual,
            we should continue to evolve and recreate ourselves every day. We must learn new
            things and do our best to expand our minds adding versatility into
            our lives. You should not be the same person you were last week. 
            Create new habits and consistently upgrade <em>you</em> in all ways,
            on all levels. This is a place where you can find that guidance,
            that hope you need, and the strength to empower yourself. You are
            the greatest project you will ever get to work on. Take your time.
            <strong> Create Magic.</strong>
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
            {/* <InfiniteScroll
              pageStart={0}
              loadMore={loadFunc}
              hasMore={true || false}
              loader={<div className="loader" key={0}>Loading ...</div>}
            > */}
              {foundPosts && foundPosts.length > 0 ? (
                foundPosts
                  .sort((a, b) => b.createdAt > a.createdAt ? 1: -1)
                  .map((post) => {
                    return <li key={post._id} className="blog-post">
                      <LazyLoad>
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
                      </LazyLoad>
                    </li>
                  })
                  
                ) : (
                  <h2>No Results Found!</h2>
                )
              }
            {/* </InfiniteScroll> */}
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
