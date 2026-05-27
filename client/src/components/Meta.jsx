import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useSEO({ title, description, keywords }) {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let descMeta = document.querySelector("meta[name='description']");
      if (!descMeta) {
        descMeta = document.createElement("meta");
        descMeta.name = "description";
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute("content", description);
    }

    if (keywords) {
      const formatted = Array.isArray(keywords)
        ? keywords.join(", ")
        : keywords;

      let keywordsMeta = document.querySelector("meta[name='keywords']");
      if (!keywordsMeta) {
        keywordsMeta = document.createElement("meta");
        keywordsMeta.name = "keywords";
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute("content", formatted);
    }

    return () => {
      document.title = "Unique Infra & Sustainable Power Private Limited";
    };
  }, [title, description, keywords, location.pathname]);
}
