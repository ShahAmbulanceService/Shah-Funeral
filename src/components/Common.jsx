import React from 'react';

function Common(props) {
  return (
    <>
      <div
        className="relative h-48 bg-gray-900"
        role="banner"
        aria-label={`Page header with the title ${props.title}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-[url('/api/placeholder/1920/300')] bg-cover bg-center opacity-20"
            role="img"
            aria-label="Decorative banner background"
          />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-between px-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white">{props.title}</h1>

          {/* Breadcrumb Navigation */}
          <nav className="text-white" aria-label="Breadcrumb">
            <a
              href="/"
              className="hover:text-orange-500"
              aria-label="Navigate to Home page"
            >
              Home
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <a
              href={"/" + props.route}
              className="hover:text-orange-500"
              aria-label={`Navigate to ${props.route} page`}
            >
              {props.route.toUpperCase()}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Common;
