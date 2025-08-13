import React from "react";
import { useCookies } from "react-cookie";

const Cookie = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  // Don't show banner if consent already given
  if (cookies.cookieConsent) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white p-4 rounded shadow-md flex flex-col md:flex-row items-center gap-4 z-[9999] pointer-events-auto">
      <p className="text-sm md:text-base">
        We use cookies to enhance your user experience. Do you agree to our use
        of cookies?{" "}
        <a
          href="/privacy-policy"
          className="underline hover:text-gray-300"
        >
          Learn More
        </a>
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        onClick={giveCookieConsent}
      >
        Accept
      </button>
    </div>
  );
};

export default Cookie;