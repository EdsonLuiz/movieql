import axios from 'axios'

const API_URL = ' https://yts.mx/api/v2/list_movies.json'

export async function getMovies(limit, rating) {
  let newUrl = API_URL
  if(limit && limit > 0 && limit <= 50) {
    newUrl += `?limit=${limit}`
  }
  if(rating && rating >= 0 && rating <= 9) {
    newUrl += `&minimum_rating=${rating}`
  }
  const {data} = await axios.get(newUrl)
  console.log(`Limit: ${limit} - rating: ${rating}`)
  console.log(newUrl)
  return data.data.movies
}
