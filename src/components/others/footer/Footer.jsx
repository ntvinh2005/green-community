import "./footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className = "footer">
                <div>
                    <h3><span className="green">Nghĩa vụ</span> của chúng tôi</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    assumenda unde harum nisi, magni porro est. In suscipit ullam nulla id
                    sapiente velit ex, facere atque minus ab delectus iusto.
                    </p>
                </div>
                <div>
                    <h3>Thông tin</h3>
                    <nav className="footer-nav">
                        <Link to = '/' className = "nav"> Trang chủ </Link>
                        <Link to = '/shop' className = "nav"> Cửa hàng </Link>
                        <Link to = '/task' className = "nav"> Nhiệm vụ </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}