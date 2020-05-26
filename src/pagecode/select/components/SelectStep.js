

import React from "react";
import {  Icon, Step } from 'semantic-ui-react'
import {  Segment } from "semantic-ui-react";

const SelectStep = (props) => {

  const { children } = props

  return (
    <div >
       <Step.Group unstackable size='mini'>
          <Step>
            <Icon name='ordered list' />
            <Step.Content>
              <Step.Title>維修單</Step.Title>
            </Step.Content>
          </Step>
          <Step active>
            <Icon name='search' />
            <Step.Content>
              <Step.Title>查詢</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      <Segment raised>
        {children}
      </Segment>
    </div>
  )
}

export default SelectStep