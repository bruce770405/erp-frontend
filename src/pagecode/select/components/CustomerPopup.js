import _ from 'lodash'
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const CustomerPopup = () => (
  <Modal trigger={<Button primary>查詢</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>
          This is an example of expanded content that will cause the modal's
          dimmer to scroll
        </p>

        {_.times(8, (i) => (
          <Image
            key={i}
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ paddingBottom: 5 }}
          />
        ))}
      </Modal.Description>
    </Modal.Content>
    </Modal>
)

export default CustomerPopup
