import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

class SystemModal extends React.Component {

  confirmClick = (event, data) => {
    console.log("Passed in Prop Value: " + this.props.valueIntoModal);
    this.props.handleClose();
  }

  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        size='small'
        closeOnEscape={true}
        closeOnRootNodeClick={true}
      >
        <Header icon='browser' content='System Message' />
        <Modal.Content>
          <h3>{this.props.message}</h3>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button
            negative
            type='button'
            icon='remove'
            labelPosition='right'
            onClick={this.props.handleClose}
            content='Cancel'
          /> */}
          <Button
            positive
            type='button'
            icon='checkmark'
            labelPosition='right'
            onClick={this.confirmClick}
            content='Confirm'
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default SystemModal;