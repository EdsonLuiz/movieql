export let movies = [
  {id: 1, name: 'Liga da Justiça de Zack Snyder', score: 8.3 },
  {id: 2, name: 'O Poderoso Chefão', score: 9.3 },
  {id: 3, name: 'O Lobo de Wall Street', score: 8.2 },
  {id: 4, name: 'Bastardos Inglórios', score: 8.3 },
]

export function getMovies() {
  return movies
}

export function getById(id) {
  const returnedMovie = movies.find(movie => movie.id === id)
  if(!returnedMovie)
    return {}
  return returnedMovie
}

export function deleteMovie(id) {
  if(!getById(id))
    return false

  movies = movies.filter(m => m.id !== id)
  return true
}

export function create(name, score) {
  const id = movies.length + 1
  const newMovie = {id, name, score}
  movies.push(newMovie)
  return newMovie
}
