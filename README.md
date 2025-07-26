# Product Details Angular Application

This is an Angular application for managing product details, including product listings, product details, sales orders, and purchase orders.

## Features

- Product listing with search and filtering
- Detailed product information
- Sales orders management
- Purchase orders management
- Responsive design with Bootstrap

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Angular CLI

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Hardik202003/product-details_angular.git
cd product-details_angular
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:
```bash
npm test
```

## Deployment

This application is configured for deployment to GitHub Pages.

### Deploy to GitHub Pages

1. Make sure you have the latest changes committed to your repository
2. Run the deployment command:
```bash
npm run deploy
```

The application will be deployed to: https://hardik202003.github.io/product-details_angular/

### Manual Deployment Steps

If you prefer to deploy manually:

1. Build the application for production:
```bash
npm run build
```

2. Push the `dist/` folder to the `gh-pages` branch of your repository
3. Enable GitHub Pages in your repository settings and set the source to the `gh-pages` branch

## Project Structure

```
src/
├── app/
│   ├── product/
│   │   ├── product-details/
│   │   ├── product-list/
│   │   ├── product-module.ts
│   │   ├── product-service.ts
│   │   └── product.interface.ts
│   ├── app-routing-module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
└── styles.css
```

## Technologies Used

- Angular 20
- TypeScript
- Bootstrap 5
- RxJS
- Angular Router

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
