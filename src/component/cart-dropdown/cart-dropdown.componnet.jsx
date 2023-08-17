import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>

        </div>
        <Button>ADD TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;