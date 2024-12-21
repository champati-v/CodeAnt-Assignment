import { RefreshCw, Plus } from 'lucide-react';

export function RepoHeader({ repoCount }) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-0 justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
          <p className="text-sm text-gray-500 mt-1">{repoCount} total repositories</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-1 lg:gap-2 px-3 py-2 border border-gray-500 rounded-md text-gray-600 hover:text-gray-900 transition-colors">
            <RefreshCw size={18} />
            <span>Refresh All</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={18} />
            <span>Add Repository</span>
          </button>
        </div>
      </div>
    </div>
  );
}