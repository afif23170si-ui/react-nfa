// src/components/Products.jsx

// import book1 from '../assets/book1.jpg';
// import book2 from '../assets/book2.jpg';
// import book3 from '../assets/book3.jpg';
// import book4 from '../assets/book4.jpg';
// import book5 from '../assets/book5.jpg';
// import book6 from '../assets/book6.jpg';

function Products() {
  return (
    <div className="album py-5 bg-light" id="products-section">
      <div className="container">
        <h2 className="text-center mb-5">Koleksi Buku Unggulan</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {/* Produk 1 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://ebooks.gramedia.com/ebook-covers/87741/image_highres/BLK_DGSNEDTJ1698394635693.jpg" className="card-img-top" alt="Buku 1" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Buku Pintar Desain Grafis</h5>
                <p className="card-text text-muted">Panduan lengkap desain grafis dengan software populer.</p>
                <button className="btn btn-sm btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>

          {/* Produk 2 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://s3-ap-southeast-1.amazonaws.com/ebook-previews/64170/223817/1.jpg" alt="Buku 2" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Membangun Startup Digital</h5>
                <p className="card-text text-muted">Belajar strategi bisnis digital dari nol.</p>
                <button className="btn btn-sm btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>

          {/* Produk 3 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://deepublishstore.com/wp-content/uploads/2021/12/Fisika-Modern_Indrawati-70gr-depan.jpg" className="card-img-top" alt="Buku 3" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Fisika Populer</h5>
                <p className="card-text text-muted">Jelajahi ilmu fisika dengan cara yang menyenangkan.</p>
                <button className="btn btn-sm btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>

          {/* Produk 4 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://bukukita.com/babacms/displaybuku/96285_f.jpg" className="card-img-top" alt="Buku 4" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Biografi Tokoh Dunia</h5>
                <p className="card-text text-muted">Kisah inspiratif para tokoh besar dunia.</p>
                <button className="btn btn-sm btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>

          {/* Produk 5 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="https://marketplace.canva.com/EAFLWf4xeVY/2/0/1003w/canva-ungu-ilustrasi-galaksi-sampul-buku-novel-Yl5AQjMUz9k.jpg"
                className="card-img-top"
                alt="Buku 5"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Novel Fiksi Terlaris</h5>
                <p className="card-text text-muted">Novel yang sedang hangat dan wajib dibaca.</p>
                <button className="btn btn-sm btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>

          {/* Produk 6 */}
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="https://tirtabuanamedia.co.id/wp-content/uploads/2023/06/MACHINE-LEARNING-Konsep-dan-Implementasi-.jpg"
                className="card-img-top"
                alt="Buku 6"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Belajar Machine Learning</h5>
                <p className="card-text text-muted">Dasar-dasar AI dan ML untuk pemula.</p>
                <button className="btn btn-sm btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
