import React from 'react'; 
import styles from './modal.module.scss';
import { createPortal } from 'react-dom';

class Modal extends React.PureComponent {  

  render() { 
    const { isOpen, onClose } = this.props;
    return createPortal(
        <div 
          onClick= { onClose }
          style={{ display: isOpen ? "block" : "none" }}
          className={ styles.modal }>
            { this.props.children }
        </div>,
        document.body
    )
  }
}

export default Modal;

