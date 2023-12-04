import './Cart.scss';
import Header from '../Index/Header/Header';
import Footer from '../Index/Footer/Footer';
import CartAreaStart from './ProductPayment/Components/CartAreaStart';
import CartAreaEnd from './ProductPayment/Components/CartAreaEnd';


function Cart(){
    return(
        <>
            <body>
            <div id="wrapper">
            <Header/>
            <div class="cart_area section_padding_100 clearfix">
            <div class="container">
            <CartAreaStart/>
            <CartAreaEnd/>
            </div>
            </div>
            <Footer/>
            </div>
            </body>
        </>
        
    )
}
export default Cart;
