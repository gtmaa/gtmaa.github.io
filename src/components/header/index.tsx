import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';
import { useCallback, useState } from 'preact/hooks';

const Header: FunctionalComponent = () => {
    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(!open), [open]);

    return (
        <header class={style.header}>
            <h1>GTMAA</h1>
            <img class={style.crest} src="/assets/icons/apple-touch-icon.png" />
            <div class={style.menuIcon} onClick={toggle}>
                {open ? (
                    <img src="/assets/close-menu-icon.svg" />
                    ) : (
                    <img src="/assets/hamburger-menu.icon.svg" />
                )}
            </div>
            <nav class={open ? style.open : ""}>
                <Link activeClassName={style.active} onClick={toggle} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} onClick={toggle} href="/about-us">
                    About
                </Link>
                <Link activeClassName={style.active} onClick={toggle} href="/canteen">
                    Canteen
                </Link>
                <Link activeClassName={style.active} onClick={toggle} href="/membership">
                    Membership
                </Link>
                <Link activeClassName={style.active} onClick={toggle} href="/live-feed">
                    Scanner Feeds
                </Link>
                <Link activeClassName={style.active} onClick={toggle} href="/shift-calendar">
                    Shift Calendar
                </Link>
                <Link activeClassName={style.active} onClick={toggle} href="/stations">
                    Stations
                </Link>
            </nav>
        </header>
    );
};

export default Header;
