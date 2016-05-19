class CustomSet {

  constructor(set) {
    this.set = set || [];
  }

  eql(newSet) {
    var original = this.set;
    var secondSet = newSet.set;

    var results = []
    for (var i = 0; i < secondSet.length; i++) {
      if (original.includes(secondSet[i])) {
        results.push(true);
      } else {
        results.push(false);
      }
    }
    if (original.length != secondSet.length) {
      return false
    } else {
      return !results.includes(false)
    }
  }

  delete(value) {
    var set = this.set;
    var index = set.indexOf(value);
    if (index >=  0) {
      set.splice( index, 1 );
    }
    return this;
  }

  empty() {
    var set = this.set;
    this.set = []
    return this;
  }
}

module.exports = CustomSet;
