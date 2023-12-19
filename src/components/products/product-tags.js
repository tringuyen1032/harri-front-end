import React from 'react';

const ProductTags = ({ tag }) => {
  return (
    <div className="product__details-tags">
      <span>Tags:</span>
      {tag?.map((t, i) => (
        <a key={i} href="#" aria-label={t}>
          {t}
        </a>
      ))}
    </div>
  );
};

export default ProductTags;