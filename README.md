# GatRise - Natural Weight Loss Landing Page

A premium, responsive landing page for GatRise - a natural GAT extract product for weight loss, focus, and energy enhancement. Built with Next.js 15, TypeScript, and Tailwind CSS with direct WhatsApp integration.

## Product Features

GatRise is a natural supplement that offers:
- **Weight Loss**: Natural appetite suppression and satiety
- **Energy Boost**: Clean energy without caffeine crashes
- **Enhanced Focus**: Improved concentration for work and daily tasks
- **Libido Enhancement**: Natural boost to sexual desire
- **100% Natural**: No chemical additives, non-addictive
- **Fast Acting**: Effects felt within minutes of use

## Website Features

- **Modern Design**: Premium, health-focused design with green/emerald color scheme
- **Hebrew Content**: Full RTL support for Israeli market
- **Responsive Design**: Mobile-first approach that works on all devices
- **Direct WhatsApp Contact**: Customers contact you directly via WhatsApp
- **Phone Integration**: One-tap calling for mobile users
- **Product Gallery**: Showcases product images from multiple angles
- **Social Proof**: Customer testimonials and reviews
- **Clear Pricing**: Transparent pricing with package deals
- **Safety Information**: Medical disclaimers and usage warnings

## Contact Integration

This landing page uses **direct contact** approach:
- **WhatsApp buttons** throughout the page (972505772843)
- **Pre-filled messages** in Hebrew for easy customer communication
- **Phone number** for direct calling
- **No forms** - customers contact you directly
- **Immediate engagement** - no waiting for callbacks

## Getting Started

1. **Clone and install**:
```bash
git clone <repository>
cd GatRise
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**: [http://localhost:3000](http://localhost:3000)

4. **Customize WhatsApp number** (if needed):
   - Edit phone number in `src/app/page.tsx`
   - Search for `972505772843` and replace with your number

## Project Structure

```
├── src/
│   └── app/
│       ├── page.tsx          # Main landing page with WhatsApp integration
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/
│   └── images/              # Place your images here
├── .github/
│   └── copilot-instructions.md  # Copilot configuration
└── README.md
```

## Adding Your Images

1. Place your images in the `/public/images/` folder
2. Update the gallery section in `/src/app/page.tsx` to use your actual images
3. Replace placeholder content with Next.js Image components

## Customization

The landing page is fully customizable:

- **Colors**: Modify the gradient colors in `page.tsx`
- **Content**: Update text content for your business
- **Sections**: Add, remove, or modify sections as needed
- **Styling**: Tailwind classes can be easily modified

## Sections Included

- **Navigation**: Fixed top navigation with smooth scrolling
- **Hero**: Eye-catching hero section with call-to-action buttons
- **Features**: Three-column feature showcase
- **Gallery**: Photo gallery section (ready for your images)
- **Contact**: Contact section with call-to-action
- **Footer**: Clean footer with links

## Development

This project uses:
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
