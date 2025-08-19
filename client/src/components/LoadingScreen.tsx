import { useEffect, useState } from "react";
// If your logo file is named differently, adjust this import:
import logo from "../assets/logo.png"; // or "../assets/logo.png"

type Props = { visible: boolean };

export default function LoadingScreen({ visible }: Props) {
  // small internal delay so the fade-out looks smooth
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!visible) {
      // allow CSS to animate the fade-out
      const t = setTimeout(() => setClosing(true), 500);
      return () => clearTimeout(t);
    } else {
      setClosing(false);
    }
  }, [visible]);

  return (
    <div
      aria-busy={visible}
      aria-hidden={!visible && closing}
      className={[
        "fixed inset-0 z-[9999]",
        // brand background (blue -> green). If you already have Tailwind colors
        // like 'from-avrimile-primary to-avrimile-accent', you can swap these two.
        "bg-gradient-to-b from-[#0d2e7a] to-[#10b981]",
        "flex items-center justify-center",
        "transition-opacity duration-500",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div className="w-full max-w-sm px-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 flex flex-col items-center gap-5">
          <div className="w-20 h-20 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-md">
            <img
              src={logo}
              alt="Avrimile logo"
              className="w-14 h-14 object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          <h1 className="text-white text-3xl font-extrabold tracking-tight">AVRIMILE</h1>
          <p className="text-white/80 text-sm -mt-2">Beyond Every Mile</p>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden mt-2" role="progressbar" aria-label="Loading">
            <div className="h-full w-1/3 rounded-full avrimile-progress"></div>
          </div>

          {/* Helper status for screen readers */}
          <span className="sr-only">Loading Avrimile…</span>
        </div>
      </div>
    </div>
  );
}
