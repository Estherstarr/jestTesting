const {stringLength} = require("./index")

test("number of character in the string",() => {
  expect(stringLength("Hello")).toBe(5)
})
