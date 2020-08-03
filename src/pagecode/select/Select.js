import React, { useState } from 'react'
import { connect } from "react-redux";
import { Container, Divider, Loader, Dimmer, Message, Segment } from 'semantic-ui-react'
import SelectForm from './components/SelectForm';
import CustomerOrdersTable from './components/CustomerOrdersTable';
import { HttpService } from '../../api/http/HttpService';
import SelectStep from './components/steps/SelectStep';

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

      <Segment raised padded={'very'}>
        <SelectForm onSubmit={query} />
      </Segment>

      <CustomerOrdersTable orders={orders}></CustomerOrdersTable>

      <Message
        warning
        header='注意事項'
        list={[
          '未輸入任何查詢條件，預設查近兩年維修紀錄'
        ]}
      />
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