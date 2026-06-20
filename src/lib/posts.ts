export interface Post {
    id: string;
    title: string;
    date: string;
    body: string;
    category?: string;
    location?: string;
    link?: string;
}

const STALE_AFTER_MONTHS = 6;

export function formatDate(date: string): string {
    const d = new Date(date);
    if (isNaN(d.getTime())) return date;
    return d.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    });
}

/**
 * Returns posts no older than STALE_AFTER_MONTHS, newest first.
 * Posts with an unparseable date are dropped.
 */
export function getActivePosts(posts: Post[], now: Date = new Date()): Post[] {
    const cutoff = new Date(now);
    cutoff.setMonth(cutoff.getMonth() - STALE_AFTER_MONTHS);

    return posts
        .filter((post) => {
            const d = new Date(post.date);
            return !isNaN(d.getTime()) && d >= cutoff;
        })
        .sort((a, b) => b.date.localeCompare(a.date));
}
