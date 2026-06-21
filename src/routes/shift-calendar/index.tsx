import { FunctionalComponent, h } from 'preact';
import { Helmet } from 'react-helmet';
import style from './style.scss';

const ShiftCalendar: FunctionalComponent = () => {
    return (
        <div class={style.shift}>
            <Helmet>
                <title>2026 Toronto Fire Shift Calendar | GTMAA</title>
                <meta name="description" content="The 2026 Toronto Fire Services shift calendar." />
            </Helmet>
            <h1>2026 TORONTO FIRE SHIFT CALENDAR</h1>
            <p>The Toronto Fire Services Suppression Division is divided into four platoons, each working a 24-hour shift. Shift rotation is staggered over twenty-eight days as depicted in the below schedule provided by the Toronto Professional Firefighters Association. The staggered rotation allows each platoon to have two complete weekends off per month. Shift change occurs at 07:00 hrs each morning.</p>
            <img class={style.legend} src="/assets/shift-calendars/shift-legend.jpg" alt="Legend: red is A platoon working, grey is B, blue is C, yellow is D" />
            <img class={style.cal} src="/assets/shift-calendars/2026.jpg" alt="2026 Toronto Fire Services shift calendar" />
        </div>
    );
};

export default ShiftCalendar;
