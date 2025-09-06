import trustBg from "../assets/trust-bg.png"; 
import { ShieldCheck, Users, Award, Star } from "lucide-react";
import { useEffect, useState } from "react";
// ✅ FIX: useInView should come from react-intersection-observer
import { useInView } from "react-intersection-observer";

const Counter = ({ target, duration, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // Only run when in view

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const incrementTime = Math.max(Math.floor(duration / end), 10); // prevent too fast

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return <span>{count}</span>;
};

const Trust = () => {
  // ✅ FIX: returns { ref, inView }
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% visible before triggering
  });

  return (
    <section
      id="trust"
      ref={ref}
      className="py-16 lg:py-24 relative bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${trustBg})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-avrimile-secondary mb-6">
          Trusted by Businesses Nationwide
        </h2>
        {/*<p className="text-lg text-avrimile-muted max-w-3xl mx-auto leading-relaxed mb-12">
          At <span className="text-avrimile-primary font-semibold">Avrimile Enterprises</span>, 
          trust is the foundation of our service. We pride ourselves on delivering every order 
          with integrity, transparency, and a customer-first approach — ensuring confidence at 
          every step of the journey.
        </p>*/}

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 rounded-xl shadow-lg bg-white/30 hover:shadow-xl transition">
            <ShieldCheck className="w-12 h-12 text-avrimile-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-avrimile-secondary mb-2">Secure & Reliable</h3>
            <p className="text-avrimile-secondary text-sm">
              Every package is handled with utmost care and transparency.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white/30 hover:shadow-xl transition">
            <Users className="w-12 h-12 text-avrimile-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-avrimile-secondary mb-2">50+ Clients</h3>
            <p className="text-avrimile-secondary text-sm">
              Growing partnerships with SMEs and enterprises across Nigeria.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white/30 hover:shadow-xl transition">
            <Award className="w-12 h-12 text-avrimile-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-avrimile-secondary mb-2">Industry Certified</h3>
            <p className="text-avrimile-secondary text-sm">
              Recognized for excellence and compliance in logistics operations.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-white/30 hover:shadow-xl transition">
            <Star className="w-12 h-12 text-avrimile-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-avrimile-secondary mb-2">4.9/5 Rating</h3>
            <p className="text-avrimile-secondary text-sm">
              Consistently delivering outstanding service and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-avrimile-primary mb-2">
              <Counter target={10} duration={9000} inView={inView} />+
            </div>
            <div className="text-avrimile-primary font-semibold">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-avrimile-primary mb-2">
              <Counter target={1000} duration={2500} inView={inView} />+
            </div>
            <div className="text-avrimile-primary font-semibold">Deliveries Secured</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-avrimile-primary mb-2">
              <Counter target={98} duration={7000} inView={inView} />%
            </div>
            <div className="text-avrimile-primary font-semibold">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-avrimile-primary mb-2">
              <Counter target={20} duration={8000} inView={inView} />+
            </div>
            <div className="text-avrimile-primary font-semibold">Partners Nationwide</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
