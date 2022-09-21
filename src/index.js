import React from 'react'
//import { render } from 'react-snapshot'
import { render } from 'react-dom'
//import { createRoot } from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'
import App from './App'
//import CMS from 'netlify-cms-app'
// import registerServiceWorker, { unregister } from './registerServiceWorker'
// import data from './data.json'

// CMS.init()
// CMS.registerPreviewTemplate('my-template', MyTemplate)

const rootEl = document.getElementById('root')
//const root = createRoot(rootEl)
//root.render(<App />)
render(<App />, rootEl)

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     render(<NextApp />, rootEl)
//   })
// }

// if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
//   window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
// }

// const globalSettings =
//   data.settings && data.settings.filter((doc) => doc.name === 'global')[0]

// if (globalSettings) {
//   globalSettings.enableServiceWorker ? registerServiceWorker() : unregister()
// }
