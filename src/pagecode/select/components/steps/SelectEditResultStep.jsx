

import React, { Fragment } from 'react';
import { Icon, Breadcrumb } from 'semantic-ui-react';

const SelectEditResultStep = () => {
  return (
    <Fragment >
      <Breadcrumb size={'large'}>
        <Breadcrumb.Section link><Icon name='ordered list' />維修單</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right arrow' />
        <Breadcrumb.Section active><Icon name='search' />編輯</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right arrow' />
        <Breadcrumb.Section active><Icon name='file alternate outline' />結果</Breadcrumb.Section>
      </Breadcrumb>
    </Fragment>
  )
}

export default SelectEditResultStep;