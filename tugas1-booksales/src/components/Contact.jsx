function Contact() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5" id="contact-section">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-5 fw-bold lh-2 mb-3 text-gradient">Punya Pertanyaan?</h1>
          <p className="col-lg-10 fs-6 text-muted">
            Isi formulir di sebelah untuk mengirimkan pesan kepada kami. Tim kami akan merespons secepat mungkin.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-4 shadow-lg bg-white">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Alamat Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingSubject" placeholder="Subjek" />
              <label htmlFor="floatingSubject">Subjek</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" placeholder="Tinggalkan pesan di sini" id="floatingTextarea" style={{ height: '120px' }}></textarea>
              <label htmlFor="floatingTextarea">Pesan</label>
            </div>
            <button className="w-100 btn btn-md btn-primary" type="submit">Kirim Pesan</button>
            <hr className="my-4" />
            <small className="text-body-secondary">Dengan mengirim, Anda menyetujui syarat dan ketentuan kami.</small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
