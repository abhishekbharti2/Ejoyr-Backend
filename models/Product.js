const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'] 
  },
  description: { 
    type: String, 
    required: [true, 'Description is required'] 
  },
  category: { 
    type: String, 
    required: [true, 'Category is required'] 
  },
  brand: { 
    type: String, 
    required: [true, 'Brand is required'] 
  },
  supplier: { 
    type: String, 
    required: [true, 'Supplier is required'] 
  },
  specification: { 
    type: String, 
    required: [true, 'Specification is required'] 
  },
  price: { 
    type: Number, 
    required: [true, 'Price is required'],
    min: [0, 'Price must be positive']
  },
  discount: { 
    type: Number, 
    required: [true, 'Discount is required'],
    min: [0, 'Discount must be positive'],
    max: [100, 'Discount cannot exceed 100%']
  },
  stock: { 
    type: Number, 
    required: [true, 'Stock is required'],
    min: [0, 'Stock must be positive']
  },
  rating: { 
    type: Number,
    min: [0, 'Rating must be at least 0'],
    max: [5, 'Rating cannot exceed 5']
  },
  ratingCount: { 
    type: Number,
    min: [0, 'Rating count must be positive']
  },
  images: [String]
}, {
  timestamps: true
});

// Add virtual for discounted price
productSchema.virtual('discountedPrice').get(function() {
  return this.price * (1 - this.discount / 100);
});

module.exports = mongoose.model('Product', productSchema);