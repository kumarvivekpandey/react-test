import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <nav class="good navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">
          <img
            style={{ width: '100px' }}
            src=" https://i.ytimg.com/vi/G4FqkDrbsfk/maxresdefault.jpg"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Web Application
                </a>
                <a class="dropdown-item" href="#">
                  Mobile Application
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Software Application
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Contact</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <br />

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://image.freepik.com/free-psd/asian-food-restaurant-banner-template_23-2148912535.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://image.freepik.com/free-psd/asian-food-restaurant-banner-template_23-2148912535.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://image.freepik.com/free-psd/asian-food-restaurant-banner-template_23-2148912535.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
      <br />
      <div class="card-group">
        <div class="card">
          <img
            src="https://img.freepik.com/free-psd/website-presentation-mockup-isolated_359791-174.jpg?size=338&ext=jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Web Design</h5>
          </div>
        </div>
        <div class="card">
          <img
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=338&ext=jpg&uid=R49130424&ga=GA1.2.1737299664.1625292346"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">App development</h5>
          </div>
        </div>
        <div class="card">
          <img
            src="https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?size=338&ext=jpg&uid=R49130424&ga=GA1.2.1737299664.1625292346"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>

      <br />

      <p>hello</p>
    </div>
  );
}
