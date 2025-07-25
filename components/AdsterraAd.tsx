import { useEffect, useRef } from "react";

export default function AdsterraAd() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current?.firstChild) {
      const script = document.createElement("script");
      script.setAttribute("data-cfasync", "false");
      script.async = true;
      script.src =
        "//pl27253833.profitableratecpm.com/1959c0594a9b045a42c7a5ede1029a1e/invoke.js";

      adRef.current?.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={adRef}
      id="container-1959c0594a9b045a42c7a5ede1029a1e"
      style={{ width: "100%", minHeight: "250px" }}
    ></div>
  );
}
