import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import Lottie from 'react-lottie';
import animationData from '../asserts/lottie.data/failure.animation.json'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const SystemModal = (props) => (
  <Modal open={props.modalOpen}>
    <Modal.Header>系統訊息</Modal.Header>
    <Modal.Content image>
      <Lottie options={defaultOptions}
        height={100}
        width={100}
        isStopped={false}
      />
    </Modal.Content>
    <Modal.Content>
      <Modal.Description>
        <span style={{ 'textAlign': 'center', 'display': 'block', 'fontSize': '16px' }}>
          <Header>錯誤描述</Header>
          <p>{props.message}</p>
        </span>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button icon='check' content='了解' onClick={props.handleClose} />
    </Modal.Actions>
  </Modal>
)

export default SystemModal;