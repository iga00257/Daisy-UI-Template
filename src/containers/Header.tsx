import { themeChange } from 'theme-change'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import IconMdiMagnify from '~icons/mdi/magnify'
import IconMdiMenu from '~icons/mdi/menu'

import { rightDrawerSlice } from '../app/store'
import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'

function Header () {
  const dispatch = useDispatch()
  const { noOfNotifications, pageTitle } = useSelector(state => state.header)
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'))

  useEffect(() => {
    themeChange(false)
    if (currentTheme === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme('dark')
      } else {
        setCurrentTheme('light')
      }
    }
    // 👆 false parameter is required for react project
  }, [])

  // Opening right sidebar for notification
  const openNotification = () => {
    dispatch(rightDrawerSlice.actions.openRightDrawer({ header: 'Notifications', bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }))
  }

  function logoutUser () {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
        <>
            <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">

                {/* Menu toogle for mobile view or small screen */}
                <div className="">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <IconMdiMenu className="h-5 inline-block w-5"/>
                    </label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>

            <div className="order-last">

                {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection,
                also includes corporate and retro themes in tailwind.config file */}

                <select className="select border select-sm mr-4 bg-white" data-choose-theme>
                    {/* <option disabled selected>Theme</option> */}
                    <option value="light">Default</option>
                    <option value="dark">Dark</option>
                    <option value="corporate">Corporate</option>
                    <option value="retro">Retro</option>
                    <option value="business">business</option>
                    <option value="autumn">autumn</option>
                    <option value="cupcake">cupcake</option>
                    <option value="cyberpunk">cyberpunk</option>
                    <option value="forest">forest</option>
                    <option value="winter">winter</option>
                    <option value="bumblebee">bumblebee</option>
                    <option value="coffee">coffee</option>
                    <option value="lemonade">lemonade</option>
                    <option value="night">night</option>
                    <option value="fantasy">fantasy</option>
                    <option value="lofi">lofi</option>
                    <option value="luxury">luxury</option>
                    <option value="acid">acid</option>
                    <option value="dracula">dracula</option>
                    <option value="cmyk">cmyk</option>
                    <option value="black">black</option>
                    <option value="wireframe">wireframe</option>
                    <option value="pastel">pastel</option>
                    <option value="garden">garden</option>
                    <option value="valentine">valentine</option>
                    <option value="synthwave">synthwave</option>
                    <option value="emerald">emerald</option>
                </select>
                {/* corporate, default, autumn, winter(1分), lemonade!!!!, luxury!!!, cupcakes */}

                {/* Notification icon */}
                <button className="btn btn-ghost ml-4  btn-circle" onClick={() => {
                  openNotification()
                }}>
                    <div className="indicator">
                        <IconMdiMagnify className="h-6 w-6"/>
                        {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null }
                    </div>
                </button>

                {/* Profile icon, opening menu on click */}
                <div className="dropdown dropdown-end ml-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="profile" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="justify-between">
                        <Link to={'/app/settings-profile'}>
                            Profile Settings
                            <span className="badge">New</span>
                            </Link>
                        </li>
                        <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li>
                        <div className="divider mt-0 mb-0"></div>
                        <li><a onClick={logoutUser}>Logout</a></li>
                    </ul>
                </div>
            </div>
            </div>

        </>
  )
}

export default Header
