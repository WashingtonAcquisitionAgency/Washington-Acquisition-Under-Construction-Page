document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-success-page]");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalLabel = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting…";

    try {
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        mode: "no-cors",
      });

      window.location.assign(form.dataset.successPage);
    } catch (error) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
      window.alert("We couldn’t submit your information. Please try again or call us at (786) 984-9227.");
    }
  });
});
