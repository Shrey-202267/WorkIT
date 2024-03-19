import IMG from "../../assets/images/TWJ1.png";
import "./cart.css";
import { MdCancel } from "react-icons/md"; //cross
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Cart() {
  const { productId } = useParams();
  return (
    <>
      <div className="main-container">
        <div className="main">
          <div className="left">
            <h1>Cart</h1>

            <div className="list-head">
              <h2>Features added: {productId}</h2>

              <div className="list">
                <div className="item">
                  <span>Login/Signup system</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>

                <div className="item">
                  <span>Face recognition system</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>

                <div className="item">
                  <span>E-commerce cart feature</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>

                <div className="item">
                  <span>chat bot</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>

                <div className="item">
                  <span>real time database management</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="imges">
              <img src={IMG} alt="" />
            </div>
            <br />
            <br />

            <div className="amount-box">
              <p>Expected amount:</p>
              <div className="amount">
                <h2>Rs.</h2>
                <h2>129,999.00</h2>
              </div>
            </div>

            <div className="checkout">Build the app</div>
          </div>
          <span className="cross">
            <Link to="../shop">
                <MdCancel />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Cart;
