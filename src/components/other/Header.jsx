import React from 'react';

const logoutUser = () =>{
  localStorage.setItem('loggedInUser', ' ')
  window.location.reload()
}
const Header = () => {
 
  return (
    <div>
      <div className=" flex items-start justify-between  text-white px-8 py-9">
        {/* Greeting Section */}
        <h1 className="text-3xl font-medium">
          Hello <br />
          <span className="text-4xl font-bold">username</span>
        </h1>

        {/* Logout Button */}
        <button onClick={logoutUser} className="btn btn-outline btn-error">LogOut</button>
      </div>
    </div>
  );
};

export default Header;

