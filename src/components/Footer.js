import React from 'react'

import './Footer.css'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">
    <div className="container taCenter">
      <span>
        This page was created using the{'  '}
        <a href="https://github.com/Jinksi/netlify-cms-react-starter">
          Netlify CMS React Starter
        </a>
      </span>
    </div>
  </footer>
)
