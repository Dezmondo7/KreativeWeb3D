import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";



//Heatmap tracker function
const useHeatmapTracker = (sectionId) => {
  useEffect(() => {
    const section = document.querySelector(`[data-content-id="${sectionId}"]`);
    if (!section) return;

    const mouseHandler = (e) => {
      // relative position inside section
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      console.log("Mouse move:", { sectionId, x, y });

      fetch("https://your-backend-service.onrender.com/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section_id: "40ff4b33-9da8-4c29-a405-195c8bd1f58f",
          session_id: "live-session-" + Date.now(),
          event_type: "mousemove",
          x,
          y
        }),
      })
      .then(res => res.json())
  .then(data => console.log("Logged via server:", data))
  .catch(err => console.error("Logging failed:", err));

    };

    const clickHandler = (e) => {
      console.log("Click:", { sectionId });
      // Later: store as click event
    };

    // Track when user enters/leaves section (scroll time)
    let enterTime = null;
    //IntersectionObserver API
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only set enterTime if it’s not already set
          if (!enterTime) enterTime = Date.now();
        } else {
          if (enterTime) {
            const timeSpent = Date.now() - enterTime;
            console.log("Time spent:", { sectionId, timeSpent });
            enterTime = null;
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] } // fine-grained
    );
    console.log("Observing section:", section); //Important to see logs

    // Seperate function to track CTA on buttons book-call & unlo page - 
    const ctaClickHandler = (e) => {
      const ctaId = e.target.dataset.ctaId;
      if (ctaId) {
        console.log("CTA clicked:", { sectionId, ctaId });
        // Later: send to backend/db
      }
    };

    // Attach to section
    section.addEventListener("click", ctaClickHandler);

    section.addEventListener("mousemove", mouseHandler);
    section.addEventListener("click", clickHandler);
    observer.observe(section);

    return () => {
      section.removeEventListener("mousemove", mouseHandler);
      section.removeEventListener("click", clickHandler);
      observer.disconnect();
    };
  }, [sectionId]);
}

export default useHeatmapTracker
