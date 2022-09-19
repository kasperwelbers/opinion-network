import React from 'react'

import LazyImage from '../components/LazyImage'
import './WorkingGroups.css'

export default ({ fields, workinggroups }) => {
  const { title, subtitle } = fields
  console.log(fields)
  return (
    <div style={{ height: '100%', overflow: 'auto' }}>
      {/* <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      /> */}
      <div style={{ textAlign: 'center' }}>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </div>
      <div className="WorkingGroups">
        {workinggroups.map((wg) => {
          console.log(wg)
          return (
            <div key={wg.title} className="WorkingGroup">
              <h3>{wg.title}</h3>
              <span>{wg.subtitle}</span>
              <LazyImage src={wg.featuredImage} alt="LazyImage" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
