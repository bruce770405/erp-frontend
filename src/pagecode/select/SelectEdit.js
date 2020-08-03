import React from 'react'
import { Container, Divider, Loader, Dimmer, Segment, Button, Form, Grid, Icon, Radio, Header, Image } from 'semantic-ui-react'
import SelectEditStep from './components/steps/SelectDetailEditStep';
import creatHistory from 'history/createHashHistory';
import * as utils from '../../api/OrdersUtils'
import { HttpService } from '../../api/http/HttpService';
import SystemModal from '../../common/components/Modal';

/**
 * 查詢編輯頁.
 */
export default class SelectEdit extends React.Component {

  constructor(props) {
    super(props);
    if (props.location.orderParam) {
      let statusCode = utils.orderStatusParser2Code(props.location.orderParam.status);
      this.state = {
        loader: false,
        order: props.location.orderParam,
        status: statusCode,
        modal: false
      };
    } else {
      this.state = {
        loader: false,
        modal: false
      };
    }
  }

  /**
   * 更新資料.
   */
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit.');
    this.setState({
      loader: true
    })

    let order = this.state.order;
    // 更新狀態代碼.
    order.statusCode = this.state.status;

    console.log(order);
    const success = () => {
      this.setState({
        loader: false
      });
      const response = order;
      this.props.history.push({
        pathname: '/select/detail/edit/result',
        response: response
      });
    }

    const fail = () => {
      this.setState({
        loader: false,
        errorMessage: '編輯失敗',
        modal: true
      })
    }

    HttpService.httpPost(order, success, fail, '/order/update')
  }

  /**
   * 狀態選擇.
   */
  handleChange = (e, { value }) => this.setState({ status: value })

  /**
   * 增加備註 TODO.
   */
  addDesc = () => {

  }

  renderRadio = field => (
    <Form.Radio
      checked={field.input.value === field.radioValue}
      label={field.label}
      name={field.input.name}
      onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
    />
  );


  render() {

    return (
      <Container>
        <Dimmer active={this.state.loader}>
          <Loader />
        </Dimmer>

        <Divider hidden />
        <SelectEditStep />
        <Divider hidden />

        {
          this.state.order ?
            <Grid textAlign='center' style={{ height: '100vh' }}>
              <Grid.Column style={{ maxWidth: 650 }}>

                <Segment raised padded={'very'}>
                  <SystemModal message={this.state.errorMessage} modalOpen={this.state.modal} handleClose={() => this.setState({ modal: false })} />

                  <Form onSubmit={this.handleSubmit}>

                    <Form.Group inline>
                      <Form.Field width="14">
                        <Header as='h4'>
                          <Icon name='time' color='green' />
                          <Header.Content>
                            最後更新日期
                      <Header.Subheader>{this.state.order.updateTime}</Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Form.Field>
                      <Form.Field width="4">
                        <Header as='h4'>
                          訂單編號 {this.state.order.orderId}
                        </Header>
                      </Form.Field>
                    </Form.Group>

                    <Form.Input fluid label="客戶姓名" value={this.state.order.custName} />
                    <Form.Input fluid label="聯絡電話" value={this.state.order.phone} />
                    <Form.Input fluid label="維修裝置" value={this.state.order.device} />
                    <Form.Input fluid label="裝置顏色" value={this.state.order.color} />
                    <Form.Input fluid label="報價" value={this.state.order.fixAmount} />
                    <Form.Input fluid label="報修狀況" value={this.state.order.errorDesc} />
                    <Form.Group widths="equal" inline>
                      <Form.Input fluid label="備註" value={this.state.order.memo} disabled />
                      <div style={{ marginTop: 20 }}>
                        <Icon link bordered inverted color='teal' name='add' onClick={this.addDesc} />
                      </div>
                    </Form.Group>


                    <Header as='h5'>維修狀況 (未選取任何狀態，預設為收件中)</Header>
                    <Form.Group inline style={{ paddingLeft: '10px' }}>

                      <Form.Field>
                        <Radio toggle
                          label='維修中'
                          name='radioGroup'
                          value='1'
                          checked={this.state.status === '1'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio toggle
                          label='維修完成'
                          name='radioGroup'
                          value='2'
                          checked={this.state.status === '2'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio toggle
                          label='取件'
                          name='radioGroup'
                          value='0'
                          checked={this.state.status === '0'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio toggle
                          label='報價不修'
                          name='radioGroup'
                          value='-1'
                          checked={this.state.status === '-1'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Form.Group>
                  </Form>


                  <Divider hidden />
                  <Divider hidden />

                  <Grid textAlign='center'>
                    <Form.Group inline>
                      <Button basic color='black' onClick={(e) => {
                        e.preventDefault()
                        const history = creatHistory()
                        history.goBack()
                      }}><i className="arrow left icon"></i>回上一頁
                  </Button>
                      <Button primary onClick={this.handleSubmit}><i className="save outline left icon"></i>儲存</Button>
                    </Form.Group>
                  </Grid>

                </Segment>
              </Grid.Column>
            </Grid>
            :
            <Header> 資料為空 ... </Header>
        }


      </Container >
    )
  }
}

