import React from 'react'
import { Link } from 'react-router'

function SidebarComponent() {
    return (
        <>

            <div className="fix-header" style={{fontSize:'20px'}}>
                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav slimscrollsidebar">
                        <div className="sidebar-head">
                            <h3><span className="fa-fw open-close"><i className="ti-close ti-menu" /></span> <span className="hide-menu">Navigation</span></h3>
                        </div>
                        <ul className="nav" id="side-menu">
                            <li style={{ padding: '70px 0 0' }}>
                                <Link to="/dashboard" className="waves-effect"><i className="fa fa-clock-o fa-fw" aria-hidden="true" />Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/form" className="waves-effect"><i className="fa fa-table fa-fw" aria-hidden="true" />Form</Link>
                            </li>

                            <li>
                                <Link to="/product" className="waves-effect"><i className="fa fa-table fa-fw" aria-hidden="true" />Product List </Link>
                            </li>

                        </ul>
                        <div className="center p-20">
                            <a href="https://wrappixel.com/templates/ampleadmin/" target="_blank" className="btn btn-danger btn-block waves-effect waves-light">Upgrade to Pro</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SidebarComponent


