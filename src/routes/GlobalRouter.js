import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "../views/Landing";
import {Overview} from "../views/Overview";
import BookDetails from "../views/BookDetails";
import NotFound from "../views/NotFound";
import {Header} from "../components/Header";
import ShoppingCart from "../views/ShoppingCart";
import {RentedBooks} from "../views/RentedBooks";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/books" element={<Layout><Overview /></Layout>} />
                <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
                <Route path="/cart" element={<Layout><ShoppingCart /></Layout>} />
                <Route path="/rentedBooks" element={<Layout><RentedBooks /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
