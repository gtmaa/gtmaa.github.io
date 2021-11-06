import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const ScannerFeeds: FunctionalComponent = () => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const useDarkMode = mq.matches;
    let bg, fg;
    if (useDarkMode) {
        bg = '121212';
        fg = 'eee';
    } else {
        bg = 'fafafa';
        fg = '444';
    }

    return (
        <div class={style.scannerFeeds}>
            <h1>TORONTO FIRE SCANNER FEEDS</h1>

            <p>These feeds provide a live stream of TFS radio traffic for South and East Commands.</p>

            <section>
                <h2>Toronto Fire East Command</h2>
                <iframe class={style.player} src={`https://api.broadcastify.com/embed/player/?key=61000615&feedId=20553&html5=1&stats=1&as=1&bg=${bg}&fg=${fg}`} frameBorder="0">Your browser does not support iFrames.</iframe>

                <h2>Toronto Fire South Command and Automated Dispatch</h2>
                <iframe class={style.player} src={`https://api.broadcastify.com/embed/player/?key=61000615&feedId=3140&html5=1&stats=1&as=1&bg=${bg}&fg=${fg}`} frameBorder="0">Your browser does not support iFrames.</iframe>
            </section>
        </div>
    );
};

export default ScannerFeeds;
