import React, { Component, useState, createRef, useEffect } from "react";
import "./chatContent.scss";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import IconEditName from './../../images/pencil.png';
import IconGroup from './../../images/group.png';
import IconSearch from './../../images/magnifying-glass (1).png';
import IconVideoCamera from './../../images/video-camera.png';
import IconBar from './../../images/bar.png';
import IconEmoji from './../../images/happy.png';
import IconLike from './../../images/like.png';

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://demobucket-809328739865.s3.ap-southeast-1.amazonaws.com/takagi.jpg",
      type: "",
      msg: "Hi Lo, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://demobucket-809328739865.s3.ap-southeast-1.amazonaws.com/takagi.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://demobucket-809328739865.s3.ap-southeast-1.amazonaws.com/takagi.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <div>
                <div>
                  <div>
                  <p className="tim__hover ">Tim Hover </p>
                  <button className="btn-nobg btnIconEditName"><img src={IconEditName}></img></button>
                  </div>
                 
               
                
                <br/>
               <div className="none__Copy">
               Truy c???p 8 gi??? tr?????c
                </div>
                </div>
              </div>
            
              
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <img src={IconGroup}></img>
              </button>

              <button className="btn-nobg icon__search">
                <img src={IconSearch}></img>
              </button>

              <button className="btn-nobg">
                <img src={IconVideoCamera}></img>
              </button>

              <button className="btn-nobg">
                <img src={IconBar}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
           
            <input
              type="text"
              placeholder="Nh???p @, tin nh???n t???i Tim Hover"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
           <button className="btn-nobg">
                <img src={IconEmoji}></img>
              </button>

              <button className="btn-nobg">
                <img src={IconLike}></img>
              </button> 
          </div>
        </div>
      </div>
    );
  }
}
