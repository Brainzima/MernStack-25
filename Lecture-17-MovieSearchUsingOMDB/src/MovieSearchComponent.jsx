import React, { useState } from 'react';

const MovieSearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock API call - in real implementation, you would connect to an actual movie API
  const searchMovie = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Simulating API call with your example data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real implementation, you would fetch from an API like:
      const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=84db3d22`);
          const data = await response.json();
          setMovieData(data);      
    } catch (err) {
      setError('Failed to fetch movie data. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie(searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header with Search */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">M</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Movie Search
              </h1>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for movies..."
                  className="w-full md:w-96 px-6 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-2xl 
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                           placeholder-gray-400 text-white transition-all duration-300
                           hover:border-gray-600"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2
                           bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 rounded-xl
                           font-semibold text-sm hover:opacity-90 transition-opacity duration-200
                           focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Search
                </button>
              </div>
            </form>
            
            <div className="hidden md:flex items-center gap-4">
              <button className="text-gray-300 hover:text-white transition-colors">
                Favorites
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                Watchlist
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-6 text-center max-w-md mx-auto">
            <div className="text-red-400 mb-2">⚠️ {error}</div>
            <button
              onClick={() => searchMovie(searchQuery)}
              className="mt-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {movieData && !loading && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden">
              {/* Movie Header */}
              <div className="p-8 border-b border-gray-700">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <img
                      src={movieData.Poster}
                      alt={movieData.Title}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                  
                  <div className="lg:w-2/3">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-4xl font-bold mb-2">{movieData.Title} <span className="text-gray-400">({movieData.Year})</span></h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                            {movieData.Rated}
                          </span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                            {movieData.Runtime}
                          </span>
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                            {movieData.Genre}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 mb-1">Director</p>
                          <p className="font-semibold">{movieData.Director}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Writers</p>
                          <p className="font-semibold">{movieData.Writer}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Actors</p>
                          <p className="font-semibold">{movieData.Actors}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Released</p>
                          <p className="font-semibold">{movieData.Released}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-400 mb-2">Plot</p>
                        <p className="text-lg leading-relaxed">{movieData.Plot}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Movie Details */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-900/50 p-6 rounded-2xl">
                    <p className="text-gray-400 mb-2">IMDb Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="text-3xl font-bold">{movieData.imdbRating}</div>
                      <div className="text-gray-400">/10</div>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{movieData.imdbVotes} votes</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-2xl">
                    <p className="text-gray-400 mb-2">Box Office</p>
                    <div className="text-2xl font-bold">{movieData.BoxOffice}</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-2xl">
                    <p className="text-gray-400 mb-2">Language</p>
                    <div className="text-xl font-semibold">{movieData.Language}</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-2xl">
                    <p className="text-gray-400 mb-2">Country</p>
                    <div className="text-xl font-semibold">{movieData.Country}</div>
                  </div>
                </div>
                
                {/* Awards */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Awards & Nominations</h3>
                  <div className="bg-gray-900/50 p-6 rounded-2xl">
                    <p className="text-lg">{movieData.Awards}</p>
                  </div>
                </div>
                
                {/* Ratings */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Ratings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {movieData.Ratings && movieData.Ratings.map((rating, index) => (
                      <div key={index} className="bg-gray-900/50 p-6 rounded-2xl">
                        <p className="text-gray-400 mb-2">{rating.Source}</p>
                        <div className="text-2xl font-bold">{rating.Value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!movieData && !loading && !error && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-3xl font-bold mb-4">Search for Movies</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Enter a movie title above to get detailed information including ratings, plot, cast, and more.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('Jawan');
                  searchMovie('Jawan');
                }}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Try: Jawan
              </button>
              <button
                onClick={() => {
                  setSearchQuery('Inception');
                  searchMovie('Inception');
                }}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Try: Inception
              </button>
              <button
                onClick={() => {
                  setSearchQuery('The Dark Knight');
                  searchMovie('The Dark Knight');
                }}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Try: The Dark Knight
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Movie Search • Data from IMDb • Made with React & Tailwind CSS</p>
          <p className="text-sm mt-2">This is a demo. In production, connect to a real movie API like OMDb.</p>
        </div>
      </footer>
    </div>
  );
};

export default MovieSearchComponent;