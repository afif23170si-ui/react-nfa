import teamMember1 from '../assets/team1.jpg';
import teamMember2 from '../assets/team2.jpg';

function Team() {
  return (
    <div className="container px-4 py-5" id="team-section">
      <h2 className="pb-2 border-bottom text-center mb-5">Tim Kurator Buku Kami</h2>
      <div className="row g-4 py-5 justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <img src={teamMember1} className="card-img-top" alt="Kepala Kurator" style={{aspectRatio: '1/1', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Andi Permana</h5>
              <p className="card-text text-muted">Kepala Kurator. Dengan hasrat literatur, Andi memilih setiap buku untuk memastikan hanya karya terbaik yang sampai ke tangan Anda.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <img src={teamMember2} className="card-img-top" alt="Manajer Komunitas" style={{aspectRatio: '1/1', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Siti Aminah</h5>
              <p className="card-text text-muted">Manajer Pengalaman Pelanggan. Siti memastikan setiap pertanyaan Anda terjawab dan pengalaman berbelanja Anda menyenangkan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
