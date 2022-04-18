

export default function Home() {
  return (
    <div className="h-screen flex " >
      <div className="w-64 bg-white px-8 py-4 border-r">
        <div>
          <img src="/images/logo.png" alt="" className='w-9 h-9'/>
        </div>
        <nav className="mt-8">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Scrumboard</h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>
            <a href="#" className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg px-3 py-2">
              <span className="text-sm font-medium text-white">Active Sprints</span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
          </div>
          <h3 className=" mt-8 text-sm font-semibold text-gray-600 uppercase tracking-wide">Tags</h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Bugs</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">New Feature</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Marketing</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Research</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="flex-1 min-w-0 ">Main Content</div>
    </div>
  )
}

