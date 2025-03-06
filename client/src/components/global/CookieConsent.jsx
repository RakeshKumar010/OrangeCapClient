import Cookies from "js-cookie";

const CookieConsent = ({ setShowPopup }) => {
  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365, path: "/" }); // Store user consent for 365 days
    setShowPopup(false);
  };

  const handleDecline = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365, path: "/" }); // Store declined status
    setShowPopup(false);
  };

  return (
    <div className="fixed z-10 bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
      <p className="text-sm mr-4">
        We use cookies to improve your experience. By using our site, you agree to our{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-logoColor text-black cursor-pointer px-4 py-2 rounded-md font-semibold"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-500 text-white cursor-pointer px-4 py-2 rounded-md font-semibold"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
