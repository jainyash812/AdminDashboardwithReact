import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUserContainer">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="rohitk77" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Rohit Kumar"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="rohitkumar77@gmail.com"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="number"
            placeholder="+91 9756342156"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="Tamil Nadu | India"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGenderInput">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select className="newUserSelectInput" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
