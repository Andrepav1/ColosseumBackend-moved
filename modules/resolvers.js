const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('c781a3dabef946805a961db3b7b916eb')

const resolvers = {
  Query: {
    searchMovie: async (_,{params}) => {
      let response = await moviedb.searchMovie(params).catch(console.error)
      return response;
    },
    movieInfo: async (_,{id}) => {
      let movie = await moviedb.movieInfo({ id: id }).catch(console.error)
      return movie;
    }, 
    moviePopular: async () => {
      let { results } = await moviedb.moviePopular().catch(console.error)
      return results;
    }, 
    movieTopRated: async () => {
      let { results } = await moviedb.movieTopRated().catch(console.error)
      return results;
    }, 
    movieNowPlaying: async () => {
      let { results } = await moviedb.movieNowPlaying().catch(console.error)
      return results;
    }, 
    movieRecommendations: async (_,{id}) => {
      let { results } = await moviedb.movieRecommendations({ id: id }).catch(console.error)
      return results;
    }, 
    movieVideos: async (_,{id}) => {
      let { results } = await moviedb.movieVideos({ id: id }).catch(console.error)
      return results;
    }, 
    discoverMovie: async (_,{params}) => {
      let response = await moviedb.discoverMovie(params).catch(console.error)
      return response;
    },
    movieImages: async (_,{id}) => {
      let { backdrops, posters } = await moviedb.movieImages({ id: id }).catch(console.error)
      return { backdrops, posters };
    },
    movieSimilar: async (_,{id}) => {
      let { results } = await moviedb.movieSimilar({ id: id }).catch(console.error)
      return results;
    },
    movieKeywords: async (_,{id}) => {
      let { keywords } = await moviedb.movieKeywords({ id: id }).catch(console.error)
      return keywords;
    },
    movieCredits: async (_,{id}) => {
      let { crew, cast } = await moviedb.movieCredits({ id: id }).catch(console.error)
      return { crew, cast };
    },
    personInfo: async (_,{id}) => {
      let person = await moviedb.personInfo({ id: id }).catch(console.error)
      return person;
    },
    personMovieCredits: async (_,{id}) => {
      let { crew, cast } = await moviedb.personMovieCredits({ id: id }).catch(console.error)      
      return { crew, cast };
    },
    personImages: async (_,{id}) => {
      let { profiles } = await moviedb.personImages({ id: id }).catch(console.error)      
      return profiles;
    },
  }
};

// ALL AVAILABLE METHODS:
// configuration
// countries
// jobs
// languages
// primaryTranslations
// timezones
// find
// searchCompany
// searchCollection
// searchKeyword
// searchMulti
// searchPerson
// searchTv
// searchList
// collectionInfo
// collectionImages
// collectionTranslations
// discoverTv
// trending
// movieAccountStates
// movieAlternativeTitles
// movieChanges
// movieCredits
// movieExternalIds
// movieKeywords
// movieReleaseDates
// movieTranslations
// movieSimilar
// movieReviews
// movieLists
// movieRatingUpdate
// movieRatingDelete
// upcomingMovies
// tvInfo
// tvAccountStates
// tvAlternativeTitles
// tvChanges
// tvContentRatings
// tvCredits
// episodeGroups
// tvExternalIds
// tvImages
// tvKeywords
// tvRecommendations
// tvReviews
// tvScreenedTheatrically
// tvSimilar
// tvTranslations
// tvVideos
// tvRatingUpdate
// tvRatingDelete
// tvLatest
// tvAiringToday
// tvOnTheAir
// tvPopular
// tvTopRated
// seasonInfo
// seasonChanges
// seasonAccountStates
// seasonCredits
// seasonExternalIds
// seasonImages
// seasonVideos
// episodeInfo
// episodeChanges
// episodeAccountStates
// episodeCredits
// episodeExternalIds
// episodeImages
// episodeTranslations
// episodeRatingUpdate
// episodeRatingDelete
// episodeVideos
// personInfo
// personChanges
// personMovieCredits
// personTvCredits
// personCombinedCredits
// personExternalIds
// personImages
// personTaggedImages
// personTranslations
// personLatest
// personPopular
// creditInfo
// listInfo
// listStatus
// createList
// createListItem
// removeListItem
// clearList
// deleteList
// genreMovieList
// genreTvList
// keywordInfo
// keywordMovies
// companyInfo
// companyAlternativeNames
// companyImages
// accountInfo
// accountLists
// accountFavoriteMovies
// accountFavoriteTv
// accountFavoriteUpdate
// accountRatedMovies
// accountRatedTv
// accountRatedTvEpisodes
// accountMovieWatchlist
// accountTvWatchlist
// accountWatchlistUpdate
// changedMovies
// changedTvs
// changedPeople
// movieCertifications
// tvCertifications
// networkInfo
// networkAlternativeNames
// networkImages
// review
// episodeGroup

module.exports = resolvers;
