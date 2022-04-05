const {reverseString} = require("./index2")

test("reverse string",() => {
  expect(reverseString("Hello")).toBe("olleH")
})
