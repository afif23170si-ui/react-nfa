import heroImage from '../assets/hero-image.png';

function Home() {
  return (
    <div className="container col-xxl-8 px-4 py-5" id="home">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img 
            src={heroImage} 
            className="d-block mx-lg-auto img-fluid" 
            alt="Koleksi Buku Terbaik" 
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-4 text-gradient">
            Gerbang Menuju Ribuan Cerita
          </h1>
          <p className="fs-6 text-muted">
            Temukan dunia baru di setiap halaman. Koleksi buku terlengkap mulai dari novel fiksi, biografi inspiratif, hingga buku sains populer.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <button type="button" className="btn btn-primary btn-md">
              Beli Sekarang
            </button>
            <button type="button" className="btn btn-outline-secondary btn-md">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
