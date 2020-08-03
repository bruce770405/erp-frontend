

import React, { Fragment } from "react";
import { Icon } from "semantic-ui-react";
import { Breadcrumb } from 'semantic-ui-react'
const SelectEditStep = () =>
  <Fragment >
    <Breadcrumb size={'large'}>
      <Breadcrumb.Section link><Icon name='ordered list' />維修單</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section active><Icon name='search' />查詢</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section active><Icon name='edit outline' />編輯</Breadcrumb.Section>
    </Breadcrumb>
  </Fragment>

export default SelectEditStep;