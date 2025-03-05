# ShopSpace

ShopSpace is a modern eCommerce website built with React and TypeScript, utilizing the FakeStore API for product data and integrated with the Stripe Payment Gateway for secure and efficient online transactions.

## Deployed Application

Check out the live version of the app here: [ShopSpace](https://shop-space.vercel.app/)

## Setup Instructions

1. Clone the repository:


```bash
git clone <repository-url>
cd ecommerceapp
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:
Create a .env file in the root directory and add the following variables:

```bash
REACT_APP_API_URL=<FakeStore API URL>
REACT_APP_STRIPE_PUBLIC_KEY=<Your Stripe Public Key>
```

4. Run the development server:

```bash
yarn start
```
The application will be accessible at http://localhost:3000

## Environment Variables


• REACT_APP_API_URL: The base URL for the FakeStore API.

• REACT_APP_STRIPE_PUBLIC_KEY: Your Stripe public key for payment processing.


## Scripts

• yarn start: Starts the development server.

• yarn build: Builds the app for production.

• yarn test: Runs tests.

• yarn eject: Ejects the Create React App configuration (use with caution).

## Features

• Dynamic product listing and search.

• User-friendly cart management.

• Secure payments powered by Stripe.

• Responsive design for optimal experience on all devices.

• Pages for FAQs, About Us, Contact Us, Privacy Policy, and Terms of Use.

• Redux Toolkit for state management.

## Technologies Used

• Frontend: React, TypeScript, Tailwind CSS

• State Management: Redux Toolkit

• Payment Integration: Stripe

• API: FakeStore API (https://fakestoreapi.com/)
