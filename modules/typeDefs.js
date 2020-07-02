const { gql } = require('apollo-server-express');

const movieTypeDefs = gql`
type Query{
  searchMovie( name: String!): [MovieBasic]
  movieInfo( id: ID! ): MovieDetail
  moviePopular: [MovieBasic]
  movieTopRated: [MovieBasic]
  movieNowPlaying: [MovieBasic]
  movieRecommendations( id: ID! ): [MovieBasic]
  movieVideos( id: ID! ): [VideoBlurb]
  discoverMovie(params: DiscoverMoviesParameters! ): [MovieBasic]
  movieImages(id: ID!): MovieImagesResponse
  movieSimilar(id: ID!): [MovieBasic]
  movieKeywords(id: ID!): [Keyword]
  movieCredits(id: ID!): MovieCreditsResponse
  personInfo(id: ID!): PersonDetail
  personMovieCredits(id: ID!): PersonMovieCreditsResponse
  personImages(id: ID!): [Image]
}
type MovieBasic {
  id: ID!
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int!]
}
type MovieDetail {
  adult: Boolean
  backdrop_path : String
  belongs_to_collection : CollectionName
  budget : Float
  genres : [Genre]
  homepage : String
  id: ID!
  imdb_id : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  production_companies : [ProductionCompany]
  production_countries : [ProductionCountry]
  release_date : String
  revenue : Float
  runtime : Int
  spoken_languages : [SpokenLanguage]
  status : String
  tagline : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
}
input DiscoverMoviesParameters {
  language: String
  region: String
  sort_by: String
  page: Int
  with_genres: String
  without_genres: String
  with_people: String
  with_keywords: String
  without_keywords: String
}
type VideoBlurb{
  id : ID
  iso_639_1 : String
  iso_3166_1 : String
  key : String
  name : String
  site : String
  size : Int
  type : String
}
type SpokenLanguage{
  iso_639_1 : String
  name : String
}
type ProductionCompany{
  name : String
  id : ID
}
type ProductionCountry{
  iso_3166_1 : String
  name : String
}
type CollectionName{
  id : ID
  name : String
  poster_path : String
  backdrop_path : String
}
type MovieImagesResponse {
  backdrops: [Image]
  posters: [Image]
}
type Image {
  aspect_ratio: Float
  file_path: String
  height: Int
  iso_639_1: String
  vote_average: Float
  vote_count: Int
  width: Int
}
type Genre{
  id : ID
  name : String
}
type Keyword{
  id : ID
  name : String
}
type MovieCreditsResponse{
  cast: [Cast]
  crew: [Crew]
}
type Cast{
  cast_id: Int
  character: String
  credit_id: String
  gender: Int
  id: ID
  name: String
  order: Int
  profile_path: String
}
type Crew{
  credit_id: Int
  department: String
  gender: String
  job: Int
  id: ID
  name: String
  profile_path: String
}
type PersonDetail{
  id: ID
  birthday: String
  deathday: String
  known_for_department: String
  also_known_as: [String]
  gender: Int
  biography: String
  popularity: Float
  place_of_birth: String
  name: String
  profile_path: String
  adult: Boolean
  homepage: String
  imdb_id: String
}
type PersonMovieCreditsResponse{
  cast: [PersonMovieCastDetail]
  crew: [PersonMovieCrewDetail]
}
type PersonMovieCastDetail{
  character: String
  credit_id: String
  id: ID
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int!]
}
type PersonMovieCrewDetail{
  id: ID
  department: String
  credit_id: String
  job: String
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
  genre_ids : [Int!]
}
`

module.exports = movieTypeDefs