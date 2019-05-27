export class Query {
  value: string = ''

  constructor(value: string) {
    this.value = value
  }

  isASubsequenceOf = (other: string): boolean  => {
    let indexThis = 0

    for (let indexOther = 0; indexOther < other.length && indexThis < this.value.length; indexOther++)
      if (this.value[indexThis] === other[indexOther]) indexThis++

    return (indexThis === this.value.length)
  }
}
