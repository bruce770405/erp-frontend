import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Divider, Loader, Dimmer, Message, Segment, Grid } from "semantic-ui-react";
import OrderForm from './components/OrderForm';
import { HttpService } from '../../api/http/HttpService';
import WorkStep from './components/steps/WorkStep';
import SystemModal from '../../common/components/Modal';

const Work = (props) => {

  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * 工作維修單號儲存.
   */
  const save = () => {
    setLoader(true)
    HttpService.httpPost(props.values, succ => {
      const response = Object.assign({}, props.values, succ)
      props.history.push({
        pathname: '/work/result',
        response: response
      });
    }, fail => {
      setLoader(false)
      setErrorMessage('儲存失敗')
      setModal(true)
    }, '/order/add')
  }

  return (
    <Fragment>
      <Container>
        <Divider hidden />
        <Dimmer active={loader}>
          <Loader />
        </Dimmer>

        <WorkStep />
        <Divider hidden />

        <Grid textAlign='center' style={{ height: '100vh' }}>
          <Grid.Column style={{ maxWidth: 700 }}>
            <Segment raised padded={'very'}>
              <OrderForm
                onSubmit={save}
                insertData={props.location.orderParam}
              />
            </Segment>

            <Message
              warning
              header='注意事項'
              list={[
                '聯絡電話請勿輸入任何特殊符號，完整例如： 0423916552',
                '報價未輸入資料預設儲存0元，待完整報價請由查詢功能更新'
              ]}
            />
          </Grid.Column>
        </Grid>
      </Container>
      <SystemModal message={errorMessage} modalOpen={modal} handleClose={() => setModal(false)} />
    </Fragment>
  )
}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
  return state.form.order
    ? {
      values: state.form.order.values,
      submitSucceeded: state.form.order.submitSucceeded
    }
    : {};
};

export default connect(mapStateToProps)(Work)
