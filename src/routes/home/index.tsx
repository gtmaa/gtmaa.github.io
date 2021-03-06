import { FunctionalComponent, h } from 'preact';
import cx from '../../lib/cx';
import style from './style.scss';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <section class={cx(style.section, style.group)}>
                <div class={cx(style.col, style.span_1_of_2)}>
                    <h1>WELCOME</h1>
                    <p>The members of the Greater Toronto Multiple Alarm Association welcome you to our voice on the internet. We are one of the largest fire buff clubs in Canada, providing canteen and rehab services to the Toronto Fire Services (and previous fire departments) for almost 40 years. Fires happen day and night, often in the worst weather possible. Our volunteers are prepared to answer the call whenever it comes.</p>
                    <p>The G.T.M.A.A. is an inclusive, non-profit organization that is always looking for new fire buffs and fire service enthusiasts to fill out our ranks. Persons of all ages, including those belonging to other public service organizations, are always welcome. Check out our event calendar and get in touch if you are interested in joining us.</p>
                </div>
                <img class={cx(style.col, style.span_1_of_2)} src="assets/people/2013-fallen-firefighter-memorial_thumb.jpg" />
            </section>

            <section>
                <h2>Club News</h2>
                <p><strong>November 2021</strong>: Our annual dinner will be held at the Canadiana Restaurant (5230 Dundas Street West, Toronto) on Saturday, November 20th, 2021. Cocktails will start at 6pm along and dinner will be served at 7pm. You have 3 choices for dinner: beef, chicken or fish. Price is $40 per person. You must show proof of vaccination along with valid ID the night of the dinner, if not already given to Jeremy. The restaurant requires this information. We ask that you pay the night of only, just in case things change. Please RSVP by November 16, 2021 to either <a href="mailto:macrye322@hotmail.com">Dave MacDonald</a> or <a href="mailto:jfmckittrick@hotmail.com">Frank McKittrick</a>.</p>
                <p><strong>September 2021</strong>: On Tuesday September 14 the club took delivery of the new Support 7. Due to COVID-19 protocols, members attended an open-house style event at the Rouge Hill GO Station parking lot. Check out <a href="https://www.blogto.com/eat_drink/2021/09/toronto-just-got-two-new-food-trucks-its-not-what-youre-thinking/">this article from blogTO</a>!</p>
            </section>

            <section>
                <h2>Meetings</h2>
                <p>A general business meeting is held on the third Tuesday of every month, starting at 7 P.M. Each meeting is open to guests with the exception of the April meeting. Most meetings conclude with some type of entertainment - either slides or a video or a guest speaker. Some months we hold our meetings off site at another fire service facility. Guests are advised to contact us before visiting to confirm the location.</p>
            </section>

            <section>
                <h2>The Trumpet</h2>
                <p>The Trumpet is the voice of the Greater Toronto Multiple Alarm Association. Since 1976 it has been the foremost source on fire service information in the Toronto area. No other publication gives you more - apparatus deliveries, department news, a monthly synopsis of major multiple alarm incidents, as well as the latest club news. Most issues are rounded out with interesting photos. For the low price of $10, receive a PDF version of The Trumpet in your inbox every month of the year. Contact us today to sign up for your subscription.</p>
            </section>
        </div>
    );
};

export default Home;
