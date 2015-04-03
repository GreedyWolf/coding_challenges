describe('Character Frequency', function(){

  it('should return an object', function(){
    expect(typeof characterFrequency('')).to.equal('object');
  });

  it('should work for apple', function(){
    expect(characterFrequency('apple')).to.deep.equal({ a: 1, p: 2, l: 1, e: 1 });
  });
  
  it('should work for mississippi', function(){
    expect(characterFrequency('mississippi')).to.deep.equal({ m: 1, i: 4, s: 4, p: 2 });
  });

  it('should not count space', function(){
    expect(characterFrequency('b a n a n a')).to.deep.equal({ b: 1, a: 3, n: 2 });
  });

  it('should treat uppercase and lowercase as same letter', function(){
    expect(characterFrequency('George Washington')).to.deep.equal({ g: 3, e: 2, o: 2, r: 1, w: 1, a: 1, s: 1, h: 1, i: 1, n: 2, t: 1 });
  });

  it('should stringify other input types', function(){
    expect(characterFrequency(true)).to.deep.equal({ t: 1, r: 1, u: 1, e: 1 });
    expect(characterFrequency(1212135)).to.deep.equal({ '1': 3, '2': 2, '3': 1, '5': 1 });
    expect(characterFrequency(null)).to.deep.equal({ n: 1, u: 1, l: 2 });
    expect(characterFrequency(undefined)).to.deep.equal({ u: 1, n: 2, d: 2, e: 2, f: 1, i: 1 });
  });

  it('should return empty object if no input', function(){
    expect(characterFrequency()).to.deep.equal({});
  });
});