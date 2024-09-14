import React from "react";

import {feedsdata,msgdata} from "./feed-data";

import './Community.css'

function Community() {
  

  return (
    <div id="communitydiv">
      {/* <nav>
        <div class="container">
          <h2 class="logo">
            <span class="Bharat">Bharat</span>
            <span class="Se">Se</span> Community
          </h2>
          <div class="search-bar">
            <i class="uil uil-search"></i>
            <input
              type="search"
              placeholder="Search for creators, arts and handicrafts"
            />
          </div>
          <div class="create">
            <label for="create-post" class="btn btn-primary">
              Create
            </label>
            <div class="profile-photo">
              <img src="./images/profile-1.jpg" />
            </div>
          </div>
        </div>
      </nav> */}

      <div>
        <div class="container">
          <div class="left">
            <a href="#" class="profile">
              <div class="profile-photo">
                <img src="./images/profile-1.jpg" />
              </div>
              <div class="handle">
                <h4>Sujay Dey</h4>
                <p class="text-muted">@sujay12</p>
              </div>
            </a>

            <div class="sidebar">
              <a href="#" class="menu-item active">
                <span>
                  <i class="uil uil-home"></i>
                </span>
                <h3>Home</h3>
              </a>
              <a href="#" class="menu-item">
                <span>
                  <i class="uil uil-compass"></i>
                </span>
                <h3>Explore</h3>
              </a>
              <a href="#" class="menu-item" id="notifications">
                <span>
                  <i class="uil uil-bell">
                    <small class="notification-count">6</small>
                  </i>
                </span>
                <h3>Notifications</h3>

                <div class="notifications-popup">
                  <div>
                    <div class="profile-photo">
                      <img src="./images/profile-2.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Ankit Gupta</b> accepted your friend request
                      <small class="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="./images/profile-3.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Mridul Srivastava</b> commented your post
                      <small class="text-muted">1 HOUR AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="./images/profile-4.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Anirban Bandhyopadhyay </b>and <b>283 others</b> liked
                      your post
                      <small class="text-muted">4 MINUTES AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="./images/profile-5.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Priyanshu Priya</b> commented on a post you are tagged
                      in
                      <small class="text-muted">2 DAYS AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="./images/profile-6.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Nikhil Parshuram</b> commented on a post you are tagged
                      in
                      <small class="text-muted">1 HOUR AGO</small>
                    </div>
                  </div>
                  <div>
                    <div class="profile-photo">
                      <img src="./images/profile-7.jpg" />
                    </div>
                    <div class="notification-body">
                      <b>Sayak SenGupta</b> commented your post
                      <small class="text-muted">1 HOUR AGO</small>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="menu-item" id="messages-notification">
                <span>
                  <i class="uil uil-envelope-alt">
                    <small class="notification-count">6</small>
                  </i>
                </span>
                <h3>Messages</h3>
              </a>
              <a href="#" class="menu-item">
                <span>
                  <i class="uil uil-bookmark"></i>
                </span>
                <h3>Bookmarks</h3>
              </a>
              <a href="#" class="menu-item">
                <span>
                  <i class="uil uil-chart-line"></i>
                </span>
                <h3>Analytics</h3>
              </a>
              <a href="#" class="menu-item" id="theme">
                <span>
                  <i class="uil uil-palette"></i>
                </span>
                <h3>Theme</h3>
              </a>
              <a href="#" class="menu-item">
                <span>
                  <i class="uil uil-setting"></i>
                </span>
                <h3>Settings</h3>
              </a>
            </div>

            <label for="create-post" class="btn btn-primary">
              Create Post
            </label>
          </div>

          <div class="middle">
            <div class="stories">
              <div class="story">
                <div class="profile-photo">
                  <img src="./images/profile-1.jpg" />
                </div>
                <p class="name">Your story</p>
              </div>
              <div class="story">
                <div class="profile-photo">
                  <img src="./images/profile-9.jpg" />
                </div>
                <p class="name">Anirban Bannerjee</p>
              </div>
              <div class="story">
                <div class="profile-photo">
                  <img src="./images/profile-10.jpg" />
                </div>
                <p class="name">Srijita Saha</p>
              </div>
              <div class="story">
                <div class="profile-photo">
                  <img src="./images/profile-11.jpg" />
                </div>
                <p class="name">Oindrila Nanday</p>
              </div>
              <div class="story">
                <div class="profile-photo">
                  <img src="./images/profile-12.jpg" />
                </div>
                <p class="name">Saptarshi Paul</p>
              </div>
              <div class="story">
                <div class="profile-photo">
                  <img src="./images/profile-19.jpg" />
                </div>
                <p class="name">Priyobrata Mondal</p>
              </div>
            </div>
            <form class="create-post">
              <div class="profile-photo">
                <img src="./images/profile-1.jpg" />
              </div>
              <input
                type="text"
                id="create-post"
                placeholder="What's on your mind, Sujay?"
              />
              <input type="submit" value="Post" class="btn btn-primary" />
            </form>

            <div class="feeds">
              {feedsdata.map((item)=>( <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src={item.userimage} />
                    </div>
                    <div class="info">
                      <h3>{item.username}</h3>
                      <small>{item.location}, {item.uploadtime} ago</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src={item.postimage} />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src={item.likedbyimg1} />
                  </span>
                  <span>
                    <img src={item.likedbyimg2} />
                  </span>
                  <span>
                    <img src={item.likedbyimg3} />
                  </span>
                  <p>
                    Liked by <b>{item.likedbyname} </b>and <b>{item.likedbynumber} others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>{item.username} </b>{item.postcaption}{" "}
                    <span class="harsh-tag">#{item.hashtag}</span>
                  </p>
                </div>
                <div class="comments text-muted">View all {item.totalcomments} comments</div>
              </div>))}
           

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-9.jpg" />
                    </div>
                    <div class="info">
                      <h3>Anirban Bandhyopadhyay</h3>
                      <small>France, 23 HOURS AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-2.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-7.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-3.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-5.jpg" />
                  </span>
                  <p>
                    Liked by <b>Jane Doe </b>and <b>721 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>Anirban Bandhyopadhyay </b>Finally! Got the Rosogullas
                    after 3 years. Soft, Freash & Delicious Sweet from India{" "}
                    <span class="harsh-tag">#LoveIndianSweets</span>
                  </p>
                </div>
                <div class="comments text-muted">View all 59 comments</div>
              </div>

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-13.jpg" />
                    </div>
                    <div class="info">
                      <h3>Priyanshu Priya</h3>
                      <small>Jaipur - Rajasthan, 2 DAYS AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-1.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-10.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-4.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-15.jpg" />
                  </span>
                  <p>
                    Liked by <b>Nikhil Parshuram </b>and <b>236 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>EARTH is without 'ART' is just 'EH'.</b>
                    <span class="harsh-tag">
                      {" "}
                      &nbsp &nbsp
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                      &nbsp &nbsp#ArtWorld
                    </span>
                  </p>
                </div>
                <div class="comments text-muted">View all 27 comments</div>
              </div>

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-11.jpg" />
                    </div>
                    <div class="info">
                      <h3>Daniel Jones</h3>
                      <small>UK, 1 HOUR AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-3.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-10.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-4.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-15.jpg" />
                  </span>
                  <p>
                    Liked by <b>Winnie Hale </b>and <b>3,001 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>Daniel Jones</b> Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. <span class="harsh-tag">#happiness</span>
                  </p>
                </div>
                <div class="comments text-muted">View all 1,300 comments</div>
              </div>

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-13.jpg" />
                    </div>
                    <div class="info">
                      <h3>Lana Rose</h3>
                      <small>Dubai, 15 MINUTES AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-4.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-20.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-17.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-3.jpg" />
                  </span>
                  <p>
                    Liked by <b>Tina White </b>and <b>2,323 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>Lana Rose</b> Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. <span class="harsh-tag">#lifestyle</span>
                  </p>
                </div>
                <div class="comments text-muted">View all 154 comments</div>
              </div>

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-19.jpg" />
                    </div>
                    <div class="info">
                      <h3>Tina White</h3>
                      <small>California, 2.5 HOURS AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-5.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-2.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-9.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-14.jpg" />
                  </span>
                  <p>
                    Liked by <b>Daniel Jones </b>and <b>1,250 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>Tina White</b> Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. <span class="harsh-tag">#street</span>
                  </p>
                </div>
                <div class="comments text-muted">View all 753 comments</div>
              </div>

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-9.jpg" />
                    </div>
                    <div class="info">
                      <h3>Lilla James</h3>
                      <small>France, 6 HOURS AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-6.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-10.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-4.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-15.jpg" />
                  </span>
                  <p>
                    Liked by <b>Jane Doe </b>and <b>403 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>Lilla James</b> Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. <span class="harsh-tag">#work</span>
                  </p>
                </div>
                <div class="comments text-muted">View all 56 comments</div>
              </div>

              <div class="feed">
                <div class="head">
                  <div class="user">
                    <div class="profile-photo">
                      <img src="./images/profile-9.jpg" />
                    </div>
                    <div class="info">
                      <h3>Lilla James</h3>
                      <small>France, 6 HOURS AGO</small>
                    </div>
                  </div>
                  <span class="edit">
                    <i class="uil uil-ellipsis-h"></i>
                  </span>
                </div>
                <div class="photo">
                  <img src="./images/feed-7.jpg" />
                </div>
                <div class="action-buttons">
                  <div class="interaction-buttons">
                    <span>
                      <i class="uil uil-heart"></i>
                    </span>
                    <span>
                      <i class="uil uil-comment-dots"></i>
                    </span>
                    <span>
                      <i class="uil uil-share-alt"></i>
                    </span>
                  </div>
                  <div class="bookmark">
                    <span>
                      <i class="uil uil-bookmark-full"></i>
                    </span>
                  </div>
                </div>
                <div class="liked-by">
                  <span>
                    <img src="./images/profile-1.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-9.jpg" />
                  </span>
                  <span>
                    <img src="./images/profile-12.jpg" />
                  </span>
                  <p>
                    Liked by <b>Jane Doe </b>and <b>507 others</b>
                  </p>
                </div>
                <div class="caption">
                  <p>
                    <b>Lilla James</b> Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. <span class="harsh-tag">#work</span>
                  </p>
                </div>
                <div class="comments text-muted">View all 53 comments</div>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="messages">
              <div class="heading">
                <h4>Messages</h4>
                <i class="uil uil-edit"></i>
              </div>

              <div class="search-bar">
                <i class="uil uil-search"></i>
                <input
                  type="search"
                  id="message-search"
                  placeholder="Search messages"
                />
              </div>

              <div class="category">
                <h6 class="active">Primary</h6>
                <h6>General</h6>
                <h6 class="message-requests">Requests{3}</h6>
              </div>

                {msgdata.map((item)=>(
                  <div class="message">
                  <div class="profile-photo">
                    <img src={item.senderimage} />
                  </div>
                  <div class="message-body">
                    <h5>{item.sendername}</h5>
                    <p class="text-muted">{item.message}</p>
                  </div>
                </div>
                ))}
              <div class="message">
                <div class="profile-photo">
                  <img src="./images/profile-2.jpg" />
                </div>
                <div class="message-body">
                  <h5>Shivam Kumar</h5>
                  <p class="text-muted">Nice decoration bro</p>
                </div>
              </div>
              <div class="message">
                <div class="profile-photo">
                  <img src="./images/profile-13.jpg" />
                  <div class="active"></div>
                </div>
                <div class="message-body">
                  <h5>Arnab Gupta</h5>
                  <p class="text-bold">Well received! Thanks</p>
                </div>
              </div>
              <div class="message">
                <div class="profile-photo">
                  <img src="./images/profile-8.jpg" />
                </div>
                <div class="message-body">
                  <h5>Srijita Jana</h5>
                  <p class="text-muted">Ok</p>
                </div>
              </div>
              <div class="message">
                <div class="profile-photo">
                  <img src="./images/profile-3.jpg" />
                  <div class="active"></div>
                </div>
                <div class="message-body">
                  <h5>Tanu Priya</h5>
                  <p class="text-muted">2 new messages</p>
                </div>
              </div>
              <div class="message">
                <div class="profile-photo">
                  <img src="./images/profile-4.jpg" />
                </div>
                <div class="message-body">
                  <h5>Ravi Ranjan Kumar</h5>
                  <p class="text-muted">Lol, u right</p>
                </div>
              </div>
              <div class="message">
                <div class="profile-photo">
                  <img src="./images/profile-7.jpg" />
                  <div class="active"></div>
                </div>
                <div class="message-body">
                  <h5>Chandrika Sarkar</h5>
                  <p class="text-bold">You will get it by tomorrow!</p>
                </div>
              </div>
            </div>

            <div class="friend-requests">
              <h4>Requests</h4>
              <div class="request">
                <div class="info">
                  <div class="profile-photo">
                    <img src="./images/profile-14.jpg" />
                  </div>
                  <div>
                    <h5>Debasmita Mondal</h5>
                    <p class="text-muted">8 mutual friends</p>
                  </div>
                </div>
                <div class="action">
                  <button class="btn btn-primary">Accept</button>
                  <button class="btn">Decline</button>
                </div>
              </div>
              <div class="request">
                <div class="info">
                  <div class="profile-photo">
                    <img src="./images/profile-12.jpg" />
                  </div>
                  <div>
                    <h5>Dhawal Shah</h5>
                    <p class="text-muted">1 mutual friend</p>
                  </div>
                </div>
                <div class="action">
                  <button class="btn btn-primary">Accept</button>
                  <button class="btn">Decline</button>
                </div>
              </div>
              <div class="request">
                <div class="info">
                  <div class="profile-photo">
                    <img src="./images/profile-10.jpg" />
                  </div>
                  <div>
                    <h5>Khusi Kumari</h5>
                    <p class="text-muted">5 mutual friends</p>
                  </div>
                </div>
                <div class="action">
                  <button class="btn btn-primary">Accept</button>
                  <button class="btn">Decline</button>
                </div>
              </div>
            </div>
          </div>

          <div class="customize-theme">
            <div class="card">
              <h2>Customize your view</h2>
              <p class="text-muted">
                Manage your font size, color and background
              </p>

              <div class="font-size">
                <h4>Font Size</h4>
                <div>
                  <h6>Aa</h6>
                  <div class="choose-size">
                    <span class="font-size-1"></span>
                    <span class="font-size-2 active"></span>
                    <span class="font-size-3"></span>
                    <span class="font-size-4"></span>
                    <span class="font-size-5"></span>
                  </div>
                  <h3>Aa</h3>
                </div>
              </div>

              <div class="color">
                <h4>Color</h4>
                <div class="choose-color">
                  <span class="color-1 active"></span>
                  <span class="color-2"></span>
                  <span class="color-3"></span>
                  <span class="color-4"></span>
                  <span class="color-5"></span>
                </div>
              </div>

              <div class="background">
                <h4>Bacground</h4>
                <div class="choose-bg">
                  <div class="bg-1 active">
                    <span></span>
                    <h5 for bg-1>
                      Light
                    </h5>
                  </div>
                  <div class="bg-2">
                    <span></span>
                    <h5>Dim</h5>
                  </div>
                  <div class="bg-3">
                    <span></span>
                    <h5 for bg-3>
                      Lights out
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
