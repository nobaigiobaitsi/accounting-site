import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo01 from "../images/logo01.png";
import OfficeSpace from '../images/OfficeSpace.png'

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      {/* <section className="bg-brand-light min-h-screen flex flex-col justify-center items-center text-center px-4">
        <img src={logo01} alt="Main Logo" className="mb-2" />
        {/* <h1 className="text-5xl font-heading text-brand-dark mb-4">
          Trusted Accounting Services
        </h1> */}
        {/* <p className="text-neutral-dark text-lg max-w-xl mb-6">
          Helping businesses and individuals with bookkeeping, tax preparation, and financial consulting for over 20 years.
        </p> */}
      {/* </section> */}

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-heading text-brand-dark mb-4">
              About Us
            </h2>
            <p className="text-neutral-dark mb-4">
              Alpha Consultants is a professional accounting firm with over 20 years of experience. We provide accurate and reliable bookkeeping, tax preparation, payroll, and financial consulting services.
            </p>
            <p className="text-neutral-dark">
              Our team of certified accountants is dedicated to helping your business grow and manage finances efficiently.
            </p>
          </div>

          {/* Image Placeholder */}
          <div>
            <img
              src={OfficeSpace}
              alt="Accounting office"
              className="rounded-xl shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-heading text-brand-dark mb-4">Our Services</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            We offer a range of accounting services tailored to your needs.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-brand" style={{ borderTopColor: '#A71D40' }}>
            <h3 className="text-xl font-heading text-brand-dark mb-2">Bookkeeping</h3>
            <p className="text-neutral-dark">
              Accurate bookkeeping to keep your finances organized and up to date.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-brand" style={{ borderTopColor: '#A71D40' }}>
            <h3 className="text-xl font-heading text-brand-dark mb-2">Tax Preparation</h3>
            <p className="text-neutral-dark">
              Professional tax filing and consulting to save you time and money.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-brand" style={{ borderTopColor: '#A71D40' }}>
            <h3 className="text-xl font-heading text-brand-dark mb-2">Financial Consulting</h3>
            <p className="text-neutral-dark">
              Expert advice to help you make smarter financial decisions.
            </p>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="bg-gray-50 py-20 px-4">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-heading text-brand-dark mb-4">Contact Us</h2>
    <p className="text-neutral-dark max-w-2xl mx-auto">
      Get in touch with us and we will find the best solution for your problem.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    {/* Address Card */}
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-brand" style={{ borderTopColor: '#0F4E8C' }}>
      <h3 className="text-xl font-heading text-brand-dark mb-2">Address</h3>
      <p className="text-neutral-dark">
        Anafis 12 Glifada, 16562, Attica, Greece
      </p>
    </div>

    {/* Phone Card */}
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-brand" style={{ borderTopColor: '#0F4E8C' }}>
      <h3 className="text-xl font-heading text-brand-dark mb-2">Phone</h3>
      <p className="text-neutral-dark">+30 210 9604 322</p>
    </div>

    {/* LinkedIn / Email Card */}
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border-t-4 border-brand" style={{ borderTopColor: '#0F4E8C' }}>
      <h3 className="text-xl font-heading text-brand-dark mb-2">LinkedIn</h3>
      <p className="text-neutral-dark">Alpha Consultants</p>
    </div>
  </div>
</section>

<Footer />

      {/* Contact Section
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-heading text-brand-dark mb-4">Contact Us</h2>
          <p className="text-neutral-dark">
            Reach out today for a consultation or quote. We’ll respond as quickly as possible.
          </p>
        </div>
        <form className="max-w-3xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </form>
      </section> */}
    </>
  );
}
