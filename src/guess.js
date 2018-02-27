
export default class Guess {

  constructor(hash) {
    if (hash) {
      Object.keys(hash).forEach((k) => {
        this[k] = hash[k];
      });
    } else {
     this.guesser = '';
     this.sex = '';
     this.length = '';
     this.weight = '';
     this.date = '';
     this.time = '';
     this.name = '';
     this.comment = '';
    }
  }

}