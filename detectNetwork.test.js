/**
 * You'll eventually be given instructions how to use this file.
 */

mocha.setup('bdd');

// You don't actually want to fill *this* value in on line 8, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// const FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  /**
   * A Mocha test is just a function!
   * If the function throws an error when run, it fails.
   * If it doesn't throw an error when run, it doesn't fail.
   * To read more about mocha, visit mochajs.org
   *
   * Once you've read and understood this section, please comment it out.
   */

  // You will not be able to proceed with a failing test.
  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // This test doesn't really test anything at all and
  // will pass no matter what because returning doesn't do anything.
  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   const isEven = num => num / 2 === 0;

  //   return isEven(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  // it('Throws an error when expected behavior does not match actual behavior', function() {
  //   const isEven = num => num / 2 === 0;

  //   if (isEven(10) !== true) {
  //     throw new Error('10 should be even!');
  //   }
  // });


//});

describe('Diner\'s Club', function() {
  // Beware, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });


});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw,
  // so here is a helper function to throw an error if the input statement isn't true.
  const assert = (isTrue) => {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });


});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  const assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });


});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  const expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  // You can also use `should` instead of `expect`, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  const should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });


});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  const assert = chai.assert;
  it('has a prefix of 6011 and a length of 16', function(){
    assert(detectNetwork('6011324565457678') === 'Discover')
  });
  it('has a prefix of 6011 and a length of 19', function(){
    assert(detectNetwork('6011324397492054392') === 'Discover');
  });
  it('has a prefix of 65 and a length of 16', function(){
    assert(detectNetwork('6511324565457612') === 'Discover')
  });
  it('has a prefix of 65 and a length of 19', function(){
    assert(detectNetwork('6511324397492054312') === 'Discover');
  });
  for (let prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + '1234567891234') === 'Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + '1234567891234567') === 'Discover');
      });
    })(prefix);
  }

});

// Write full test coverage for the Maestro card
describe('Maestro', function() {

  const assert = chai.assert;
  let prefixes = ['5018', '5020', '5038', '6304'];
  for(let i = 0; i < prefixes.length; i++){
    let pref = prefixes[i];
    (function(){
      it('has a prefix of ' + pref + ' and a length of 12', function(){
        assert(detectNetwork(pref + '12345678') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 13', function(){
        assert(detectNetwork(pref + '123456789') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 14', function(){
        assert(detectNetwork(pref + '1234567891') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 15', function(){
        assert(detectNetwork(pref + '12345678912') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 16', function(){
        assert(detectNetwork(pref + '123456789123') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 17', function(){
        assert(detectNetwork(pref + '1234567891234') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 18', function(){
        assert(detectNetwork(pref + '12345678912345') === 'Maestro');
      });
      it('has a prefix of ' + pref + ' and a length of 19', function(){
        assert(detectNetwork(pref + '123456789123456') === 'Maestro');
      });
    })(prefixes);
  }
});

// Write full test coverage for the China UnionPay card
describe('China UnionPay', function(){
  const assert = chai.assert;

  for (let prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + '8472618746') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        assert(detectNetwork(prefix.toString() + '84726187465') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        assert(detectNetwork(prefix.toString() + '847261874654') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + '8472618746543') === 'China UnionPay');
      });
    })(prefix);
  }
  for (let prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + '8472618789123') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        assert(detectNetwork(prefix.toString() + '84726187898123') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        assert(detectNetwork(prefix.toString() + '847261878987123') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + '8472618789876123') === 'China UnionPay');
      });
    })(prefix);
  }
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        assert(detectNetwork(prefix.toString() + '847261878912') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        assert(detectNetwork(prefix.toString() + '8472618789812') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        assert(detectNetwork(prefix.toString() + '84726187898712') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        assert(detectNetwork(prefix.toString() + '847261878987612') === 'China UnionPay');
      });
    })(prefix);
  }
});

// Write full test coverage for the Switch card
describe('Switch', function(){
  const assert = chai.assert;

  it('has a prefix of 4903 and a length of 16', function(){
    assert(detectNetwork('4903245236155378') === 'Switch')
  });
  it('has a prefix of 4905 and a length of 16', function(){
    assert(detectNetwork('4905245236155378') === 'Switch')
  });
  it('has a prefix of 4911 and a length of 16', function(){
    assert(detectNetwork('4911524523615537') === 'Switch')
  });
  it('has a prefix of 4936 and a length of 16', function(){
    assert(detectNetwork('4936524523615537') === 'Switch')
  });
  it('has a prefix of 564182 and a length of 16', function(){
    assert(detectNetwork('5641822452361553') === 'Switch')
  });
  it('has a prefix of 633110 and a length of 16', function(){
    assert(detectNetwork('6331102452361553') === 'Switch')
  });
  it('has a prefix of 6333 and a length of 16', function(){
    assert(detectNetwork('6333524523615537') === 'Switch')
  });
  it('has a prefix of 6759 and a length of 16', function(){
    assert(detectNetwork('6759524523615537') === 'Switch')
  });

   it('has a prefix of 4903 and a length of 18', function(){
    assert(detectNetwork('490324523615537876') === 'Switch')
  });
  it('has a prefix of 4905 and a length of 18', function(){
    assert(detectNetwork('490524523615537876') === 'Switch')
  });
  it('has a prefix of 4911 and a length of 18', function(){
    assert(detectNetwork('4911524523615537876') === 'Switch')
  });
  it('has a prefix of 4936 and a length of 18', function(){
    assert(detectNetwork('4936524523615537876') === 'Switch')
  });
  it('has a prefix of 564182 and a length of 18', function(){
    assert(detectNetwork('564182245236155378') === 'Switch')
  });
  it('has a prefix of 633110 and a length of 18', function(){
    assert(detectNetwork('633110245236155378') === 'Switch')
  });
  it('has a prefix of 6333 and a length of 18', function(){
    assert(detectNetwork('6333524523615537876') === 'Switch')
  });
  it('has a prefix of 6759 and a length of 18', function(){
    assert(detectNetwork('6759524523615537876') === 'Switch')
  });

  it('has a prefix of 4903 and a length of 19', function(){
    assert(detectNetwork('4903245236155378762') === 'Switch')
  });
  it('has a prefix of 4905 and a length of 19', function(){
    assert(detectNetwork('4905245236155378762') === 'Switch')
  });
  it('has a prefix of 4911 and a length of 19', function(){
    assert(detectNetwork('4911524523615537876') === 'Switch')
  });
  it('has a prefix of 4936 and a length of 19', function(){
    assert(detectNetwork('4936524523615537876') === 'Switch')
  });
  it('has a prefix of 564182 and a length of 19', function(){
    assert(detectNetwork('5641822452361553782') === 'Switch')
  });
  it('has a prefix of 633110 and a length of 19', function(){
    assert(detectNetwork('6331102452361553782') === 'Switch')
  });
  it('has a prefix of 6333 and a length of 19', function(){
    assert(detectNetwork('6333524523615537876') === 'Switch')
  });
  it('has a prefix of 6759 and a length of 19', function(){
    assert(detectNetwork('6759524523615537876') === 'Switch')
  });
});

mocha.run();