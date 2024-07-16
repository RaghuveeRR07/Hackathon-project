import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div data-theme="light">
      <div className="navbar bg-base-100 flex justify-center items-center">
        <div className="flex-0 w-10">
          <a className="btn btn-ghost normal-case mx-6 w-24"><img src="https://www.gonukkad.com/wp-content/uploads/2023/05/Etsy_logo.svg_.png"/></a>
        </div>
        <div className="flex-1 mx-auto justify-center items-center">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="rounded-3xl input input-bordered border-black w-64 md:w-96 "
            />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
          <button className="btn btn-primary"><Link to="/Login">Sign In</Link></button>
            <button className="btn btn-ghost btn-circle">
              <img src="https://qph.cf2.quoracdn.net/main-qimg-37dfe8f0de47dca184c4a14efaaa2b3c" alt="Cart" className="w-6 h-6" />
            </button>
            
            <button className="btn btn-ghost btn-circle">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHx5-v8hVbhPJmolUFnkPimNjS1-rZoCyh9nz3pwGC8BgBF3fS9t8dueNmqsQSw5hZz0&usqp=CAU" alt="Gift" className="w-6 h-6" />
            </button>
            
            </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
