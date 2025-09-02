import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

const useHeatmapTracker = (sectionUUID, sections, sessionId) => {
  useEffect(() => {
    // Do nothing if sectionUUID or sections are not ready
    if (!sectionUUID || !sections || sections.length === 0) return;


    let enterTime = null; // for time_spent tracking

    // -----------------------------
    // Mousemove handler
    // -----------------------------
    const mouseHandler = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      logHeatmapEvent(sectionUUID, x, y, "mousemove", sessionId, "hero");
    };

    // -----------------------------
    // Click handler
    // -----------------------------
    const clickHandler = () => {
      logHeatmapEvent(sectionUUID, 0, 0, "click", sessionId, "hero");
    };

    // -----------------------------
    // CTA click handler // works fine do not touch
    // -----------------------------
    const ctaClickHandler = (e) => {
      const ctaId = e.target.dataset.ctaId;
      if (!ctaId) return;

      logHeatmapEvent(sectionUUID, 0, 0, "clickCTA", sessionId, "hero", 0, ctaId);
      console.log("CTA clicked:", { sectionUUID, ctaId });
    };

    // -----------------------------
    // IntersectionObserver for time_spent - works fine do not touch
    // -----------------------------
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !enterTime) enterTime = Date.now();
      if (!entry.isIntersecting && enterTime) {
        const timeSpent = Date.now() - enterTime;
        logHeatmapEvent(sectionUUID, 0, 0, "time_spent", sessionId, "hero", timeSpent);
        enterTime = null;
      }
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

    // -----------------------------
    // Attach listeners
    // -----------------------------
    section.addEventListener("mousemove", mouseHandler);
    section.addEventListener("click", clickHandler);
    section.addEventListener("click", ctaClickHandler);
    observer.observe(section);

    // -----------------------------
    // Cleanup
    // -----------------------------
    return () => {
      section.removeEventListener("mousemove", mouseHandler);
      section.removeEventListener("click", clickHandler);
      section.removeEventListener("click", ctaClickHandler);
      observer.disconnect();
    };
  }, [sectionUUID, sections, sessionId]);
};

// -----------------------------
// Log event to Supabase
// -----------------------------
async function logHeatmapEvent(
  sectionUUID,
  x,
  y,
  eventType,
  sessionId,
  timeSpent = null,
  ctaId = null
) {
  const { data, error } = await supabase.from("heatmap_events").insert([{
    section_id: sectionUUID,
    session_id: sessionId,
    event_type: eventType,
    x,
    y,
    time_spent: timeSpent,
    cta_id: ctaId
  }]);

  if (error) console.error("Error logging heatmap event:", error);
  else console.log("Event logged:", data);
}

export default useHeatmapTracker;

