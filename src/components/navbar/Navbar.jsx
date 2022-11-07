import { Link } from "react-router-dom"
import Desplegable from "./Desplegable";
import LoginView from "../usuarios/Login";

function Navbar(){
    return (
        <header class="p-3 text-bg-dark">
            <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                </a>
                
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <div >
                    <Desplegable/>
                </div>

                <li>
                    <a>
                        <Link to = {"/react"} className="nav-link px-2 text-secondary"> React </Link>
                    </a>
                </li>


                <li>
                    <a>
                        <Link to = {"/"} className="nav-link px-2 text-secondary"> Home </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/productos"} className ="nav-link px-2 text-white"> Productos </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/categorias"} className ="nav-link px-2 text-white"> Categorias </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/carrito"} className ="nav-link px-2 text-white"> Carrito </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/about"} className ="nav-link px-2 text-white"> About </Link>
                    </a>
                </li>

                <li>
                    <a>
                        <Link to = {"/circulos"} className ="nav-link px-2 text-white"> Circulos </Link>
                    </a>
                </li>

                
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
                </form>

                <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">
                    <a>
                        <Link to = {"/login"} className ="nav-link px-2 text-white"> Login </Link>
                    </a>
                    </button>
                <button type="button" class="btn btn-warning">Sign-up</button>
                </div>
            </div>
            
            </div>
        </header>

    );
}

export default Navbar;