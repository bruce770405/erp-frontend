import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Divider, Loader, Dimmer, Segment } from "semantic-ui-react";
import OrderForm from './components/OrderForm';
import OrderTable from '../../common/components/OrderTable';
import { HttpService } from '../../api/http/HttpService';
import SystemModal from '../../common/components/Modal';
import WorkStep from './components/WorkStep';

const Work = (props) => {

  const componentRef = useRef(null);

  const [orderId, setOrderId] = useState(0);
  const [loader, setLoader] = useState(true);
  const [modalOpen, setModalOpen] = useState(false) // 傳入 default value

  /**
   * 使用hock查詢orderId
   *   // 處理如果有從前頁帶入的資訊
    *  // change("form", "lat", position.lat())
   */
  useEffect(() => {
    HttpService.httpGet(succ => {
      setOrderId(succ.orderId)

      setLoader(false)
    }, (fail) => {
      console.log(fail)
      setLoader(false)
    }, '/order/getLastId')
  }, [])

  /**
   * 工作維修單號儲存.
   */
  const save = () => {
    setLoader(true)

    HttpService.httpPost(Object.assign({ 'orderId': orderId }, props.values), succ => {
      setModalOpen(true);
      setLoader(false)
    }, fail => {
      console.log('fail!!!')
      setModalOpen(true);
      setLoader(false)
    }, '/order/add')
  }

  return (
    <div>
      <Container>
        <Dimmer active={loader ? true : false}>
          <Loader />
        </Dimmer>

        <Divider hidden />
        <WorkStep />
        <Divider hidden />

        <Segment raised>
          <OrderForm
            orderId={orderId}
            onSubmit={save}
            componentRef={componentRef}
            insertData={props.location.orderParam}
          />
        </Segment>
        <SystemModal modalOpen={modalOpen} handleClose={() => setModalOpen(false)} message="儲存成功" />
      </Container>
      <div style={{ display: 'none' }}>
        < OrderTable ref={componentRef}
          orderId={orderId}
          printData={props.values ? props.values : {}}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  // { custName: '213', phone: '' }
  return state.form.order
    ? {
      values: state.form.order.values,
      submitSucceeded: state.form.order.submitSucceeded
    }
    : {};
};

export default connect(mapStateToProps)(Work)
