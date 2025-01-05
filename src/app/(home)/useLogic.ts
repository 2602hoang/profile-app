import { useEffect, useState } from "react";
import { headerData } from "../../components/header/data";
import { useTheme } from "next-themes";
export const useLogic = () => {
  const [sectionName, setSectionName] = useState<string>("");
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      scrollToTop();
    }
  };

  const handleScroll = () => {
    const backToTopButton = document.getElementById(
      "backToTop"
    ) as HTMLButtonElement;
    if (backToTopButton) {
      if (window.scrollY > 100) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        if (sectionName !== "") {
          setSectionName("");
          window.history.pushState(null, "", "#");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionName]);

  return { sectionName, scrollToTop, toggleTheme };
};
