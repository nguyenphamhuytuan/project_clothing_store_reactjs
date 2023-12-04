import './Checkout.scss';
import Header from '../Index/Header/Header';
import Footer from '../Index/Footer/Footer';
import YourOrder from './Components/YourOrder';
import BillingAddress from './Components/BillingAddress';

function Checkout(){
    return(
        <>
            <body>
            <div id="wrapper">
            <Header/>

            <div class="checkout_area section_padding_100">
                <div class="container">
                    <div class="row">
                        <BillingAddress/>
                        <YourOrder/>
                    </div>
                </div>
            </div>

            <Footer/>
            </div>
            </body>
        </>
    )

}
export default (Checkout);
