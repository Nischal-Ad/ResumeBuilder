import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const LandingNav = ({ drop }) => {
	return (
		<>
			<ul className='flex justify-around flex-col md:flex-row h-full'>
				<li className='mx-5 cursor-pointer '>
					<Link
						to='home'
						activeClass='active'
						smooth={true}
						spy={true}
						duration={1000}
						className={`cursor-pointer`}
						onClick={() => drop(false)}
					>
						{' '}
						Home
					</Link>
				</li>
				<li className='mx-5 cursor-pointer  '>
					{' '}
					<Link
						to='about'
						activeClass='active'
						spy={true}
						smooth={true}
						duration={1000}
						className={`cursor-pointer `}
						onClick={() => drop(false)}
					>
						{' '}
						About Us
					</Link>
				</li>
				<li className='mx-5 cursor-pointer '>
					{' '}
					<Link
						to='goals'
						activeClass='active'
						smooth={true}
						spy={true}
						duration={1000}
						className='cursor-pointer'
						onClick={() => drop(false)}
					>
						{' '}
						Golas
					</Link>
				</li>
				<li className='mx-5 cursor-pointer '>
					{' '}
					<Link
						to='samples'
						smooth={true}
						spy={true}
						activeClass='active'
						duration={1000}
						className='cursor-pointer'
						onClick={() => drop(false)}
					>
						{' '}
						Samples
					</Link>
				</li>
				<li className='mx-5 cursor-pointer '>
					{' '}
					<Link
						to='work'
						activeClass='active '
						smooth={true}
						spy={true}
						duration={1000}
						className='cursor-pointer'
						onClick={() => drop(false)}
					>
						{' '}
						Works
					</Link>
				</li>
				<li className='mx-5 cursor-pointer '>
					{' '}
					<NavLink
						to='/auth'
						className='font-bold text-[#D36443]'
						onClick={() => drop(false)}
					>
						{' '}
						Login / SignUp
					</NavLink>
				</li>
			</ul>
		</>
	);
};

const UserNav = ({ drop }) => {
	return (
		<>
			<ul className='flex justify-around flex-col md:flex-row h-full'>
				<li className='mx-5 cursor-pointer '>
					<NavLink className='active:active' to='/' onClick={() => drop(false)}>
						{' '}
						Home
					</NavLink>
				</li>

				<li className='mx-5 cursor-pointer '>
					<NavLink
						className='active:active'
						to='/resume'
						onClick={() => drop(false)}
					>
						{' '}
						Resume
					</NavLink>
				</li>
				<li className='mx-5 cursor-pointer md:hidden'>
					<NavLink
						className='active:active'
						to='/profile'
						onClick={() => drop(false)}
					>
						{' '}
						Profile
					</NavLink>
				</li>

				<li className='mx-5 cursor-pointer '>
					<NavLink
						className='active:active'
						to='/help'
						onClick={() => drop(false)}
					>
						{' '}
						FAQ ?
					</NavLink>
				</li>
			</ul>
		</>
	);
};

const AdminNav = ({ drop }) => {
	return (
		<>
			<ul className='flex justify-around flex-col md:flex-row h-full'>
				<li className='mx-5 cursor-pointer '>
					<NavLink className='active:active' to='/' onClick={() => drop(false)}>
						{' '}
						Home
					</NavLink>
				</li>

				<li className='mx-5 cursor-pointer md:hidden'>
					<NavLink
						className='active:active'
						to='/profile'
						onClick={() => drop(false)}
					>
						{' '}
						Profile
					</NavLink>
				</li>

				<li className='mx-5 cursor-pointer '>
					<NavLink
						className='active:active'
						to='/users'
						onClick={() => drop(false)}
					>
						{' '}
						Users
					</NavLink>
				</li>

				<li className='mx-5 cursor-pointer '>
					<NavLink
						className='active:active'
						to='/resumes'
						onClick={() => drop(false)}
					>
						{' '}
						Resumes
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export { LandingNav, UserNav, AdminNav };
