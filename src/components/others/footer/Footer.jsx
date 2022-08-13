import "./footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className = "footer">
                <div>
                    <h3><span className="green">Nghĩa vụ</span> của chúng tôi</h3>
                    <p>
                    Chúng tôi thông qua website này có một sứ mệnh là nâng cao nhận thức của người dân cũng như thúc đẩy các hoạt động vì môi trường một cách hiệu quả và bền vững. 
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