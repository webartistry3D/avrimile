const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 lg:py-24 relative bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("http://127.0.0.1:5000/src/assets/about1.jpg")'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="http://127.0.0.1:5000/src/assets/about1.jpg"
              alt="Avrimile team of logistics professionals"
              className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
              data-testid="img-about-team"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-avrimile-secondary mb-6">About Us</h2>
            <div className="space-y-4 text-lg text-avrimile-muted leading-relaxed">
              <p>
                At <span className="text-avrimile-primary font-semibold">Avrimile Enterprises</span>, 
                we go beyond every mile to provide innovative logistics and procurement solutions for 
                individuals and businesses across Nigeria. Our services are designed to meet the evolving 
                needs of micro, small, and medium-scale enterprises (MSMEs), delivering value through 
                last-mile delivery, bulk haulage, inventory management, and tailored procurement support.
              </p>
              <p>
                With a growing fleet, {/*real-time tracking capabilities,*/} and a team of logistics professionals, 
                we ensure every delivery is swift, secure, and seamless — from warehouse to doorstep. Our 
                approach combines technology and expertise to optimize supply chains, reduce operational friction, 
                and meet customer expectations with precision.
              </p>
              <p>
                Whether you're a startup scaling your distribution or a corporation optimizing your supply flows, 
                Avrimile is your trusted partner for dependable, fast, and smart logistics. We don't just move 
                goods — we deliver confidence, speed, and innovation in motion.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center" data-testid="stat-deliveries">
                <div className="text-6xl font-bold text-avrimile-primary mb-2">500+</div>
                <div className="text-avrimile-muted">Deliveries Completed</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-6xl font-bold text-avrimile-primary mb-2">50+</div>
                <div className="text-avrimile-muted">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
