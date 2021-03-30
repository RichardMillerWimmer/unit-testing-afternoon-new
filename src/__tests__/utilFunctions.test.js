import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';


test('shortenText does not change string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should shorten string to 100 and add ...', () => {
    expect.assertions(2);

    const textShorten = shortenText(longText);

    expect(textShorten).not.toHaveLength(longText.length);
    // expect(textShorten).stringContaining('...');
    expect(textShorten.slice(-3)).toBe('...');
});

test('wordCount correctly counts the number of words', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachtUserName correctly attches users full name to post', () => {
    const postsArray = attachUserName(users, posts);
    expect(postsArray[0]).toHaveProperty('displayName');
});

test('attachUserName correctly removes post with no matching user', () => {
    const postsArray = attachUserName(users, posts);
    const removedPost = posts[4];
    expect(postsArray).not.toContainEqual(removedPost);
});