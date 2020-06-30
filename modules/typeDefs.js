const { gql } = require('apollo-server-express');

const movieTypeDefs = gql`
type Query{
  searchMovie( name: String!): [MovieBasic]
  movieInfo( id: String! ): MovieDetail
  moviePopular: [MovieBasic]
  movieTopRated: [MovieBasic]
  movieNowPlaying: [MovieBasic]
  movieRecommendations( id: String! ): [MovieBasic]
  movieVideos( id: String! ): [VideoBlurb]
  discoverMovie(params: DiscoverMoviesParameters! ): [MovieBasic]
  movieImages(id: String!): MovieImagesResponse
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
  id : String
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
  id : Int
}
type ProductionCountry{
  iso_3166_1 : String
  name : String
}
type CollectionName{
  id : Int
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
  id : Int
  name : String
}
`
module.exports = movieTypeDefs