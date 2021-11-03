import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>GTMAA</h1>
            <img src="/assets/icons/apple-touch-icon.png" />
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/about-us">
                    About
                </Link>
                <Link activeClassName={style.active} href="/canteen">
                    Canteen
                </Link>
                <Link activeClassName={style.active} href="/membership">
                    Membership
                </Link>
                <Link activeClassName={style.active} href="/shift-calendar">
                    Shift Calendar
                </Link>
                <Link activeClassName={style.active} href="/stations">
                    Stations
                </Link>
            </nav>
        </header>
    );
};

export default Header;
