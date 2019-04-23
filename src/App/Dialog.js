import React from 'react';
import Modal from 'react-modal'
import './Dialog.scss'

const customStyles = {
  content : {
    /* width: '50%', */
    /* height: '300px', */
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  button : {
    width: '200px',
  }
};

Modal.setAppElement('#root')


class Dialog extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      showModal: props.isOpen,
      nameValue: '',
      phoneNumber: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOnChangeForName = this.handleOnChangeForName.bind(this)
    this.handleOnChangeForNumber = this.handleOnChangeForNumber.bind(this)
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      showModal: nextProps.isOpen
    })
  }

  openModal() {
    this.setState({showModal: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({showModal: false});
  }

  toggleModal = event => {
    console.log(event);
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleOnChangeForName(event) {
    this.setState({
      nameValue: event.target.value
    })
  }

  handleOnChangeForNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    })
  }

  handleComplete() {
    const { nameValue, phoneNumber } = this.state
    if (!nameValue || !phoneNumber) {

    }

    console.log( "name: ", nameValue )
    console.log( "phoneNumber: ", phoneNumber )
  }

  render () {
    return (
      <div className='dialog'>
        <Modal
          isOpen={this.state.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">

          <div className="dialog-content">
            <h2 ref={subtitle => this.subtitle = subtitle}>
              Add Student
              <button className="close" onClick={ () => this.closeModal() }>×</button>
            </h2>
            <div>
              <input onChange={ this.handleOnChangeForName }
                     type="text"
                     value={ this.state.nameValue }
                     placeholder="姓名" />

              <input onChange={ this.handleOnChangeForNumber }
                     type="text"
                     value={ this.state.phoneNumer }
                     placeholder="手机号" />

              <div>
                <button onClick={ () => { this.handleComplete() } }>完成</button>
              </div>

            </div>

          </div>
        </Modal>

      </div>
    )
  }
}

export default Dialog