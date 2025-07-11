
-- Update products with real product images from Unsplash
UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
  description = 'Latest smartphone with advanced features, stunning OLED display, and powerful processor'
WHERE name = 'Premium Smartphone';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
  description = 'Premium wireless headphones with active noise cancellation and superior sound quality'
WHERE name = 'Wireless Headphones';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
  description = 'Comfortable premium cotton t-shirt with modern design and perfect fit'
WHERE name = 'Designer T-Shirt';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
  description = 'Feature-rich smartwatch with health monitoring, GPS, and long battery life'
WHERE name = 'Smart Watch';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
  description = 'High-performance running shoes with excellent cushioning and breathable design'
WHERE name = 'Running Shoes';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
  description = 'Automatic drip coffee maker with programmable timer and thermal carafe'
WHERE name = 'Coffee Maker';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
  description = 'High-performance gaming laptop with RTX graphics and ultra-fast SSD'
WHERE name = 'Gaming Laptop';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop',
  description = 'Insulated winter jacket with water-resistant material and warm lining'
WHERE name = 'Winter Jacket';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
  description = 'Portable Bluetooth speaker with 360-degree sound and waterproof design'
WHERE name = 'Bluetooth Speaker';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
  description = 'Professional stand mixer perfect for baking and cooking enthusiasts'
WHERE name = 'Kitchen Mixer';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
  description = 'Premium yoga mat with non-slip surface and extra cushioning for comfort'
WHERE name = 'Yoga Mat';

UPDATE public.products SET 
  image = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  description = 'Modern LED desk lamp with adjustable brightness and USB charging port'
WHERE name = 'Desk Lamp';
