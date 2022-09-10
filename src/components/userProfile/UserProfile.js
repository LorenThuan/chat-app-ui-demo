import React, { Component } from "react";
import "./userProfile.css";
import IconEditName from './../../images/pencil.png';
import IconCreateGroup from './../../images/people.png';

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <p className="infoHoiThoai">Thông tin hội thoại</p>
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" />
          </div>
          <div>
          <h4 className="info__Name">Tim Hover <button className="btn-nobg"><img src={IconEditName}></img></button></h4>
          </div>
         
        </div>
        {/* <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Loren Thuan
          </div>
        </div> */}
        <div className="profile__card">
        <button className="btn-nobg"><img src={IconCreateGroup}></img></button>
        </div>
      </div>
    );
  }
}
