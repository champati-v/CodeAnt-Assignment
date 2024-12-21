import { RepoHeader } from '../components/RepoHeader';
import { SearchBar } from '../components/SearchBar';
import { RepositoryCard } from '../components/RepositoryCard';
import initialRepositories from '../data/repositories'
import { useState } from 'react';

const RepositoryPage = () => {
    const [repositories] = useState(initialRepositories);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <RepoHeader repoCount={repositories.length} />
          <div className='mt-3'>
            <SearchBar />
          </div>
          <div className="divide-y divide-gray-200">
            {repositories.map((repo) => (
              <RepositoryCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepositoryPage