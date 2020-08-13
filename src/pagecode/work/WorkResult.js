import React, { useRef } from "react";
import { Grid, Button, Header, Container, Divider, Table, Segment } from 'semantic-ui-react'
import WorkResultStep from './components/steps/WorkResultStep';
import Lottie from 'react-lottie';
import animationData from '../../common/asserts/lottie.data/success-animation.json'
import OrderTable from '../../common/components/OrderTable';
import ReactToPrint from 'react-to-print';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {*} props 
 */
const WorkResult = (props) => {

  const componentRef = useRef(null);

  const response = props.location.response;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <Divider hidden />
      <WorkResultStep />

      <Segment raised >

        <Lottie options={defaultOptions}
          height={150}
          width={150}
          isStopped={false}
        />
        <Header as='h3'>儲存成功</Header>

        {
          response ?
            <div style={{ padding: '40px' }}>
              <Table style={{ border: 'none' }} singleLine>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>維修單號</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.orderId}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>客戶姓名</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.custName} ({response.gender === 'male' ? '男' : '女'})</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>聯絡電話</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.phone}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>維修裝置</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.device}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>裝置顏色</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.color}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>報修狀況</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.errorDesc}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>報價</Header></Table.Cell>
                    <Table.Cell textAlign='left'>{response.fixAmount}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign='center'><Header>備註</Header></Table.Cell>
                    <Table.Cell textAlign='left'>
                      {response.memo}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            : null
        }
      </Segment>

      <Grid textAlign='center' style={{ padding: '40px' }}>
        <Button primary as={Link} to="/work"><i className="add left icon"></i>再新增一筆</Button>
        < ReactToPrint
          trigger={() => <Button color='red'><i className="print left icon"></i>列印維修單</Button>}
          content={() => componentRef.current}
        />
      </Grid>
      <div style={{ display: 'none' }}>
        < OrderTable ref={componentRef} printData={response ? response : {}} />
      </div>
    </Container >
  )
}


export default WorkResult
