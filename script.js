document.addEventListener('DOMContentLoaded', () => {
  const pricingGrid = document.querySelector('.pricing-grid');
  if (!pricingGrid) return;

  const pricingCards = pricingGrid.querySelectorAll('.pricing-card');

  // 1. Handle Visual Highlight on Hover (Mouse Enter)
  pricingGrid.addEventListener('mouseover', (event) => {
    const hoveredCard = event.target.closest('.pricing-card');
    if (hoveredCard) {
      pricingCards.forEach(card => card.classList.remove('active'));
      hoveredCard.classList.add('active');
    }
  });

  // 2. Handle Action Button Click
  pricingGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      const parentCard = event.target.closest('.pricing-card');
      const planId = parentCard.getAttribute('data-plan');
      const planName = parentCard.querySelector('h3').textContent.trim();
      const planPrice = parentCard.querySelector('.price').textContent.trim();

      handlePlanSelection({
        id: planId,
        name: planName,
        price: planPrice
      });
    }
  });

  /**
   * Action handler for checkout or registration
   * @param {Object} plan - Selected plan details
   */
  function handlePlanSelection(plan) {
    console.log(`Plan selected: ${plan.name} (${plan.id}) at ${plan.price}`);
    // Integrations go here (e.g., window.location.href = `/checkout?plan=${plan.id}`)
  }
});
