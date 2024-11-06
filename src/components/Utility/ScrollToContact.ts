const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    const start = window.scrollY;
    const end = contactSection.getBoundingClientRect().top + window.scrollY;
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const easeInQuad = (t: number) => t * t;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeInQuad(progress);
      window.scrollTo(0, start + (end - start) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
};

export default scrollToContact;
