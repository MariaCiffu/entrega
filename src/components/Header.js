import React from "react";
import {Link} from "react-router-dom";
import "../styles/headerStyle.css"
import { FaShoppingCart } from "react-icons/fa";
import TotalItemsCart from "./TotalItemsCart";
import { MdMenuBook } from "react-icons/md";

export const Header = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <Link className="enlace-cabecera-books" to={`/books/`}>
                    <h1>La biblioteca de Ohara</h1>
                </Link>
                <>
                    <Link className="enlace-cabecera-menu" to={`/rentedBooks/`}>
                        <MdMenuBook className="menu-libros-alquilados"/>
                    </Link>
                    <Link className="enlace-cabecera-carrito" to={`/cart/`}>
                        <FaShoppingCart className="faShoppingCart"/>
                        <TotalItemsCart />
                    </Link>
                </>
            </nav>
        </div>
    );
}