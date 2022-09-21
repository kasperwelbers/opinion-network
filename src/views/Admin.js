import { useEffect } from 'react'
import CMS from 'netlify-cms-app'
import data from '../data.json'
import React from 'react'
import Blog from './Blog'

// doesn't work, because no idea how CMS takes over the page.
// It now renders completely at the bottom and somehow destroys a lot of style stuff
// Currently running admin from admin/index.html, but here not possible to
// create usefull previews

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter((page) => page.name === name)[0]
const getDocuments = (collection, name) => data[collection]

const globalSettings = getDocument('settings', 'global')
const posts = getDocuments('posts')

const Preview = (props) => {
  const entry = props.entry
  const title = entry.getIn(['data', 'title']) || ''
  console.log(entry, title)

  return (
    <>
      <h1>{props.widgetFor('title')}</h1>
      {props.widgetFor('body')}
    </>
  )
}

const Admin = () => {
  useEffect(() => {
    CMS.init()
    // CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
    //   <Blog fields={entry.toJS().data} posts={posts} />
    // ))
  }, [])

  return <></>
}

export default Admin
