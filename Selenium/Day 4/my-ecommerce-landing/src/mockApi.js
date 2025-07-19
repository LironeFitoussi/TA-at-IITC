export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      // Simulate variable network latency and random error
      const randomDelay = Math.floor(Math.random() * 2000) + 500;
      const shouldFail = Math.random() < 0.2; // 20% chance to fail
  
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Failed to fetch products (mock error)."));
        } else {
          resolve([
            {
              id: 1,
              name: "Awesome Purple T-Shirt",
              price: 29.99,
              img: "https://via.placeholder.com/300?text=Purple+T-Shirt",
              rating: 4,
              reviews: ["Great fit!", "Color is amazing."],
            },
            {
              id: 2,
              name: "Stylish Black Sneakers",
              price: 59.99,
              // Intentional broken link to cause a bug
              img: "https://not-a-real-domain.fake/invalid-url.jpg",
              rating: 3,
              reviews: ["Comfortable but runs small.", "Loved them!"],
            },
            {
              id: 3,
              name: "Everyday White Hoodie",
              price: 39.99,
              img: "https://via.placeholder.com/300?text=White+Hoodie",
              rating: 5,
              reviews: ["Super cozy.", "Perfect for chilly weather."],
            },
          ]);
        }
      }, randomDelay);
    });
  };
  