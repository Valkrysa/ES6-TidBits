function* colors () {
  yield 'red'
  yield 'blue'
  yield 'green'
}

const gen = colors()
gen.next()
gen.next()
gen.next()
gen.next()

const myColors = []
for (let color of colors()) {
  myColors.push(color)
}
myColors

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead
    yield this.tester
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead
    yield this.manager
    yield this.engineer
    yield* this.testingTeam
  }
}

const names = []
for (let name of engineeringTeam) {
  names.push(name)
}
names

class Comment {
  constructor (content, children) {
    this.content = content
    this.children = children
  }
  
  *[Symbol.iterator]() {
    yield this.content
    for (let child of this.children) {
      yield* child
    }
  }
}

const children = [
	new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
]
const tree = new Comment('Great post!', children)

const values = []
for (let value of tree) {
  values.push(value)
}
values
