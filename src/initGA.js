export const initGA = (trackingId) => {
  // Only initialize GA in production
  if (process.env.NODE_ENV !== "production") return;

  if (window.gtag) return; // already initialized

  const script1 = document.createElement("script");
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script1.async = true;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}');
  `;
  document.head.appendChild(script2);
};
