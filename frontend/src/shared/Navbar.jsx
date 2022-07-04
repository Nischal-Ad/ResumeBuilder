import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdOutlineClear } from 'react-icons/md';
import Logo from '../img/logo.png';
import LogoInactive from '../img/logo-inactive.png';
import { LandingNav, UserNav, AdminNav } from './NavLinks';
import { useSelector } from 'react-redux';
import Profile from './Profile';

const Navbar = () => {
  const { isAuthenticated, role } = useSelector((state) => state.user);

  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const changebg = () => {
    if (window.scrollY >= 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener('scroll', changebg);

  return (
    <>
      <section
        className={`z-20  top-0 w-full fixed ${
          active || dropdown
            ? 'bg-gray-100 animate__animated animate__fadeIn animate__faster'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between py-5 items-center w-full">
          <Link className="px-5 flex items-center" to="/">
            <img
              src={active || dropdown ? Logo : LogoInactive}
              alt=""
              className="w-10"
            />
            <h2
              className={active || dropdown ? 'text-[#171849]' : 'text-black'}
              onClick={() => setDropdown(false)}
            >
              {/* dropdown active huda text change huna banauna  */}
              Resume Builder
            </h2>
          </Link>
          <div className={`${active ? 'text-[#171849]' : 'text-black'}`}>
            <div className={`hidden md:block `}>
              {isAuthenticated ? (
                <>
                  {role === 'admin' ? (
                    <>
                      <div className="flex">
                        <AdminNav drop={(dropdown) => setDropdown(dropdown)} />
                        <Profile />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex">
                        <UserNav drop={(dropdown) => setDropdown(dropdown)} />
                        <Profile />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <LandingNav drop={(dropdown) => setDropdown(dropdown)} />
              )}
            </div>
            <div className="md:hidden pr-5">
              <div className={dropdown ? 'hidden' : 'block'}>
                <HiOutlineMenuAlt1
                  className={`w-10 h-10 animate__animated animate__fadeIn animate__faster ${
                    active ? 'text-[#171849]' : 'text-black'
                  }`}
                  onClick={() => setDropdown(true)}
                />
              </div>
              <div className={dropdown ? 'block' : 'hidden'}>
                <MdOutlineClear
                  className={`animate__animated animate__fadeIn animate__faster w-10 h-10 ${
                    active || dropdown ? 'text-[#171849]' : 'text-gray-200'
                  }`}
                  onClick={() => setDropdown(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`fixed w-full bg-gray-100 text-[#171849] h-80 py-4 top-20 z-10 animate__animated animate__fadeIn animate__faster ${
          dropdown ? 'block ' : 'hidden'
        }`}
      >
        <div className="flex justify-center text-center h-full text-xl">
          {isAuthenticated ? (
            <UserNav drop={(dropdown) => setDropdown(dropdown)} />
          ) : (
            <LandingNav drop={(dropdown) => setDropdown(dropdown)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
