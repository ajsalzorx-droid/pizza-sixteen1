export type MenuItem = { name: string; category: string; image: string; description: string; options: { label: string; price: number | null }[] };
export const menuItems: MenuItem[] = [
  {
    "category": "Pizza",
    "name": "Pesto Pizza",
    "image": "/images/menu/pesto-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 26
      },
      {
        "label": "Large",
        "price": 32
      }
    ],
    "description": "Medium: Onion, Chicken, Capsicum. Large: Cheese, Onion."
  },
  {
    "category": "Pizza",
    "name": "Tikka Pizza",
    "image": "/images/menu/tikka-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 26
      },
      {
        "label": "Large",
        "price": 32
      }
    ],
    "description": "Medium: Chicken, Capsicum, Onion. Large: Tomato, Cheese."
  },
  {
    "category": "Pizza",
    "name": "Pepperoni Pizza",
    "image": "/images/menu/pepperoni-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 26
      },
      {
        "label": "Large",
        "price": 32
      }
    ],
    "description": "Medium: Pizza Sauce, Cheese. Large: Pepperoni."
  },
  {
    "category": "Pizza",
    "name": "BBQ Pizza",
    "image": "/images/menu/bbq-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 26
      },
      {
        "label": "Large",
        "price": 32
      }
    ],
    "description": "Medium: Tomato, Cheese. Large: BBQ Chicken, Onion."
  },
  {
    "category": "Pizza",
    "name": "Fajita Pizza",
    "image": "/images/menu/fajita-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 26
      },
      {
        "label": "Large",
        "price": 32
      }
    ],
    "description": "Medium: Cheese, Chicken, Black Olives. Large: Red & Green Capsicum, Onion."
  },
  {
    "category": "Pizza",
    "name": "Vegetable Pizza",
    "image": "/images/menu/vegetable-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 24
      },
      {
        "label": "Large",
        "price": 30
      }
    ],
    "description": "Medium: Sweet Corn, Capsicum, Jalapeño, Pineapple. Large: Tomato, Black Olives, Mushroom, Onion."
  },
  {
    "category": "Pizza",
    "name": "Shrimp Pizza",
    "image": "/images/menu/shrimp-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 30
      },
      {
        "label": "Large",
        "price": 38
      }
    ],
    "description": "Medium: Onion, Shrimp, Cheese. Large: Pizza Sauce, Green Parsley."
  },
  {
    "category": "Pizza",
    "name": "Margherita Pizza",
    "image": "/images/menu/margarita-pizza.jpg",
    "options": [
      {
        "label": "Medium",
        "price": 24
      },
      {
        "label": "Large",
        "price": 30
      }
    ],
    "description": "Cheese, Pizza Sauce."
  },
  {
    "category": "Tea & Coffee",
    "name": "Karak Tea",
    "image": "/images/menu/karak-tea.jpg",
    "options": [
      {
        "label": "AED 1",
        "price": 1
      },
      {
        "label": "AED 3",
        "price": 3
      }
    ],
    "description": ""
  },
  {
    "category": "Tea & Coffee",
    "name": "Black Tea",
    "image": "",
    "options": [
      {
        "label": "AED 1",
        "price": 1
      },
      {
        "label": "AED 3",
        "price": 3
      }
    ],
    "description": ""
  },
  {
    "category": "Tea & Coffee",
    "name": "Black Coffee",
    "image": "",
    "options": [
      {
        "label": "AED 2",
        "price": 2
      },
      {
        "label": "AED 5",
        "price": 5
      }
    ],
    "description": ""
  },
  {
    "category": "Tea & Coffee",
    "name": "Fresh Milk Tea",
    "image": "/images/menu/fresh-milk-tea.jpg",
    "options": [
      {
        "label": "AED 3",
        "price": 3
      },
      {
        "label": "AED 5",
        "price": 5
      }
    ],
    "description": ""
  },
  {
    "category": "Tea & Coffee",
    "name": "Fresh Milk Coffee",
    "image": "/images/menu/coffee.jpg",
    "options": [
      {
        "label": "AED 4",
        "price": 4
      },
      {
        "label": "AED 6",
        "price": 6
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Fries",
    "image": "/images/menu/fries.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 8
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Corn Ribs",
    "image": "/images/menu/corn-ribs.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 16
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Curly Fries",
    "image": "/images/menu/curly-fries.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 14
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Dynamite Shrimp",
    "image": "/images/menu/dynamite-shirmp.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 25
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Mozzarella Cheese Sticks",
    "image": "/images/menu/mozzarella-cheese-sticks.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Chicken Strips",
    "image": "/images/menu/chicken-strips.jpg",
    "options": [
      {
        "label": "Regular",
        "price": null
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Chicken Nuggets Combo",
    "image": "/images/menu/chicken-nuggets-combo.jpg",
    "options": [
      {
        "label": "Regular",
        "price": null
      }
    ],
    "description": ""
  },
  {
    "category": "Appetizers",
    "name": "Chicken Popcorn Combo",
    "image": "/images/menu/chicken-popcorn-combo.jpg",
    "options": [
      {
        "label": "Regular",
        "price": null
      }
    ],
    "description": ""
  },
  {
    "category": "Pasta",
    "name": "Alfredo Pasta",
    "image": "/images/menu/alfaredo-pasta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 24
      }
    ],
    "description": ""
  },
  {
    "category": "Pasta",
    "name": "Arrabbiata Pasta",
    "image": "/images/menu/arabiata-pasta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 22
      }
    ],
    "description": ""
  },
  {
    "category": "Pasta",
    "name": "Pink Sauce Pasta",
    "image": "/images/menu/pink-sauce-pasta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 24
      }
    ],
    "description": ""
  },
  {
    "category": "Pasta",
    "name": "Shrimp Pasta",
    "image": "/images/menu/shrimp-pasta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 28
      }
    ],
    "description": ""
  },
  {
    "category": "Pasta",
    "name": "Cheesy Pasta",
    "image": "/images/menu/cheesi-pasta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 22
      }
    ],
    "description": ""
  },
  {
    "category": "Pasta",
    "name": "Pesto Pasta",
    "image": "/images/menu/pesto-pasta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 24
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Zinger Porotta",
    "image": "/images/menu/zinker-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 10
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Nutella Porotta",
    "image": "/images/menu/nutella-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 4
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Hot Dog Porotta",
    "image": "/images/menu/hotdog-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 7
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Falafel Porotta",
    "image": "/images/menu/falafel-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 7
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Omelette Porotta",
    "image": "/images/menu/omlette-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 5
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Kebab Porotta",
    "image": "/images/menu/kebab-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 7
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Francisco Porotta",
    "image": "/images/menu/fransisco-porotta.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 8
      }
    ],
    "description": ""
  },
  {
    "category": "Porotta Sandwiches",
    "name": "Chicken Tikka Porotta",
    "image": "/images/menu/chicken-tikka.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 7
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Strawberry",
    "image": "/images/menu/strawberry.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Lemon / Lemon Mint",
    "image": "/images/menu/lemon-mint.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Pineapple",
    "image": "/images/menu/pineapple-juice.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Orange",
    "image": "/images/menu/orange.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Watermelon",
    "image": "/images/menu/watermelon.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Grape",
    "image": "/images/menu/grape.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Fresh Juices",
    "name": "Mango",
    "image": "/images/menu/mango.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 12
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Avocado Shake",
    "image": "/images/menu/avacado-shake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Chikoo Shake",
    "image": "/images/menu/chickoo-shake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Mango Shake",
    "image": "/images/menu/mango-shake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Strawberry Shake",
    "image": "/images/menu/strawberry-sake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Custard Apple Shake",
    "image": "/images/menu/custard-apple.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Black Jamun Shake",
    "image": "/images/menu/black-jamun-shake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Oreo Milkshake",
    "image": "/images/menu/oreo-milkshake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Lotus Milkshake",
    "image": "/images/menu/lotus-milkshake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  },
  {
    "category": "Milkshakes",
    "name": "Nutella Milkshake",
    "image": "/images/menu/nutella-milkshake.jpg",
    "options": [
      {
        "label": "Regular",
        "price": 15
      }
    ],
    "description": ""
  }
];
export const categories = [...new Set(menuItems.map(item => item.category))];
export const orderName = (item: MenuItem, option: MenuItem['options'][number]) => item.options.length > 1 ? item.name + ' — ' + option.label : item.name;
