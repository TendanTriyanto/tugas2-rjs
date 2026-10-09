export default function Team() {
  return (
    <div>
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Tim BookStore</h1>
          <p className="text-muted">Orang-orang hebat di balik layar yang memastikan buku terbaik sampai ke tanganmu</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Tendan</h5>
                  <p className="text-muted small">Chief Executive Officer (CEO)</p>
                  <p className="card-text text-secondary">Memimpin visi dan strategi pengembangan platform toko buku digital ini.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Bila</h5>
                  <p className="text-muted small">Book Curator & Editor</p>
                  <p className="card-text text-secondary">Ahli yang menyeleksi kurasi bacaan berkualitas dan menjalin relasi penerbit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Ambon</h5>
                  <p className="text-muted small">Marketing Director</p>
                  <p className="card-text text-secondary">Mengelola promosi buku, kampanye literasi, dan kepuasan pelanggan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}