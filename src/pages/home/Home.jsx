import Topbar from '../../components/others/topbar/Topbar'
import Footer from '../../components/others/footer/Footer'
import "./home.css"

export default function Home() {

    return (
        <>
            <Topbar/>

            <section className="introduction">
                <h1>Green Community</h1>
                <p>For a greener community</p>
            </section>
            <section className="about-us">
                <div className="center-align-vertical">
                <div>
                    <h3>Về <span className="green">Chúng Tôi</span></h3>
                    <p className="description">
                    Chúng tôi - Các bạn trẻ đến từ lớp 12A1 Toán Trường THPT Chuyên KHTN với chung niềm đam mê về công nghệ và khát khao về một tương lai xanh.
                    </p>
                </div>
                </div>
                <div className="center-align">
                <img src={require('./img/about.png')} alt=""/>
                </div>
            </section>
            <section className="service center-align-vertical">
                <h3><span className="green">Dịch vụ</span> của chúng tôi</h3>
                <div className="service-grid">
                <div className="service-image-container sic-right">
                    <img className="service-image" src={require('./img/list.png')} alt=""/>
                </div>
                <div className="service-description sd-right">
                    <h4>Làm <span className="green">Việc Tốt</span></h4>
                    <p>
                    Các bạn có thể đăng những việc ảnh hưởng xấu đến môi trường, đồng thời góp sức cùng nhau hoàn thành để kiếm thêm tích điểm.
                    </p>
                </div>

                <div className="service-description sd-left">
                    <h4>Kiém Thêm <span className="green">Điểm</span></h4>
                    <p>
                    Hãy tích lũy điểm thưởng bằng cách làm nhiều việc tốt và đăng bán những món đồ cũ. Điểm càng nhiều, giá trị bạn mang lại cho cộng đồng càng lớn. Ngoài ra, điểm cũng là cơ sở giúp bạn mua những món hàng yêu thích.
                    </p>
                </div>
                <div className="service-image-container">
                    <img className="service-image" src= {require('./img/point.png')} alt=""/>
                </div>

                <div className="service-image-container sic-right">
                    <img className="service-image" src= {require('./img/store.png')} alt=""/>
                </div>
                <div className="service-description sd-right">
                    <h4><span className="green">Trao Đổi</span> Đồ</h4>
                    <p>
                    Các bạn có thể đăng hàng bán hoặc quyên tặng cho những người có tích điểm trong cộng đồng - những người đã tham gia bảo vệ môi trường. Các bạn cũng có thể mua đồ cũ bằng tiền hoặc tích điểm bảo vệ môi trường. 
                    </p>
                </div>

                <div className="service-description sd-left">
                    <h4>Bảo Vệ <span className="green">Môi Trường</span></h4>
                    <p>
                    Thông qua việc hoàn thành các nhiệm vụ bảo vệ môi trường nhận tích điểm hay trao đổi đồ cũ, các bạn đã làm xã hội trở nên tốt đẹp hơn, văn minh hơn, môi trường sống trong lành hơn.
                    </p>
                </div>
                <div className="service-image-container">
                    <img className="service-image" src = {require('./img/forest.png')} alt="" />
                </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}