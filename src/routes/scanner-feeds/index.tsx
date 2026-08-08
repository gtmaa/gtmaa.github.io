import { FunctionalComponent, h } from 'preact';
import { Helmet } from 'react-helmet';
import style from './style.scss';

const ScannerFeeds: FunctionalComponent = () => {
    return (
        <div class={style.scannerFeeds}>
            <Helmet>
                <title>Greater Toronto Multiple Alarm Association - Scanner Feeds</title>
            </Helmet>
            <h1>TORONTO FIRE SCANNER FEEDS</h1>

            <p>This feed provides a live stream of TFS radio traffic for South Command and the Automated Dispatch channel.</p>

            <section>
                <h2>Toronto Fire South Command and Automated Dispatch</h2>
                <p>Broadcastify has discontinued embedded players on third-party websites, so the feed now opens on their site.</p>
                <a class={style.listenLink} href="https://www.broadcastify.com/listen/feed/3140" target="_blank" rel="noopener noreferrer">Listen on Broadcastify</a>
            </section>
        </div>
    );
};

export default ScannerFeeds;
