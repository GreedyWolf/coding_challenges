describe('Pair of Sum', function(){

  it('should return a boolean value', function(){
    expect(typeof pairSum([1,2,3], 0)).to.equal('boolean');
  });

  it('should return false', function(){
    expect(pairSum([1,3,5,7], 9)).to.equal(false);
  });

  it('should return true', function(){
    expect(pairSum([1,3,5,7], 8)).to.equal(true);
  });

  it('should not count the same number twice', function(){
    expect(pairSum([1,3,5,7], 14)).to.equal(false);
  });

  it('should account repeated numbers', function(){
    expect(pairSum([0, 0, 1], 0)).to.equal(true);
  });

  it('should return false when array is empty', function(){
    expect(pairSum([],100)).to.equal(false);
  });
});