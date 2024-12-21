import { GitFork, Lock, Globe2, DatabaseIcon } from 'lucide-react';

export function RepositoryCard({ repo }) {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <GitFork className="text-gray-400" size={20} />
            <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
            <span className = {`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${repo.isPublic ? "border border-blue-500 bg-blue-100 text-blue-500" : "border border-green-500 bg-green-100 text-green-600" } `}>
              {repo.isPublic ? (
                <Globe2 size={14} className="text-blue-500" />
              ) : (
                <Lock size={14} className="text-green-600" />
              )}
              {repo.isPublic ? 'Public' : 'Private'}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: repo.languageColor }}
              />
              {repo.language}
            </div>
            <div className='flex items-center gap-1'><DatabaseIcon size={14} /> {repo.size}</div>
            <div>Updated {repo.updatedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}