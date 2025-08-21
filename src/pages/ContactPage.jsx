// import logo01 from "../images/logo01.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeContent from '../components/FadeContent/FadeContent';

export default function ContactPage() {
  return (
    <>
    <FadeContent>
      <Navbar />
      {/* Hero Section
      <section className="bg-brand-light min-h-[50vh] flex flex-col justify-center items-center text-center px-4">
        <img src={logo01} alt="Main Logo" className="mb-2" />
        <h1 className="text-4xl font-heading text-brand-dark mb-2">
          Contact Alpha Consultants
        </h1>
        <p className="text-neutral-dark max-w-xl">
          We’d love to hear from you. Reach out and let’s find the best solution for your needs.
        </p>
      </section> */}

      {/* Contact Info Section */}
      <section id="contact" className="bg-gray-50 py-20 px-4">
  <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-12 items-start">
    {/* Text Column */}
    <div className="text-center md:text-left mb-10 md:mb-0">
      <h2 className="text-3xl font-heading text-brand-dark mb-4">
        Feel free to contact us
      </h2>
      <p className="text-neutral-dark max-w-md">
        Here’s how you can reach us directly. We’re happy to answer any questions you may have.
      </p>
    </div>

    {/* Cards Column */}
    <div className="grid sm:grid-cols-3 gap-6">
      {/* Address Card */}
      <div
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4"
        style={{ borderTopColor: "#0F4E8C" }}
      >
        <h3 className="text-xl font-heading text-brand-dark mb-2">Address</h3>
        <p className="text-neutral-dark">
          Anafis 12 Glifada, 16562, Attica, Greece
        </p>
      </div>

      {/* Phone Card */}
      <div
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4"
        style={{ borderTopColor: "#0F4E8C" }}
      >
        <h3 className="text-xl font-heading text-brand-dark mb-2">Phone</h3>
        <p className="text-neutral-dark">+30 210 9604 322</p>
      </div>

      {/* Email Card */}
      <div
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4"
        style={{ borderTopColor: "#0F4E8C" }}
      >
        <h3 className="text-xl font-heading text-brand-dark mb-2">Email</h3>
        <p className="text-neutral-dark">info@alcon.gr</p>
      </div>
    </div>
  </div>
</section>

      {/* Google Maps Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-heading text-brand-dark mb-4">
            Find Us Here
          </h2>
        </div>
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1916.3701972663875!2d23.76023278576884!3d37.89206467583663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be1dda522439%3A0x7d324361adafd2b4!2zzpHOvc6sz4bOt8-CIDEyLCDOk867z4XPhs6szrTOsSAxNjUgNjI!5e1!3m2!1sel!2sgr!4v1755693647800!5m2!1sel!2sgr"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
      </FadeContent>
    </>
  );
}
