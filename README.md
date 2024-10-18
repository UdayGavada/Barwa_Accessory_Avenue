# Modern Full Stack E-Commerce Application

This project is a fully responsive modern full-stack e-commerce application built with React, Next.js, Sanity CMS, and Stripe for real payment integration. The application features a sleek modern design, animations, product management via CMS, advanced cart functionalities, and a fully functional checkout process using Stripe for handling payments and shipping.

## Features

- **Modern Design & Animations**: A sleek and responsive design with animations for a seamless user experience.
- **CMS Integration**: Managed with Sanity CMS, allowing real-time updates to product information and the store's homepage without redeploying the site.
- **Product Management**: Ability to add, edit, and manage products on the go using Sanity.
- **Advanced Cart Functionalities**: Complete cart functionality with the ability to add, remove, and update products.
- **Payments with Stripe**: Fully integrated payment system using Stripe for secure transactions, product management, and shipping rate calculation.
- **Next.js Optimizations**: Server-side rendering (SSR), static site generation (SSG), and backend API routes for optimal performance.

![image](https://github.com/user-attachments/assets/3daf7930-b1ab-475a-869a-6af45b1b2c72)
![image](https://github.com/user-attachments/assets/1b1d1154-c9a9-45ba-a5c6-458c585ff38e)



## Tech Stack

- **Frontend**: 
  - React.js (hooks, context API)
  - Next.js (file-based routing, SSR, SSG, data fetching)
  - Tailwind CSS (styling)
  
- **Backend**:
  - Next.js API routes for handling backend logic
  - Sanity CMS for product and content management
  - Stripe for payment and checkout handling

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Stripe Account (for payments integration)
- Sanity Account (for content management)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/UdayGavada/Barwa_Accessory_Avenue.git
    cd ecommerce-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file and add the following environment variables:
    ```plaintext
    NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
    SANITY_API_TOKEN=your-sanity-api-token
    STRIPE_SECRET_KEY=your-stripe-secret-key
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Sanity Setup

1. Install Sanity CLI:
    ```bash
    npm install -g @sanity/cli
    ```

2. Initialize Sanity:
    ```bash
    sanity init
    ```

3. Connect your project to your Sanity dashboard and configure the schema as per your product needs.

### Deployment

This project is deployed on [Vercel](https://vercel.com). Follow the steps below to deploy:

1. Install Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Deploy to Vercel:
    ```bash
    vercel
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
