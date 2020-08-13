import React, { useRef, Fragment } from 'react'
import { Container, Divider, Segment, Button } from 'semantic-ui-react'
import SelectDetailStep from './components/steps/SelectDetailStep';
import SelectDetailData from './components/SelectDetailData';
import { Link } from 'react-router-dom';
import OrderTable from '../../common/components/OrderTable';
import ReactToPrint from 'react-to-print';


export const SelectDetail = (props) => {

  const componentRef = useRef(null);

  const goBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  }

  console.log(props.location.orderParam);
  return (
    <Fragment>
      <Container>
        <Divider hidden />
        <SelectDetailStep />
        <Divider hidden />

        <Segment raised>
          <SelectDetailData order={props.location.orderParam} />
        </Segment>

        <Divider hidden />
        <Button basic color='black' onClick={goBack}>
          <i className="arrow left icon"></i>
          回上一頁
      </Button>
        <Button primary as={Link}
          to={{
            pathname: '/select/detail/edit',
            orderParam: props.location.orderParam
          }}
        >
          <i className="edit outline left icon"></i>
          編輯
      </Button>
        < ReactToPrint
          trigger={() => <Button color='red'><i className="print left icon"></i>列印維修單</Button>}
          content={() => componentRef.current}
        />
      </Container >

      <div style={{ display: 'none' }}>
        < OrderTable ref={componentRef} printData={props.location.orderParam ? props.location.orderParam : {}} />
      </div>

    </Fragment>
  )
}

