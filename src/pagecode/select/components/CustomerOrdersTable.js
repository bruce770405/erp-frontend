import React from 'react'
import { Button, Pagination, Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CustomerOrdersTable = (props) => {


  return (
    props.orders && props.orders.length > 0 ?
      <Table celled padded sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>維修單號</Table.HeaderCell>
            <Table.HeaderCell>客戶姓名</Table.HeaderCell>
            <Table.HeaderCell>聯絡電話</Table.HeaderCell>
            <Table.HeaderCell>維修裝置</Table.HeaderCell>
            <Table.HeaderCell>裝置顏色</Table.HeaderCell>
            <Table.HeaderCell>維修狀態</Table.HeaderCell>
            <Table.HeaderCell singleLine>明細/編輯</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(props.orders).map(key => (
            <Table.Row key={key}>
              <Table.Cell>{props.orders[key].orderId}</Table.Cell>
              <Table.Cell><Icon name={props.orders[key].gender} />{props.orders[key].custName}</Table.Cell>
              <Table.Cell>{props.orders[key].phone}</Table.Cell>
              <Table.Cell>{props.orders[key].device}</Table.Cell>
              <Table.Cell>{props.orders[key].color}</Table.Cell>
              <Table.Cell><Icon name='check' />{props.orders[key].status}</Table.Cell>
              <Table.Cell singleLine textAlign='center'>
                <Button primary as={Link} to={{
                  pathname: '/select/detail',
                  orderParam: props.orders[key]
                }}><i className="search left icon"></i>
                  明細
              </Button>
                <Button primary as={Link} to={{
                  pathname: '/select/detail/edit',
                  orderParam: props.orders[key]
                }}><i className="edit outline left icon"></i>
                  編輯
              </Button>
                {/* <Button primary disabled as={Link} to={{
                  pathname: '/work',
                  orderParam: props.orders[key]
                }}><i className="add left icon"></i>
                  新增
              </Button> */}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        {
          props.orders && props.orders.length > 0 ?
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="8">
                  <Pagination
                    totalPages={props.totalPages}
                    activePage={props.currentPage}
                    onPageChange={props.onChangePage}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
            : null
        }
      </Table> : null
  )
}


export default CustomerOrdersTable