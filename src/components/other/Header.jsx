import React from 'react';

const Header = () => {
  return (
    <div>
      <div className=" flex items-start justify-between  text-white px-8 py-9">
        {/* Greeting Section */}
        <h1 className="text-3xl font-medium">
          Hello <br />
          <span className="text-4xl font-bold">Saloni</span>
        </h1>

        {/* Logout Button */}
        <button className="btn btn-outline btn-error">LogOut</button>
      </div>
    </div>
  );
};

export default Header;

