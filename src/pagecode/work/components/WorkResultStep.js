import React, { Fragment } from "react";
import { Icon, Step } from 'semantic-ui-react'
import { Segment } from "semantic-ui-react";

const WorkResultStep = (props) => {

  const { children } = props

  return (
    <Fragment>
      <Step.Group unstackable size='mini'>
        <Step>
          <Icon name='male' />
          <Step.Content>
            <Step.Title>客戶</Step.Title>
          </Step.Content>
        </Step>
        <Step>
          <Icon name='ordered list' />
          <Step.Content>
            <Step.Title>新增維修單</Step.Title>
          </Step.Content>
        </Step>
        <Step active>
          <Icon name='th list' />
          <Step.Content>
            <Step.Title>結果</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
      <Segment raised>
        {children}
      </Segment>
    </Fragment>
  )
}

export default WorkResultStep