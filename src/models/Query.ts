export class Query {
  value: string = ''

  constructor(value: string) {
    this.value = value
  }

  isASubsequenceOf = (other: string): boolean  => {
    const that = this.value.replace(/ /g, '')
    let indexThis = 0

    for (let indexOther = 0; indexOther < other.length && indexThis < that.length; indexOther++)
      if (that[indexThis] === other[indexOther]) indexThis++

    return (indexThis === that.length)
  }
}
