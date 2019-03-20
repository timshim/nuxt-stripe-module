export default function (context, inject) {
  <% if (options.publishableKey) { %>
    if (typeof window !== 'undefined') {
      const stripePlugin = {
        import() {
          return window['Stripe'] && window['Stripe']('<%= options.publishableKey %>', {
            betas: ['checkout_beta_4']
          });
        },
      };
      
      inject('stripe', stripePlugin);
      context.app.stripe = stripePlugin;
    }
  <% } %>
}
