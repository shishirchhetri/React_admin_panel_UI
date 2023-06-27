import "./user.css";
import profile from "../../assets/profile5.avif";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="user-titleContainer">
        <h1 className="user-title">Edit User</h1>
        <Link to='/newuser'>
        <button className="user-addButton">Create</button>

        </Link>
      </div>

      <div className="user-container">
        <div className="user-show">
          <div className="user-showTop">
            <img src={profile} alt="" className="user-showImg" />

            <div className="user-show-topTitle">
              <span className="user-show-username">Anna Becker</span>
              <span className="user-show-usertitle">Software Engineer</span>
            </div>
          </div>
          <div className="user-showButtom ">
            <span className="user-showTitle">Account Details</span>
            <div className="userShow-info">
              <PermIdentity className="userShow-icon" />
              <span className="userShow-infoTitle">annabeck99</span>
            </div>

            <div className="userShow-info">
              <CalendarToday className="userShow-icon" />
              <span className="userShow-infoTitle">12.12.2000</span>
            </div>
            <span className="user-showTitle">Contact Details</span>
            <div className="userShow-info">
              <PhoneAndroid className="userShow-icon" />
              <span className="userShow-infoTitle">+977 9867654543</span>
            </div>

            <div className="userShow-info">
              <MailOutline className="userShow-icon" />
              <span className="userShow-infoTitle">annabeck@gmail.com</span>
            </div>

            <div className="userShow-info">
              <LocationSearching className="userShow-icon" />
              <span className="userShow-infoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-updateTitle">Edit</span>
          <form action="" className="user-updateForm">
            <div className="user-update-left">
              <div className="user-update-item">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>

              <div className="user-update-item">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Aanna Becker"
                  className="userUpdateInput"
                />
              </div>

              <div className="user-update-item">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmai.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="user-update-item">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="+977 9867654543"
                  className="userUpdateInput"
                />
              </div>

              <div className="user-update-item">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA "
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="userUpdateUpload">
                <img src={profile} className="userUpdateImg" alt="" />
                <label htmlFor="file">
                  <Publish className="userUploadIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
