

import React, { Fragment } from 'react';
import { Icon, Breadcrumb } from 'semantic-ui-react';

const SelectDetailStep = () => {
  return (
    <Fragment >
      <Breadcrumb size={'large'}>
        <Breadcrumb.Section link><Icon name='ordered list' />維修單</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right arrow' />
        <Breadcrumb.Section active><Icon name='search' />查詢</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right arrow' />
        <Breadcrumb.Section active><Icon name='file alternate outline' />明細</Breadcrumb.Section>
      </Breadcrumb>
    </Fragment>
  )
}

export default SelectDetailStep;