import React, { useEffect, useState } from 'react'
import './Intro.css'
import HeaderPicture from '../images/header-picture-2.jpg'
import { Link } from 'react-router-dom';
import axios from "axios"

const Intro = () => {
  const [ posts, setPosts ] = useState([])
  const PF = "https://life-and-balance.herokuapp.com/images/"

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("https://life-and-balance.herokuapp.com/recent")
      setPosts(response.data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="intro">
      <img src={HeaderPicture} alt='header' className="header-picture" />
      <div className="header-picture"></div>
      <div className="second-section">
        <p>
          Mental health is an incredibly significant aspect of well-being and
          carries the message of hope and inspiration. It is a vital part of
          our existence that contributes to our physical, spiritual, and
          socio-economic well-being. We need life balance in order to create
          meaningful things in our lives and help us live out our hopes, dreams,
          and aspirations.
        </p>
        <p>
          Nevertheless, we cannot discuss life balance without also considering
          mental health/illness. An estimated one in five Americans will receive a
          mental health diagnosis at some point in their lives. Unfortunately,
          people do not seek help when they need it because they are ashamed or
          stigmatized for having mental health issues.
        </p>
        <p>
          These resources are intended as guide posts/stepping stones to support 
          you on your journey to your best life and goals. If you, a family 
          member, a loved one, or someone you know is struggling and in need of
          tools, you'll find that here.
        </p>
      </div>
      <div className="third-section">
        <div className="fade-container">
          <p className="quote">
            “Balance, peace, and joy are the fruit of a successful life. It 
            starts with recognizing your talents and finding ways to serve 
            others by using them.”
          </p>
          <p className="author">--Thomas Kinkade</p>
        </div>
      </div>
      <div className="fourth-section">
        <h1>Most Recent Blog Posts</h1>
        <ul className="posts-container">
          {(posts && posts.length > 0) && posts
            .sort((a, b) => b.createdAt > a.createdAt ? 1: -1)
            .map((post) => {
            return <li key={post._id} className="post">
              <Link to={`/blog/${post._id}`} className="faded">
                <img className="post-picture" src={PF + post.photo} alt="post" />
                <div className="content-inside">
                  {post.title && post.title.split(" ").length > 2 ? (
                    <h2 className="blog-post-title">{post.title.split(" ").slice(0, 2).join(" ")}...</h2>
                  ) : (
                    <h2 className="blog-post-title">{post.title}</h2>
                  )}
                  <p className="date">{new Date(post.createdAt).toDateString()}</p>
                  <p className="post-author"><strong>Author:</strong><br />{post.username}</p>
                  <div className="description" dangerouslySetInnerHTML={{__html: `${post.desc.slice(0, 55)}... <em>READ MORE</em>`}} />
                  {/* <p className="description">{post.desc.slice(0, 55)}...</p> */}
                </div>
              </Link>
            </li>
          })}
        </ul>

        {/* <!-- Begin Mailchimp Signup Form --> */}

        <div id="mc_embed_signup" className="email-subscription">
          <form action="https://gmail.us14.list-manage.com/subscribe/post?u=9f14f9f47caafc216a4ace425&amp;id=f31536ec5d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" name="FNAME" className="" id="mce-FNAME" />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
              </div>

            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}

            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input type="text" name="b_9f14f9f47caafc216a4ace425_f31536ec5d" tabIndex="-1" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">Subscibe</button>
                <p className="brandingLogo">
                  <a href="http://eepurl.com/hXs4Uz" title="Mailchimp - email marketing made easy and fun">
                    {/* <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /> */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

        {/* <!--End mc_embed_signup--> */}

        {/* <div className="email-subscription">
          <h4>Never miss a post!<br />Subscribe to our NewsLetter!</h4>
          <form action="/signup" method="POST" className="subscribe">
            <input
              type="text"
              name="firstName"
              id="first-name"
              className="form-control"
              placeholder="First Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
            <button type="submit" className="signup-button">Subscribe</button>
          </form>
        </div> */}
      </div>
    </div>
  )
}

export default Intro
