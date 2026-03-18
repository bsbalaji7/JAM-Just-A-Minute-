export const products = [
  // GROCERY
  

  // GROCERY
  {
    id: 'g1',
    category: 'Grocery',
    name: 'Fresh Farm Milk',
    price: 60,
    discount: '5% OFF',
    rating: 4.8,
    deliveryTime: '10 mins',
    image: 'https://images.unsplash.com/photo-1563636619-e91000f88f5d?auto=format&fit=crop&w=300&q=80',
    model:"https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    description: 'Fresh, pure farm milk delivered chilled to your doorstep. High in calcium and essential nutrients for a healthy start to your day.'
  },

  {
    id: 'g2',
    category: 'Grocery',
    name: 'Multigrain Brown Bread',
    price: 45,
    discount: '10% OFF',
    rating: 4.5,
    deliveryTime: '12 mins',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
    model: "/models/bread.glb",
    description: 'Healthy and fiber-rich multigrain bread. Perfectly toasted for breakfast or used for nutritious sandwiches throughout the day.'
  },

  {
    id: 'g3',
    category: 'Grocery',
    name: 'Organic Brown Eggs (6pcs)',
    price: 90,
    discount: 'Buy 2 Get 10% OFF',
    rating: 4.9,
    deliveryTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80',
    model: "/models/eggs.glb",
    description: 'Farm-fresh organic brown eggs. Rich in protein and Omega-3, sourced from happy, free-range chickens.'
  },

  {
    id: 'g4',
    category: 'Grocery',
    name: 'Basmati Premium Rice',
    price: 180,
    discount: '₹20 OFF',
    rating: 4.7,
    deliveryTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
    model: "/models/rice.glb",
    description: 'Long-grain aromatic Basmati rice. Perfect for biryanis, pulao, or plain steamed rice with your favorite dal.'
  },

  // FOOD
  {
    id: 'f1',
    category: 'Food & Restaurant',
    name: 'Margherita Classic Pizza',
    price: 249,
    discount: 'Flat ₹50 OFF',
    rating: 4.6,
    deliveryTime: '25 mins',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=300&q=80',
    model: "/models/pizza.glb",
    description: 'Authentic thin-crust pizza topped with fresh tomato sauce, creamy mozzarella, and fragrant basil leaves.'
  },

  {
    id: 'f2',
    category: 'Food & Restaurant',
    name: 'Paneer Butter Masala',
    price: 320,
    discount: '20% OFF',
    rating: 4.8,
    deliveryTime: '30 mins',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80',
    model: "/models/paneer.glb",
    description: 'Rich and creamy cottage cheese cubes cooked in a buttery tomato gravy with aromatic Indian spices.'
  },

  // ELECTRONICS
  {
    id: 'e1',
    category: 'Electronics',
    name: 'Wireless ANC Earbuds',
    price: 1999,
    discount: '40% OFF',
    rating: 4.5,
    deliveryTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80',
    model: "/models/earbuds.glb",
    description: 'Noise-canceling wireless earbuds with 30-hour battery life and immersive sound quality.'
  },

  {
    id: 'e2',
    category: 'Electronics',
    name: '20000mAh Power Bank',
    price: 1499,
    discount: 'Flat ₹500 OFF',
    rating: 4.7,
    deliveryTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1609592424089-980479703562?auto=format&fit=crop&w=300&q=80',
    model: "/models/powerbank.glb",
    description: 'High-capacity fast-charging power bank with dual USB ports and Type-C input.'
  },

  // FASHION
  {
    id: 'fa1',
    category: 'Fashion',
    name: 'Men Regular Fit Cotton T-Shirt',
    price: 499,
    discount: '30% OFF',
    rating: 4.5,
    deliveryTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80',
    model: "/models/tshirt.glb",
    description: 'Soft and breathable 100% cotton T-shirt. Perfect for casual wear and everyday comfort.'
  },

  {
    id: 'fa5',
    category: 'Fashion',
    name: 'Men Sports Running Shoes',
    price: 2199,
    discount: '50% OFF',
    rating: 4.9,
    deliveryTime: '30 mins',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80',
    model: "/models/shoes.glb",
    description: 'Lightweight and breathable running shoes with cushioned sole for maximum comfort and performance.'
  },

  {
    id: 'fa10',
    category: 'Fashion',
    name: 'Women Sunglasses UV400',
    price: 599,
    discount: 'Buy 1 Get 1',
    rating: 4.5,
    deliveryTime: '12 mins',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80',
    model: "/models/sunglasses.glb",
    description: 'Stylish UV400 protected sunglasses. Protect your eyes while enhancing your fashion statement.'
  },


 // EVENTS WITH PACKAGES
{
  id: 'ev1',
  category: 'Events',
  name: 'Birthday Party Package - Basic',
  price: 4999,
  discount: '10% OFF',
  rating: 4.6,
  deliveryTime: 'Book 3 Days Before',
  image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=300&q=80',
  description: 'Balloon decoration, cake table setup, happy birthday banner and basic lighting. Suitable for 20-25 guests.'
},
{
  id: 'ev2',
  category: 'Events',
  name: 'Birthday Party Package - Premium',
  price: 9999,
  discount: 'Free Photography',
  rating: 4.8,
  deliveryTime: 'Book 5 Days Before',
  image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=300&q=80',
  description: 'Theme decoration, balloon arch, 2kg cake, DJ music setup and photography for up to 50 guests.'
},
{
  id: 'ev3',
  category: 'Events',
  name: 'Wedding Decoration Package',
  price: 49999,
  discount: '₹5000 OFF',
  rating: 4.9,
  deliveryTime: 'Book 10 Days Before',
  image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80',
  description: 'Grand wedding stage decoration with floral arrangements, LED lighting, welcome board and seating setup.'
},
{
  id: 'ev4',
  category: 'Events',
  name: 'Corporate Event Package',
  price: 29999,
  discount: '20% OFF',
  rating: 4.7,
  deliveryTime: 'Book 7 Days Before',
  image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=300&q=80',
  description: 'Corporate event stage setup, sound system, projector screen, banners and seating arrangement.'
},
{
  id: 'ev5',
  category: 'Events',
  name: 'Baby Shower Decoration Package',
  price: 7999,
  discount: 'Free Welcome Board',
  rating: 4.8,
  deliveryTime: 'Book 4 Days Before',
  image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=300&q=80',
  description: 'Pastel theme decoration, balloon arch, cake table decor and backdrop setup for baby shower celebrations.'
},
{
  id: 'ev6',
  category: 'Events',
  name: 'Anniversary Celebration Package',
  price: 6999,
  discount: '15% OFF',
  rating: 4.6,
  deliveryTime: 'Book 3 Days Before',
  image: 'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=300&q=80',
  description: 'Romantic candlelight decoration, LED name board, table decoration and background setup.'
},
{
  id: 'ev7',
  category: 'Events',
  name: 'Engagement Ceremony Package',
  price: 19999,
  discount: 'Free Flower Decor',
  rating: 4.7,
  deliveryTime: 'Book 7 Days Before',
  image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=300&q=80',
  description: 'Beautiful engagement stage setup with floral decorations, lighting and seating arrangement.'
},
{
  id: 'ev8',
  category: 'Events',
  name: 'Housewarming Ceremony Package',
  price: 5999,
  discount: '10% OFF',
  rating: 4.5,
  deliveryTime: 'Book 3 Days Before',
  image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=300&q=80',
  description: 'Traditional decoration with flowers, entrance decor, pooja setup and welcome board.'
},
{
  id: 'ev9',
  category: 'Events',
  name: 'College Cultural Event Package',
  price: 25999,
  discount: '₹2000 OFF',
  rating: 4.6,
  deliveryTime: 'Book 8 Days Before',
  image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=300&q=80',
  description: 'Large stage setup with sound system, lighting, banners and seating for cultural programs.'
},
{
  id: 'ev10',
  category: 'Events',
  name: 'DJ Night Party Package',
  price: 14999,
  discount: 'Free LED Lights',
  rating: 4.8,
  deliveryTime: 'Book 5 Days Before',
  image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=300&q=80',
  description: 'Professional DJ setup with sound system, dance floor lighting and party decoration.'
},
]
export const upcomingEvents = [
  {
    eventName: 'SPB Golden Night Tribute',
    language: 'Tamil',
    category: 'Music Concert',
    location: 'Kamarajar Arangam, Chennai',
    date: '2026-04-12',
    time: '7:00 PM',
    ticketPrice: 500,
    image: 'images/spb.jpg',
    description: 'A tribute concert celebrating the legendary singer SP Balasubrahmanyam.'
  },
  {
    eventName: 'Anirudh Live Concert',
    language: 'Tamil',
    category: 'Music Concert',
    location: 'YMCA Grounds, Nandanam, Chennai',
    date: '2026-05-02',
    time: '6:00 PM',
    ticketPrice: 1500,
    image: 'images/anirudh.jpg',
    description: 'Live performance by Anirudh Ravichander featuring his blockbuster songs.'
  },
  {
    eventName: 'Yuvan Shankar Raja Musical Night',
    language: 'Tamil',
    category: 'Music Concert',
    location: 'Nehru Indoor Stadium, Chennai',
    date: '2026-05-20',
    time: '7:30 PM',
    ticketPrice: 1200,
    image: 'images/yuvan.jpg',
    description: "Enjoy live performances of Yuvan Shankar Raja's popular hits."
  },
  {
    eventName: 'Tamil Stand-up Comedy Night',
    language: 'Tamil',
    category: 'Comedy Show',
    location: 'Medai - The Stage, Alwarpet, Chennai',
    date: '2026-04-18',
    time: '8:00 PM',
    ticketPrice: 399,
    image: 'images/comedy.jpg',
    description: 'A hilarious Tamil stand-up comedy show featuring famous comedians.'
  },
  {
    eventName: 'Chennai Food Festival',
    language: 'Tamil',
    category: 'Food Festival',
    location: 'Island Grounds, Chennai',
    date: '2026-04-25',
    time: '11:00 AM',
    ticketPrice: 200,
    image: 'images/foodfest.jpg',
    description: 'Explore delicious Tamil Nadu cuisine from top chefs and restaurants.'
  },
  {
    eventName: 'Margazhi Classical Music Festival',
    language: 'Tamil',
    category: 'Classical Music',
    location: 'Music Academy, Chennai',
    date: '2026-12-20',
    time: '6:30 PM',
    ticketPrice: 800,
    image: 'images/classical.jpg',
    description: 'Carnatic music performances by top classical musicians.'
  },
  {
    eventName: 'Tamil Theatre Drama',
    language: 'Tamil',
    category: 'Drama',
    location: 'Narada Gana Sabha, Chennai',
    date: '2026-04-10',
    time: '6:00 PM',
    ticketPrice: 300,
    image: 'images/drama.jpg',
    description: 'A traditional Tamil stage drama performance.'
  },
  {
    eventName: 'Chennai Tech Hackathon',
    language: 'English / Tamil',
    category: 'Technology',
    location: 'IIT Madras, Chennai',
    date: '2026-06-15',
    time: '9:00 AM',
    ticketPrice: 500,
    image: 'images/hackathon.jpg',
    description: 'A 24-hour hackathon for developers, designers, and innovators.'
  },
  {
    eventName: 'Kollywood Dance Festival',
    language: 'Tamil',
    category: 'Dance Show',
    location: 'Phoenix Market City, Chennai',
    date: '2026-05-05',
    time: '5:00 PM',
    ticketPrice: 350,
    image: 'images/dance.jpg',
    description: 'Dance performances featuring popular Tamil movie songs.'
  },
  {
    eventName: 'Tamil Literature Festival',
    language: 'Tamil',
    category: 'Book Event',
    location: 'Anna Centenary Library, Chennai',
    date: '2026-07-10',
    time: '10:00 AM',
    ticketPrice: 100,
    image: 'images/literature.jpg',
    description: 'Meet famous Tamil authors and explore Tamil literature.'
  }
];
