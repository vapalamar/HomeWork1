var expect = chai.expect;

describe('What bubble sort function returns', function () {
  it('should return an object which allows to control the bubble sort execution', function () {
    expect(bubbleSort([5, 4, 3, 2, 1])).to.be.a('object');
  });
});