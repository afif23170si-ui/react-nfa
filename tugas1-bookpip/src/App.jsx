import Home from './components/Home';
import Products from './components/Products';
import Team from './components/Team';
import Contact from './components/Contact';
// import './App.css'

function App() {
  return (
    <div>
      {/* Bagian 1: Navigasi (Lebih Modern) */}
      <header className="sticky-top bg-white shadow-sm">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
            <div className="col-md-3 mb-2 mb-md-0">
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none h4 fw-bold">
                BookPip
              </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#home" className="nav-link px-2 link-secondary">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#products-section" className="nav-link px-2">
                  Produk
                </a>
              </li>
              <li>
                <a href="#team-section" className="nav-link px-2">
                  Tim Kami
                </a>
              </li>
              <li>
                <a href="#contact-section" className="nav-link px-2">
                  Kontak
                </a>
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

      {/* Bagian 2: Isi Halaman */}
      <main>
        <Home />
        <Products /> {/* Album Produk */}
        <div style={{ backgroundColor: '#f8f9fa' }}>
          <Team />
        </div>
        <Contact />
      </main>

      {/* Bagian 3: Footer (Lebih Informatif) */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>BookPip</h5>
              <p className="text-white-50">Gerbang menuju ribuan cerita, dikurasi khusus untuk Anda.</p>
            </div>
            <div className="col-md-2 offset-md-1 mb-3">
              <h5>Navigasi</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white-50">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white-50">
                    Koleksi
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white-50">
                    Tentang
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 offset-md-1 mb-3">
              <p className="text-center text-md-end">&copy; 2025 Afif Ramadhan</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
