'use client';

export function ContactForm() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Formulir Kontak</h2>
        <div className="max-w-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nama</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2" placeholder="Email Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pesan</label>
              <textarea className="w-full border rounded-lg px-4 py-2 h-32" placeholder="Pesan Anda"></textarea>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
