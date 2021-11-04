import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

const ShiftCalendar: FunctionalComponent = () => {
    return (
        <div class={style.shift}>
            <h1>TORONTO FIRE SHIFT CALENDAR</h1>
            <p>The Toronto Fire Services Suppression Division is divided into four platoons, each working a 24-hour shift. Shift rotation is staggered over twenty-eight days as depicted in the below schedule provided by the Toronto Professional Firefighters Association. The staggered rotation allows each platoon to have two complete weekends off per month. Shift change occurs at 07:00 hrs each morning.</p>
        </div>
    );
};

export default ShiftCalendar;
