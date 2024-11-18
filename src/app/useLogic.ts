import { headerData } from "@/components/header/data";
import { useEffect, useState } from "react";

export const useLogic = () => {
  const [sectionName, setSectionName] = useState<string>("");
  useEffect(() => {
    const sections = headerData.map((item) =>
      document.getElementById(item.href)
    );
    const handleScroll = () => {
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            const sectionName1 = headerData[i].href;
            if (sectionName !== sectionName1) {
              setSectionName(sectionName1);
              window.history.pushState(null, "", `#${sectionName1}`);
            }
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setSectionName("");
        window.history.pushState(null, "", "#");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionName]);
  return { sectionName };
};
