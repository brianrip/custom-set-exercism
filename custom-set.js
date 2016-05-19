class CustomSet {

  constructor(set) {
    this.set = set;
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
}

module.exports = CustomSet;
