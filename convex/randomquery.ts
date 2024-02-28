import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const randomNumber = Math.floor(Math.random()*11)
    return randomNumber
  },
});
