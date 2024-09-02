

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
    const [isDataSent, setIsDataSent] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // Замените на ваш токен бота и chat_id
    const telegramBotToken = '5891037070:AAGbClS8krZmUsG0ZIEMs7gvOAzBbhdM_GI';
    const chatId = '1063624581';

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function validateForm() {
        let errors = {};
        if (!formData.name) errors.name = 'Введите имя';
        if (!formData.phone) errors.phone = 'Введите телефон';
        if (!formData.message) errors.message = 'Введите сообщение';
        return errors;
    }

    function Submit(e) {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            const text = `Имя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;

            const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

            const data = {
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML'
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        setIsDataSent(true);
                    } else {
                        console.log('Ошибка при отправке сообщения');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            setFormErrors(errors);
        }
    }

    return (
        <div className="d-flex justify-content-center my-5">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
                {isDataSent ? (
                    <div className="alert alert-success text-center">
                        <h4>Данные успешно отправлены</h4>
                    </div>
                ) : (
                    <>
                        <h4 className="text-center mb-4">Оставьте свои контактные данные</h4>
                        <h4 className="text-center mb-4">и мы вам перезвоним</h4>
                        <form onSubmit={Submit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Имя</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Введите ваше имя"
                                />
                                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Телефон</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Введите ваш телефон"
                                />
                                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="message">Сообщение</label>
                                <textarea
                                    className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Введите сообщение"
                                    rows="4"
                                ></textarea>
                                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
