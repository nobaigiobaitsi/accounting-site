export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-heading mb-4">Alpha Consultants</h2>
          <p className="text-gray-800">
            Trusted accounting services for businesses and individuals. Bookkeeping, tax, and financial consulting with accuracy and professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-heading mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-brand-light transition">Home</a></li>
            <li><a href="#about" className="hover:text-brand-light transition">About</a></li>
            <li><a href="#services" className="hover:text-brand-light transition">Services</a></li>
            <li><a href="#contact" className="hover:text-brand-light transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-heading mb-4">Contact Us</h3>
          <p className="text-gray-800">📍 Anafis 12, Glifada 165 62, Attica, Greece</p>
          <p className="text-gray-800">📞 +30 210 960 4322</p>
          <p className="text-gray-800">✉ info@alcon.gr</p>

          {/* Social Icons (Optional) */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-brand-light transition">LinkedIn</a>
            <a href="#" className="hover:text-brand-light transition">Facebook</a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Alpha Consultants. All rights reserved.<br />
        This site was created by Stavros Angelopoulos.
      </div>
    </footer>
  );
}
