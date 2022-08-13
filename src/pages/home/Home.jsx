import Topbar from '../../components/others/topbar/Topbar'
import Footer from '../../components/others/footer/Footer'
import "./home.css"

export default function Home() {

    return (
        <>
            <Topbar/>

            <section className="introduction">
                <h1>Green Community</h1>
                <p>Mời chúa tể Vinh tự điền vào đây.</p>
            </section>
            <section className="about-us">
                <div className="center-align-vertical">
                <div>
                    <h3>Về <span className="green">Chúng Tôi</span></h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam
                    ex voluptate optio sunt mollitia corrupti fugiat? Molestiae iusto
                    temporibus, eveniet dolores quis perferendis exercitationem amet
                    in similique harum impedit.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                    expedita molestiae eos sunt eligendi ipsum cum sed alias veniam
                    similique labore architecto? Maiores cupiditate autem libero
                    excepturi quasi culpa quaerat!
                    </p>
                </div>

                <div className="service-description sd-left">
                    <h4>Kiém Thêm <span className="green">Điểm</span></h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                    expedita molestiae eos sunt eligendi ipsum cum sed alias veniam
                    similique labore architecto? Maiores cupiditate autem libero
                    excepturi quasi culpa quaerat!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                    expedita molestiae eos sunt eligendi ipsum cum sed alias veniam
                    similique labore architecto? Maiores cupiditate autem libero
                    excepturi quasi culpa quaerat!
                    </p>
                </div>

                <div className="service-description sd-left">
                    <h4>Bảo Vệ <span className="green">Môi Trường</span></h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
                    expedita molestiae eos sunt eligendi ipsum cum sed alias veniam
                    similique labore architecto? Maiores cupiditate autem libero
                    excepturi quasi culpa quaerat!
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