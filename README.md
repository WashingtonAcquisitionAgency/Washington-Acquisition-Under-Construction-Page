# Washington Acquisition Agency Website

Official website files for Washington Acquisition Agency.

The repository currently includes the main agency website and a branded under-construction page that can be used while the full website is being completed.

## Pages

- `index.html` — Main website
- `comingsoon.html` — Under-construction and lead-capture page

## Under-Construction Page

The coming-soon page includes:

- Washington Acquisition Agency branding
- Responsive desktop and mobile layouts
- A direct **Book Call** link to `+1 (786) 984-9227`
- First-name and last-name fields
- Email and phone-number fields
- Estimated-budget options from $500 to $50,000

## Project Structure

```text
.
├── Images/
├── comingsoon.css
├── comingsoon.html
├── index.css
├── index.html
├── script.js
└── README.md
```

## Publishing the Under-Construction Page

If the coming-soon page should appear at the root domain temporarily, either:

1. Rename the existing `index.html` and replace it with `comingsoon.html`, updating the stylesheet reference as needed; or
2. Configure the hosting provider to serve `comingsoon.html` as the default page.

Keep a copy of the original `index.html` before replacing it.

## Form Setup

The form fields and validation are complete, but the form is not yet connected to a database, email service, or form-processing provider. Before collecting real submissions, connect the form to a service such as Formspree, Netlify Forms, or a custom backend endpoint.

## Deployment

Because this is a static website, it can be deployed with:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard web host

## Contact

Washington Acquisition Agency  
Phone: [+1 (786) 984-9227](tel:+17869849227)

