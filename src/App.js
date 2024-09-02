import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./ContactForm";
import img1 from "./img/054f8a21-b5dd-4f7e-bef0-e0ca28309acd.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faHandshake, faScroll, faCheckCircle, faPen, faGavel, faRing, faCopy, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

function App() {
  const services = [
    { title: "Договоры", text: "Купля-продажа, дарение, мена, ипотека и др.", icon: faFileContract },
    { title: "Доверенности", text: "Представительство в суде, управление и распоряжение автомобилем и др.", icon: faHandshake },
    { title: "Завещания", text: "Удостоверение завещания и др.", icon: faScroll },
    { title: "Согласия", text: "На выезд несовершеннолетних и др.", icon: faCheckCircle },
    { title: "Заявления", text: "О принятии, выходе из гражданства и др.", icon: faPen },
    { title: "Наследство", text: "Открытие, принятие, отказ от наследства.", icon: faGavel },
    { title: "Брачный договор", text: "Составление брачного договора.", icon: faRing },
    { title: "Копии", text: "Копии уставов, договоров и других документов.", icon: faCopy },
    { title: "Юридические консультации", text: "Консультации по различным вопросам.", icon: faBalanceScale },
  ];

  return (
    <div>
      <div className="container-fluid about-lawyer py-5 bg-light text-center shadow-sm">
        <h2 className="fs-1">НОТАРИУС</h2>
        <p className="fs-4 mb-2">ТУСУПОВ ТЕМИРГАЛИ РАСОВИЧ</p>
        <p className="text-muted">
          Действует на основании Лицензии №0003207 выданной Министерством юстиции Республики Казахстан от 28 декабря 2010 года.
        </p>
      </div>

      <div className="container py-5">
        <h3 className="text-center mb-5 fw-semibold">Нотариальные услуги</h3>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card border-0 shadow h-100 text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={service.icon} className="fa-2x mb-3 text-primary" />
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text text-muted">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid py-5">
        <h3 className="text-center mb-4 fw-semibold">Расположение</h3>
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img src={img1} alt="Location" className="img-fluid rounded shadow" style={{ width: "500px" }} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1228.8284795555096!2d71.37932722728704!3d42.90105344041287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a7032af88884af%3A0xdceece04849a633a!2zNTMsINCi06nQu9C1INCR0Lgg0LrTqdGI0LXRgdGWLCDQotCw0YDQsNC3!5e0!3m2!1sru!2skz!4v1725276759423!5m2!1sru!2skz"
            width="500"
            height="670"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
