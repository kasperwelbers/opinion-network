import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Home from './views/Home'
import WorkingGroups from './views/WorkingGroups'
import Blog from './views/Blog'
import SinglePost from './views/SinglePost'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import Footer from './components/Footer'
//import Admin from './views/Admin'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'
import { slugify } from './util/url'
import { documentHasTerm, getCollectionTerms } from './util/collection'

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(routeProps) => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  state = {
    data,
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter((page) => page.name === name)[0]

  getDocuments = (collection) => this.state.data[collection] || []

  render() {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts,
    } = globalSettings

    const posts = this.getDocuments('posts').filter(
      (post) => post.status !== 'Draft'
    )
    const workinggroups = this.getDocuments('workinggroups')
    const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    const postCategories = this.getDocuments('postCategories').filter(
      (category) =>
        categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    )

    return (
      <Router>
        <div className="React-Wrap">
          <div>
            <ScrollToTop />
            <ServiceWorkerNotifications reloadOnUpdate />
            {/* <GithubCorner url='https://github.com/Jinksi/netlify-cms-react-starter' /> */}
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`${siteTitle} | %s`}
            />
            <Meta
              headerScripts={headerScripts}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                siteUrl + socialMediaCard.image
              }
              twitterCreatorAccount={
                socialMediaCard && socialMediaCard.twitterCreatorAccount
              }
              twitterSiteAccount={
                socialMediaCard && socialMediaCard.twitterSiteAccount
              }
            />

            <Nav />
          </div>
          <div style={{ flex: '1 1 auto', height: '0' }}>
            <Switch>
              {/* <Route path="/admin/" exact component={Admin} /> */}
              <RouteWithMeta
                path="/"
                exact
                component={Home}
                description={siteDescription}
                fields={this.getDocument('pages', 'home')}
              />
              <RouteWithMeta
                path="/workinggroups/"
                exact
                component={WorkingGroups}
                fields={this.getDocument('pages', 'workinggroupspage')}
                workinggroups={workinggroups}
              />
              <RouteWithMeta
                path="/contact/"
                exact
                component={Contact}
                fields={this.getDocument('pages', 'contact')}
                siteTitle={siteTitle}
              />
              <RouteWithMeta
                path="/blog/"
                exact
                component={Blog}
                fields={this.getDocument('pages', 'blog')}
                posts={posts}
                postCategories={postCategories}
              />

              {posts.map((post, index) => {
                const path = slugify(`/blog/${post.title}`)
                const nextPost = posts[index - 1]
                const prevPost = posts[index + 1]
                return (
                  <RouteWithMeta
                    key={path}
                    path={path}
                    exact
                    component={SinglePost}
                    fields={post}
                    nextPostURL={
                      nextPost && slugify(`/blog/${nextPost.title}/`)
                    }
                    prevPostURL={
                      prevPost && slugify(`/blog/${prevPost.title}/`)
                    }
                  />
                )
              })}

              {/* <RouteWithMeta
                key={path}
                path={path}
                exact
                component={WorkingGroups}
                fields={this.getDocument('pages', 'workinggroups')}
                workingroups={workingroups}
                postCategories={postCategories}
              /> */}

              {/* {workinggroups.map((group, index) => {
                const slug = slugify(group.title)
                const path = slugify(`/workinggroups/${slug}`)
                return (
                  <RouteWithMeta
                    key={path}
                    path={path}
                    exact
                    component={WorkingGroup}
                    fields={this.getDocument('pages', 'workinggroup')}
                    posts={categoryPosts}
                    postCategories={postCategories}
                  />
                )
              })} */}

              {postCategories.map((postCategory) => {
                const slug = slugify(postCategory.title)
                const path = slugify(`/blog/category/${slug}`)
                const categoryPosts = posts.filter((post) =>
                  documentHasTerm(post, 'categories', slug)
                )
                return (
                  <RouteWithMeta
                    key={path}
                    path={path}
                    exact
                    component={Blog}
                    fields={this.getDocument('pages', 'blog')}
                    posts={categoryPosts}
                    postCategories={postCategories}
                  />
                )
              })}

              <Route render={() => <NoMatch siteUrl={siteUrl} />} />
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
