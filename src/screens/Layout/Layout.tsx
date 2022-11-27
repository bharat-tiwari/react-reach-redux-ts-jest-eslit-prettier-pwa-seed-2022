import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <section>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>
                <article>
                    <Outlet />
                </article>
            </section>
        </>
    );
};

export default Layout;
