const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const products = [
  {
    id: 1,
    name: 'Aero Jacket',
    price: 1290000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH7xw9hqQYy2WOUuLPdfcLL3sqBwvVTuMszArBa7RVYtozQvVd3pBW_o&s=10',
    tag: 'Best Seller',
    description: 'Modern, lightweight comfort with elevated craftsmanship.'
  },
  {
    id: 2,
    name: 'Lumen Briefcase',
    price: 840000,
    image: 'https://m.media-amazon.com/images/I/61+7sxOq88L._AC_UY1000_.jpg',
    tag: 'Trending',
    description: 'A polished everyday carrier with premium finishes.'
  },
  {
    id: 3,
    name: 'Contour Sneakers',
    price: 1120000,
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80',
    tag: 'Limited',
    description: 'Comfort-driven design with an architectural silhouette.'
  },
  {
    id: 4,
    name: 'Harbor Watch',
    price: 1590000,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    tag: 'New Arrivals',
    description: 'Minimal style with a refined finish for everyday wear.'
  },
  {
    id: 5,
    name: 'Chroma Bomber',
    price: 1390000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnxZI8ewSxv-du00aF4AFQ6KSR0oBrIn-17ml2zGprC_r1FINZyD1xPcx&s=10',
    tag: 'Men\'s Outerwear',
    description: 'A bold bomber jacket in rich tones with structured comfort.'
  },
  {
    id: 6,
    name: 'Vanguard Belt',
    price: 450000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZo_Jry8R0uwiojvNn4qG4OHV64BfC12x3qOD-d6LGj0hq9YtmMwpY64&s=10',
    tag: 'Accessories',
    description: 'An essential leather belt with brushed hardware and tailored style.'
  },
  {
    id: 7,
    name: 'Metro Chinos',
    price: 880000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHoohO20zgOq14Uon5EO2e042h4nAuS-Kz1hVQDzb4LOGZ8PZODxV5PE&s=10',
    tag: 'Smart Casual',
    description: 'Tailored chinos in a versatile colorway that transitions easily.'
  },
  {
    id: 8,
    name: 'Apex Trainers',
    price: 1090000,
    image: 'https://truefitness.com/wp-content/uploads/2025/08/XC1-XA-35-Apex-Cross-Trainer-rear-3_4-16in_960.png',
    tag: 'Performance',
    description: 'Lightweight trainers built for energy, comfort, and everyday motion.'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/checkout', (req, res) => {
  const { items = [], customer = {} } = req.body;

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  res.json({
    success: true,
    message: 'Order received successfully.',
    customer,
    subtotal,
    tax,
    total,
    items
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NovaCart server running on http://localhost:${PORT}`);
});
