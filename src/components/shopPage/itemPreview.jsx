import "./itemPreview.css";
import itemIcon from "./tempImages/loginIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg"
import addButton from "../../assets/icons/add_button.svg"
import { Link } from "react-router-dom";

const ItemPreview = () => {

    return (
        <div className="item-preview-bg">
            <div className="item_preview">
                <div className="header">
                    <Link to={"/shop"}>
                        <img src={closeIcon} alt="close" />
                    </Link>
                </div>
                <div className="item_section">
                    <div className="image_preview">
                        {/* this section has to be designed separately as a gallery */}
                        <h1>imgae preview</h1>
                    </div>

                    <div className="partition"></div>

                    <div className="details">
                        {/* this section has to be designed separately with a chronological detail section */}
                        <div className="detail_heading">
                            <img src={itemIcon} alt="" />
                            <span>Login/Signup System</span>
                        </div>
                        <div className="detail_content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, cupiditate. Rerum sed eligendi autem consectetur similique dolores asperiores. Placeat hic dolorum dolore odio quia amet sapiente minus quo fugit, quod quasi dolor tenetur neque voluptatem molestias! Distinctio vero ut commodi eius. Molestias deserunt itaque soluta, fugiat voluptatem, voluptatibus quas culpa possimus distinctio ab vitae! Repudiandae, dicta aut numquam fugiat laboriosam iure voluptatibus ducimus qui dignissimos deleniti eaque quos fugit! Ducimus quam omnis dolorum a nulla, error nam vel placeat illum temporibus adipisci quidem neque voluptates totam soluta, debitis porro asperiores velit ab explicabo saepe! Sapiente quisquam doloribus, itaque accusantium dicta perferendis quis, excepturi eum tenetur laborum iure vel dolorem iusto sed molestiae maxime repudiandae exercitationem magni temporibus eaque obcaecati? Tempore doloribus similique fugiat nulla expedita, cumque rerum ut modi in molestias velit dolores corporis architecto nesciunt adipisci quam quod tempora dolorum laboriosam! Esse officiis eligendi, adipisci placeat consectetur debitis voluptatem possimus pariatur blanditiis doloribus, perspiciatis laboriosam ex reiciendis quod non at! Cumque, asperiores nobis. Tempore maxime fuga ipsa! Quidem, officia sapiente repudiandae similique corrupti recusandae inventore enim vitae corporis suscipit ad repellendus dolorum soluta earum aliquam. Ipsam beatae ducimus, optio, facere velit dolorem praesentium, illo repellendus blanditiis fugiat culpa doloremque.
                        </div>
                    </div>
                </div>
                <div className="interaction_section">
                    <button><img src={addButton} alt="" />Add to app</button>
                </div>
            </div>
        </div>
    )
}

export default ItemPreview;