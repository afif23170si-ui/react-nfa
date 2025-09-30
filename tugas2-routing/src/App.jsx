// src/App.jsx

import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/* Bagian 1: Navigasi */}
      <header className="sticky-top bg-white shadow-sm">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between py-3">
            <div className="col-md-3 mb-2 mb-md-0">
              <Link
                to="/"
                className="d-inline-flex link-body-emphasis text-decoration-none h4 fw-bold"
              >
                BookPip
              </Link>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 link-secondary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link px-2">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/team" className="nav-link px-2">
                  Tim Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link px-2">
                  Kontak
                </Link>
              </li>
            </ul>

            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">
                Masuk
              </button>
              <button type="button" className="btn btn-primary">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Bagian 2: Routing Halaman */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Bagian 3: Footer */}
      <footer className="bg-dark text-white py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>BookPip</h5>
              <p className="text-white-50">
                Gerbang menuju ribuan cerita, dikurasi khusus untuk Anda.
              </p>
            </div>
            <div className="col-md-2 offset-md-1 mb-3">
              <h5>Navigasi</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-white-50">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/products" className="nav-link p-0 text-white-50">
                    Koleksi
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/team" className="nav-link p-0 text-white-50">
                    Tentang
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 offset-md-1 mb-3">
              <p className="text-center text-md-end">
                &copy; 2025 Afif Ramadhan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
