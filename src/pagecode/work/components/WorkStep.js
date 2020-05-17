import React from "react";
import { Grid, Icon, Step } from 'semantic-ui-react'

const WorkStep = () => {

  return (
    <Grid>
      <Grid.Column floated='left' width={4}>
        <Step.Group unstackable size='mini'>
          <Step>
            <Icon name='male' />
            <Step.Content>
              <Step.Title>客戶</Step.Title>
              <Step.Description></Step.Description>
            </Step.Content>
          </Step>
          <Step active>
            <Icon name='ordered list' />
            <Step.Content>
              <Step.Title>新增維修單</Step.Title>
              <Step.Description></Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </Grid.Column>
    </Grid>
  )
}

export default WorkStep