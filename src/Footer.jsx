import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="fw-semibold fs-4">Тусупов Темиргали Расович</div>
        <div className="d-flex align-items-center gap-3">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-light" />
          <a href="https://wa.me/+77057372926?text=Здравствуйте,%20интересуют%20нотариальные%20услуги."
             className="fs-5 text-decoration-none text-light">
            +7 (705) 737 2926
          </a>
        </div>
        <div className="text-end">
          <p className="mb-0">г.Тараз</p>
          <p className="mb-0">ул.Толе Би, 53</p>
        </div>
      </div>
    </footer>
  );
}
