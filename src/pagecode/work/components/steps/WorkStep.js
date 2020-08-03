import React, { Fragment } from "react";
import { Icon, Breadcrumb } from 'semantic-ui-react'

const WorkStepResult = (props) => {

  return (
    <Fragment>
      <Breadcrumb size={'large'}>
        <Breadcrumb.Section link><Icon name='male' />客戶</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right arrow' />
        <Breadcrumb.Section active><Icon name='ordered list' />新增維修單</Breadcrumb.Section>
      </Breadcrumb>
    </Fragment>
  )
}

export default WorkStepResult;