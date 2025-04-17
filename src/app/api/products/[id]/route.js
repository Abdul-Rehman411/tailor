import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;

  // Mock data for products
  const mockProducts = [
    {
      id: '1',
      name: 'Classic White Shirt',
      image: '/images/products/shirt.png',
      tailor: 'Stitch Masters',
      rating: 4.5,
      price: 49.99,
      category: 'Male',
      description: 'A timeless classic, perfect for any occasion.',
    },
    {
      id: '2',
      name: 'Elegant Summer Dress',
      image: '/images/products/dress.png',
      tailor: 'Fashion House',
      rating: 4.8,
      price: 79.99,
      category: 'Female',
      description: 'A beautiful dress for warm summer days.',
    },
  ];

  const product = mockProducts.find((p) => p.id === id);

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: `Product not found with id: ${id}`, id }, { status: 404 });
  }
}