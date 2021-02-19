import React from 'react'

const GithubLink: React.FC = () => (
  <div className="my-8 flex">
    <div className="mr-4">
      <a
        href="https://github.com/happyhung95/nordcloud-app"
        aria-label="Link to Repository"
        className="p-2 rounded-lg bg-black text-white text-lg font-bold"
      >
        <i className="fab fa-github" aria-hidden="true" title="Link to Repository" />
        <span className="mx-1">This repository</span>
      </a>
    </div>
    <div>
      <a
        href="https://github.com/happyhung95"
        aria-label="Link to Hung Nguyen's Github"
        className="p-2 rounded-lg bg-black text-white text-lg font-bold"
      >
        <i className="fab fa-github" aria-hidden="true" title="Link to Hung Nguyen's Github" />
        <span className="mx-1">Hung Nguyen</span>
      </a>
    </div>
  </div>
)

export default GithubLink
