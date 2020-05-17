import React, { Component } from 'react'
import { Responsive, Segment, Visibility } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import routes from '../api/routes';
import HeaderMenus from './home/components/Header';
// import Footer from './home/components/Footer';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default class Main extends Component {

  render() {
    const { children } = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >

          <Segment inverted textAlign='center' vertical>
            <HeaderMenus />
          </Segment>

          {routes.map((route, i) => {
            const { path, exact, routes } = route;
            return (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={(routeProps) => (
                  <route.component routes={routes} {...routeProps} />
                )}
              />
            );
          })}




        </Visibility>


        {children}

      </Responsive>
    )
  }
}