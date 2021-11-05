import { FunctionalComponent, h } from 'preact';
import cx from '../../lib/cx';
import style from './style.scss';

const Membership: FunctionalComponent = () => {
    return (
        <div class={style.membership}>
            <h1>MEMBERSHIP</h1>

            <div class={cx(style.section, style.group)}>
                <div class={cx(style.col, style.span_2_of_3)}>
                    <p>The lifeblood of The Greater Toronto Multiple Alarm Association is it’s members. Since it’s inception in 1975, the GTMAA has had the privilege to include among it’s membership more than 100 men and women who, together, have contributed tens of thousands of volunteer hours giving something back to the community in which they live.</p>
                    <p>Our members have always come from all walks of life. All with varied interests in the fire service – whether it be volunteering on the Support 7 Canteen, taking fire photographs, listening to radio scanners, or simply coming out to our meetings to talk about what’s new in the fire service. Persons of all ages, including those belonging to other public service organizations, are always welcome.</p>
                </div>
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/members-and-canteen-at-station-221-opening.jpg" />
            </div>

            <section>
                <div class={cx(style.section, style.group)}>
                    <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/carolyn-and-jen-at-mississauga-call.jpg" />
                    <div class={cx(style.col, style.span_2_of_3)}>
                        <h2>Application process</h2>
                        <p>The members of the Greater Toronto Multiple Alarm Association take their membership seriously. Those persons believing that they may wish to become members in GTMAA are invited to join us at our regular monthly meetings to see what we are all about. A probationary membership is offered to prospective members after they have satisfied the GTMAA Executive Board of their sincerity and maturity. Full membership may be offered at a later time by the General Membership. All members work hard to uphold our bylaws concerning good conduct.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Membership;
