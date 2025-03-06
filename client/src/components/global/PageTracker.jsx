import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * Tracks visited pages and stores them in cookies only if the user has accepted cookies.
 */
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const consent = Cookies.get("cookieConsent"); // Check if the user accepted cookies
    if (consent === "true") {
      trackVisitedPages(location.pathname);
    }
  }, [location.pathname]);

  /**
   * Stores visited pages in cookies only if consent is given.
   * @param {string} page - The current page path.
   */
  const trackVisitedPages = (page) => {
    try {
      let visitedPages = Cookies.get("visitedPages");

      // Parse existing cookies or initialize an empty array
      visitedPages = visitedPages ? JSON.parse(visitedPages) : [];

      // Use Set to avoid duplicate entries
      const updatedPages = Array.from(new Set([...visitedPages, page]));

      // Store back in cookies with a 1-year expiry
      Cookies.set("visitedPages", JSON.stringify(updatedPages), { expires: 365, path: "/" });
    } catch (error) {
      console.error("Error storing visited pages:", error);
    }
  };

  return null; // No UI needed, it runs in the background
};

export default PageTracker;
