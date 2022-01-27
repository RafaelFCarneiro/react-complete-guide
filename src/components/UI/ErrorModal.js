import { Fragment } from 'react';
import Button from './Button';
import Card from './Card';
import { ReactDOM } from 'react-dom';

import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => (
  <Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
      document.getElementById('overlay-root')
    )}
  </Fragment>
);
export default ErrorModal;

const Backdrop = ({ onConfirm }) => (
  <div className={classes.backdrop} onClick={onConfirm}></div>
);

const ModalOverlay = ({ title, message, onConfirm }) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p>{message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={onConfirm}>Okay</Button>
    </footer>
  </Card>
);
