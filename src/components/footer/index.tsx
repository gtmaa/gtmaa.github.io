import { FunctionalComponent, h } from 'preact';
import cx from '../../lib/cx';
import style from './style.scss';

const Footer: FunctionalComponent = () => {
    return (
        <footer class={style.footer}>
                <a class={cx(style.socialLink, style.grow)} href="https://instagram.com/gtmaa.sup7"><i class="fab fa-instagram"></i></a>
                <a class={cx(style.socialLink, style.grow)} href="https://fb.com/gtmaa"><i class="fab fa-facebook-square"></i></a>
                <a class={cx(style.socialLink, style.grow)} href="https://twitter.com/gtmaa"><i class="fab fa-twitter-square"></i></a>
                <a class={cx(style.socialLink, style.grow)} href="mailto:gtmaa1975@gmail.com"><i class="far fa-envelope"></i></a>
        </footer>
    );
};

export default Footer;
