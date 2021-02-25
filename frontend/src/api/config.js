
let baseURL = "/api"

if (process.env.NETLIFY) {
  baseURL = "/.netlify/functions/lambda/lambda/api"
}

export default baseURL