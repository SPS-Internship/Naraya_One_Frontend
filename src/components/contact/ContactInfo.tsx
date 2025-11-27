'use client';

export function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Informasi Kontak</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Kantor Pusat</h3>
            <p className="text-gray-600">Jakarta, Indonesia</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Media Sosial</h3>
            <p className="text-gray-600">Ikuti kami di semua platform</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Jam Operasional</h3>
            <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
