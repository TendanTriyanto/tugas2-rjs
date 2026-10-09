import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row align-items-center bg-white p-5 rounded shadow-sm border">
        {/* Bagian Kiri: Teks & Tombol */}
        <div className="col-lg-7 pe-lg-5 mb-4 mb-lg-0">
          <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
            Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
          </h1>
          <p className="text-muted mb-4 fs-5">
            Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
          </p>
          <div className="d-flex gap-3">
            <Link to="/contact" className="btn btn-primary btn-lg px-4 fw-semibold">
              Buy Now
            </Link>
            <Link to="/contact" className="btn btn-outline-secondary btn-lg px-4 fw-semibold">
              Detail
            </Link>
          </div>
        </div>

        {/* Bagian Kanan: Gambar Buku dari Link Publik */}
        <div className="col-lg-5">
          <div className="rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" 
              alt="Atomic Habits Book Cover" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}