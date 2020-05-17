import React, { useState } from 'react'
import { connect } from "react-redux";
import { Container, Divider, Segment, Loader, Dimmer } from 'semantic-ui-react'
import SelectForm from './components/SelectForm';
import CustomerOrdersTable from './components/CustomerOrdersTable';
import { HttpService } from '../../api/http/HttpService';
import SelectStep from './components/SelectStep';

// export const Select = (props, { mobile }) => {
const Select = (props) => {
  const [orders, setOrders] = useState({});
  const [loader, setLoader] = useState(false);

  /**
   * 查詢維修紀錄.
   */
  const query = () => {
    setLoader(true)

    HttpService.httpPost(props.values, succ => {
      setOrders(succ.orderBeanList);
      setLoader(false)
    }, fail => {
      console.log('fail!!!')
      setLoader(false)
    }, '/order/query')

  }

  return (
    <Container>

      <Dimmer active={loader}>
        <Loader />
      </Dimmer>

      <Divider hidden />
      <SelectStep />
      <Divider hidden />

      <Segment raised>
        <SelectForm onSubmit={query} />
        <Divider />
        <CustomerOrdersTable orders={orders}></CustomerOrdersTable>
      </Segment>

    </Container>
  )
}


const mapStateToProps = state => {
  return state.form.select
    ? {
      values: state.form.select.values,
      submitSucceeded: state.form.select.submitSucceeded
    }
    : {};
};

export default connect(mapStateToProps)(Select)