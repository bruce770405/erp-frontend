import React, { Component } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HeaderMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  // handleItemClick = (e, { name }) => { console.log(this.props.location) }

  render() {
    const { fixed } = this.state
    const { pathname } = this.props.location;
    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container>
          <Menu.Item className="nav-link" as={Link} name='home' to="/" active={pathname === '/' || !pathname} >
            首頁
          </Menu.Item>
          <Menu.Item as={Link} name='work' to="/work" active={pathname === '/work'} >
            客戶
          </Menu.Item>
          <Menu.Item as={Link} name='select' to="/select" active={pathname === '/select'} >
            訂單查詢
          </Menu.Item>
          <Menu.Item as={Link} name='profit' to="/profit" active={pathname === '/profit'} >
            損益查詢
          </Menu.Item>
          <Menu.Item position='right'>
            <Button as='a' inverted={!fixed}>
              Log In
            </Button>
            <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

const HeaderMenus = withRouter(props => <HeaderMenu {...props} />);
export default HeaderMenus