import React from "react";
import { Grid, Icon, Step } from 'semantic-ui-react'

const SelectStep = () => {

  return (
    <Grid>
      <Grid.Column floated='left' width={4}>
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
              <Step.Description></Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </Grid.Column>
    </Grid>

  )
}

export default SelectStep