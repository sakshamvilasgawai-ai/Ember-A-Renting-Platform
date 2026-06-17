const sampleListings = [
  {
    title: "Royal Enfield Classic 350",
    description: "Iconic retro motorcycle with smooth 350cc engine. Perfect for city rides and highway trips across India.",
    image: { url: "https://images.unsplash.com/photo-1725591783170-2cb5566dded3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJveWFsJTIwZW5maWVsZCUyMGNsYXNzaWMlMjAzNTB8ZW58MHx8MHx8fDA%3D", filename: "sample" },
    price: 2800,
    location: "Goa",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
  },
  {
    title: "Fishing Rod Complete Kit",
    description: "Professional 7ft fishing rod with spinning reel, tackle box, hooks, lures and fishing line. Perfect for lake, river and sea fishing. Ideal for beginners and experienced anglers.",
    image: { url: "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaGluZyUyMHJvZHxlbnwwfHwwfHx8MA%3D%3D", filename: "sample" },
    price: 350,
    location: "Goa",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
  },
  {
    title: "LED Ring Light 18-inch Pro",
    description: "Professional 18-inch ring light with adjustable color temperature (3000K-6000K), tripod stand, phone holder and remote control. Perfect for reels, YouTube videos, photoshoots and makeup.",
    image: { url: "https://plus.unsplash.com/premium_photo-1684611913202-479ff05703da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkJTIwcmluZyUyMGxpZ2h0JTIwMThpbmNofGVufDB8fDB8fHww", filename: "sample" },
    price: 300,
    location: "Mumbai",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Mini Sewing Machine",
    description: "Heavy duty electric sewing machine with 23 built-in stitches, automatic needle threader and free arm. Great for tailoring, alterations, DIY fashion and fabric projects.",
    image: { url: "https://plus.unsplash.com/premium_photo-1676586308496-237a982709a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNld2luZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D", filename: "sample" },
    price: 400,
    location: "Jaipur",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Sony Alpha A7 III",
    description: "Full-frame mirrorless camera with 24.2MP, ideal for professional shoots and events.",
    image: { url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800", filename: "sample" },
    price: 2500,
    location: "Delhi",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "DJI Mini 3 Drone",
    description: "Lightweight drone with 4K camera, 38-min flight time. Perfect for aerial photography.",
    image: { url: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800", filename: "sample" },
    price: 2000,
    location: "Bangalore",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Board Game Collection",
    description: "Set of 10 popular board games including Chess, Scrabble, Monopoly and Catan.",
    image: { url: "https://images.unsplash.com/photo-1585504198199-20277593b94f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fHww", filename: "sample" },
    price: 200,
    location: "Chennai",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "GoPro Hero 12",
    description: "Action camera with 5.3K video, waterproof up to 10m. Great for adventure sports.",
    image: { url: "https://images.unsplash.com/photo-1577486092192-59ded63a8dbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvcHJvJTIwaGVybyUyMDEyfGVufDB8fDB8fHww", filename: "sample" },
    price: 800,
    location: "Goa",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
  },
  {
    title: "MacBook Pro 14-inch",
    description: "Apple M3 Pro chip, 18GB RAM, 512GB SSD. Best for video editing and design work.",
    image: { url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800", filename: "sample" },
    price: 3000,
    location: "Hyderabad",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "MG Hector Plus",
    description: "6-seater connected SUV with 14-inch touchscreen, WiFi hotspot and panoramic sunroof.",
    image: { url: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800", filename: "sample" },
    price: 3000,
    location: "Ahmedabad",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  {
    title: "Kawasaki Ninja 300",
    description: "Entry-level sport bike with twin-cylinder engine. Smooth power delivery and sporty looks.",
    image: { url: "https://images.unsplash.com/photo-1595472167001-dbe2069e1b07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGthd2FzYWtpJTIwbmluamF8ZW58MHx8MHx8fDA%3D", filename: "sample" },
    price: 1100,
    location: "Bangalore",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "iPad Pro 12.9-inch",
    description: "M2 chip iPad with Apple Pencil support. Perfect for design, presentations and study.",
    image: { url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800", filename: "sample" },
    price: 1200,
    location: "Chennai",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "Sony 4K Projector",
    description: "Full HD 4K projector with 3200 lumens. Great for home theatre and office presentations.",
    image: { url: "https://images.unsplash.com/photo-1680701572796-b8cc1143b97a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbnklMjA0ayUyMHByb2plY3RvcnxlbnwwfHwwfHx8MA%3D%3D", filename: "sample" },
    price: 1800,
    location: "Pune",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Bose SoundSystem Speaker",
    description: "Premium 360-degree surround sound Bluetooth speaker. Waterproof with 12hr battery.",
    image: { url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800", filename: "sample" },
    price: 600,
    location: "Jaipur",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "PlayStation 5 Console",
    description: "Sony PS5 with DualSense controller and 2 games included. Perfect for gaming events.",
    image: { url: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800", filename: "sample" },
    price: 1800,
    location: "Mumbai",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Xbox Series X",
    description: "Microsoft Xbox Series X with 1TB SSD and 2 controllers. Ready for gaming sessions.",
    image: { url: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800", filename: "sample" },
    price: 1700,
    location: "Delhi",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Rode NT1 Microphone",
    description: "Studio-quality condenser microphone with shock mount. Perfect for podcasting and recording.",
    image: { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800", filename: "sample" },
    price: 700,
    location: "Bangalore",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Tripod Stand Professional",
    description: "Heavy-duty aluminium tripod, adjustable up to 180cm. Compatible with all cameras.",
    image: { url: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=800", filename: "sample" },
    price: 200,
    location: "Ahmedabad",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  {
    title: "Oculus Quest 2 VR",
    description: "All-in-one VR headset with 128GB storage. Includes 10+ games for immersive experience.",
    image: { url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800", filename: "sample" },
    price: 1400,
    location: "Hyderabad",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "Kindle Paperwhite",
    description: "E-reader with 6.8-inch display and adjustable warm light. Access 1000s of books.",
    image: { url: "https://images.unsplash.com/photo-1592496001020-d31bd830651f?w=800", filename: "sample" },
    price: 150,
    location: "Chennai",
    country: "India",
    category: "Books",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "Digital Book Collection Tablet",
    description: "Pre-loaded tablet with 500+ e-books across genres. Great for students and readers.",
    image: { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800", filename: "sample" },
    price: 300,
    location: "Pune",
    country: "India",
    category: "Books",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Badminton Racket Set",
    description: "2 professional rackets, shuttlecocks and net included. Great for outdoor and indoor play.",
    image: { url: "https://images.unsplash.com/photo-1716155249759-b5f068f74e63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkbWludG9uJTIwcnxlbnwwfHwwfHx8MA%3D%3D", filename: "sample" },
    price: 1000,
    location: "Mumbai",
    country: "India",
    category: "Sports",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Adjustable Dumbbell Set",
    description: "5-50kg adjustable dumbbells with rack. Perfect for strength training at home.",
    image: { url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800", filename: "sample" },
    price: 400,
    location: "Delhi",
    country: "India",
    category: "Gym",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Yoga Mat Premium Set",
    description: "6mm thick non-slip yoga mat with blocks, strap and carry bag included.",
    image: { url: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800", filename: "sample" },
    price: 150,
    location: "Bangalore",
    country: "India",
    category: "Gym",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Rowing Machine",
    description: "Water resistance rowing machine with digital display. Full body workout equipment.",
    image: { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800", filename: "sample" },
    price: 800,
    location: "Jaipur",
    country: "India",
    category: "Gym",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Bajaj Pulsar NS200",
    description: "Sporty naked bike with liquid-cooled engine. Great for both city commutes and highway rides.",
    image: { url: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800", filename: "sample" },
    price: 700,
    location: "Jaipur",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Mahindra Thar 4x4",
    description: "Rugged off-road SUV with 4x4 drivetrain. Perfect for adventure trips and hilly terrain.",
    image: { url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800", filename: "sample" },
    price: 3500,
    location: "Manali",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [77.1887, 32.2432] }
  },
  {
    title: "Ola Electric S1 Pro",
    description: "Premium electric scooter with 195km range, reverse mode and cruise control.",
    image: { url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800", filename: "sample" },
    price: 500,
    location: "Bangalore",
    country: "India",
    category: "Scooters",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Pull-up Bar & Resistance Bands",
    description: "Doorframe pull-up bar with 5 resistance bands. No installation needed.",
    image: { url: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=800", filename: "sample" },
    price: 200,
    location: "Kolkata",
    country: "India",
    category: "Gym",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] }
  },
  {
    title: "Cricket Kit Full Set",
    description: "Complete cricket kit with bat, pads, gloves, helmet and ball. Professional grade.",
    image: { url: "https://plus.unsplash.com/premium_photo-1722086350831-3cc30b7d68a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyaWNrZXQlMjBraXR8ZW58MHx8MHx8fDA%3D", filename: "sample" },
    price: 500,
    location: "Mumbai",
    country: "India",
    category: "Sports",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Ford Mustang GT",
    description: "Iconic American muscle car with 5.0L V8 engine. Turn heads on every road.",
    image: { url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800", filename: "sample" },
    price: 8000,
    location: "Mumbai",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Himalayan Royal Enfield",
    description: "Adventure tourer built for Himalayan roads. Long travel suspension and navigation system included.",
    image: { url: "https://images.unsplash.com/photo-1699972551272-e0eaee1916b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGltYWxheWFuJTIwcm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fHww", filename: "sample" },
    price: 1500,
    location: "Leh",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [77.5771, 34.1526] }
  },
  {
    title: "Kia Seltos Turbo",
    description: "Feature-loaded SUV with panoramic sunroof, BOSE sound system and ADAS safety features.",
    image: { url: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800", filename: "sample" },
    price: 2800,
    location: "Delhi",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Honda CB500F",
    description: "Mid-range naked motorcycle with 471cc parallel-twin engine. Smooth and comfortable.",
    image: { url: "https://images.unsplash.com/photo-1601158935942-52255782d322?w=800", filename: "sample" },
    price: 1200,
    location: "Mumbai",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Maruti Suzuki Ertiga",
    description: "7-seater MPV with automatic transmission and AC. Ideal for group travel and family trips.",
    image: { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800", filename: "sample" },
    price: 1800,
    location: "Kolkata",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] }
  },
  {
    title: "TVS Jupiter 125",
    description: "Feature-packed scooter with USB charging, digital console and excellent mileage.",
    image: { url: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800", filename: "sample" },
    price: 350,
    location: "Chennai",
    country: "India",
    category: "Scooters",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "Football & Gear Set",
    description: "FIFA-approved football with shin guards, gloves and pump. Ready to play.",
    image: { url: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800", filename: "sample" },
    price: 300,
    location: "Delhi",
    country: "India",
    category: "Sports",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Badminton Set",
    description: "2 professional rackets, shuttlecocks and net included. Great for outdoor play.",
    image: { url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800", filename: "sample" },
    price: 200,
    location: "Hyderabad",
    country: "India",
    category: "Sports",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "Cycling Helmet & Gear",
    description: "Certified cycling helmet with gloves, knee pads and reflective vest.",
    image: { url: "https://images.unsplash.com/photo-1591511275477-88f079d88154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3ljbGluZyUyMGhlbG1ldHxlbnwwfHwwfHx8MA%3D%3D", filename: "sample" },
    price: 250,
    location: "Pune",
    country: "India",
    category: "Sports",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Skateboard Pro",
    description: "7-ply maple deck skateboard with ABEC-7 bearings. Perfect for beginners and pros.",
    image: { url: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800", filename: "sample" },
    price: 300,
    location: "Goa",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
  },
   {
    title: "Suzuki Access 125",
    description: "Reliable and fuel-efficient scooter with smooth engine and comfortable seating.",
    image: { url: "https://images.unsplash.com/photo-1558980664-2cd663cf8dde?w=800", filename: "sample" },
    price: 300,
    location: "Pune",
    country: "India",
    category: "Scooters",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Yamaha MT-15",
    description: "Aggressive naked streetfighter with 155cc VVA engine. Lightweight and fun to ride.",
    image: { url: "https://images.unsplash.com/photo-1625826425873-af4d9c357c4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eWFtYWhhJTIwbXQxNXxlbnwwfHwwfHx8MA%3D%3D", filename: "sample" },
    price: 600,
    location: "Hyderabad",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "Acoustic Guitar",
    description: "Yamaha F310 acoustic guitar with picks, tuner and carry bag included.",
    image: { url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800", filename: "sample" },
    price: 400,
    location: "Bangalore",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "DSLR Photography Kit",
    description: "Nikon D3500 with 18-55mm lens, bag, extra battery and 32GB SD card.",
    image: { url: "https://images.unsplash.com/photo-1623266997167-bf4d92ef42fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHNsciUyMGtpdHxlbnwwfHwwfHx8MA%3D%3D", filename: "sample" },
    price: 1200,
    location: "Jaipur",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Maruti Suzuki Swift",
    description: "Sporty hatchback with great mileage and AC. Ideal for city drives and small family trips.",
    image: { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", filename: "sample" },
    price: 1200,
    location: "Delhi",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Honda Activa 6G",
    description: "India's most popular scooter. Fuel-efficient, easy to ride and perfect for daily commutes.",
    image: { url: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800", filename: "sample" },
    price: 400,
    location: "Mumbai",
    country: "India",
    category: "Scooters",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Tata Nexon EV",
    description: "Electric SUV with 312km range, fast charging support and premium interiors. Eco-friendly travel.",
    image: { url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800", filename: "sample" },
    price: 2200,
    location: "Pune",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "KTM Duke 390",
    description: "Aggressive naked streetfighter with 373cc engine. Best for thrill seekers and weekend rides.",
    image: { url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800", filename: "sample" },
    price: 1000,
    location: "Chennai",
    country: "India",
    category: "Bikes",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "Telescope StarGazer",
    description: "70mm aperture telescope with tripod. Perfect for stargazing and astronomy hobbyists.",
    image: { url: "https://images.unsplash.com/photo-1600456548090-7d1b3f0bbea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXNjb3BlfGVufDB8fDB8fHww", filename: "sample" },
    price: 500,
    location: "Ahmedabad",
    country: "India",
    category: "Hobbies",
    geometry: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  
  {
    title: "Toyota Innova Crysta",
    description: "Premium 7-seater MPV with AC, music system and spacious boot. Great for family outings.",
    image: { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800", filename: "sample" },
    price: 2500,
    location: "Bangalore",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Hyundai Creta",
    description: "Popular SUV with sunroof, touchscreen and cruise control. Comfortable for long drives.",
    image: { url: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800", filename: "sample" },
    price: 2000,
    location: "Hyderabad",
    country: "India",
    category: "Cars",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
   {
    title: "Canon EOS R50 Camera",
    description: "Mirrorless camera with 24.2MP sensor, perfect for photography enthusiasts and content creators.",
    image: { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800", filename: "sample" },
    price: 1500,
    location: "Mumbai",
    country: "India",
    category: "Electronics",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
];

module.exports = { data: sampleListings };