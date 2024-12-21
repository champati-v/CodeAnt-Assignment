import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="flex items-center p-6 pt-0 relative">
      <Search className="absolute left-8 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search Repositories"
        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      />
    </div>
  );
}