// RepoList.jsx
import React, { useState } from 'react';
import { 
  FaStar, 
  FaCodeBranch, 
  FaEye, 
  FaCircle,
  FaFilter,
  FaSort,
  FaList,
  FaTh,
  FaLock,
  FaUnlock,
  FaCalendar,
  FaLanguage,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { GoIssueOpened } from 'react-icons/go';

const RepoList = ({ repositories = [] }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('updated'); // 'updated', 'stars', 'name'
  const [filter, setFilter] = useState('all'); // 'all', 'public', 'private'
  const [languageFilter, setLanguageFilter] = useState('all');

  // Extract unique languages
  const languages = ['all', ...new Set(repositories
    .map(repo => repo.language)
    .filter(Boolean))];

  // Filter and sort repositories
  const filteredRepos = repositories
    .filter(repo => {
      if (filter === 'public') return !repo.private;
      if (filter === 'private') return repo.private;
      return true;
    })
    .filter(repo => {
      if (languageFilter === 'all') return true;
      return repo.language === languageFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'updated':
        default:
          return new Date(b.updated_at) - new Date(a.updated_at);
      }
    });

  // Stats
  const stats = {
    total: repositories.length,
    public: repositories.filter(r => !r.private).length,
    private: repositories.filter(r => r.private).length,
    stars: repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    forks: repositories.reduce((sum, repo) => sum + repo.forks_count, 0),
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Card View
  const GridCard = ({ repo }) => (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {repo.private ? (
              <FaLock className="text-gray-400 text-sm" />
            ) : (
              <FaUnlock className="text-green-400 text-sm" />
            )}
            <a 
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors group-hover:underline flex items-center gap-2"
            >
              {repo.name}
              <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          {repo.description && (
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{repo.description}</p>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex items-center gap-4 mb-4">
        {repo.language && (
          <div className="flex items-center gap-2">
            <FaCircle className={`text-xs ${
              repo.language === 'JavaScript' ? 'text-yellow-400' :
              repo.language === 'TypeScript' ? 'text-blue-400' :
              repo.language === 'Python' ? 'text-green-400' :
              repo.language === 'Java' ? 'text-red-400' :
              repo.language === 'CSS' ? 'text-purple-400' :
              repo.language === 'HTML' ? 'text-orange-400' :
              'text-gray-400'
            }`} />
            <span className="text-sm text-gray-300">{repo.language}</span>
          </div>
        )}
        {repo.license && (
          <div className="text-sm text-gray-400">
            {repo.license.spdx_id || repo.license.name}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between border-t border-gray-700 pt-4">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors">
            <FaStar />
            <span>{repo.stargazers_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors">
            <FaCodeBranch />
            <span>{repo.forks_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-300 hover:text-red-400 transition-colors">
            <GoIssueOpened />
            <span>{repo.open_issues_count.toLocaleString()}</span>
          </div>
        </div>
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <FaCalendar />
          {formatDate(repo.updated_at)}
        </div>
      </div>
    </div>
  );

  // List View
  const ListRow = ({ repo }) => (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-750 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {repo.private ? (
              <FaLock className="text-gray-400 text-sm" />
            ) : (
              <FaUnlock className="text-green-400 text-sm" />
            )}
            <a 
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-blue-400 transition-colors group-hover:underline flex items-center gap-2"
            >
              {repo.name}
              <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          {repo.description && (
            <p className="text-gray-300 text-sm mb-2 line-clamp-1">{repo.description}</p>
          )}
          <div className="flex items-center gap-4 text-sm">
            {repo.language && (
              <div className="flex items-center gap-2">
                <FaCircle className={`text-xs ${
                  repo.language === 'JavaScript' ? 'text-yellow-400' :
                  repo.language === 'TypeScript' ? 'text-blue-400' :
                  repo.language === 'Python' ? 'text-green-400' :
                  'text-gray-400'
                }`} />
                <span className="text-gray-300">{repo.language}</span>
              </div>
            )}
            <div className="text-gray-400">
              Updated {formatDate(repo.updated_at)}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-gray-300">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{repo.stargazers_count.toLocaleString()}</span>
            </div>
            <div className="text-xs text-gray-400">Stars</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-gray-300">
              <FaCodeBranch className="text-green-400" />
              <span className="font-semibold">{repo.forks_count.toLocaleString()}</span>
            </div>
            <div className="text-xs text-gray-400">Forks</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-gray-300">
              <GoIssueOpened className="text-red-400" />
              <span className="font-semibold">{repo.open_issues_count.toLocaleString()}</span>
            </div>
            <div className="text-xs text-gray-400">Issues</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Empty State
  if (repositories.length === 0) {
    return (
      <div className="bg-gray-800 rounded-2xl p-12 text-center border border-gray-700">
        <div className="text-5xl mb-4">📂</div>
        <h3 className="text-2xl font-bold text-white mb-2">No repositories found</h3>
        <p className="text-gray-400">This user doesn't have any public repositories yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Repositories</h2>
          <p className="text-gray-400">
            {filteredRepos.length} of {stats.total} repositories
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="text-white font-semibold">{stats.stars.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">Stars</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
            <div className="flex items-center gap-2">
              <FaCodeBranch className="text-green-400" />
              <span className="text-white font-semibold">{stats.forks.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">Forks</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-3 py-2 border border-gray-700">
            <div className="flex items-center gap-2">
              <FaUnlock className="text-blue-400" />
              <span className="text-white font-semibold">{stats.public}</span>
              <span className="text-gray-400 text-sm">Public</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* View Toggle */}
            <div className="flex bg-gray-900 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaTh />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaList />
                List
              </button>
            </div>

            {/* Visibility Filter */}
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white appearance-none pr-10 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All repositories</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
              <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Language Filter */}
            {languages.length > 1 && (
              <div className="relative">
                <select
                  value={languageFilter}
                  onChange={(e) => setLanguageFilter(e.target.value)}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white appearance-none pr-10 focus:outline-none focus:border-blue-500"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang === 'all' ? 'All languages' : lang}
                    </option>
                  ))}
                </select>
                <FaLanguage className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            )}
          </div>

          {/* Right controls - Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white appearance-none pr-10 focus:outline-none focus:border-blue-500"
            >
              <option value="updated">Last updated</option>
              <option value="stars">Most stars</option>
              <option value="name">Name</option>
            </select>
            <FaSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Repository Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map(repo => (
            <GridCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredRepos.map(repo => (
            <ListRow key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      {/* Footer */}
      {filteredRepos.length === 0 && repositories.length > 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-xl font-bold text-white mb-2">No matching repositories</h3>
          <p className="text-gray-400">Try changing your filters to see more results.</p>
        </div>
      )}

      {/* Pagination (Example) */}
      {filteredRepos.length > 0 && (
        <div className="flex justify-center items-center gap-2 pt-6 border-t border-gray-800">
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <span className="px-4 py-2 text-gray-300">
            Page <span className="font-semibold text-white">1</span> of 5
          </span>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

// Sample data structure for testing
RepoList.defaultProps = {
  repositories: [
    {
      id: 1,
      name: 'awesome-project',
      full_name: 'octocat/awesome-project',
      private: false,
      html_url: 'https://github.com/octocat/awesome-project',
      description: 'An awesome project with amazing features and great documentation',
      language: 'JavaScript',
      stargazers_count: 1234,
      forks_count: 256,
      open_issues_count: 12,
      license: { spdx_id: 'MIT', name: 'MIT License' },
      updated_at: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      name: 'private-repo',
      full_name: 'octocat/private-repo',
      private: true,
      html_url: 'https://github.com/octocat/private-repo',
      description: 'A private repository for internal use',
      language: 'Python',
      stargazers_count: 45,
      forks_count: 8,
      open_issues_count: 3,
      updated_at: '2024-01-10T14:20:00Z'
    },
    {
      id: 3,
      name: 'react-components',
      full_name: 'octocat/react-components',
      private: false,
      html_url: 'https://github.com/octocat/react-components',
      description: 'A collection of reusable React components',
      language: 'TypeScript',
      stargazers_count: 789,
      forks_count: 123,
      open_issues_count: 5,
      license: { spdx_id: 'Apache-2.0', name: 'Apache License 2.0' },
      updated_at: '2024-01-12T09:15:00Z'
    },
    {
      id: 4,
      name: 'cli-tool',
      full_name: 'octocat/cli-tool',
      private: false,
      html_url: 'https://github.com/octocat/cli-tool',
      description: 'Command line interface for managing projects',
      language: 'Go',
      stargazers_count: 234,
      forks_count: 45,
      open_issues_count: 7,
      updated_at: '2024-01-08T16:45:00Z'
    },
    {
      id: 5,
      name: 'design-system',
      full_name: 'octocat/design-system',
      private: false,
      html_url: 'https://github.com/octocat/design-system',
      description: 'Complete design system with React components',
      language: 'CSS',
      stargazers_count: 567,
      forks_count: 89,
      open_issues_count: 15,
      license: { spdx_id: 'MIT', name: 'MIT License' },
      updated_at: '2024-01-14T11:20:00Z'
    },
    {
      id: 6,
      name: 'api-server',
      full_name: 'octocat/api-server',
      private: false,
      html_url: 'https://github.com/octocat/api-server',
      description: 'REST API server with authentication and documentation',
      language: 'Java',
      stargazers_count: 321,
      forks_count: 67,
      open_issues_count: 9,
      updated_at: '2024-01-13T13:10:00Z'
    }
  ]
};

export default RepoList;