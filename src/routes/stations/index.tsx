import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const Stations: FunctionalComponent = () => {
    return (
        <div class={style.stations}>
            <h1>TORONTO FIRE STATION MAP</h1>

            <iframe title="Fire Stations in Toronto" class={style.map} src="https://www.google.com/maps/d/u/1/embed?mid=1iuypwfDOQwGxeCONOwVxQ_8j0nQ&z=11" frameBorder="0">Your browser does not support iFrames.</iframe>
        </div>
    );
};

export default Stations;
