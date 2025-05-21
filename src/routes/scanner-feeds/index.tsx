import { FunctionalComponent, h } from 'preact';
import { Helmet } from 'react-helmet';
import style from './style.scss';

const ScannerFeeds: FunctionalComponent = () => {
    let bg = 'fafafa';
    let fg = '444';

    if (typeof window !== "undefined") {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const useDarkMode = mq.matches;
        if (useDarkMode) {
            bg = '121212';
            fg = 'eee';
        }
    }

    return (
        <div class={style.scannerFeeds}>
            <Helmet>
                <title>Greater Toronto Multiple Alarm Association - Scanner Feeds</title>
            </Helmet>
            <h1>TORONTO FIRE SCANNER FEEDS</h1>

            <p>This feed provides a live stream of TFS radio traffic for South Command and the Automated Dispatch channel.</p>

            <section>
                <h2>Toronto Fire South Command and Automated Dispatch</h2>
                <iframe class={style.player} src={`https://api.broadcastify.com/embed/player/?key=61000615&feedId=3140&html5=1&stats=1&as=1&bg=${bg}&fg=${fg}`} frameBorder="0">Your browser does not support iFrames.</iframe>
            </section>
        </div>
    );
};

export default ScannerFeeds;
