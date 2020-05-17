import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import { CustomerAnalysis, ProfitAnalysis } from './components/DataAnalysis';
import { Grid } from 'semantic-ui-react';

export const Homepage = ({ mobile }) => (
  <div>
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 600, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <Header
          as='h1'
          content='Ray + Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
      </Container>
    </Segment>


    <Segment style={{ padding: '5em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              客群分析
            </Header>
            <CustomerAnalysis></CustomerAnalysis>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              營業額分析
            </Header>
            <ProfitAnalysis></ProfitAnalysis>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
)
