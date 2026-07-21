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
const HIDE_BEYOND_DAYS = 14;

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
 * Returns posts within the visible window, newest first.
 * The window runs from STALE_AFTER_MONTHS in the past to HIDE_BEYOND_DAYS in
 * the future, so events published too far in advance stay hidden until they
 * are within two weeks. Posts with an unparseable date are dropped.
 */
export function getActivePosts(posts: Post[], now: Date = new Date()): Post[] {
    const pastCutoff = new Date(now);
    pastCutoff.setMonth(pastCutoff.getMonth() - STALE_AFTER_MONTHS);

    const futureCutoff = new Date(now);
    futureCutoff.setDate(futureCutoff.getDate() + HIDE_BEYOND_DAYS);

    return posts
        .filter((post) => {
            const d = new Date(post.date);
            return !isNaN(d.getTime()) && d >= pastCutoff && d <= futureCutoff;
        })
        .sort((a, b) => b.date.localeCompare(a.date));
}
