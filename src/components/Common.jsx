import React from 'react'

function Common(props) {
  return (
    <>
          <div className="relative h-48 bg-gray-900">
              <div className="absolute inset-0">
                  <div className="h-full w-full bg-[url('/api/placeholder/1920/300')] bg-cover bg-center opacity-20" />
              </div>
              <div className="relative flex h-full items-center justify-between px-8">
<h1 className="text-4xl font-bold text-white">{props.title}</h1>
                  <nav className="text-white">
                      <a href="/" className="hover:text-orange-500">Home</a>
                      <span className="mx-2">/</span>
            <a href={"/" + props.route} className="hover:text-orange-500">{props.route.toUpperCase()}</a>
                  </nav>
              </div>
          </div>
    </>
  )
}

export default Common
