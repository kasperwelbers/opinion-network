import { useEffect } from 'react'
import CMS from 'netlify-cms-app'
import React from 'react'

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
    CMS.registerPreviewTemplate('blog', Preview)
  }, [])

  return <div></div>
}

export default Admin
