import 'mocha'
import { Query } from "./Query";

const query = new Query('gar');

describe('Query test', () => {
  describe('when calling isSubsequenceOf()', () => {
    it('should return true if subsequence of other', () => {
      expect(query.isASubsequenceOf('garchomp')).toBe(true);
      expect(query.isASubsequenceOf('gengar')).toBe(true);
      expect(query.isASubsequenceOf('gabriel')).toBe(true);
      expect(query.isASubsequenceOf('gbbbabbbr')).toBe(true);

    });

    it('should return false if not subsequence of other', () => {
      expect(query.isASubsequenceOf('pikachu')).toBe(false);
      expect(query.isASubsequenceOf('cofagrius')).toBe(false);
      expect(query.isASubsequenceOf('')).toBe(false);
    });
  })
});
