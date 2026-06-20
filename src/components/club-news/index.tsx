import { FunctionalComponent, h } from 'preact';
import { Post, getActivePosts, formatDate } from '../../lib/posts';
import postsData from '../../data/posts.json';
import style from './style.scss';

const posts = getActivePosts(postsData as Post[]);

const ClubNews: FunctionalComponent = () => {
    return (
        <section>
            <h2>Club News</h2>
            {posts.length === 0 ? (
                <p class={style.empty}>Check back soon for the latest club news and Support 7 callouts.</p>
            ) : (
                <div class={style.grid}>
                    {posts.map((post) => (
                        <article key={post.id} class={style.card}>
                            {post.category && <span class={style.badge}>{post.category}</span>}
                            <h3>{post.title}</h3>
                            {post.location && (
                                <p class={style.location}>
                                    <i class="fas fa-map-marker-alt" aria-hidden="true" /> {post.location}
                                </p>
                            )}
                            <time class={style.date} dateTime={post.date}>{formatDate(post.date)}</time>
                            <p>{post.body}</p>
                            {post.link && (
                                <p class={style.cardLink}><a href={post.link}>Related link</a></p>
                            )}
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ClubNews;
