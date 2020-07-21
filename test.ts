interface AABCE {
  A(): string
  B(): string
}

class ABC implements AABCE {
  A(): string{
    return "ABBB"
  }

  B(): string{
    return "B"
  }
}

interface BB {
  showDisplay():void
}


class Person implements BB{
  us: AABCE
  constructor(us: AABCE) {
    this.us = us
  }
  showDisplay() {
    console.log(this.us.A())
  }
}

const ABCA = new ABC
const member = new Person(ABCA)
member.showDisplay()
