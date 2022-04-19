export default function Home() {
  return (
    <div className="flex h-screen ">
      <div className="w-64 border-r bg-white px-8 py-4">
        <div>
          <img src="/images/done.png" alt="" className="h-9 w-9" />
        </div>
        <nav className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
            Scrumboard
          </h3>
          <div className="-mx-3 mt-2">
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">23</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between rounded-lg bg-gradient-to-r from-purple-700 to-blue-500 px-3 py-2"
            >
              <span className="text-sm font-medium text-white">
                Active Sprints
              </span>
              <span className="text-xs font-semibold text-white">1</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">13</span>
            </a>
          </div>
          <h3 className=" mt-8 text-sm font-semibold uppercase tracking-wide text-gray-600">
            Tags
          </h3>
          <div className="-mx-3 mt-2">
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Bugs</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">
                New Feature
              </span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">
                Marketing
              </span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">
                Research
              </span>
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="min-w-0 flex-1 ">
        <header className="flex flex-col border-b border-gray-200 px-6 ">
          <div className="flex items-center justify-between py-3">
            {/*Searchbar */}
            <div className="relative  w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                placeholder="Search"
                className="block w-full rounded-md border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-400"
              />
            </div>
            <div className="flex items-center">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="ml-6">
                <img
                  src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                  alt="man1"
                  className="h-9 w-9 rounded-full object-cover"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between py-2">
            <div className="flex">
              <h2 className="text-lg font-medium text-gray-900">Assigness</h2>
              <div className="flex items-center">
                <span className="rounded-full border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                    alt="avatar"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </span>
                <span className="-ml-2 rounded-full border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                    alt="avatar"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </span>
                <span className="-ml-2 rounded-full border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                    alt="avatar"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </span>
                <span className="-ml-2 rounded-full border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                    alt="avatar"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <button className="rounded-md bg-gray-900 py-2 pl-2 pr-4 text-white hover:bg-gray-800">
                  Complete Sprint
                </button>
              </div>
              <div>
                <button className="ml-5 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-blue-500 py-2 pl-2 pr-4 text-sm font-medium text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>New Item</span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto bg-gray-50">
          <main className="inline-flex h-full space-x-2 p-3">
            <div className="flex w-80 flex-col rounded-md bg-transparent">
              <h3 className="text-md px-3 pt-3 pb-1 font-mono font-medium leading-tight text-gray-700">
                Todo
              </h3>
              <div className="min-h-0 flex-1">
                <ul className="px-3 pt-1 pb-3">
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow mt-3"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow mt-3"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow mt-3"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex w-80 flex-col rounded-md bg-transparent">
              <h3 className="text-md px-3 pt-3 pb-1 font-mono font-medium leading-tight text-gray-700">
                In Progress
              </h3>
              <div className="min-h-0 flex-1">
                <ul className="px-3 pt-1 pb-3">
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow mt-3"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="flex w-80 flex-col rounded-md bg-transparent">
              <h3 className="text-md px-3 pt-3 pb-1 font-mono font-medium leading-tight text-gray-700">
                Testing
              </h3>
              <div className="min-h-0 flex-1">
                <ul className="px-3 pt-1 pb-3">
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="flex w-80 flex-col rounded-md bg-transparent">
              <h3 className="text-md px-3 pt-3 pb-1 font-mono font-medium leading-tight text-gray-700">
                Done
              </h3>
              <div className="min-h-0 flex-1">
                <ul className="px-3 pt-1 pb-3">
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-md bg-white p-5 shadow mt-3"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="rounded bg-blue-200 px-3 py-1">
                            <span className="text-sm font-medium leading-tight text-blue-500">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, saepe!
                          </p>
                        </div>
                        <div className="mt-3">
                          <div className="mt-3 flex items-center">
                            <span className="rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                            <span className="-ml-2 rounded-full border-2 border-white">
                              <img
                                src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&q=144"
                                alt="avatar"
                                className="h-6 w-6 rounded-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
