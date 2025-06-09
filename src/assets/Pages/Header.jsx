import React from 'react'

function Header() {
  return (
    <>

    <div className="container">
        <nav className="navbar navbar-default navbar-static-top m-b-0">
                        <div className="navbar-header">
                            <div className="top-left-part">
                                {/* Logo */}
                                <a className="logo" href="index.html">
                                    {/* Logo icon image, you can use font-icon also */}<b>
                                        {/*This is dark logo icon*/}<img src="plugins/images/admin-logo.png" alt="home" className="dark-logo" />{/*This is light logo icon*/}<img src="plugins/images/admin-logo-dark.png" alt="home" className="light-logo" />
                                    </b>
                                    {/* Logo text image you can use text also */}<span className="hidden-xs">
                                        {/*This is dark logo text*/}<img src="plugins/images/admin-text.png" alt="home" className="dark-logo" />{/*This is light logo text*/}<img src="plugins/images/admin-text-dark.png" alt="home" className="light-logo" />
                                    </span> </a>
                            </div>
                            {/* /Logo */}
                            <ul className="nav navbar-top-links navbar-right pull-right">
                                <li>
                                    <form role="search" className="app-search hidden-sm hidden-xs m-r-10">
                                        <input type="text" placeholder="Search..." className="form-control" /> <a href="#"><i className="fa fa-search" /></a> </form>
                                </li>
                                <li>
                                    <a className="profile-pic" href="#"> <img src="plugins/images/users/varun.jpg" alt="user-img" width={36} className="img-circle" /><b className="hidden-xs">Steave</b></a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-header */}
                        {/* /.navbar-top-links */}
                        {/* /.navbar-static-side */}
                    </nav>
    </div>
      
    </>
  )
}

export default Header
