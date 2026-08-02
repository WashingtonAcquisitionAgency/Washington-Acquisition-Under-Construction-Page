document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".page-loader");

  if (loader) {
    const startedAt = performance.now();
    const minimumDisplayTime = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850;

    window.addEventListener("load", () => {
      const elapsed = performance.now() - startedAt;
      const remainingTime = Math.max(0, minimumDisplayTime - elapsed);

      window.setTimeout(() => {
        loader.classList.add("is-loaded");
        loader.addEventListener("transitionend", () => loader.remove(), { once: true });
      }, remainingTime);
    }, { once: true });
  }

  const form = document.querySelector("form[data-success-page]");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalLabel = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting…";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      window.location.assign(form.dataset.successPage);
    } catch (error) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
      window.alert("We couldn’t submit your information. Please try again or call us at (786) 984-9227.");
    }
  });
});
