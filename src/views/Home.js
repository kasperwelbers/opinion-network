import React from 'react'

import Content from '../components/Content'
import { HomePageHeader } from '../components/PageHeader'
import './Home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className="Home">
      <HomePageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className="section HomeBody">
        <div className="container">
          <Content source={body} />
        </div>
      </div>
    </main>
  )
}
