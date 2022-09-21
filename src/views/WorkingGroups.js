import React, { useState } from 'react'

import { FaDatabase, FaBook, FaToolbox, FaBroadcastTower } from 'react-icons/fa'
import BackgroundImage from '../components/BackgroundImage'
import Content from '../components/Content'
import './WorkingGroups.css'

const iconsize = '4em'

const WorkingGroups = ({ fields, workinggroups }) => {
  const { title, featuredImage } = fields
  const [selected, setSelected] = useState(null)

  return (
    <div
      style={{
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--primary)',
        position: 'relative',
      }}
    >
      <BackgroundImage src={featuredImage} opacity="0.3" />
      <div
        style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}
      >
        {selected == null && (
          <div
            style={{
              textAlign: 'center',
              color: 'white',
              paddingTop: '4rem',
              zIndex: 999,
              fontSize: '2rem',
            }}
          >
            <h1>{selected == null && title}</h1>
          </div>
        )}
        <div className="WorkingGroups">
          {workinggroups.map((wg, i) => {
            console.log(wg)
            return (
              <div
                key={wg.title}
                className={
                  selected != null ? 'WorkingGroup Mini' : 'WorkingGroup'
                }
              >
                <div className="Card fade-in" onClick={() => setSelected(i)}>
                  <div
                    className="Icon"
                    style={{ color: selected === i && 'var(--primary-light)' }}
                  >
                    {wg.name === 'wp1' && (
                      <FaBook style={{ fontSize: iconsize }} />
                    )}
                    {wg.name === 'wp2' && (
                      <FaToolbox style={{ fontSize: iconsize }} />
                    )}
                    {wg.name === 'wp3' && (
                      <FaDatabase style={{ fontSize: iconsize }} />
                    )}
                    {wg.name === 'wp4' && (
                      <FaBroadcastTower style={{ fontSize: iconsize }} />
                    )}
                  </div>
                  <h3>{wg.title}</h3>
                </div>
                {/* <span>{wg.subtitle}</span> */}
                {/* <LazyImage src={wg.featuredImage} alt="LazyImage" /> */}
              </div>
            )
          })}
        </div>
        <WorkingGroupDetails wg={selected != null && workinggroups[selected]} />
      </div>
    </div>
  )
}

const WorkingGroupDetails = ({ wg }) => {
  if (!wg) return null
  console.log(wg)
  return (
    <div className="WorkingGroupDetails">
      <h1>{wg.title}</h1>
      <Content source={wg.content} />
    </div>
  )
}

export default WorkingGroups
