import errorModal from './ErrorModal.module.css';
import button from "./Button.module.css";
import React from 'react';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
	return (
		<div className={errorModal.backdrop} onClick={props.onConfirm} />
	);
}

const ModalOverlay = (props) => {
	return (
		<div className={errorModal.modal}>
			<div className={errorModal.header}>
				<h2>
					{props.details.title}
				</h2>
			</div>
			<div className={errorModal.content}>
				<div className={errorModal.msg}>
					{props.details.message}
				</div>
				<div className={errorModal.actions}>
					<button className={button.button} onClick={props.onConfirm}>Close</button>
				</div>
			</div>
		</div>
	);
}


const ErrorModal = (props) => {

	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}

			{ReactDOM.createPortal(<ModalOverlay
				details={props.details}
				onConfirm={props.onConfirm}
			/>, document.getElementById('overlay-root'))}

		</React.Fragment>
	);

}

export default ErrorModal;