


import React, { Fragment } from "react";
import { Header, Table } from 'semantic-ui-react'

const SelectDetailData = (props) => {
  return (
    <Fragment >
      {
        props.order ?
          <Table style={{ border: 'none' }} singleLine>
            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>維修單號</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.orderId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>客戶姓名</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.custName} ({props.order.gender === 'male' ? '男' : '女'})</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>聯絡電話</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.phone}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>維修裝置</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.device}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>裝置顏色</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.color}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>報修狀況</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.errorDesc}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>報價</Header></Table.Cell>
                <Table.Cell textAlign='left'>{props.order.fixAmount}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'><Header>備註</Header></Table.Cell>
                <Table.Cell textAlign='left'> {props.order.memo}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          : null
      }
    </Fragment>
  )
}

export default SelectDetailData;