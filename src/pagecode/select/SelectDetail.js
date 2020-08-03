import React from 'react'
import { Container, Divider, Segment, Loader, Dimmer, Button } from 'semantic-ui-react'
import SelectDetailStep from './components/steps/SelectDetailStep';
import SelectDetailData from './components/SelectDetailData';
import { Link } from 'react-router-dom';
import creatHistory from 'history/createHashHistory'

export default class SelectDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loader: true, order: {} };
  }

  componentDidMount() {
    console.log(this.props.location)
    if (this.props.location.orderParam) {
      this.setState({
        order: this.props.location.orderParam,
        loader: false
      })

    }
  }

  render() {

    return (
      <Container>
        <Dimmer active={this.state.loader}>
          <Loader />
        </Dimmer>

        <Divider hidden />
        <SelectDetailStep />

        <Segment raised padded={'very'}>
          <SelectDetailData order={this.state.order} />

          <Divider hidden />
          <Divider hidden />
          <Button basic color='black' onClick={(e) => {
            e.preventDefault()
            const history = creatHistory()
            history.goBack()
          }}><i className="arrow left icon"></i>回上一頁</Button>
          <Button primary as={Link} to={{
            pathname: '/select/detail/edit',
            orderParam: this.state.order
          }} > <i className="edit outline left icon"></i>編輯</Button>
        </Segment>
      </Container>
    )
  }
}

