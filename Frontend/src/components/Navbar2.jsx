import React, { useState } from "react";
import Login from "../login"; // Adjust the import path according to your project structure
import Register from "../register";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("login");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div data-theme="light">
      <div className="navbar bg-base-100 flex justify-center items-center">
        <div className="flex-0  w-10">
          <a className="btn btn-ghost normal-case mx-6 w-24">
            <img
              src="https://www.gonukkad.com/wp-content/uploads/2023/05/Etsy_logo.svg_.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="dropdown ml-16">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div>Categories</div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-96 p-4 shadow-lg"
          >
            <li className="relative group">
              <a className="justify-between">
                Jewellery
              </a>
              <div className="absolute left-full top-0 mt-1 hidden w-64 bg-base-100 shadow-lg group-hover:flex">
                <div className="flex flex-col items-center">
                <a href="www.google.com">
                  <img
                    src="https://i.etsystatic.com/37830045/r/il/52baca/4253736505/il_340x270.4253736505_oraw.jpg"
                    alt="Jewelry 1"
                    className="w-29 h-61"
                  />
                </a>
                <span className="text-center">Rings</span>
                </div>
                <div className="flex flex-col items-center">
                <a href="www.sst.com">
                  <img
                    src="https://i.etsystatic.com/16957344/c/970/770/213/313/il/27217e/6179138385/il_340x270.6179138385_r4q6.jpg"
                    alt="Jewelry 1"
                    className="w-29 h-61"
                  />
                </a>
                <span className="text-center">Bracelet</span>
                </div>
                <div className="flex flex-col items-center">
                <a href="www.xyz.com">
                  <img
                    src="https://i.etsystatic.com/37830045/r/il/52baca/4253736505/il_340x270.4253736505_oraw.jpg"
                    alt="Jewelry 1"
                    className="w-29 h-61"
                  />
                </a>
                <span className="text-center">Earings</span>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a className="justify-between">
                Craft supllies & tools
              </a>
              <div className="absolute left-full top-0 mt-1 hidden w-64 bg-base-100 shadow-lg group-hover:flex">
                <div className="flex flex-col items-center">
                <a href="www.google.com">
                  <img
                    src="https://i.etsystatic.com/19110971/r/il/0693af/5883282881/il_340x270.5883282881_fwaz.jpg"
                    alt="Jewelry 1"
                    className="w-39 h-61"
                  />
                </a>
                <span className="text-center">Sewing</span>
                </div>
                <div className="flex flex-col items-center">
                <a href="www.sst.com">
                  <img
                    src="https://i.etsystatic.com/41134623/r/il/9947b8/4945054726/il_340x270.4945054726_krvq.jpg"
                    alt="Jewelry 1"
                    className="w-39 h-41"
                  />
                </a>
                <span className="text-center">Napies</span>
                </div>
                <div className="flex flex-col items-center">
                <a href="www.xyz.com">
                  <img
                    src="https://i.etsystatic.com/39094327/c/2331/1851/667/0/il/bba4d5/5018353482/il_340x270.5018353482_8mwc.jpg"
                    alt="Jewelry 1"
                    className="w-39 h-41"
                  />
                </a>
                <span className="text-center">Tool kit</span>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a className="justify-between">
                Baby
              </a>
              <div className="absolute left-full top-0 mt-1 hidden w-64 bg-base-100 shadow-lg group-hover:flex">
                <div className="flex flex-col items-center">
                <a href="www.google.com">
                  <img
                    src="https://i.etsystatic.com/5557416/c/1000/1000/0/0/il/708591/4106776146/il_300x300.4106776146_nkel.jpg"
                    alt="Jewelry 1"
                    className="w-39 h-61"
                  />
                </a>
                <span className="text-center">Baby related</span>
                </div>
                <div className="flex flex-col items-center">
                <a href="www.sst.com">
                  <img
                    src="https://i.etsystatic.com/5136066/r/il/e4fa71/6122907962/il_300x300.6122907962_srli.jpg"
                    alt="Jewelry 1"
                    className="w-39 h-41"
                  />
                </a>
                <span className="text-center">Baby related</span>
                </div>
                <div className="flex flex-col items-center">
                <a href="www.xyz.com">
                  <img
                    src="https://i.etsystatic.com/36695636/r/il/cc6ef7/5839334773/il_340x270.5839334773_nmt5.jpg"
                    alt="Jewelry 1"
                    className="w-39 h-41"
                  />
                </a>
                <span className="text-center">Baby related</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1  justify-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="rounded-3xl input input-bordered border-black w-64 md:w-96"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn" onClick={() => openModal("login")}>
            Sign In
          </button>
          {isModalOpen && (
            <dialog open className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                {modalContent === "login" && (
                  <Login
                    setIsModalOpen={setIsModalOpen}
                    setModalContent={setModalContent}
                  />
                )}
                {modalContent === "register" && (
                  <Register
                    setIsModalOpen={setIsModalOpen}
                    setModalContent={setModalContent}
                  />
                )}
                <button
                  className="btn mt-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </dialog>
          )}
          <button className="btn btn-ghost btn-circle">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-37dfe8f0de47dca184c4a14efaaa2b3c"
              alt="Cart"
              className="w-6 h-6"
            />
          </button>
          <button className="btn btn-ghost btn-circle">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHx5-v8hVbhPJmolUFnkPimNjS1-rZoCyh9nz3pwGC8BgBF3fS9t8dueNmqsQSw5hZz0&usqp=CAU"
              alt="Gift"
              className="w-6 h-6"
            />
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
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-96 p-9 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
