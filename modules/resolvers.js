const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('c781a3dabef946805a961db3b7b916eb')

const resolvers = {
  Query: {
    searchMovie: async (_,{name}) => {
      let { results } = await moviedb.searchMovie({ query: name }).catch(console.error)
      return results;
    },
    movieInfo: async (_,{id}) => {
      let result = await moviedb.movieInfo({ id: id }).catch(console.error)
      return result;
    }, 
    moviePopular: async () => {
      let { results } = await moviedb.moviePopular().catch(console.error)
      return results;
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
//                            searchMovie
// searchMulti
// searchPerson
// searchTv
// searchList
// collectionInfo
// collectionImages
// collectionTranslations
// discoverMovie
// discoverTv
// trending
//                            movieInfo
// movieAccountStates
// movieAlternativeTitles
// movieChanges
// movieCredits
// movieExternalIds
// movieImages
// movieKeywords
// movieReleaseDates
// movieVideos
// movieTranslations
// movieRecommendations
// movieSimilar
// movieReviews
// movieLists
// movieRatingUpdate
// movieRatingDelete
// movieLatest
// movieNowPlaying
// moviePopular
// movieTopRated
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
