import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <div>
          <h1 className="fs-2 mb-0">Тусупов Темиргали Расович</h1>
          <p className="text-muted fs-6">НОТАРИУС Г.ТАРАЗ</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-success" />
          <a href="https://wa.me/+77057372926?text=Здравствуйте,%20интересуют%20нотариальные%20услуги."
             className="fs-5 text-decoration-none text-dark">
            +7 (705) 737 2926
          </a>
        </div>
        <div className="text-end">
          <p className="mb-0 fw-semibold">г.Тараз</p>
          <p className="mb-0 text-muted">ул.Толе Би, 53</p>
        </div>
      </div>
    </header>
  );
}
