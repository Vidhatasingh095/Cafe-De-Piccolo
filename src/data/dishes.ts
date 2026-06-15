import interiorMain from "../assests/interior-main.jpg";
import lampTable from "../assests/lamp-table.jpg";
import cozyCorner from "../assests/cozy-corner.jpg";
import interiorMural from "../assests/interior-mural.jpg";
import checkerFloor from "../assests/checker-floor.jpg";
import chalkboard from "../assests/chalkboard.jpg";
import menu1 from "../assests/menu-1.jpg";
import menu2 from "../assests/menu-2.jpg";

export type Dish = {
  name: string;
  price: string;
  desc?: string;
  veg?: boolean;
  best?: boolean;
  img: string;
  reviews: { n: string; t: string; r: number }[];
  recipe?: {
    ingredients: string[];
    steps: string[];
  };
  aboutDish: {
    origin: string;
    funFact?: string;
  };
  tag?: string;
};

export const catalog: { id: string; label: string; items: Dish[] }[] = [
  {
    id: "Coffee",
    label: "Coffee",
    items: [
      {
        name: "Espresso",
        price: "₹170 / 190",
        veg: true,
        img: interiorMain,
        reviews: [
          { n: "Rahul S.", t: "Strong and smooth! Best espresso in Dehradun.", r: 5 },
          { n: "Priya K.", t: "Perfect pick-me-up.", r: 4 },
        ],
        recipe: {
          ingredients: ["18g freshly ground coffee", "30ml water"],
          steps: [
            "Grind coffee beans to fine consistency",
            "Tamp coffee grounds evenly in portafilter",
            "Lock portafilter into espresso machine",
            "Extract 30ml of espresso in ~25-30 seconds",
          ],
        },
        aboutDish: {
          origin: "Italy (Milan)",
          funFact: "Espresso means 'pressed out' in Italian",
        },
      },
      {
        name: "Cappuccino",
        price: "₹260 / 280",
        veg: true,
        best: true,
        img: lampTable,
        reviews: [
          { n: "Ananya R.", t: "The cappuccino was honestly the best I've had in the city.", r: 5 },
          { n: "Vikram M.", t: "Beautiful foam art.", r: 5 },
        ],
        recipe: {
          ingredients: ["30ml espresso", "120ml steamed milk", "Thick layer of microfoam"],
          steps: [
            "Prepare a shot of espresso",
            "Steam milk to create velvety microfoam",
            "Pour steamed milk into espresso",
            "Top with thick foam layer",
          ],
        },
        aboutDish: {
          origin: "Italy (Rome)",
          funFact: "Name comes from Capuchin monks' brown hoods!",
        },
      },
      {
        name: "Cafe Latte",
        price: "₹260 / 280",
        veg: true,
        img: cozyCorner,
        reviews: [{ n: "Sofia D.", t: "My go-to drink, always perfect.", r: 5 }],
        recipe: {
          ingredients: ["30ml espresso", "180ml steamed milk", "Light layer of foam"],
          steps: [
            "Prepare a shot of espresso",
            "Steam milk with thin layer of foam",
            "Slowly pour steamed milk into espresso cup",
          ],
        },
        aboutDish: {
          origin: "Italy (Florence)",
          funFact: "Caffè latte means 'milk coffee' in Italian",
        },
      },
      {
        name: "Cortado",
        price: "₹280",
        veg: true,
        img: interiorMural,
        reviews: [{ n: "Arjun P.", t: "Balanced and rich.", r: 4 }],
        recipe: {
          ingredients: ["30ml espresso", "30ml steamed milk"],
          steps: ["Make espresso", "Steam equal parts milk and pour gently"],
        },
        aboutDish: {
          origin: "Spain (Barcelona)",
          funFact: "Cortado means 'cut' in Spanish!",
        },
      },
      {
        name: "Swiss Hot Chocolate",
        price: "₹380",
        veg: true,
        img: checkerFloor,
        reviews: [{ n: "Meera N.", t: "Decadent and creamy!", r: 5 }],
        recipe: {
          ingredients: ["180ml whole milk", "50g Swiss dark chocolate", "Whipped cream to top"],
          steps: [
            "Melt chocolate in warm milk",
            "Whisk until smooth",
            "Top with whipped cream",
          ],
        },
        aboutDish: {
          origin: "Switzerland",
          funFact: "Switzerland consumes the most chocolate per capita!",
        },
      },
      {
        name: "B3 Spice Latte",
        price: "₹380",
        veg: true,
        img: chalkboard,
        reviews: [{ n: "Karan T.", t: "Unique and delicious.", r: 4 }],
        recipe: {
          ingredients: ["30ml espresso", "150ml steamed milk", "Cinnamon, nutmeg, cardamom"],
          steps: ["Make espresso", "Steam spiced milk", "Combine"],
        },
        aboutDish: {
          origin: "Cafe De Piccolo Special",
          funFact: "B3 stands for 'Best Bistro Blend!'",
        },
      },
    ],
  },
  {
    id: "Breakfast",
    label: "Breakfast",
    items: [
      {
        name: "Piccolo English Breakfast",
        price: "₹680",
        desc: "Sausage, beans, eggs, hash brown, toast",
        best: true,
        img: interiorMural,
        reviews: [
          { n: "Marcus L.", t: "Their Sunday brunch is unmatched — the English Breakfast had us dreaming for days.", r: 5 },
          { n: "Ishita R.", t: "Hearty and delicious.", r: 5 },
        ],
        recipe: {
          ingredients: [
            "Sausages",
            "Baked beans",
            "Eggs to order",
            "Hash browns",
            "Toasted bread",
            "Grilled tomatoes",
          ],
          steps: [
            "Fry sausages and hash browns",
            "Cook eggs to preference",
            "Heat baked beans",
            "Serve hot with toast",
          ],
        },
        aboutDish: {
          origin: "United Kingdom",
          funFact: "A full English breakfast is also called a 'fry-up'!",
        },
      },
      {
        name: "3 Egg Fluffy Omelette",
        price: "₹410",
        veg: true,
        img: cozyCorner,
        reviews: [{ n: "Riya K.", t: "Super fluffy!", r: 4 }],
        recipe: {
          ingredients: ["3 eggs", "Milk", "Butter"],
          steps: [
            "Whisk eggs with milk and salt",
            "Cook on low heat in butter",
          ],
        },
        aboutDish: {
          origin: "France",
          funFact: "Omelette comes from the French word 'omelette'!",
        },
      },
      {
        name: "Avocado Toast",
        price: "₹560",
        veg: true,
        img: checkerFloor,
        reviews: [{ n: "Aman S.", t: "Fresh and tasty.", r: 4 }],
        recipe: {
          ingredients: ["Sourdough bread", "Ripe avocado", "Lemon juice", "Red chili flakes"],
          steps: ["Toast sourdough", "Mash avocado", "Season well"],
        },
        aboutDish: {
          origin: "California",
          funFact: "Avocado toast became a viral trend in 2010s!",
        },
      },
      {
        name: "Spanish Omelette",
        price: "₹410",
        img: chalkboard,
        reviews: [{ n: "Neha P.", t: "Authentic and filling.", r: 4 }],
        recipe: {
          ingredients: ["6 eggs", "Potatoes", "Onion", "Olive oil"],
          steps: [
            "Fry potatoes and onion",
            "Mix with eggs",
            "Cook in pan",
          ],
        },
        aboutDish: {
          origin: "Spain",
          funFact: "Also called tortilla de patata!",
        },
      },
    ],
  },
  {
    id: "Small Plates",
    label: "Small Plates",
    items: [
      {
        name: "Garlic Bread (with cheese)",
        price: "₹360",
        veg: true,
        img: checkerFloor,
        reviews: [{ n: "Rohan M.", t: "Garlicky and cheesy!", r: 4 }],
        recipe: {
          ingredients: ["Baguette", "Garlic butter", "Mozzarella"],
          steps: ["Make garlic butter", "Spread", "Bake"],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "Garlic bread is an Italian-American invention!",
        },
      },
      {
        name: "Fries with Garlic Dip",
        price: "₹360",
        veg: true,
        img: chalkboard,
        reviews: [{ n: "Simran K.", t: "Crispy fries with amazing dip!", r: 5 }],
        recipe: {
          ingredients: ["Potato fries", "Garlic aioli"],
          steps: ["Fry until crispy", "Serve with garlic dip"],
        },
        aboutDish: {
          origin: "Belgium",
          funFact: "Fries were invented in Belgium!",
        },
      },
      {
        name: "Homemade Onion Rings",
        price: "₹380",
        veg: true,
        img: menu1,
        reviews: [{ n: "Pooja R.", t: "Crispy and not oily.", r: 4 }],
        recipe: {
          ingredients: ["Onions", "Batter", "Bread crumbs"],
          steps: ["Slice onions", "Batter", "Fry"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Onion rings were invented in Texas 1920s!",
        },
      },
      {
        name: "Potato Cheese Balls",
        price: "₹380",
        veg: true,
        img: menu2,
        reviews: [{ n: "Yash T.", t: "Cheese pull is real!", r: 5 }],
        recipe: {
          ingredients: ["Mashed potatoes", "Cheese cubes", "Bread crumbs"],
          steps: ["Wrap cheese in mashed potato", "Coat", "Fry"],
        },
        aboutDish: {
          origin: "Brazil",
          funFact: "Called 'bolinha de queijo'!",
        },
      },
    ],
  },
  {
    id: "Burgers",
    label: "Burgers",
    items: [
      {
        name: "Vegetarian Burger",
        price: "₹450",
        veg: true,
        desc: "Potato-cauliflower-carrot patty",
        img: interiorMural,
        reviews: [{ n: "Ayesha S.", t: "Best veg burger ever!", r: 5 }],
        recipe: {
          ingredients: ["Veg patty", "Burger bun", "Lettuce tomato mayo"],
          steps: ["Cook patty", "Assemble with toppings"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Veggie burgers started in the 1980s!",
        },
      },
      {
        name: "Chicken Burger",
        price: "₹550",
        desc: "Honey mustard & coleslaw",
        img: cozyCorner,
        reviews: [{ n: "Rahul M.", t: "Juicy and flavorful.", r: 4 }],
        recipe: {
          ingredients: ["Chicken patty", "Honey mustard", "Coleslaw"],
          steps: ["Grill chicken patty", "Assemble burger"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Burger comes from Hamburg steak!",
        },
      },
      {
        name: "Fried Chicken Burger",
        price: "₹520",
        desc: "Tandoori mayo",
        img: checkerFloor,
        reviews: [{ n: "Kabir P.", t: "Crispy and spicy, loved it!", r: 5 }],
        recipe: {
          ingredients: ["Fried chicken", "Tandoori mayo"],
          steps: ["Fry chicken", "Make burger"],
        },
        aboutDish: {
          origin: "India",
          funFact: "Our signature tandoori twist!",
        },
      },
      {
        name: "Lamb Burger",
        price: "₹550",
        best: true,
        img: chalkboard,
        reviews: [{ n: "Zara K.", t: "Incredible lamb patty!", r: 5 }],
        recipe: {
          ingredients: ["Lamb patty", "Mint sauce"],
          steps: ["Grill lamb patty", "Serve"],
        },
        aboutDish: {
          origin: "Australia",
          funFact: "Lamb burgers are Aussie favorite!",
        },
      },
    ],
  },
  {
    id: "Sandwiches",
    label: "Sandwiches",
    items: [
      {
        name: "Veg Club Sandwich",
        price: "₹520",
        veg: true,
        img: menu1,
        reviews: [{ n: "Ishaan S.", t: "Classic and tasty.", r: 4 }],
        recipe: {
          ingredients: ["Bread", "Veggies", "Cheese"],
          steps: ["Layer veggies", "Toast sandwich"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Club sandwich dates to 1800s!",
        },
      },
      {
        name: "Non Veg Club Sandwich",
        price: "₹550",
        img: menu2,
        reviews: [{ n: "Riya T.", t: "Hearty and filling.", r: 4 }],
        recipe: {
          ingredients: ["Bread", "Chicken", "Eggs"],
          steps: ["Make sandwich"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Non-veg twist!",
        },
      },
      {
        name: "Hummus Sandwich",
        price: "₹550",
        veg: true,
        img: interiorMural,
        reviews: [{ n: "Aditi K.", t: "Creamy hummus!", r: 5 }],
        recipe: {
          ingredients: ["Pita bread", "Hummus", "Cucumber tomatoes"],
          steps: ["Spread hummus on pita", "Add veggies"],
        },
        aboutDish: {
          origin: "Middle East",
          funFact: "Hummus means 'chickpeas' in Arabic!",
        },
      },
      {
        name: "Red Pepper Pesto Chicken",
        price: "₹550",
        img: cozyCorner,
        reviews: [{ n: "Karan S.", t: "Amazing pesto!", r: 4 }],
        recipe: {
          ingredients: ["Bread", "Chicken", "Red pepper pesto"],
          steps: ["Make sandwich"],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "Pesto originates from Genoa!",
        },
      },
    ],
  },
  {
    id: "Pasta",
    label: "Pasta",
    items: [
      {
        name: "Penne Alla Vodka",
        price: "₹630 / 680",
        img: checkerFloor,
        reviews: [{ n: "Aisha R.", t: "Rich and creamy.", r: 4 }],
        recipe: {
          ingredients: ["Penne pasta", "Tomato sauce", "Cream", "Vodka"],
          steps: ["Cook pasta", "Make sauce", "Combine"],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "Vodka helps emulsifies sauce!",
        },
      },
      {
        name: "Mushroom White Sauce Penne",
        price: "₹610 / 680",
        veg: true,
        best: true,
        img: chalkboard,
        reviews: [{ n: "Nisha M.", t: "Best white sauce pasta ever!", r: 5 }],
        recipe: {
          ingredients: ["Penne pasta", "Mushrooms", "White sauce", "Parmesan"],
          steps: [
            "Cook pasta",
            "Sauté mushrooms",
            "Make bechamel",
            "Combine",
          ],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "White sauce called 'bechamel'!",
        },
      },
      {
        name: "Homemade Ravioli",
        price: "₹650",
        veg: true,
        img: menu1,
        reviews: [{ n: "Arjun T.", t: "Fresh and delicious.", r: 4 }],
        recipe: {
          ingredients: ["Pasta dough", "Ricotta cheese"],
          steps: ["Make pasta", "Fill", "Cook ravioli"],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "Ravioli means 'little turnips'!",
        },
      },
      {
        name: "Homemade Risotto",
        price: "₹590 / 680",
        img: menu2,
        reviews: [{ n: "Sneha K.", t: "Creamy and perfect.", r: 5 }],
        recipe: {
          ingredients: ["Arborio rice", "Broth", "Parmesan"],
          steps: ["Slow cook risotto"],
        },
        aboutDish: {
          origin: "Italy (Milan)",
          funFact: "Risotto alla Milanese!",
        },
      },
      {
        name: "Baked Mac & Cheese",
        price: "₹650",
        veg: true,
        img: interiorMural,
        reviews: [{ n: "Yuvraj S.", t: "Cheese overload!", r: 5 }],
        recipe: {
          ingredients: ["Macaroni", "Cheddar cheese", "Béchamel sauce"],
          steps: ["Cook pasta", "Make cheese sauce", "Bake"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Mac and cheese is comfort food!",
        },
      },
    ],
  },
  {
    id: "Pizza",
    label: "Pizza",
    items: [
      {
        name: "All Cheesy (3 cheese)",
        price: "₹620",
        veg: true,
        img: cozyCorner,
        reviews: [{ n: "Ritika M.", t: "Cheese lover's dream!", r: 5 }],
        recipe: {
          ingredients: ["Pizza base", "Mozzarella", "Parmesan", "Gouda"],
          steps: ["Make pizza base", "Add cheese", "Bake"],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "3 cheese blend!",
        },
      },
      {
        name: "Margherita",
        price: "₹660",
        veg: true,
        best: true,
        img: chalkboard,
        reviews: [
          { n: "Priya & Karthik", t: "We celebrated our anniversary here. Everything was perfect, especially the pizza!", r: 5 },
        ],
        recipe: {
          ingredients: ["Pizza base", "Tomato sauce", "Mozzarella", "Fresh basil"],
          steps: ["Make classic margherita pizza"],
        },
        aboutDish: {
          origin: "Italy (Naples)",
          funFact: "Named after Queen Margherita!",
        },
      },
      {
        name: "BBQ Chicken Pizza",
        price: "₹720",
        img: menu1,
        reviews: [{ n: "Rahul K.", t: "Tangy and delicious!", r: 4 }],
        recipe: {
          ingredients: ["Pizza base", "BBQ sauce", "Chicken", "Onions"],
          steps: ["Make pizza base", "Toppings", "Bake"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "BBQ pizza invented in California!",
        },
      },
      {
        name: "Peri Peri Pizza",
        price: "₹680 / 720",
        img: menu2,
        reviews: [{ n: "Siddharth P.", t: "Spicy and perfect!", r: 5 }],
        recipe: {
          ingredients: ["Pizza base", "Peri peri sauce", "Chicken"],
          steps: ["Make pizza", "peri peri style"],
        },
        aboutDish: {
          origin: "Portugal/Africa",
          funFact: "Peri peri means 'pepper pepper'!",
        },
      },
    ],
  },
  {
    id: "Desserts",
    label: "Desserts",
    items: [
      {
        name: "Tiramisu",
        price: "₹410",
        veg: true,
        best: true,
        img: cozyCorner,
        reviews: [
          { n: "Marcus L.", t: "The tiramisu had us dreaming for days.", r: 5 },
          { n: "Ananya R.", t: "Best tiramisu ever!", r: 5 },
        ],
        recipe: {
          ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Cocoa powder"],
          steps: [
            "Dip ladyfingers in espresso",
            "Layer with mascarpone cream",
            "Chill",
          ],
        },
        aboutDish: {
          origin: "Italy (Veneto)",
          funFact: "Tiramisu means 'pick-me-up' in Italian!",
        },
      },
      {
        name: "Tres Leches Cake",
        price: "₹410",
        veg: true,
        img: checkerFloor,
        reviews: [{ n: "Ishita S.", t: "Moist and flavorful!", r: 5 }],
        recipe: {
          ingredients: ["Sponge cake", "Three milks (condensed, evaporated, whole)", "Whipped cream"],
          steps: ["Soak cake in three milks", "Top with cream"],
        },
        aboutDish: {
          origin: "Latin America",
          funFact: "Tres leches = three milks!",
        },
      },
      {
        name: "Banoffee Pie",
        price: "₹380",
        veg: true,
        img: chalkboard,
        reviews: [{ n: "Riya M.", t: "Sweet and creamy!", r: 4 }],
        recipe: {
          ingredients: ["Bananas", "Toffee", "Cream"],
          steps: ["Make banoffee pie"],
        },
        aboutDish: {
          origin: "England",
          funFact: "Invented at Hungry Monk restaurant!",
        },
      },
      {
        name: "Nutella Cheesecake",
        price: "₹380",
        veg: true,
        img: menu1,
        reviews: [{ n: "Kabir T.", t: "Nutella heaven!", r: 5 }],
        recipe: {
          ingredients: ["Cream cheese", "Nutella", "Graham cracker crust"],
          steps: ["Make crust", "Prepare cheesecake", "Chill"],
        },
        aboutDish: {
          origin: "Italy",
          funFact: "Nutella invented in 1964!",
        },
      },
    ],
  },
  {
    id: "Tea",
    label: "Tea",
    items: [
      {
        name: "Earl Grey",
        price: "₹210",
        veg: true,
        img: lampTable,
        reviews: [{ n: "Meera S.", t: "Aromatic and soothing.", r: 4 }],
        recipe: {
          ingredients: ["Black tea", "Bergamot oil"],
          steps: ["Steep tea leaves", "Add bergamot"],
        },
        aboutDish: {
          origin: "England",
          funFact: "Named after 2nd Earl Grey!",
        },
      },
      {
        name: "Green Tea",
        price: "₹210",
        veg: true,
        img: cozyCorner,
        reviews: [{ n: "Aman K.", t: "Fresh and calming.", r: 4 }],
        recipe: {
          ingredients: ["Green tea leaves", "Hot water"],
          steps: ["Steep green tea leaves"],
        },
        aboutDish: {
          origin: "China",
          funFact: "Green tea has been around for 5,000 years!",
        },
      },
      {
        name: "Herbal Tea",
        price: "₹210",
        veg: true,
        img: interiorMural,
        reviews: [{ n: "Pooja R.", t: "Perfect for evenings.", r: 4 }],
        recipe: {
          ingredients: ["Herbs (chamomile, peppermint, etc.)"],
          steps: ["Steep herbs"],
        },
        aboutDish: {
          origin: "Worldwide",
          funFact: "Herbal teas have ancient roots!",
        },
      },
      {
        name: "Peach Ice Tea",
        price: "₹310",
        veg: true,
        img: checkerFloor,
        reviews: [{ n: "Simran T.", t: "Refreshing and sweet!", r: 5 }],
        recipe: {
          ingredients: ["Black tea", "Peach syrup", "Ice"],
          steps: ["Brew tea", "Chill", "Add peach"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Sweet tea a Southern classic!",
        },
      },
    ],
  },
  {
    id: "Cold",
    label: "Cold Beverages",
    items: [
      {
        name: "Pure Vanilla Ice Blend",
        price: "₹410",
        veg: true,
        img: menu1,
        reviews: [{ n: "Yash S.", t: "Creamy and delicious!", r: 4 }],
        recipe: {
          ingredients: ["Vanilla ice cream", "Milk", "Ice"],
          steps: ["Blend all together"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Milkshakes invented in 1880s!",
        },
      },
      {
        name: "Double Chocolate Ice Blend",
        price: "₹410",
        veg: true,
        best: true,
        img: menu2,
        reviews: [{ n: "Rohan M.", t: "Chocolate overload!", r: 5 }],
        recipe: {
          ingredients: ["Chocolate ice cream", "Milk", "Chocolate syrup"],
          steps: ["Blend all"],
        },
        aboutDish: {
          origin: "United States",
          funFact: "Chocolate shake a chocoholic's dream!",
        },
      },
      {
        name: "Mint Margarita",
        price: "₹380",
        veg: true,
        img: interiorMain,
        reviews: [{ n: "Neha K.", t: "Refreshing and tangy!", r: 4 }],
        recipe: {
          ingredients: ["Lime juice", "Mint", "Soda"],
          steps: ["Muddle mint, lime", "Shake"],
        },
        aboutDish: {
          origin: "Mexico",
          funFact: "Margarita means daisy in Spanish!",
        },
      },
      {
        name: "Fresh Juice (Orange/Watermelon)",
        price: "₹410",
        veg: true,
        img: lampTable,
        reviews: [{ n: "Arjun P.", t: "Fresh and natural!", r: 5 }],
        recipe: {
          ingredients: ["Fresh fruit"],
          steps: ["Squeeze fresh juice!"],
        },
        aboutDish: {
          origin: "Worldwide",
          funFact: "Orange juice big in 1920s!",
        },
      },
    ],
  },
];

export const signatures: Dish[] = [
  {
    name: "Piccolo English Breakfast",
    tag: "Breakfast classic",
    price: "₹680",
    img: interiorMural,
    reviews: [
      { n: "Marcus L.", t: "Their Sunday brunch is unmatched — the English Breakfast had us dreaming for days.", r: 5 },
      { n: "Ishita R.", t: "Hearty and delicious.", r: 5 },
    ],
    recipe: {
      ingredients: [
        "Sausages",
        "Baked beans",
        "Eggs to order",
        "Hash browns",
        "Toasted bread",
        "Grilled tomatoes",
      ],
      steps: [
        "Fry sausages and hash browns",
        "Cook eggs to preference",
        "Heat baked beans",
        "Serve hot with toast",
      ],
    },
    aboutDish: {
      origin: "United Kingdom",
      funFact: "A full English breakfast is also called a 'fry-up'!",
    },
  },
  {
    name: "Cappuccino",
    tag: "Hand-pulled, ribboned crema",
    price: "₹260",
    img: lampTable,
    reviews: [
      { n: "Ananya R.", t: "The cappuccino was honestly the best I've had in the city.", r: 5 },
      { n: "Vikram M.", t: "Beautiful foam art.", r: 5 },
    ],
    recipe: {
      ingredients: ["30ml espresso", "120ml steamed milk", "Thick layer of microfoam"],
      steps: [
        "Prepare a shot of espresso",
        "Steam milk to create velvety microfoam",
        "Pour steamed milk into espresso",
        "Top with thick foam layer",
      ],
    },
    aboutDish: {
      origin: "Italy (Rome)",
      funFact: "Name comes from Capuchin monks' brown hoods!",
    },
  },
  {
    name: "Tiramisu",
    tag: "House mascarpone, espresso-soaked",
    price: "₹410",
    img: cozyCorner,
    reviews: [
      { n: "Marcus L.", t: "The tiramisu had us dreaming for days.", r: 5 },
      { n: "Ananya R.", t: "Best tiramisu ever!", r: 5 },
    ],
    recipe: {
      ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Cocoa powder"],
      steps: [
        "Dip ladyfingers in espresso",
        "Layer with mascarpone cream",
        "Chill and dust with cocoa",
      ],
    },
    aboutDish: {
      origin: "Italy (Veneto)",
      funFact: "Tiramisu means 'pick-me-up' in Italian!",
    },
  },
  {
    name: "Black Forest Waffle",
    tag: "Cherry, dark cocoa, cream",
    price: "₹430",
    img: checkerFloor,
    reviews: [{ n: "Riya K.", t: "Decadent and delicious!", r: 5 }],
    recipe: {
      ingredients: ["Waffle batter", "Dark cocoa", "Cherries", "Whipped cream"],
      steps: ["Make cocoa waffles", "Top with cherries and cream"],
    },
    aboutDish: {
      origin: "Germany",
      funFact: "Black Forest cake is Schwarzwälder Kirschtorte!",
    },
  },
  {
    name: "Chunky Monkey Pancake",
    tag: "Banana, walnut, chocolate chip",
    price: "₹410",
    img: interiorMain,
    reviews: [{ n: "Aman S.", t: "Fluffy and flavorful!", r: 4 }],
    recipe: {
      ingredients: ["Pancake batter", "Bananas", "Walnuts", "Chocolate chips"],
      steps: [
        "Make fluffy pancakes",
        "Top with banana, walnuts & chocolate chips",
      ],
    },
    aboutDish: {
      origin: "United States",
      funFact: "Chunky Monkey is a classic combo!",
    },
  },
  {
    name: "Homemade Margherita",
    tag: "Thin-crust, basil, vine tomato",
    price: "₹660",
    img: chalkboard,
    reviews: [
      { n: "Priya & Karthik", t: "We celebrated our anniversary here. Everything was perfect, especially the pizza!", r: 5 },
    ],
    recipe: {
      ingredients: ["Pizza base", "Tomato sauce", "Mozzarella", "Fresh basil"],
      steps: ["Make classic margherita pizza"],
    },
    aboutDish: {
      origin: "Italy (Naples)",
      funFact: "Named after Queen Margherita!",
    },
  },
];

// Helper function to find a dish by name from all dishes
export function findDishByName(name: string): Dish | undefined {
  // Check catalog items first
  for (const cat of catalog) {
    const found = cat.items.find((item) => item.name === name);
    if (found) return found;
  }
  // Then check signatures
  return signatures.find((item) => item.name === name);
}
