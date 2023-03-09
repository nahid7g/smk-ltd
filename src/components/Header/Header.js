import React from 'react'
import './Header.css'

const Header = () => {
  const menu = (
    <>
      <li>
        <a href='/dashboard'>Dashboard</a>
      </li>
      <li>
        <a href='/cargo-gear'>Cargo Gear</a>
      </li>
      <li>
        <a href='/break-down'>Break Down</a>
      </li>
      <li>
        <a href='/daily-reports'>Daily Reports</a>
      </li>
      <li>
        <a href='/cargo-operation'>Cargo Operation</a>
      </li>
      <li>
        <a href='/bunker'>Bunker</a>
      </li>
      <li>
        <a href='/time-loss'>Time Loss</a>
      </li>
      <li>
        <a href='/port-turn-out'>Port Turn Out</a>
      </li>
      <li>
        <a href='/ballast-tank'>Ballast Tank</a>
      </li>
      <li>
        <a href='/demarrage-and-despatch'>Demarrage & Despatch</a>
      </li>
      <li>
        <a href='/voyage-summary'>Voyage Summary</a>
      </li>
    </>
  )
  return (
    <header className='navbar bg-black text-white'>
      <div className='flex'>
        <div className='logo'>
          <a href='/' className='btn btn-ghost normal-case text-xl'>
            SMK LTD.
          </a>
        </div>
        {/* Navbar */}
        <div className='hidden xl:flex menu-lg ml-auto'>
          <ul className='menu menu-horizontal text-xs'>{menu}</ul>
        </div>
      </div>
      {/* Navbar for Mobile */}
      <div className='ml-auto xl:hidden relative'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-3/4 menu-sm text-black'
          >
            {menu}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
