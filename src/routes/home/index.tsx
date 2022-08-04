import { Component, h } from 'preact';
import { ContentfulClientApi, createClient } from 'contentful';
import cx from '../../lib/cx';
import style from './style.scss';

class Home extends Component<any, any> {
    client: ContentfulClientApi;

    constructor() {
        super();
        this.state = {posts: []}
        this.client = createClient({
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'fallback value',
            space: process.env.CONTENTFUL_SPACE_ID || 'fallback value',
        });
    }

    componentDidMount() {
        this.client.getEntries({content_type: 'post'})
            .then((response: any) => {
                const sortedItems = response.items.sort((a: any, b: any) =>  b.fields.date.localeCompare(a.fields.date));
                this.setState({posts: sortedItems});
            });
    };

    render() {
        return <div class={style.home}>
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
                {this.state.posts.map((post: any) => {
                    return <article key={post.sys.id}>
                                <h3>{post.fields.title}</h3>
                                <i>Published {new Date(post.fields.date).toDateString()}</i>
                                <p>{post.fields.body}</p>
                                {post.fields.link &&
                                    <p>Related link: <a href={post.fields.link}>{post.fields.link}</a></p>
                                }
                                <br/>
                                <br/>
                            </article>
                })}
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
    };
};

export default Home;
