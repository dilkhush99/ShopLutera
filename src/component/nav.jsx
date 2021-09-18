import React from 'react';
import '../App.css'

class Nav extends React.Component {
    render() {
        return (
            //    Nav Bar Area Start 

            <nav class="navbar navbar-expand-md navbar-light">

                {/* <a class="navbar-brand" href="#!"><img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30" alt="mdb logo"></img></a> */}
                <span className="logo-text">Shop~Lutera</span>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                    aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a class="waves-effect" href="#!">Home</a></li>
                    <li class="breadcrumb-item"><a class="waves-effect" href="#!">About</a></li>
                    <li class="breadcrumb-item active"><a class="waves-effect" href="#!">Feedback</a></li>
                </ol>



                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>



                <div class="collapse navbar-collapse" id="basicExampleNav1">


                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#!" class="nav-link navbar-link-2 waves-effect">
                                <span class="badge badge-pill red">0</span>
                                <i class="fa fa-shopping-cart pl-0"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                                <i class="fa  fa-user m-0"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#!">Profile</a>
                                <a class="dropdown-item" href="#!">Create an acoount</a>
                                <a class="dropdown-item" href="#!">Help Center</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link waves-effect">
                                Shop
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link waves-effect">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link waves-effect">
                                Sign in
                            </a>
                        </li>
                        <li class="nav-item pl-2 mb-2 mb-md-0">
                            <a href="#!" type="button"
                                class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
                        </li>
                    </ul>

                </div>
            </nav>


        );
    }
}
export default Nav;