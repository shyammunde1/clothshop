import './button.styles.scss'

/* 
default 

inverted

googlesign in
*/

const  BUTTON_TYPE_CLASSES={
  inverted:'inverted',
  google: 'google-sign-in',
}

const Button = ({ children,buttonType,...otherprops }) => {
    return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherprops}>{children}</button>
}

export default Button;