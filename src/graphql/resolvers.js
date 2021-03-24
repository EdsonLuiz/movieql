import {getMovies, getById, create} from './db'

const edson = {
  name: 'Edson Luiz',
  language: 'pt-br',
  state: 'RS'
}

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, {id}) => getById(id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => create(name, score)
  }

}

export default resolvers
