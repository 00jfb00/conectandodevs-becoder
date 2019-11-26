import React, {Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import {Container} from 'native-base';
import PropTypes from 'prop-types';
import {Colors} from '../../Themes/';

class FancyModal extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isVisible: PropTypes.bool,
    closeOnBackdropClick: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    buttons: PropTypes.array,
    children: PropTypes.element,
  };

  static defaultProps = {
    id: `id${Math.random() * 10000}`,
    closeOnBackdropClick: false,
    showCloseButton: false,
    isVisible: false,
    onClose: () => {},
    buttons: [
      {
        text: 'OK',
        backgroundColor: Colors.primary,
        textColor: 'white',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        {this.props.isVisible && (
          <Modal
            testID={'modal'}
            id={this.props.id}
            key={this.props.id}
            isVisible={this.props.isVisible}
            onBackdropPress={
              this.props.closeOnBackdropClick ? this.props.onClose : undefined
            }
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}>
            <Container style={styles.modalView}>
              <ModalHeader
                title={this.props.title}
                showCloseButton={this.props.showCloseButton}
                onClose={this.props.onClose}
              />
              <ModalContent>{this.props.children}</ModalContent>
              <ModalFooter
                isVisible={this.props.isVisible}
                onClose={this.props.onClose}
                buttons={this.props.buttons}
              />
            </Container>
          </Modal>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});

export default FancyModal;
