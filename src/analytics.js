import ReactGA from "react-ga4";

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
  ReactGA.send("pageview");
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};