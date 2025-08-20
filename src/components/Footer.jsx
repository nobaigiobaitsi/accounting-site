export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">

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
            {/* <li><a href="#about" className="hover:text-brand-light transition">About</a></li> */}
            {/* <li><a href="#services" className="hover:text-brand-light transition">Services</a></li> */}
            <li><a href="#contact" className="hover:text-brand-light transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-heading mb-4">Contact Us</h3>
          <p className="text-gray-800">📍 Anafis 12, Glifada 165 62, Attica, Greece</p>
          <p className="text-gray-800">📞 +30 210 960 4322</p>
          <p className="text-gray-800">✉ info@alcon.gr</p>
        </div>
        <div>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1916.3701972663875!2d23.76023278576884!3d37.89206467583663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be1dda522439%3A0x7d324361adafd2b4!2zzpHOvc6sz4bOt8-CIDEyLCDOk867z4XPhs6szrTOsSAxNjUgNjI!5e1!3m2!1sel!2sgr!4v1755693647800!5m2!1sel!2sgr"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
