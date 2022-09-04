import React from 'react'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">
    <div className="container taCenter">
      <span>
        website template:{' '}
        <a
          href="https://github.com/Jinksi/netlify-cms-react-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jinksi
        </a>
        .
      </span>
    </div>
  </footer>
)
