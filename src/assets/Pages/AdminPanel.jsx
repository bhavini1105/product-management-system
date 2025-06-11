import React from 'react'
import { Link } from 'react-router'
import SidebarComponent from './SidebarComponent'
import Header from './Header'

function AdminPanel() {
    return (
        <>
            <div className="fix-header" style={{fontSize:'20px'}}>
                

            {/* ============================================================== */}
            {/* Wrapper */}
            {/* ============================================================== */}
            <div id="wrapper">
                {/* ============================================================== */}
                {/* Topbar header - style you can find in pages.scss */}
                {/* ============================================================== */}
                {/* <SidebarComponent/> */}
                <Header />
                {/* End Top Navigation */}
                {/* ============================================================== */}
                {/* Left Sidebar - style you can find in sidebar.scss  */}
                <SidebarComponent />
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* End Left Sidebar */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Page Content */}
                {/* ============================================================== */}
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row bg-title">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <h4 className="page-title">Dashboard</h4> </div>
                            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                                <a href="https://wrappixel.com/templates/ampleadmin/" target="_blank" className="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Upgrade to Pro</a>
                                <ol className="breadcrumb">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                </ol>
                            </div>
                            {/* /.col-lg-12 */}
                        </div>
                        {/* /.row */}
                        {/* ============================================================== */}
                        {/* Different data widgets */}
                        {/* ============================================================== */}
                        {/* .row */}
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Total Visit</h3>
                                    <ul className="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash" />
                                        </li>
                                        <li className="text-right"><i className="ti-arrow-up text-success" /> <span className="counter text-success">659</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Total Page Views</h3>
                                    <ul className="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash2" />
                                        </li>
                                        <li className="text-right"><i className="ti-arrow-up text-purple" /> <span className="counter text-purple">869</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="white-box analytics-info">
                                    <h3 className="box-title">Unique Visitor</h3>
                                    <ul className="list-inline two-part">
                                        <li>
                                            <div id="sparklinedash3" />
                                        </li>
                                        <li className="text-right"><i className="ti-arrow-up text-info" /> <span className="counter text-info">911</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*/.row */}
                        {/*row */}
                        {/* /.row */}
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div className="white-box">
                                    <h3 className="box-title">Products Yearly Sales</h3>
                                    <ul className="list-inline text-right">
                                        <li>
                                            <h5><i className="fa fa-circle m-r-5 text-info" />Mac</h5> </li>
                                        <li>
                                            <h5><i className="fa fa-circle m-r-5 text-inverse" />Windows</h5> </li>
                                    </ul>
                                    <div id="ct-visits" style={{ height: 20 }} />
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* table */}
                        {/* ============================================================== */}
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <div className="white-box">
                                    <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                                        <select className="form-control pull-right row b-none">
                                            <option>March 2017</option>
                                            <option>April 2017</option>
                                            <option>May 2017</option>
                                            <option>June 2017</option>
                                            <option>July 2017</option>
                                        </select>
                                    </div>
                                    <h3 className="box-title">Recent sales</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>NAME</th>
                                                    <th>STATUS</th>
                                                    <th>DATE</th>
                                                    <th>PRICE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="txt-oflo">Elite admin</td>
                                                    <td>SALE</td>
                                                    <td className="txt-oflo">April 18, 2017</td>
                                                    <td><span className="text-success">$24</span></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="txt-oflo">Real Homes WP Theme</td>
                                                    <td>EXTENDED</td>
                                                    <td className="txt-oflo">April 19, 2017</td>
                                                    <td><span className="text-info">$1250</span></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td className="txt-oflo">Ample Admin</td>
                                                    <td>EXTENDED</td>
                                                    <td className="txt-oflo">April 19, 2017</td>
                                                    <td><span className="text-info">$1250</span></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td className="txt-oflo">Medical Pro WP Theme</td>
                                                    <td>TAX</td>
                                                    <td className="txt-oflo">April 20, 2017</td>
                                                    <td><span className="text-danger">-$24</span></td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td className="txt-oflo">Hosting press html</td>
                                                    <td>SALE</td>
                                                    <td className="txt-oflo">April 21, 2017</td>
                                                    <td><span className="text-success">$24</span></td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td className="txt-oflo">Digital Agency PSD</td>
                                                    <td>SALE</td>
                                                    <td className="txt-oflo">April 23, 2017</td>
                                                    <td><span className="text-danger">-$14</span></td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td className="txt-oflo">Helping Hands WP Theme</td>
                                                    <td>MEMBER</td>
                                                    <td className="txt-oflo">April 22, 2017</td>
                                                    <td><span className="text-success">$64</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* chat-listing & recent comments */}
                        {/* ============================================================== */}
                        <div className="row">
                            {/* .col */}
                            <div className="col-md-12 col-lg-8 col-sm-12">
                                <div className="white-box">
                                    <h3 className="box-title">Recent Comments</h3>
                                    <div className="comment-center p-t-10">
                                        <div className="comment-body">
                                            <div className="user-img"> <img src="plugins/images/users/pawandeep.jpg" alt="user" className="img-circle" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Pavan kumar</h5><span className="time">10:20 AM   20  may 2016</span>
                                                <br /><span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span> <a href="javacript:void(0)" className="btn btn btn-rounded btn-default btn-outline m-r-5"><i className="ti-check text-success m-r-5" />Approve</a><a href="javacript:void(0)" className="btn-rounded btn btn-default btn-outline"><i className="ti-close text-danger m-r-5" /> Reject</a>
                                            </div>
                                        </div>
                                        <div className="comment-body">
                                            <div className="user-img"> <img src="plugins/images/users/sonu.jpg" alt="user" className="img-circle" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Sonu Nigam</h5><span className="time">10:20 AM   20  may 2016</span>
                                                <br /><span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span>
                                            </div>
                                        </div>
                                        <div className="comment-body b-none">
                                            <div className="user-img"> <img src="plugins/images/users/arijit.jpg" alt="user" className="img-circle" />
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Arijit singh</h5><span className="time">10:20 AM   20  may 2016</span>
                                                <br /><span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="panel">
                                    <div className="sk-chat-widgets">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                CHAT LISTING
                                            </div>
                                            <div className="panel-body">
                                                <ul className="chatonline">
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/varun.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                                                    </li>
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/genu.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                                                    </li>
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/ritesh.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                                                    </li>
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/arijit.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                                                    </li>
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/govinda.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                                                    </li>
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/hritik.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                                                    </li>
                                                    <li>
                                                        <div className="call-chat">
                                                            <button className="btn btn-success btn-circle btn-lg" type="button"><i className="fa fa-phone" /></button>
                                                            <button className="btn btn-info btn-circle btn-lg" type="button"><i className="fa fa-comments-o" /></button>
                                                        </div>
                                                        <a href="javascript:void(0)"><img src="plugins/images/users/varun.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                    </div>
                    {/* /.container-fluid */}
                    <footer className="footer text-center"> 2017 © Ample Admin brought to you by wrappixel.com </footer>
                </div>
                {/* ============================================================== */}
                {/* End Page Content */}
                {/* ============================================================== */}
            </div>

            </div>


        </>
    )
}

export default AdminPanel
