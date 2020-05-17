import { Icon, Table } from 'semantic-ui-react'
import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CustomerOrdersTable = (props) => {


  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>維修單號</Table.HeaderCell>
          <Table.HeaderCell>客戶姓名</Table.HeaderCell>
          <Table.HeaderCell>聯絡電話</Table.HeaderCell>
          <Table.HeaderCell>維修裝置</Table.HeaderCell>
          <Table.HeaderCell>備註</Table.HeaderCell>
          <Table.HeaderCell>狀態</Table.HeaderCell>
          <Table.HeaderCell>明細/編輯</Table.HeaderCell>
          <Table.HeaderCell>新增維修單</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.keys(props.orders).map(key => (
          <Table.Row key={key}>
            <Table.Cell singleLine>{props.orders[key].orderId}</Table.Cell>
            <Table.Cell><Icon name={props.orders[key].gender} />{props.orders[key].custName}</Table.Cell>
            <Table.Cell>{props.orders[key].phone}</Table.Cell>
            <Table.Cell>{props.orders[key].device}</Table.Cell>
            <Table.Cell>{props.orders[key].memo}</Table.Cell>
            <Table.Cell><Icon name='check' />{props.orders[key].status}</Table.Cell>
            <Table.Cell textAlign='center'><Button primary disabled>明細</Button></Table.Cell>
            <Table.Cell textAlign='center'>
              <Link to={{
                pathname: '/work',
                orderParam: props.orders[key]
              }} className="btn btn-primary">新增
            </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

    </Table>
  )
}


export default CustomerOrdersTable