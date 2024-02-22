const z = require('zod')

const validHobbies = ["cricket", "football", "badminton"]
const UserSchema = z.object({
  username: z.string().min(3),
  age: z.number().optional(),
  // optionnal is optional means if the input is not present it will not thow error
  birhtday: z.date().optional(),
  email: z.string().email(),
  isProgramer: z.boolean().nullish(),
  // nullable and nullish are same acpect nullish accpets null and undefined
  hobbys: z.enum(validHobbies).array()
  // in enum if the one of the value is present it will return true and adding array at the end will make it an array can check for multiple hobbys
}).extend({
  name: z.string().min(3).optional(),
  bio: z.string().optional().optional()
})

const username = { 
  username: "sushil",
  birhtday: new Date(),
  email: "sushilkumar@gmail.com",
  isProgramer: null,
  hobbys: ["badminton", "cricket"]
}
const user = { username: "sushil"}
// bellow partail allows everything to be optional
console.log(UserSchema.partial().parse(user));
console.log(UserSchema.safeParse(username))