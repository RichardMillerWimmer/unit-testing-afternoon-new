import shortenText from '../../src/utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText does not change string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should shorten string to 100 and add ...', () => {
    expect.assertions(2);

    const textShort = shortenText(longText);

    expect(textShort).not.toHaveLength(longText.length);
    // expect(textShort).stringContaining('...');
    expect(textShort.slice(-3)).toBe('...');
});

test('wordCount correctly counts the number of words', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachtUserName correctly attches users full name to post', () => {
    const postsArray = attachUserName(users, posts);
    expect(postsArray[0]).toHaveProperty('displayName');
});

test('attachUserName correctly removes post with no matching user', () => {
    const postsArray = attachUserName(user, posts);
    const removedPost = post[4];
    expect(postsArray).not.toContainEqual(removedPost);
});