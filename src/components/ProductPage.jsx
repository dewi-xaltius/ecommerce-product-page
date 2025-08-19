import '../App.css'; // Importing CSS for styling
import React, { useState } from 'react'; // Import useState hook

// Product data (This will eventually come from an API)
const product = {
  id: 'book-101',
  imageUrl: 'https://placehold.co/400x500/E0F2F7/2C3E50?text=Book+Cover', // Placeholder image URL
  title: 'The Great Software Workflow Guide',
  description: 'A comprehensive guide to mastering efficient software development workflows, including version control, GitHub, build images, and RESTful API design. Learn best practices for modern software engineering.',
  price: 29.99,
  currency: '$',
  stock: 10,
};

// Component for displaying the product image
function ProductImage({ imageUrl, title }) {
  return (
    <img
      src={imageUrl}
      alt={title}
      className="product-image"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x500/CCCCCC/333333?text=Image+Not+Found'; }}
    />
  );
}

// Component for displaying product title, description, and price with toggle
function ProductInfo({ product }) {
  // State to manage whether the description is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Define a short version of the description for initial display
  const shortDescription = product.description.substring(0, 150) + '...';
  // Check if the description is long enough to require a toggle
  const needsToggle = product.description.length > 150;

  return (
    <div>
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">
        {/* Conditionally render full or short description */}
        {isExpanded || !needsToggle ? product.description : shortDescription}
        {/* Render toggle button only if description is long */}
        {needsToggle && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="read-more-toggle-button"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </p>
      <div className="price-stock-container">
        <span className="product-price">
          {product.currency}{product.price.toFixed(2)}
        </span>
        {product.stock > 0 ? (
          <span className="stock-indicator in-stock">In Stock</span>
        ) : (
          <span className="stock-indicator out-of-stock">Out of Stock</span>
        )}
      </div>
    </div>
  );
}

// Main ProductPage component (rest of this file is unchanged)
function ProductPage() {
  return (
    <div className="product-page-container">
      {/* Product Image Section */}
      <div className="image-section">
        <ProductImage imageUrl={product.imageUrl} title={product.title} />
      </div>

      {/* Product Info Section */}
      <div className="info-section">
        <ProductInfo product={product} />
        {/* Placeholder for future features */}
        <div className="quantity-placeholder-section">
          <p className="quantity-placeholder-text">Quantity: [Placeholder for Quantity Selector]</p>
          <button className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
