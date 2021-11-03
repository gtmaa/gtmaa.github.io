import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Canteen: FunctionalComponent = () => {
    return (
        <div class={style.canteen}>
            <h1>CANTEEN</h1>

            <section>
                <p>It comes as no surprise that firefighters must undergo intense, physically demanding conditions while working ‘on the job’. The call for service may came through at any hour of the day or night, often without warning. The purpose of a mobile canteen unit is to provide firefighters with an opportunity for rehydration and rest, allowing quick recovery of work capacity. Though the GTMAA has operated a canteen service for many decades, the importance of fireground rehab was brought to the forefront when it became a formalized standard (NFPA 1584) for fire departments in 2008.</p>
                <p>Support 7 is the first purpose-built canteen utilized by the club and was specifically designed to get firefighters inside and out of the elements. Its namesake evolved from the former Scarborough station that it was originally assigned to, Station #7 at 740 Markham Road – now known as Station 231. The truck features a full-size fridge, microwave, and several coffee-makers, as well as a 5 kW generator and two 650 watt portable light stands. It is fully stocked with sports drinks, bottled water, hot beverages, and snacks.</p>
                <p>The truck is currently owned and maintained by Toronto Fire Services. Financial support for rehab supplies such as snacks and drinks is provided by the Toronto Professional Fire Fighters’ Association Local 3888.</p>
            </section>

            <section>
                <h2>Requesting Support 7</h2>
                <h3>AT AN OFFICIAL EMERGENCY SCENE</h3>
                <p>Support 7 is paged out via the Toronto Fire Services Communication Centre. Our first run area is primarily in North and East Commands. Please have the Incident Commander contact Toronto Fire to request the services of a canteen. There are volunteers on call 24/7.</p>

                <h3>FOR A PUBLIC RELATIONS or TRAINING EVENT</h3>
                <p>The designated event coordinator should place a request with needs and other pertinent details at least 2-3 weeks in advance. Final approval will be determined by TFS and the GTMAA Executive Board. Requests can be made via email to <a href="mailto:gtmaa1975@gmail.com">gtmaa1975@gmail.com</a></p>
            </section>

            <section>
                <h2>Retired Units</h2>
                <div>
                    <img style="float: right;" src="/assets/apparatus/1977-canteen.jpeg" />
                    <p>This is the rig that started it all – a 1963 Ford Vanette delivery van donated by the the Carling Brewing Company. The canteen was funded by the Scarborough Fire Fighter’s Association Local 626. In 1977 it was already past its prime, but it still provided the M.T.M.A.A. and Scarborough firefighters with almost 10 years of faithful service.</p>
                </div>
                <div>
                    <img style="float: right;" src="/assets/apparatus/SFDSUN1.jpeg" />
                    <p>In 1986, through the goodwill of Scarborough’s Fire Chief Bill Wretham, the original canteen truck was replaced with a surplus 1978 GMC mechanics van. The canteen truck was christened ‘Support Unit #1’ (or SUN 1) and was painted yellow like all other Scarborough apparatus from that era. MTMAA member Bob Viel directed the interior remodeling of this vehicle to make the best use of its space.</p>
                </div>
            </section>
        </div>
    );
};

export default Canteen;
