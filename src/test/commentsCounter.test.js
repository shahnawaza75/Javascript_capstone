import totalComments from '../modules/commentsCounter.js';

const comment = [
  {
    username: 'rochy',
    comment: 'Great movie',
  },
  {
    username: 'roch',
    comment: 'Great movie',
  },
  {
    username: 'rotshidzwa',
    comment: 'Nice movie',
  },
];

describe('test comment count: ', () => {
  test('Return counts of comments', () => {
    expect(totalComments(comment)).toBe(3);
  });
});
