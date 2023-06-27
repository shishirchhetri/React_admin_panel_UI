import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="john" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="john" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+977 9867654543" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="password" placeholder="New York |  USA" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" value="male" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">
            Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
