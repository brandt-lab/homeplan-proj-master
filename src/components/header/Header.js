import React from 'react'
import "../header/header.css"
import {SiHomebridge} from 'react-icons/si'
import {ImEarth} from 'react-icons/im'
import  {FaShoppingCart} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'



export default function Header() {
  return (
    <div>
<h1>MY FIRST PULL !!!!</h1>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand g-3" href="#"><SiHomebridge className='brand-icon'/> Manaspce Constructions</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2   mb-lg-0">
        <li class="nav-item me-3">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link  text-white" href="#"><ImEarth className='lang-icon  text-white'/> Language</a>
        </li>
        <li class="nav-item me-3 ">
          <a class="nav-link  text-white" href="#">Link</a>
        </li>
       
        <li class="nav-item dropdown me-3">
          <a class="nav-link dropdown-toggle  text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            List your plans
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

      <div className='ms-2 d-flex '>
        <FaShoppingCart className='me-3 icon'/>
        <FaRegBell  className='me-5 icon'/>
      </div>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}
