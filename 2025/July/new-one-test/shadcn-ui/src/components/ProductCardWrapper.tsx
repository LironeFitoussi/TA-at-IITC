import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const ProductCardWrapper: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Carbon Fiber Product",
      description: "High-quality carbon fiber material with excellent durability and lightweight properties.",
      price: "$299.99",
      image: "/src/assets/images/product-1.png"
    },
    {
      id: 2,
      name: "Premium Carbon Kit",
      description: "Complete carbon fiber kit including all necessary components for professional use.",
      price: "$499.99",
      image: "/src/assets/images/product-2.png"
    },
    {
      id: 3,
      name: "Carbon Fiber Bundle",
      description: "Bundle package with multiple carbon fiber products at a discounted price.",
      price: "$799.99",
      image: "/src/assets/images/product-3.png"
    },
    {
      id: 4,
      name: "Carbon Pro Series",
      description: "Professional grade carbon fiber series designed for heavy-duty applications.",
      price: "$1299.99",
      image: "/src/assets/images/product-4.png"
    },
    {
      id: 5,
      name: "Carbon Elite Package",
      description: "Elite carbon fiber package with premium finishes and advanced features.",
      price: "$1899.99",
      image: "/src/assets/images/product-5.png"
    },
    {
      id: 6,
      name: "Carbon Master Collection",
      description: "Complete master collection of carbon fiber products for enthusiasts.",
      price: "$2499.99",
      image: "/src/assets/images/product-6.png"
    }
  ]

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Product Cards</h1>
        <p className="text-gray-600">Carbon fiber products showcase</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription className="text-sm">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  {product.price}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductCardWrapper 