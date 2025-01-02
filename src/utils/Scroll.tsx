// utils/scrollUtils.ts

/**
 * Smoothly scrolls to the specified element by ID
 * @param sectionId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (useful for fixed headers), defaults to 0
 */
export const smoothScrollTo = (sectionId: string, offset: number = 0) => {
    // Wait for next tick to ensure DOM is ready
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
        
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }, 0);
  };