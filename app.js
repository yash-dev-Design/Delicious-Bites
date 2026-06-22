// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Recipe Data
const recipes = [
    // Breakfast Recipes
    {
        id: 1,
        title: "Fluffy Pancakes with Berries",
        category: "breakfast",
        image: "https://i.pinimg.com/1200x/76/27/cc/7627cc077ea4ffd12e9cacafdc6d07ef.jpg",
        description: "Light and fluffy pancakes topped with fresh berries and maple syrup.",
        cookingTime: "20 mins",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tbsp sugar",
            "2 tsp baking powder",
            "1 tsp salt",
            "2 eggs",
            "1.5 cups milk",
            "4 tbsp melted butter",
            "1 cup mixed berries",
            "Maple syrup for serving"
        ],
        instructions: [
            "Mix dry ingredients in a bowl",
            "Whisk eggs, milk, and butter",
            "Combine wet and dry ingredients",
            "Cook pancakes on a griddle",
            "Serve with berries and syrup"
        ]
    },
    {
        id: 2,
        title: "Avocado Toast Deluxe",
        category: "breakfast",
        image: "https://i.pinimg.com/736x/1f/10/a7/1f10a70a6e6169d0c8abb8a66821e445.jpg",
        description: "Creamy avocado on sourdough toast with cherry tomatoes and feta cheese.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "4 slices sourdough bread",
            "2 ripe avocados",
            "1 cup cherry tomatoes",
            "1/2 cup feta cheese",
            "2 tbsp olive oil",
            "1 lemon",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Toast bread slices",
            "Mash avocados with lemon juice, salt, pepper",
            "Spread on toast and top with tomatoes and feta",
            "Drizzle with olive oil and serve"
        ]
    },
    {
        id: 3,
        title: "Blueberry Muffins",
        category: "breakfast",
        image: "https://i.pinimg.com/1200x/35/e5/3f/35e53fe68a4474b2e76d62da749dd73e.jpg",
        description: "Soft blueberry muffins with a crunchy streusel topping.",
        cookingTime: "30 mins",
        servings: "12",
        difficulty: "Easy",
        ingredients: [
            "2 cups flour",
            "1/2 cup sugar",
            "2 tsp baking powder",
            "1/2 cup butter",
            "2 eggs",
            "1/2 cup milk",
            "1.5 cups blueberries"
        ],
        instructions: [
            "Mix dry and wet ingredients separately",
            "Combine and fold in blueberries",
            "Bake at 375°F for 20 mins",
            "Cool and serve"
        ]
    },
    {
        id: 4,
        title: "Breakfast Burrito Bowl",
        category: "breakfast",
        image: "https://i.pinimg.com/1200x/0c/3e/c5/0c3ec5942db996fee2fc106ebe686422.jpg",
        description: "Scrambled eggs with black beans, rice, and salsa for a hearty breakfast bowl.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "4 eggs",
            "1 cup cooked rice",
            "1/2 cup black beans",
            "1/4 cup salsa",
            "1 avocado",
            "1/2 cup cheese",
            "Sour cream, cilantro, salt, pepper"
        ],
        instructions: [
            "Scramble eggs and season",
            "Heat beans and rice",
            "Assemble bowls with layers of rice, eggs, beans",
            "Add salsa, avocado, cheese, and toppings"
        ]
    },
    {
        id: 5,
        title: "French Toast Casserole",
        category: "breakfast",
        image: "https://i.pinimg.com/736x/36/d1/39/36d1398a0aa20a1f0607c642dec37183.jpg",
        description: "Overnight French toast casserole with a cinnamon-vanilla custard.",
        cookingTime: "45 mins",
        servings: "6",
        difficulty: "Medium",
        ingredients: [
            "1 loaf French bread",
            "6 eggs",
            "2 cups milk",
            "1/2 cup cream",
            "1/2 cup sugar",
            "1 tsp cinnamon",
            "2 tsp vanilla"
        ],
        instructions: [
            "Cut bread and arrange in dish",
            "Whisk eggs, milk, sugar, and spices",
            "Pour mixture over bread, refrigerate overnight",
            "Bake at 350°F for 40 mins and serve"
        ]
    },
    {
        id: 6,
        title: "Smoked Salmon Bagel",
        category: "breakfast",
        image: "https://i.pinimg.com/1200x/c9/c2/ad/c9c2ade8c0a7ede607f4bc2ab802de10.jpg",
        description: "Classic cream cheese and smoked salmon bagel with capers and red onions.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 bagels",
            "4 tbsp cream cheese",
            "100g smoked salmon",
            "Sliced red onions",
            "Capers, dill, lemon"
        ],
        instructions: [
            "Toast bagels lightly",
            "Spread cream cheese",
            "Top with salmon, onions, and capers",
            "Garnish with dill and lemon juice"
        ]
    },
    {
        id: 7,
        title: "Eggs Benedict with Hollandaise",
        category: "breakfast",
        image: "https://i.pinimg.com/736x/2c/b6/ff/2cb6ff56ccbf2a8b9bc33edc21e91ee9.jpg",
        description: "Poached eggs and Canadian bacon on English muffins with homemade Hollandaise sauce.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "2 English muffins",
            "4 eggs",
            "4 slices Canadian bacon",
            "1/2 cup butter",
            "2 egg yolks",
            "1 tbsp lemon juice",
            "Salt and paprika"
        ],
        instructions: [
            "Poach eggs and toast muffins",
            "Cook bacon until crisp",
            "Blend yolks, lemon juice, melted butter for Hollandaise",
            "Assemble muffins with bacon, eggs, and sauce"
        ]
    },
    {
        id: 8,
        title: "Spinach & Cheese Soufflé",
        category: "breakfast",
        image: "https://i.pinimg.com/1200x/ae/7a/51/ae7a5113f1eb4bff818e9813ce256985.jpg",
        description: "Light, airy baked soufflé with spinach and cheese.",
        cookingTime: "50 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "3 tbsp butter",
            "3 tbsp flour",
            "1 cup milk",
            "4 eggs, separated",
            "1 cup spinach",
            "1/2 cup grated cheese",
            "Salt, pepper, nutmeg"
        ],
        instructions: [
            "Make roux with butter and flour",
            "Add milk for a thick sauce",
            "Mix in spinach and cheese",
            "Fold in beaten egg whites",
            "Bake until puffed and golden"
        ]
    },
    {
        id: 9,
        title: "Croissant Breakfast Sandwich",
        category: "breakfast",
        image: "https://i.pinimg.com/1200x/5f/54/d3/5f54d37bb6f38d0f6e99098bf2a5ecd6.jpg",
        description: "Flaky croissant layered with eggs, ham, and melted cheese — baked to perfection.",
        cookingTime: "40 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "2 croissants",
            "2 eggs",
            "2 slices ham",
            "2 slices cheese",
            "Butter, salt, pepper"
        ],
        instructions: [
            "Slice croissants and toast lightly",
            "Scramble eggs and season",
            "Layer ham, cheese, and eggs inside croissants",
            "Bake 10 mins until cheese melts"
        ]
    },
    {
        id: 10,
        title: "Grilled Chicken Salad",
        category: "lunch",
        image: "https://i.pinimg.com/736x/0c/88/dc/0c88dca4cae64af3728c5bed1969a5cb.jpg",
        description: "Healthy grilled chicken breast over mixed greens with vinaigrette dressing.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 chicken breasts",
            "4 cups mixed greens",
            "1/2 cup cherry tomatoes",
            "1/4 cup cucumber slices",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Season and grill chicken until cooked",
            "Toss greens, tomatoes, and cucumber",
            "Slice chicken and add on top",
            "Drizzle with olive oil and lemon juice"
        ]
    },
    {
        id: 11,
        title: "Veggie Stir-Fry Noodles",
        category: "lunch",
        image: "https://i.pinimg.com/1200x/72/e2/32/72e23252f324ec71672de9a49106c08b.jpg",
        description: "Quick wok-fried noodles loaded with colorful vegetables and soy sauce.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g noodles",
            "1 cup bell peppers",
            "1/2 cup carrots",
            "1/2 cup broccoli",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp garlic"
        ],
        instructions: [
            "Boil noodles and drain",
            "Stir-fry garlic and veggies in oil",
            "Add noodles and soy sauce",
            "Toss and cook for 2-3 mins"
        ]
    },
    {
        id: 12,
        title: "Cheesy Quesadilla",
        category: "lunch",
        image: "https://i.pinimg.com/1200x/e8/5f/b7/e85fb77b269ebec4a1c24f8ea7c3af6a.jpg",
        description: "Crispy tortilla stuffed with melted cheese and veggies, served with salsa.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 flour tortillas",
            "1 cup shredded cheese",
            "1/2 cup bell peppers",
            "1/4 cup onions",
            "Butter for greasing",
            "Salsa for serving"
        ],
        instructions: [
            "Heat butter on skillet",
            "Layer cheese and veggies between tortillas",
            "Cook both sides until golden",
            "Cut and serve with salsa"
        ]
    },
    {
        id: 13,
        title: "Creamy Tuscan Chicken Pasta",
        category: "lunch",
        image: "https://i.pinimg.com/736x/0f/c9/e6/0fc9e6f607e26e4016d3c16a647257fc.jpg",
        description: "Tender chicken in creamy garlic sauce with spinach and sun-dried tomatoes.",
        cookingTime: "30 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "200g pasta",
            "2 chicken breasts",
            "1 cup spinach",
            "1/4 cup sun-dried tomatoes",
            "1 cup cream",
            "2 cloves garlic",
            "Salt, pepper, olive oil"
        ],
        instructions: [
            "Cook pasta and set aside",
            "Sear chicken until golden, remove",
            "Sauté garlic, add cream and spinach",
            "Add tomatoes and chicken, toss with pasta"
        ]
    },
    {
        id: 14,
        title: "Teriyaki Rice Bowl",
        category: "lunch",
        image: "https://i.pinimg.com/1200x/ea/86/2c/ea862c5a5e11c04f39da5e9ee2327cb3.jpg",
        description: "Sticky rice bowl topped with teriyaki chicken and sautéed veggies.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 cups cooked rice",
            "2 chicken thighs",
            "1/4 cup teriyaki sauce",
            "1/2 cup broccoli",
            "1/2 cup carrots",
            "1 tbsp sesame seeds"
        ],
        instructions: [
            "Cook chicken in teriyaki sauce",
            "Steam or sauté veggies",
            "Serve rice topped with chicken and veggies",
            "Garnish with sesame seeds"
        ]
    },
    {
        id: 15,
        title: "Mediterranean Grain Bowl",
        category: "lunch",
        image: "https://i.pinimg.com/1200x/fd/6a/fb/fd6afb19d67684f3eaa2f734edab57c4.jpg",
        description: "Wholesome bowl with quinoa, roasted veggies, and feta cheese.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 cup quinoa",
            "1 cup roasted vegetables",
            "1/2 cup chickpeas",
            "1/4 cup feta cheese",
            "2 tbsp olive oil",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Cook quinoa and fluff with fork",
            "Roast vegetables until tender",
            "Combine quinoa, veggies, and chickpeas",
            "Top with feta and drizzle olive oil-lemon mix"
        ]
    },
    {
        id: 16,
        title: "Beef Wellington",
        category: "lunch",
        image: "https://i.pinimg.com/736x/38/6d/6a/386d6ab50c8212d8d1e23f9fe382bf82.jpg",
        description: "Classic tender beef fillet wrapped in puff pastry with mushroom duxelles.",
        cookingTime: "1 hr 15 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "500g beef tenderloin",
            "1 sheet puff pastry",
            "200g mushrooms",
            "2 tbsp Dijon mustard",
            "1 egg (for brushing)",
            "Olive oil, salt, pepper"
        ],
        instructions: [
            "Sear beef until browned, cool and coat with mustard",
            "Cook mushrooms into a dry paste",
            "Wrap beef and duxelles in pastry",
            "Brush with egg and bake at 400°F for 35 mins"
        ]
    },
    {
        id: 17,
        title: "Seafood Paella",
        category: "lunch",
        image: "https://i.pinimg.com/736x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
        description: "Spanish rice dish with shrimp, mussels, and saffron broth.",
        cookingTime: "1 hr",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 cup Arborio rice",
            "200g shrimp",
            "200g mussels",
            "1 onion",
            "1 tomato",
            "1/2 tsp saffron",
            "2 cups chicken stock"
        ],
        instructions: [
            "Sauté onion and tomato",
            "Add rice, saffron, and stock",
            "Simmer and add seafood halfway through",
            "Cook until liquid absorbed and rice tender"
        ]
    },
    {
        id: 18,
        title: "Stuffed Bell Peppers",
        category: "lunch",
        image: "https://i.pinimg.com/1200x/4d/6d/26/4d6d26f3857e5d5733877d643772664d.jpg",
        description: "Oven-baked bell peppers filled with rice, ground meat, and herbs.",
        cookingTime: "50 mins",
        servings: "3",
        difficulty: "Hard",
        ingredients: [
            "3 bell peppers",
            "1/2 cup rice",
            "200g ground beef",
            "1 onion",
            "2 cloves garlic",
            "1 cup tomato sauce",
            "Cheese for topping"
        ],
        instructions: [
            "Cook rice and beef with onions and garlic",
            "Mix with tomato sauce",
            "Stuff peppers and top with cheese",
            "Bake at 375°F for 30–35 mins"
        ]
    },
    {
        id: 19,
        title: "Garlic Butter Shrimp",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/a1/b6/f9/a1b6f9a032300d505762304586b25748.jpg",
        description: "Quick garlic butter shrimp served with steamed vegetables or rice.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g shrimp, peeled",
            "2 tbsp butter",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Melt butter and sauté garlic",
            "Add shrimp and cook until pink",
            "Season with salt, pepper, and lemon juice",
            "Serve immediately"
        ]
    },
    {
        id: 20,
        title: "One-Pot Veggie Pasta",
        category: "dinner",
        image: "https://i.pinimg.com/736x/cd/68/9a/cd689af789ac9fc8ab4e739e07221d26.jpg",
        description: "Simple pasta with mixed vegetables in a light tomato sauce.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g pasta",
            "1 cup zucchini and bell peppers",
            "1/2 cup tomato sauce",
            "1 tsp olive oil",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Cook pasta according to package",
            "Sauté veggies in olive oil",
            "Add tomato sauce and pasta, toss well",
            "Season and serve"
        ]
    },
    {
        id: 21,
        title: "Baked Lemon Chicken",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/f1/d7/f7/f1d7f78eae69c4d661e545b9cabf3c9a.jpg",
        description: "Tender chicken breasts baked with lemon, garlic, and herbs.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 chicken breasts",
            "1 lemon, sliced",
            "2 cloves garlic",
            "1 tbsp olive oil",
            "Salt, pepper, rosemary"
        ],
        instructions: [
            "Preheat oven to 400°F",
            "Place chicken in baking dish, season and top with lemon",
            "Bake 25-30 mins until cooked",
            "Serve hot"
        ]
    },
    {
        id: 22,
        title: "Beef Stir-Fry with Veggies",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/ad/0b/29/ad0b29ad5c36283d657e14d22762424e.jpg",
        description: "Tender strips of beef stir-fried with colorful vegetables and soy sauce.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g beef strips",
            "1 cup broccoli",
            "1/2 cup bell peppers",
            "2 tbsp soy sauce",
            "1 tsp sesame oil",
            "2 cloves garlic"
        ],
        instructions: [
            "Sauté garlic and beef until browned",
            "Add vegetables and cook until tender",
            "Add soy sauce and sesame oil, toss well",
            "Serve hot with rice or noodles"
        ]
    },
    {
        id: 23,
        title: "Chicken Tikka Masala",
        category: "dinner",
        image: "https://i.pinimg.com/736x/1d/dd/95/1ddd95f84379d5a5fb861868860ee5ef.jpg",
        description: "Marinated chicken in a rich tomato-based curry sauce, served with rice.",
        cookingTime: "40 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "300g chicken breast",
            "1 cup yogurt",
            "1/2 cup tomato puree",
            "1 onion",
            "2 cloves garlic",
            "1 tsp ginger, garam masala, chili powder"
        ],
        instructions: [
            "Marinate chicken in yogurt and spices",
            "Cook onions, garlic, ginger until soft",
            "Add tomato puree and simmer",
            "Add chicken and cook until done, serve with rice"
        ]
    },
    {
        id: 24,
        title: "Stuffed Portobello Mushrooms",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/7e/47/ca/7e47ca09b0bcb7bbda1ad690ad57bdd6.jpg",
        description: "Portobello mushrooms stuffed with cheese, herbs, and breadcrumbs.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 large portobello mushrooms",
            "1/2 cup breadcrumbs",
            "1/4 cup grated cheese",
            "1 tbsp parsley",
            "1 tsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat oven to 375°F",
            "Mix breadcrumbs, cheese, parsley, and seasoning",
            "Stuff mushrooms and drizzle olive oil",
            "Bake 20-25 mins until golden"
        ]
    },
    {
        id: 25,
        title: "Lamb Shank with Red Wine Sauce",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/75/fa/4a/75fa4a198444316146c5b2ef2228408c.jpg",
        description: "Slow-cooked lamb shanks braised in red wine and herbs for a rich flavor.",
        cookingTime: "2 hrs",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "2 lamb shanks",
            "1 cup red wine",
            "2 carrots, chopped",
            "1 onion, chopped",
            "2 cloves garlic",
            "Rosemary, thyme, salt, pepper"
        ],
        instructions: [
            "Sear lamb shanks until browned",
            "Sauté vegetables and add wine",
            "Return lamb to pot, cover and simmer 1.5-2 hrs",
            "Serve with sauce and vegetables"
        ]
    },
    {
        id: 26,
        title: "Coq au Vin",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/31/d0/3c/31d03c6c85ca6b0105ed4126a429f6c4.jpg",
        description: "Classic French chicken braised slowly in red wine with mushrooms and onions.",
        cookingTime: "1 hr 45 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "4 chicken thighs",
            "1 cup red wine",
            "1/2 cup mushrooms",
            "1 onion",
            "2 cloves garlic",
            "Thyme, bay leaf, salt, pepper"
        ],
        instructions: [
            "Brown chicken pieces in oil",
            "Sauté onions and mushrooms",
            "Add wine, herbs, and chicken, simmer until tender",
            "Serve hot with sauce"
        ]
    },
    {
        id: 27,
        title: "Seafood Risotto",
        category: "dinner",
        image: "https://i.pinimg.com/1200x/62/2b/ac/622bac59137f2509b3169d693742f785.jpg",
        description: "Creamy Italian risotto cooked slowly with shrimp, scallops, and saffron.",
        cookingTime: "1 hr",
        servings: "3",
        difficulty: "Hard",
        ingredients: [
            "1 cup Arborio rice",
            "200g shrimp",
            "100g scallops",
            "1 onion",
            "2 cloves garlic",
            "1/2 tsp saffron, 3 cups chicken stock",
            "Parmesan cheese, butter, olive oil"
        ],
        instructions: [
            "Sauté onion and garlic in olive oil",
            "Add rice and cook until translucent",
            "Gradually add stock, stirring constantly",
            "Add seafood and saffron halfway through",
            "Finish with butter and Parmesan, serve creamy"
        ]
    },
    {
        id: 28,
        title: "Bruschetta with Tomatoes",
        category: "appetizer",
        image: "https://i.pinimg.com/1200x/da/bc/8e/dabc8e685b317f1ed82f5710a4f208cf.jpg",
        description: "Toasted baguette slices topped with fresh tomato, basil, and garlic.",
        cookingTime: "10 mins",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "1 baguette, sliced",
            "2 cups diced tomatoes",
            "2 cloves garlic",
            "2 tbsp olive oil",
            "Fresh basil, salt, pepper"
        ],
        instructions: [
            "Toast baguette slices",
            "Mix tomatoes, garlic, basil, olive oil, salt, and pepper",
            "Top each slice with tomato mixture",
            "Serve immediately"
        ]
    },
    {
        id: 29,
        title: "Stuffed Mini Bell Peppers",
        category: "appetizer",
        image: "https://i.pinimg.com/736x/8f/c5/db/8fc5dbfd9ec31fa1b4ee33e7fd3ffdfd.jpg",
        description: "Sweet mini bell peppers stuffed with cream cheese and herbs.",
        cookingTime: "15 mins",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "12 mini bell peppers",
            "1/2 cup cream cheese",
            "1 tbsp chives",
            "Salt and pepper"
        ],
        instructions: [
            "Cut tops off peppers and remove seeds",
            "Mix cream cheese with chives, salt, and pepper",
            "Fill peppers with mixture",
            "Serve chilled or at room temperature"
        ]
    },
    {
        id: 30,
        title: "Garlic Parmesan Wings",
        category: "appetizer",
        image: "https://i.pinimg.com/1200x/53/27/48/532748526b4fec426e5325486424ef2c.jpg",
        description: "Oven-baked chicken wings tossed in garlic butter and Parmesan.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "8 chicken wings",
            "2 tbsp butter",
            "2 cloves garlic",
            "2 tbsp grated Parmesan",
            "Salt, pepper"
        ],
        instructions: [
            "Bake wings until crispy",
            "Melt butter and sauté garlic",
            "Toss wings with garlic butter and Parmesan",
            "Serve hot"
        ]
    },
    {
        id: 31,
        title: "Spinach Artichoke Dip",
        category: "appetizer",
        image: "https://i.pinimg.com/736x/c1/c8/ed/c1c8edf5a041a553f5b809c99071d911.jpg",
        description: "Creamy spinach and artichoke dip served with crackers or bread.",
        cookingTime: "30 mins",
        servings: "4",
        difficulty: "Medium",
        ingredients: [
            "1 cup chopped spinach",
            "1 cup artichoke hearts, chopped",
            "1/2 cup cream cheese",
            "1/2 cup sour cream",
            "1/4 cup Parmesan",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Preheat oven to 350°F",
            "Mix all ingredients in a bowl",
            "Bake in a small dish for 20 mins until bubbly",
            "Serve warm with bread or crackers"
        ]
    },
    {
        id: 32,
        title: "Shrimp Cocktail",
        category: "appetizer",
        image: "https://i.pinimg.com/736x/35/0a/72/350a725683834823cdc2f8db9e242a89.jpg",
        description: "Chilled shrimp served with zesty cocktail sauce.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "12 large shrimp",
            "1/2 cup ketchup",
            "1 tbsp horseradish",
            "1 tsp lemon juice",
            "Salt and pepper"
        ],
        instructions: [
            "Boil shrimp until pink and chill",
            "Mix ketchup, horseradish, lemon juice, salt, and pepper",
            "Serve shrimp with cocktail sauce on the side"
        ]
    },
    {
        id: 33,
        title: "Caprese Skewers",
        category: "appetizer",
        image: "https://i.pinimg.com/1200x/c5/ad/fa/c5adfa5bd5d3b1c0b24d368db15dc7c0.jpg",
        description: "Mini skewers with cherry tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
        cookingTime: "15 mins",
        servings: "4",
        difficulty: "Medium",
        ingredients: [
            "12 cherry tomatoes",
            "12 mozzarella balls",
            "12 fresh basil leaves",
            "2 tbsp balsamic glaze",
            "Salt and pepper"
        ],
        instructions: [
            "Assemble tomatoes, mozzarella, and basil on skewers",
            "Drizzle with balsamic glaze",
            "Season with salt and pepper",
            "Serve chilled or at room temperature"
        ]
    },
    {
        id: 34,
        title: "Crab Cakes with Aioli",
        category: "appetizer",
        image: "https://i.pinimg.com/736x/67/c5/7d/67c57d60ebd980e143a342137d9bf7f7.jpg",
        description: "Golden brown crab cakes served with homemade garlic aioli.",
        cookingTime: "45 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "250g crab meat",
            "1/2 cup breadcrumbs",
            "1 egg",
            "2 tbsp mayonnaise",
            "1 tsp mustard",
            "1 clove garlic",
            "Salt, pepper, lemon"
        ],
        instructions: [
            "Mix crab meat with egg, mayo, mustard, breadcrumbs, and seasonings",
            "Shape into cakes",
            "Pan-fry until golden brown",
            "Serve with garlic aioli and lemon wedges"
        ]
    },
    {
        id: 35,
        title: "Stuffed Mushrooms with Sausage",
        category: "appetizer",
        image: "https://i.pinimg.com/1200x/4f/d7/d3/4fd7d3db4bf643bc962a767f867c2eb5.jpg",
        description: "Large mushrooms stuffed with a savory sausage and cheese mixture.",
        cookingTime: "50 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "8 large mushrooms",
            "150g sausage, cooked and crumbled",
            "1/4 cup breadcrumbs",
            "1/4 cup Parmesan cheese",
            "1 egg",
            "Parsley, salt, pepper"
        ],
        instructions: [
            "Remove mushroom stems and chop",
            "Mix chopped stems with sausage, breadcrumbs, cheese, and egg",
            "Stuff mushrooms and bake at 375°F for 25-30 mins",
            "Garnish with parsley and serve"
        ]
    },
    {
        id: 36,
        title: "Mini Beef Wellingtons",
        category: "appetizer",
        image: "https://i.pinimg.com/736x/b5/89/2c/b5892cbb9538d252962598941abca349.jpg",
        description: "Individual puff pastry parcels with tender beef and mushroom duxelles.",
        cookingTime: "1 hr 10 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "250g beef tenderloin",
            "1 sheet puff pastry",
            "150g mushrooms",
            "1 egg (for brushing)",
            "Olive oil, salt, pepper"
        ],
        instructions: [
            "Sear beef and cool",
            "Cook mushrooms into duxelles",
            "Wrap beef in mushroom mixture with pastry",
            "Brush with egg and bake 25-30 mins until golden"
        ]
    },
    {
        id: 37,
        title: "Grilled Lemon Herb Chicken",
        category: "main course",
        image: "https://i.pinimg.com/1200x/71/48/f7/7148f7516531d213ac0766f2451b38fa.jpg",
        description: "Juicy grilled chicken breasts marinated in lemon and herbs.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 chicken breasts",
            "2 tbsp olive oil",
            "1 lemon, juice and zest",
            "1 tsp thyme",
            "Salt and pepper"
        ],
        instructions: [
            "Marinate chicken with olive oil, lemon, thyme, salt, and pepper for 10 mins",
            "Grill on medium heat until cooked through",
            "Serve hot with veggies or salad"
        ]
    },
    {
        id: 38,
        title: "Vegetable Stir-Fry",
        category: "main course",
        image: "https://i.pinimg.com/736x/a9/5a/47/a95a479b8c941a04fbd3bfc34815eb7a.jpg",
        description: "Quick stir-fried mixed vegetables with soy sauce and garlic.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup broccoli",
            "1 cup bell peppers",
            "1/2 cup carrots",
            "2 cloves garlic",
            "1 tbsp soy sauce",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Heat oil in a pan and sauté garlic",
            "Add vegetables and stir-fry 5-7 mins",
            "Add soy sauce, toss well",
            "Serve hot with rice or noodles"
        ]
    },
    {
        id: 39,
        title: "Pasta Primavera",
        category: "main course",
        image: "https://i.pinimg.com/736x/b5/26/b8/b526b885ee03998d3dfa2806e6cad393.jpg",
        description: "Pasta tossed with fresh seasonal vegetables in a light olive oil sauce.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g pasta",
            "1 cup zucchini",
            "1 cup cherry tomatoes",
            "1/2 cup bell peppers",
            "2 tbsp olive oil",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Cook pasta according to package instructions",
            "Sauté vegetables in olive oil until tender",
            "Toss pasta with vegetables and seasoning",
            "Serve hot with grated Parmesan if desired"
        ]
    },
    {
        id: 40,
        title: "Chicken Alfredo",
        category: "main course",
        image: "https://i.pinimg.com/736x/67/1c/d3/671cd30d7445eccad0c6ebe10ef2239a.jpg",
        description: "Creamy Alfredo pasta with tender chicken pieces.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g fettuccine pasta",
            "2 chicken breasts",
            "1 cup heavy cream",
            "1/2 cup Parmesan cheese",
            "2 cloves garlic",
            "2 tbsp butter",
            "Salt and pepper"
        ],
        instructions: [
            "Cook pasta and set aside",
            "Sauté chicken until cooked and slice",
            "In same pan, cook garlic in butter, add cream and cheese",
            "Toss pasta and chicken in sauce, serve hot"
        ]
    },
    {
        id: 41,
        title: "Beef Stroganoff",
        category: "main course",
        image: "https://i.pinimg.com/736x/21/11/d9/2111d96a7d4d33c850bb882183f732e1.jpg",
        description: "Tender beef in a creamy mushroom sauce served over noodles.",
        cookingTime: "40 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "300g beef strips",
            "1 cup mushrooms",
            "1 onion",
            "1 cup sour cream",
            "2 cloves garlic",
            "2 tbsp butter",
            "Salt and pepper"
        ],
        instructions: [
            "Sauté onions, garlic, and mushrooms in butter",
            "Add beef and cook until browned",
            "Stir in sour cream and simmer 5-7 mins",
            "Serve over cooked noodles"
        ]
    },
    {
        id: 42,
        title: "Stuffed Bell Peppers",
        category: "main course",
        image: "https://i.pinimg.com/736x/3a/51/9f/3a519f013099d20b38b441556ce12ab0.jpg",
        description: "Bell peppers stuffed with rice, veggies, and ground meat, baked to perfection.",
        cookingTime: "45 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "3 bell peppers",
            "1/2 cup rice",
            "150g ground beef",
            "1 onion",
            "1 cup tomato sauce",
            "Cheese for topping",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Cook rice and mix with cooked beef and onions",
            "Stuff peppers with mixture and top with tomato sauce and cheese",
            "Bake at 375°F for 25-30 mins",
            "Serve hot"
        ]
    },
    {
        id: 43,
        title: "Lamb Rogan Josh",
        category: "main course",
        image: "https://i.pinimg.com/736x/8c/0d/14/8c0d149a64a4f29c3032292cdf136785.jpg",
        description: "Traditional Indian lamb curry slow-cooked with aromatic spices.",
        cookingTime: "1 hr 30 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "500g lamb chunks",
            "2 onions",
            "3 cloves garlic",
            "1 tbsp ginger paste",
            "1 cup yogurt",
            "2 tsp garam masala",
            "1 tsp chili powder",
            "1 tsp turmeric",
            "2 tbsp oil, salt"
        ],
        instructions: [
            "Sauté onions, garlic, and ginger in oil until golden",
            "Add spices and lamb, cook until browned",
            "Add yogurt and simmer 1-1.5 hrs until tender",
            "Serve with rice or naan"
        ]
    },
    {
        id: 44,
        title: "Duck à l'Orange",
        category: "main course",
        image: "https://i.pinimg.com/736x/31/f8/79/31f8790deccde7a805be243aaacfbf50.jpg",
        description: "Classic French duck dish with a sweet and tangy orange sauce.",
        cookingTime: "2 hrs",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "2 duck breasts",
            "1 cup orange juice",
            "2 tbsp sugar",
            "1 tbsp vinegar",
            "1 tbsp butter",
            "Salt and pepper"
        ],
        instructions: [
            "Score duck skin and sear until golden",
            "Prepare sauce by reducing orange juice with sugar and vinegar",
            "Finish sauce with butter",
            "Serve duck sliced with orange sauce on top"
        ]
    },
    {
        id: 45,
        title: "Seafood Paella",
        category: "main course",
        image: "https://i.pinimg.com/1200x/7e/c6/a0/7ec6a0d329675b1cf4702e55b2f99054.jpg",
        description: "Spanish rice dish with shrimp, mussels, and saffron-infused broth.",
        cookingTime: "1 hr 15 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 cup Arborio rice",
            "200g shrimp",
            "200g mussels",
            "1 onion",
            "1 bell pepper",
            "1/2 tsp saffron",
            "2 cups chicken or seafood stock",
            "Salt, pepper, olive oil"
        ],
        instructions: [
            "Sauté onions and bell pepper in olive oil",
            "Add rice and saffron, cook for 2-3 mins",
            "Gradually add stock while stirring",
            "Add seafood halfway through cooking",
            "Simmer until rice is tender and seafood cooked"
        ]
    },
    {
        id: 46,
        title: "Chocolate Mug Cake",
        category: "dessert",
        image: "https://i.pinimg.com/736x/f5/c1/35/f5c135e79cd9bf6d364e6d062d65eb32.jpg",
        description: "Quick single-serving chocolate cake made in the microwave.",
        cookingTime: "5 mins",
        servings: "1",
        difficulty: "Easy",
        ingredients: [
            "4 tbsp flour",
            "2 tbsp cocoa powder",
            "2 tbsp sugar",
            "3 tbsp milk",
            "1 tbsp oil",
            "1/4 tsp baking powder"
        ],
        instructions: [
            "Mix all ingredients in a mug",
            "Microwave for 90 seconds",
            "Let cool slightly and enjoy"
        ]
    },
    {
        id: 47,
        title: "Fruit Yogurt Parfait",
        category: "dessert",
        image: "https://i.pinimg.com/736x/73/8a/a1/738aa1708cea273232fac36a217c2d2e.jpg",
        description: "Layers of yogurt, granola, and fresh fruits in a glass.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup yogurt",
            "1/2 cup granola",
            "1 cup mixed berries",
            "1 tsp honey"
        ],
        instructions: [
            "Layer yogurt, granola, and fruits in glasses",
            "Drizzle with honey",
            "Serve immediately"
        ]
    },
    {
        id: 48,
        title: "No-Bake Peanut Butter Bars",
        category: "dessert",
        image: "https://i.pinimg.com/1200x/e2/0e/ac/e20eacd81f1ed9cd654732adc1157e63.jpg",
        description: "Simple peanut butter and chocolate layered bars without baking.",
        cookingTime: "15 mins",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "1 cup peanut butter",
            "1/2 cup honey",
            "1 cup rolled oats",
            "1/2 cup chocolate chips"
        ],
        instructions: [
            "Mix peanut butter, honey, and oats",
            "Press into a pan",
            "Top with melted chocolate and refrigerate 10 mins",
            "Cut into bars and serve"
        ]
    },
    {
        id: 49,
        title: "Tiramisu",
        category: "dessert",
        image: "https://i.pinimg.com/736x/0e/c2/89/0ec289492947872976c5c52215280faa.jpg",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        cookingTime: "35 mins (+chill 2 hrs)",
        servings: "4",
        difficulty: "Medium",
        ingredients: [
            "12 ladyfingers",
            "1 cup coffee, cooled",
            "1 cup mascarpone",
            "1/2 cup sugar",
            "1/2 cup heavy cream",
            "Cocoa powder for dusting"
        ],
        instructions: [
            "Whip mascarpone with sugar and cream",
            "Dip ladyfingers in coffee and layer in dish",
            "Spread mascarpone mixture over layers",
            "Repeat layers and dust with cocoa powder",
            "Chill 2 hrs before serving"
        ]
    },
    {
        id: 50,
        title: "Chocolate Fondue",
        category: "dessert",
        image: "https://i.pinimg.com/736x/ca/3b/ce/ca3bce0aa627895dd11f2f58d4fdfbc1.jpg",
        description: "Melted chocolate served with fruits, marshmallows, or biscuits for dipping.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "100g dark chocolate",
            "50ml heavy cream",
            "Assorted fruits, marshmallows, biscuits"
        ],
        instructions: [
            "Heat cream in a small pan",
            "Add chocolate and stir until melted",
            "Serve with fruits and marshmallows for dipping"
        ]
    },
    {
        id: 51,
        title: "Baked Apple with Cinnamon",
        category: "dessert",
        image: "https://i.pinimg.com/1200x/12/77/99/127799a8a851fd5b20a3cb79f15813f9.jpg",
        description: "Soft baked apples filled with cinnamon, sugar, and nuts.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 apples",
            "2 tsp cinnamon",
            "2 tsp brown sugar",
            "2 tbsp chopped nuts",
            "1 tsp butter"
        ],
        instructions: [
            "Core apples and place in baking dish",
            "Mix cinnamon, sugar, and nuts, stuff into apples",
            "Top with small butter pieces and bake at 350°F for 20-25 mins",
            "Serve warm"
        ]
    },
    {
        id: 52,
        title: "Crème Brûlée",
        category: "dessert",
        image: "https://i.pinimg.com/1200x/21/a8/11/21a8113db1a0f3f9cb45f766cacaa6df.jpg",
        description: "Rich custard topped with a caramelized sugar crust.",
        cookingTime: "1 hr",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "2 cups heavy cream",
            "4 egg yolks",
            "1/2 cup sugar",
            "1 tsp vanilla extract",
            "Extra sugar for topping"
        ],
        instructions: [
            "Heat cream with vanilla until hot",
            "Whisk egg yolks with sugar, slowly add cream",
            "Pour into ramekins and bake in water bath at 325°F for 35-40 mins",
            "Chill 2 hrs, sprinkle sugar on top and caramelize with torch before serving"
        ]
    },
    {
        id: 53,
        title: "Chocolate Soufflé",
        category: "dessert",
        image: "https://i.pinimg.com/1200x/f6/d1/58/f6d158eb208d61fc964b5e0cca61f8c2.jpg",
        description: "Light and airy chocolate dessert baked to perfection.",
        cookingTime: "45 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "50g dark chocolate",
            "2 eggs, separated",
            "2 tbsp sugar",
            "1 tsp butter",
            "Pinch of salt"
        ],
        instructions: [
            "Preheat oven to 375°F and butter ramekins",
            "Melt chocolate and let cool slightly",
            "Whip egg whites with sugar until stiff peaks",
            "Mix chocolate with egg yolks, fold in egg whites gently",
            "Bake 15-18 mins and serve immediately"
        ]
    },
    {
        id: 54,
        title: "Macarons",
        category: "dessert",
        image: "https://i.pinimg.com/736x/6b/97/89/6b9789651e3f033b3b9f7a1841911308.jpg",
        description: "Delicate French almond meringue cookies filled with buttercream.",
        cookingTime: "1 hr 30 mins",
        servings: "12",
        difficulty: "Hard",
        ingredients: [
            "1 cup almond flour",
            "1 cup powdered sugar",
            "3 egg whites",
            "1/4 cup sugar",
            "Food coloring",
            "Buttercream for filling"
        ],
        instructions: [
            "Sift almond flour and powdered sugar",
            "Whip egg whites with sugar to stiff peaks, fold in dry ingredients gently",
            "Pipe onto baking sheet and rest 30 mins",
            "Bake at 300°F for 15-18 mins",
            "Fill cooled shells with buttercream"
        ]
    },
    {
        id: 55,
        title: "Lemon Iced Tea",
        category: "beverages",
        image: "https://i.pinimg.com/1200x/62/6d/ab/626dabf07b0413ee6aec55c050c9dfe0.jpg",
        description: "Refreshing iced tea with lemon and a hint of sweetness.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 cups brewed tea, cooled",
            "1 lemon, sliced",
            "2 tsp sugar",
            "Ice cubes",
            "Mint leaves for garnish"
        ],
        instructions: [
            "Mix tea with sugar until dissolved",
            "Add ice cubes and lemon slices",
            "Garnish with mint leaves and serve chilled"
        ]
    },
    {
        id: 56,
        title: "Strawberry Banana Smoothie",
        category: "beverages",
        image: "https://i.pinimg.com/1200x/49/a0/1b/49a01b0191d36537f8cd59f93ecb41e1.jpg",
        description: "Creamy smoothie with strawberries, banana, and yogurt.",
        cookingTime: "5 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 banana",
            "1 cup strawberries",
            "1/2 cup yogurt",
            "1/2 cup milk",
            "Honey to taste"
        ],
        instructions: [
            "Blend all ingredients until smooth",
            "Pour into glasses and serve immediately"
        ]
    },
    {
        id: 57,
        title: "Mint Lemonade",
        category: "beverages",
        image: "https://i.pinimg.com/1200x/87/ca/c6/87cac629da130c1b4659ed03dbee99f1.jpg",
        description: "Refreshing lemonade with fresh mint leaves.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup lemon juice",
            "2 cups water",
            "2 tbsp sugar",
            "10 mint leaves",
            "Ice cubes"
        ],
        instructions: [
            "Muddle mint leaves with sugar",
            "Mix in lemon juice and water",
            "Add ice cubes and serve chilled"
        ]
    },
    {
        id: 58,
        title: "Mango Lassi",
        category: "beverages",
        image: "https://i.pinimg.com/736x/2c/ee/f1/2ceef1d882e8c4c51a162cc3ae6cd7aa.jpg",
        description: "Creamy Indian mango yogurt drink.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 cup mango pulp",
            "1/2 cup yogurt",
            "1/4 cup milk",
            "1 tbsp sugar",
            "A pinch of cardamom"
        ],
        instructions: [
            "Blend mango pulp, yogurt, milk, sugar, and cardamom until smooth",
            "Serve chilled"
        ]
    },
    {
        id: 59,
        title: "Iced Mocha",
        category: "beverages",
        image: "https://i.pinimg.com/736x/28/51/4a/28514a2c25d20ae0fa54d5ae8714f4f2.jpg",
        description: "Chilled coffee with chocolate and milk.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 cup brewed coffee, cooled",
            "1/2 cup milk",
            "2 tbsp chocolate syrup",
            "Ice cubes",
            "Whipped cream for topping"
        ],
        instructions: [
            "Mix coffee, milk, and chocolate syrup",
            "Add ice cubes and pour into glasses",
            "Top with whipped cream"
        ]
    },
    {
        id: 60,
        title: "Berry Smoothie Bowl",
        category: "beverages",
        image: "https://i.pinimg.com/736x/7b/13/4f/7b134feb469bbc87f5399749e4ce4166.jpg",
        description: "Thick smoothie served in a bowl with fruits and seeds.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1/2 cup mixed berries",
            "1 banana",
            "1/2 cup yogurt",
            "1/4 cup granola",
            "Chia seeds for topping"
        ],
        instructions: [
            "Blend berries, banana, and yogurt until smooth",
            "Pour into bowls and top with granola and chia seeds"
        ]
    },
    {
        id: 61,
        title: "Espresso Martini",
        category: "beverages",
        image: "https://i.pinimg.com/736x/4f/89/f7/4f89f7bc95dbe5c959d0d43a422f42f0.jpg",
        description: "Classic coffee-flavored cocktail with vodka and espresso.",
        cookingTime: "15 mins",
        servings: "1",
        difficulty: "Hard",
        ingredients: [
            "50ml vodka",
            "25ml coffee liqueur",
            "25ml freshly brewed espresso",
            "Ice cubes",
            "Coffee beans for garnish"
        ],
        instructions: [
            "Add vodka, coffee liqueur, espresso, and ice to shaker",
            "Shake well and strain into martini glass",
            "Garnish with coffee beans"
        ]
    },
    {
        id: 62,
        title: "Matcha Latte",
        category: "beverages",
        image: "https://i.pinimg.com/736x/f3/35/3d/f3353da22218a4de90629ea801d6d0ff.jpg",
        description: "Creamy Japanese green tea latte with frothy milk.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "2 tsp matcha powder",
            "2 tbsp hot water",
            "1 cup milk",
            "1 tsp honey or sugar"
        ],
        instructions: [
            "Whisk matcha powder with hot water until smooth",
            "Heat milk and froth",
            "Pour milk into matcha mixture and sweeten to taste"
        ]
    },
    {
        id: 63,
        title: "Classic Sangria",
        category: "beverages",
        image: "https://i.pinimg.com/1200x/09/ec/06/09ec06ec386b92c08584988e6b0831b1.jpg",
        description: "Traditional Spanish wine punch with fruits and brandy.",
        cookingTime: "20 mins (+marination 2 hrs)",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 bottle red wine",
            "1/2 cup brandy",
            "1/4 cup orange juice",
            "1 orange, sliced",
            "1 lemon, sliced",
            "2 tbsp sugar",
            "1 cup soda water"
        ],
        instructions: [
            "Mix wine, brandy, orange juice, sugar, and fruits in a jug",
            "Refrigerate for at least 2 hours",
            "Add soda water before serving"
        ]
    },
    {
        id: 64,
        title: "Veggie Stir-Fry",
        category: "veg",
        image: "https://i.pinimg.com/1200x/16/38/a0/1638a0ee64265be0f4d71cf9dfbd76d4.jpg",
        description: "Quick stir-fried mixed vegetables with soy sauce and garlic.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup broccoli",
            "1 cup bell peppers",
            "1/2 cup carrots",
            "2 cloves garlic",
            "1 tbsp soy sauce",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Heat oil in a pan and sauté garlic",
            "Add vegetables and stir-fry 5-7 mins",
            "Add soy sauce, toss well, serve hot"
        ]
    },
    {
        id: 65,
        title: "Caprese Salad",
        category: "veg",
        image: "https://i.pinimg.com/736x/70/f8/93/70f893bd8b4b63449771fb5562bfae55.jpg",
        description: "Fresh tomato, mozzarella, and basil salad drizzled with balsamic glaze.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 tomatoes",
            "100g mozzarella",
            "Fresh basil leaves",
            "2 tbsp balsamic glaze",
            "Salt and pepper"
        ],
        instructions: [
            "Slice tomatoes and mozzarella",
            "Layer with basil leaves",
            "Drizzle balsamic glaze and season with salt and pepper"
        ]
    },
    {
        id: 66,
        title: "Hummus with Veggie Sticks",
        category: "veg",
        image: "https://i.pinimg.com/736x/99/3c/dc/993cdcd8542f8987824636d6c9d0452a.jpg",
        description: "Creamy chickpea hummus served with carrot and cucumber sticks.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup chickpeas, cooked",
            "2 tbsp tahini",
            "1 tbsp olive oil",
            "1 clove garlic",
            "Salt and lemon juice",
            "Carrot and cucumber sticks"
        ],
        instructions: [
            "Blend chickpeas, tahini, olive oil, garlic, lemon juice, and salt until smooth",
            "Serve with veggie sticks"
        ]
    },
    {
        id: 67,
        title: "Paneer Butter Masala",
        category: "veg",
        image: "https://i.pinimg.com/736x/da/f3/98/daf3988311896ed002a1d75f3702870c.jpg",
        description: "Rich and creamy paneer curry cooked in tomato and butter gravy.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g paneer",
            "1 cup tomato puree",
            "2 tbsp butter",
            "1/2 cup cream",
            "1 tsp ginger-garlic paste",
            "Spices: garam masala, chili powder, turmeric"
        ],
        instructions: [
            "Sauté ginger-garlic paste in butter",
            "Add tomato puree and spices, cook 10 mins",
            "Add paneer and cream, simmer 5-7 mins",
            "Serve hot with rice or naan"
        ]
    },
    {
        id: 68,
        title: "Vegetable Biryani",
        category: "veg",
        image: "https://i.pinimg.com/1200x/cb/1f/3b/cb1f3bbcb17c290c19297fa6a111fb8e.jpg",
        description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
        cookingTime: "45 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "1 cup basmati rice",
            "1 cup mixed vegetables",
            "1 onion",
            "1/2 cup yogurt",
            "Spices: garam masala, turmeric, cumin",
            "2 tbsp oil"
        ],
        instructions: [
            "Cook rice until 70% done",
            "Sauté onions and vegetables with spices",
            "Layer rice and vegetable mixture, cover and cook 15-20 mins",
            "Serve hot with raita"
        ]
    },
    {
        id: 69,
        title: "Stuffed Zucchini Boats",
        category: "veg",
        image: "https://i.pinimg.com/1200x/c7/ef/fb/c7effb889cb967d11b4f79e40566853c.jpg",
        description: "Zucchini halves stuffed with vegetables, herbs, and cheese.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 zucchini",
            "1/2 cup bell peppers, chopped",
            "1/4 cup onion, chopped",
            "1/2 cup grated cheese",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Halve zucchinis and scoop out seeds",
            "Mix vegetables, herbs, and cheese",
            "Stuff zucchini halves and bake 20 mins at 375°F",
            "Serve hot"
        ]
    },
    {
        id: 70,
        title: "Vegetarian Lasagna",
        category: "veg",
        image: "https://i.pinimg.com/736x/3b/53/d3/3b53d339f3d7e785d67e174a096e10bd.jpg",
        description: "Layers of pasta, vegetables, and creamy béchamel sauce baked to perfection.",
        cookingTime: "1 hr 15 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "9 lasagna sheets",
            "2 cups mixed vegetables",
            "1 cup tomato sauce",
            "1 cup béchamel sauce",
            "1 cup grated cheese",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Preheat oven to 375°F",
            "Layer lasagna sheets, vegetables, tomato sauce, and béchamel",
            "Top with cheese and bake 35-40 mins",
            "Serve hot"
        ]
    },
    {
        id: 71,
        title: "Vegetable Wellington",
        category: "veg",
        image: "https://i.pinimg.com/736x/dc/d0/88/dcd088f7764ee776c746b393427abbff.jpg",
        description: "Puff pastry wrapped around seasoned vegetables and mushroom duxelles.",
        cookingTime: "1 hr 10 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 sheet puff pastry",
            "1 cup mushrooms, chopped",
            "1 cup mixed vegetables",
            "1 egg for brushing",
            "Herbs, salt, pepper"
        ],
        instructions: [
            "Sauté mushrooms and vegetables with herbs",
            "Wrap mixture in puff pastry, brush with egg",
            "Bake 25-30 mins at 400°F until golden",
            "Serve hot"
        ]
    },
    {
        id: 72,
        title: "Stuffed Bell Peppers with Quinoa",
        category: "veg",
        image: "https://i.pinimg.com/736x/7a/25/a1/7a25a168c3157a9eb0ba734254af4a60.jpg",
        description: "Quinoa and vegetable-stuffed bell peppers baked with a cheesy topping.",
        cookingTime: "50 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "4 bell peppers",
            "1 cup cooked quinoa",
            "1/2 cup mixed vegetables",
            "1/4 cup cheese",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Preheat oven to 375°F",
            "Mix quinoa with vegetables and herbs",
            "Stuff peppers and top with cheese",
            "Bake 25-30 mins and serve hot"
        ]
    },
    {
        id: 73,
        title: "Garlic Butter Shrimp",
        category: "non-veg",
        image: "https://i.pinimg.com/1200x/77/4f/a1/774fa17c5259b3950237510843ac25f8.jpg",
        description: "Quick sautéed shrimp with garlic and butter.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g shrimp, peeled",
            "2 tbsp butter",
            "2 cloves garlic, minced",
            "Salt, pepper, parsley"
        ],
        instructions: [
            "Melt butter in pan and sauté garlic",
            "Add shrimp, season with salt and pepper",
            "Cook 3-4 mins until pink",
            "Garnish with parsley and serve"
        ]
    },
    {
        id: 74,
        title: "Grilled Chicken Skewers",
        category: "non-veg",
        image: "https://i.pinimg.com/1200x/9b/ff/48/9bff482bba811a1a793e40dc60e1c0db.jpg",
        description: "Juicy marinated chicken grilled on skewers.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 chicken breasts, cubed",
            "2 tbsp olive oil",
            "1 tsp paprika",
            "1 tsp garlic powder",
            "Salt, pepper"
        ],
        instructions: [
            "Marinate chicken with oil, spices, salt, and pepper for 10 mins",
            "Skewer chicken pieces and grill 10-12 mins",
            "Serve hot"
        ]
    },
    {
        id: 75,
        title: "Egg Fried Rice",
        category: "non-veg",
        image: "https://i.pinimg.com/736x/ea/84/b3/ea84b30493e2fc234ccafb6d43f8035a.jpg",
        description: "Quick fried rice with scrambled eggs and vegetables.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup cooked rice",
            "2 eggs",
            "1/2 cup mixed vegetables",
            "2 tbsp soy sauce",
            "1 tbsp oil"
        ],
        instructions: [
            "Scramble eggs and set aside",
            "Sauté vegetables in oil, add rice and soy sauce",
            "Fold in eggs, mix well, and serve"
        ]
    },
    {
        id: 76,
        title: "Chicken Curry",
        category: "non-veg",
        image: "https://i.pinimg.com/736x/9f/a3/fb/9fa3fb041dcb9d3166e6e8fdc1996d96.jpg",
        description: "Classic chicken curry cooked in aromatic spices and tomato gravy.",
        cookingTime: "45 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "300g chicken, chopped",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tsp ginger paste",
            "Spices: turmeric, chili powder, garam masala",
            "2 tbsp oil, salt"
        ],
        instructions: [
            "Sauté onions, garlic, and ginger in oil",
            "Add spices, tomatoes, and chicken, cook 20-25 mins",
            "Simmer until chicken is tender",
            "Serve hot with rice or bread"
        ]
    },
    {
        id: 77,
        title: "Grilled Fish with Lemon",
        category: "non-veg",
        image: "https://i.pinimg.com/736x/68/ad/f3/68adf33aeb71bba5462a666a85dd58fc.jpg",
        description: "Lightly seasoned fish fillets grilled with lemon and herbs.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 fish fillets",
            "2 tbsp olive oil",
            "1 lemon",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Marinate fish with oil, lemon, salt, pepper, and herbs for 10 mins",
            "Grill 10-12 mins until cooked",
            "Serve with lemon wedges"
        ]
    },
    {
        id: 78,
        title: "Chicken Biryani",
        category: "non-veg",
        image: "https://i.pinimg.com/1200x/6a/cc/f3/6accf3cefbe7f9779d151e3696018990.jpg",
        description: "Aromatic basmati rice cooked with chicken and spices.",
        cookingTime: "50 mins",
        servings: "3",
        difficulty: "Medium",
        ingredients: [
            "1 cup basmati rice",
            "250g chicken",
            "1 onion",
            "1/2 cup yogurt",
            "Spices: garam masala, turmeric, chili powder",
            "2 tbsp oil, salt"
        ],
        instructions: [
            "Cook rice until 70% done",
            "Sauté onions, spices, and chicken in oil",
            "Layer rice and chicken mixture, cover and cook 15-20 mins",
            "Serve hot"
        ]
    },
    {
        id: 79,
        title: "Lamb Rogan Josh",
        category: "non-veg",
        image: "https://i.pinimg.com/1200x/8c/0d/14/8c0d149a64a4f29c3032292cdf136785.jpg",
        description: "Traditional Indian lamb curry slow-cooked with aromatic spices.",
        cookingTime: "1 hr 30 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "500g lamb chunks",
            "2 onions",
            "3 cloves garlic",
            "1 tbsp ginger paste",
            "1 cup yogurt",
            "2 tsp garam masala",
            "1 tsp chili powder",
            "1 tsp turmeric",
            "2 tbsp oil, salt"
        ],
        instructions: [
            "Sauté onions, garlic, and ginger in oil until golden",
            "Add spices and lamb, cook until browned",
            "Add yogurt and simmer 1-1.5 hrs until tender",
            "Serve with rice or naan"
        ]
    },
    {
        id: 80,
        title: "Butter Chicken",
        category: "non-veg",
        image: "https://i.pinimg.com/736x/a8/89/ac/a889ac23c9bcdc0a2bb5e0e784473c29.jpg",
        description: "Creamy Indian chicken curry with butter and tomato sauce.",
        cookingTime: "1 hr",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "500g chicken",
            "1 cup tomato puree",
            "1/2 cup cream",
            "2 tbsp butter",
            "1 onion",
            "Spices: garam masala, chili powder, turmeric, salt"
        ],
        instructions: [
            "Cook chicken until lightly browned",
            "Sauté onions and spices, add tomato puree and simmer",
            "Add butter and cream, cook until thick and creamy",
            "Serve hot with naan or rice"
        ]
    },
    {
        id: 81,
        title: "Seafood Paella",
        category: "non-veg",
        image: "https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg",
        description: "Spanish rice dish with shrimp, mussels, and saffron-infused broth.",
        cookingTime: "1 hr 15 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 cup Arborio rice",
            "200g shrimp",
            "200g mussels",
            "1 onion",
            "1 bell pepper",
            "1/2 tsp saffron",
            "2 cups chicken or seafood stock",
            "Salt, pepper, olive oil"
        ],
        instructions: [
            "Sauté onions and bell pepper in olive oil",
            "Add rice and saffron, cook 2-3 mins",
            "Gradually add stock while stirring",
            "Add seafood halfway through cooking",
            "Simmer until rice is tender and seafood cooked"
        ]
    },
    {
        id: 82,
        title: "Vegetable Fried Rice",
        category: "asian",
        image: "https://i.pinimg.com/736x/57/46/78/57467898f2acaed4cebd1901d30e651b.jpg",
        description: "Quick fried rice with mixed vegetables and soy sauce.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup cooked rice",
            "1/2 cup mixed vegetables",
            "2 tbsp soy sauce",
            "1 egg",
            "1 tbsp oil",
            "Salt, pepper"
        ],
        instructions: [
            "Heat oil and sauté vegetables",
            "Scramble egg and add to vegetables",
            "Add rice and soy sauce, stir-fry 5 mins",
            "Season with salt and pepper, serve hot"
        ]
    },
    {
        id: 83,
        title: "Miso Soup",
        category: "asian",
        image: "https://i.pinimg.com/1200x/ec/1a/ca/ec1acabf1a6bc795d5846f824516484e.jpg",
        description: "Classic Japanese soup with miso, tofu, and seaweed.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 cups dashi stock",
            "2 tbsp miso paste",
            "50g tofu, cubed",
            "1 tbsp chopped green onions",
            "1 tsp seaweed"
        ],
        instructions: [
            "Heat dashi stock and dissolve miso paste",
            "Add tofu and seaweed, simmer 5 mins",
            "Garnish with green onions and serve"
        ]
    },
    {
        id: 84,
        title: "Spring Rolls",
        category: "asian",
        image: "https://i.pinimg.com/736x/6e/30/c0/6e30c0ce304c63b176e454c72fe8b807.jpg",
        description: "Crispy vegetable spring rolls served with dipping sauce.",
        cookingTime: "25 mins",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "8 spring roll wrappers",
            "1 cup shredded cabbage",
            "1/2 cup carrots",
            "1 tbsp soy sauce",
            "Oil for frying"
        ],
        instructions: [
            "Mix vegetables with soy sauce",
            "Wrap vegetables in spring roll wrappers",
            "Deep fry until golden and serve with sauce"
        ]
    },
    {
        id: 85,
        title: "Pad Thai",
        category: "asian",
        image: "https://i.pinimg.com/736x/2a/5e/8a/2a5e8a907d7251e615def015b7ae8e6b.jpg",
        description: "Stir-fried Thai noodles with shrimp, tofu, peanuts, and tamarind sauce.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "100g rice noodles",
            "100g shrimp",
            "50g tofu",
            "2 tbsp tamarind paste",
            "1 tbsp fish sauce",
            "1 egg",
            "1/4 cup peanuts, crushed",
            "1 tbsp oil"
        ],
        instructions: [
            "Soak noodles in warm water 10 mins",
            "Sauté shrimp and tofu in oil",
            "Add noodles, tamarind paste, and fish sauce, stir-fry",
            "Push to side, scramble egg, mix together",
            "Top with peanuts and serve"
        ]
    },
    {
        id: 86,
        title: "Chicken Teriyaki",
        category: "asian",
        image: "https://i.pinimg.com/736x/01/ba/90/01ba90c3038fae15d8335ad3aed61f9e.jpg",
        description: "Japanese-style grilled chicken glazed with teriyaki sauce.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 chicken breasts",
            "3 tbsp soy sauce",
            "2 tbsp mirin",
            "1 tbsp sugar",
            "1 tsp ginger paste",
            "1 tbsp oil"
        ],
        instructions: [
            "Mix soy sauce, mirin, sugar, and ginger to make sauce",
            "Pan-fry chicken until cooked",
            "Pour sauce over chicken and simmer 5 mins",
            "Serve with steamed rice"
        ]
    },
    {
        id: 87,
        title: "Vegetable Sushi Rolls",
        category: "asian",
        image: "https://i.pinimg.com/736x/ba/56/e1/ba56e13134898104ee5e254e36bca4f5.jpg",
        description: "Homemade sushi rolls with cucumber, avocado, and carrot.",
        cookingTime: "40 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 cups sushi rice",
            "4 sheets nori",
            "1/2 cucumber",
            "1/2 avocado",
            "1/2 carrot",
            "Soy sauce for dipping"
        ],
        instructions: [
            "Cook sushi rice and season with rice vinegar",
            "Place nori on bamboo mat, spread rice",
            "Add sliced vegetables, roll tightly",
            "Slice rolls and serve with soy sauce"
        ]
    },
    {
        id: 88,
        title: "Ramen with Pork Belly",
        category: "asian",
        image: "https://i.pinimg.com/1200x/19/76/3a/19763a402788035616846755c7fe8300.jpg",
        description: "Rich Japanese ramen with soft-boiled egg and tender pork belly.",
        cookingTime: "1 hr 30 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "200g ramen noodles",
            "150g pork belly",
            "2 cups chicken stock",
            "1 tbsp soy sauce",
            "1 tbsp miso paste",
            "1 egg",
            "Scallions for garnish"
        ],
        instructions: [
            "Slow-cook pork belly until tender",
            "Boil noodles separately",
            "Simmer stock with soy sauce and miso",
            "Assemble noodles, stock, pork, and soft-boiled egg in bowl",
            "Garnish with scallions"
        ]
    },
    {
        id: 89,
        title: "Thai Green Curry",
        category: "asian",
        image: "https://i.pinimg.com/1200x/33/10/82/331082ea71ec4572013572316482f4ea.jpg",
        description: "Spicy Thai green curry with chicken and vegetables.",
        cookingTime: "50 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "200g chicken",
            "1 cup coconut milk",
            "2 tbsp green curry paste",
            "1 cup mixed vegetables",
            "1 tbsp fish sauce",
            "Basil leaves"
        ],
        instructions: [
            "Cook chicken in curry paste until aromatic",
            "Add coconut milk and simmer 15 mins",
            "Add vegetables and cook 10 mins",
            "Season with fish sauce and garnish with basil"
        ]
    },
    {
        id: 90,
        title: "Dim Sum Dumplings",
        category: "asian",
        image: "https://i.pinimg.com/1200x/8c/5a/a0/8c5aa04236be3a9a5897931e0cb86cc7.jpg",
        description: "Steamed dumplings filled with minced pork and vegetables.",
        cookingTime: "1 hr",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "200g minced pork",
            "50g chopped cabbage",
            "Dumpling wrappers",
            "2 tsp soy sauce",
            "1 tsp sesame oil",
            "Salt, pepper"
        ],
        instructions: [
            "Mix pork, cabbage, soy sauce, sesame oil, salt, and pepper",
            "Fill wrappers with mixture and seal",
            "Steam dumplings 10-12 mins",
            "Serve hot with dipping sauce"
        ]
    },
    {
        id: 91,
        title: "Vegetable Chow Mein",
        category: "chinese",
        image: "https://i.pinimg.com/736x/7e/3d/5a/7e3d5aca9b32ec42d2946f2f0c355316.jpg",
        description: "Stir-fried noodles with mixed vegetables and soy sauce.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "100g noodles",
            "1 cup mixed vegetables",
            "2 tbsp soy sauce",
            "1 tbsp oil",
            "Salt, pepper"
        ],
        instructions: [
            "Cook noodles according to package instructions",
            "Sauté vegetables in oil for 5 mins",
            "Add noodles and soy sauce, stir-fry 5 mins",
            "Season and serve hot"
        ]
    },
    {
        id: 92,
        title: "Egg Fried Rice",
        category: "chinese",
        image: "https://i.pinimg.com/736x/ee/c3/97/eec39737cba584605d57c1d50504f799.jpg",
        description: "Quick fried rice with scrambled eggs and soy sauce.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup cooked rice",
            "2 eggs",
            "2 tbsp oil",
            "1/2 cup mixed vegetables",
            "2 tbsp soy sauce"
        ],
        instructions: [
            "Scramble eggs and set aside",
            "Sauté vegetables in oil for 3-4 mins",
            "Add rice and soy sauce, stir-fry 5 mins",
            "Mix in eggs and serve hot"
        ]
    },
    {
        id: 93,
        title: "Spring Rolls",
        category: "chinese",
        image: "https://i.pinimg.com/1200x/63/2e/26/632e26a16a0f8196b0b54b6dbd159fd8.jpg",
        description: "Crispy vegetable spring rolls served with soy dipping sauce.",
        cookingTime: "25 mins",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "8 spring roll wrappers",
            "1 cup shredded cabbage",
            "1/2 cup carrots",
            "1 tbsp soy sauce",
            "Oil for frying"
        ],
        instructions: [
            "Mix vegetables with soy sauce",
            "Wrap vegetables in spring roll wrappers",
            "Deep fry until golden",
            "Serve with dipping sauce"
        ]
    },
    {
        id: 94,
        title: "Kung Pao Chicken",
        category: "chinese",
        image: "https://i.pinimg.com/736x/66/73/bf/6673bfb5d4a0d11120ee316d4ea7a16b.jpg",
        description: "Spicy stir-fried chicken with peanuts and vegetables.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g chicken, cubed",
            "1/2 cup bell peppers",
            "2 tbsp soy sauce",
            "1 tbsp chili sauce",
            "2 tbsp peanuts",
            "1 tbsp oil"
        ],
        instructions: [
            "Sauté chicken in oil until cooked",
            "Add vegetables and stir-fry 5 mins",
            "Add soy sauce, chili sauce, and peanuts",
            "Cook 5 mins and serve hot"
        ]
    },
    {
        id: 95,
        title: "Sweet and Sour Pork",
        category: "chinese",
        image: "https://i.pinimg.com/1200x/7d/2f/0f/7d2f0f4ee533a8348fe9ba545bdf5285.jpg",
        description: "Crispy pork in tangy sweet and sour sauce with pineapple.",
        cookingTime: "40 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g pork, cubed",
            "1/2 cup pineapple chunks",
            "1/2 cup bell peppers",
            "2 tbsp ketchup",
            "1 tbsp soy sauce",
            "1 tbsp vinegar",
            "Oil for frying"
        ],
        instructions: [
            "Deep fry pork until crispy",
            "Sauté vegetables and pineapple in sauce mixture",
            "Add pork and toss 5 mins",
            "Serve hot with rice"
        ]
    },
    {
        id: 96,
        title: "Chicken Fried Rice",
        category: "chinese",
        image: "https://i.pinimg.com/736x/ee/d0/a2/eed0a25e68920ce24c34c3b0222cc882.jpg",
        description: "Fried rice with chicken, eggs, and vegetables.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 cup cooked rice",
            "150g chicken, diced",
            "2 eggs",
            "1/2 cup peas and carrots",
            "2 tbsp soy sauce",
            "1 tbsp oil"
        ],
        instructions: [
            "Cook chicken in oil until done",
            "Scramble eggs and sauté vegetables",
            "Add rice and soy sauce, stir-fry 5 mins",
            "Mix in chicken and serve hot"
        ]
    },
    {
        id: 97,
        title: "Peking Duck",
        category: "chinese",
        image: "https://i.pinimg.com/736x/23/88/84/238884e71617bbf10949b8bf803ab9df.jpg",
        description: "Crispy roasted duck served with pancakes and hoisin sauce.",
        cookingTime: "2 hrs",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 whole duck",
            "2 tbsp honey",
            "2 tbsp soy sauce",
            "1 tsp five-spice powder",
            "Pancakes and hoisin sauce for serving"
        ],
        instructions: [
            "Marinate duck with honey, soy sauce, and spices overnight",
            "Roast duck at 375°F for 1.5-2 hrs until skin is crispy",
            "Serve sliced with pancakes and hoisin sauce"
        ]
    },
    {
        id: 98,
        title: "Sichuan Hot Pot",
        category: "chinese",
        image: "https://i.pinimg.com/736x/e0/cd/4a/e0cd4a1b7f9e0d6dff561835ae0db1b1.jpg",
        description: "Spicy Sichuan-style hot pot with assorted meats and vegetables.",
        cookingTime: "1 hr 30 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "500g assorted meat (beef, chicken, shrimp)",
            "1 cup assorted vegetables",
            "2 tbsp Sichuan chili paste",
            "4 cups broth",
            "Soy sauce, garlic, ginger"
        ],
        instructions: [
            "Prepare broth with chili paste, garlic, and ginger",
            "Bring to boil, add meats and vegetables in batches",
            "Cook until done and serve hot"
        ]
    },
    {
        id: 99,
        title: "Dim Sum Dumplings",
        category: "chinese",
        image: "https://i.pinimg.com/736x/14/aa/fb/14aafbdeef95606d4d95f0ff9e3ff4d3.jpg",
        description: "Steamed dumplings filled with minced pork and shrimp.",
        cookingTime: "1 hr",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "100g minced pork",
            "50g shrimp, chopped",
            "Dumpling wrappers",
            "1 tsp soy sauce",
            "1 tsp sesame oil",
            "Salt, pepper"
        ],
        instructions: [
            "Mix pork, shrimp, soy sauce, sesame oil, salt, and pepper",
            "Fill wrappers and seal dumplings",
            "Steam for 10-12 mins",
            "Serve hot with dipping sauce"
        ]
    },
    {
        id: 100,
        title: "Spaghetti Aglio e Olio",
        category: "italian",
        image: "https://i.pinimg.com/1200x/42/67/7b/42677ba5ab6369f71bf61776ea996755.jpg",
        description: "Simple spaghetti tossed with garlic, olive oil, and chili flakes.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g spaghetti",
            "3 cloves garlic, sliced",
            "3 tbsp olive oil",
            "1 tsp chili flakes",
            "Salt, parsley"
        ],
        instructions: [
            "Cook spaghetti according to package instructions",
            "Heat oil and sauté garlic and chili flakes",
            "Toss cooked spaghetti in oil mixture",
            "Garnish with parsley and serve"
        ]
    },
    {
        id: 101,
        title: "Caprese Salad",
        category: "italian",
        image: "https://i.pinimg.com/1200x/70/f8/93/70f893bd8b4b63449771fb5562bfae55.jpg",
        description: "Fresh tomato, mozzarella, and basil salad drizzled with olive oil.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 tomatoes",
            "100g mozzarella",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt, pepper"
        ],
        instructions: [
            "Slice tomatoes and mozzarella",
            "Layer with basil leaves",
            "Drizzle olive oil, season with salt and pepper, serve"
        ]
    },
    {
        id: 102,
        title: "Bruschetta",
        category: "italian",
        image: "https://i.pinimg.com/736x/ff/51/de/ff51de60f4e3fe446df3bbf9dc9d0d45.jpg",
        description: "Toasted bread topped with fresh tomato, basil, and garlic.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "4 slices baguette",
            "2 tomatoes, diced",
            "1 clove garlic, minced",
            "1 tbsp olive oil",
            "Salt, pepper, basil leaves"
        ],
        instructions: [
            "Toast bread slices",
            "Mix tomatoes, garlic, olive oil, salt, and pepper",
            "Top bread with mixture and garnish with basil"
        ]
    },
    {
        id: 103,
        title: "Pasta Carbonara",
        category: "italian",
        image: "https://i.pinimg.com/1200x/1b/e6/12/1be612eee4707999262a12452f3c6bc9.jpg",
        description: "Creamy pasta with eggs, cheese, pancetta, and black pepper.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 eggs",
            "50g Parmesan cheese, grated",
            "Salt, black pepper"
        ],
        instructions: [
            "Cook spaghetti and reserve some pasta water",
            "Fry pancetta until crispy",
            "Mix eggs and cheese, combine with pasta off heat",
            "Add pancetta and toss, adjust with pasta water, serve"
        ]
    },
    {
        id: 104,
        title: "Margherita Pizza",
        category: "italian",
        image: "https://i.pinimg.com/736x/bc/45/3d/bc453dcf86908a1335d154c3ca251fb4.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil.",
        cookingTime: "40 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "100g mozzarella",
            "Fresh basil leaves",
            "Olive oil"
        ],
        instructions: [
            "Preheat oven to 220°C (425°F)",
            "Roll out dough, spread tomato sauce",
            "Top with mozzarella and basil",
            "Bake 12-15 mins until crust is golden"
        ]
    },
    {
        id: 105,
        title: "Risotto with Mushrooms",
        category: "italian",
        image: "https://i.pinimg.com/1200x/14/e1/0b/14e10b4902e264ea53620af824e87eb7.jpg",
        description: "Creamy Arborio rice cooked slowly with mushrooms and Parmesan.",
        cookingTime: "45 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 cup Arborio rice",
            "1 cup mushrooms, sliced",
            "2 cups vegetable stock",
            "1/4 cup Parmesan cheese",
            "1 tbsp butter",
            "1 onion, chopped"
        ],
        instructions: [
            "Sauté onion and mushrooms in butter",
            "Add rice and toast 2 mins",
            "Gradually add stock, stirring until absorbed",
            "Finish with Parmesan and serve"
        ]
    },
    {
        id: 106,
        title: "Lasagna",
        category: "italian",
        image: "https://i.pinimg.com/736x/b7/32/84/b732847d2b6dba5ec3f7a43199704574.jpg",
        description: "Layered pasta with béchamel, tomato sauce, vegetables or meat, and cheese.",
        cookingTime: "1 hr 15 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "9 lasagna sheets",
            "2 cups tomato sauce",
            "1 cup béchamel sauce",
            "200g minced meat or vegetables",
            "1 cup grated cheese"
        ],
        instructions: [
            "Preheat oven to 180°C (350°F)",
            "Layer pasta, sauce, meat/vegetables, and béchamel",
            "Repeat layers and top with cheese",
            "Bake 35-40 mins, serve hot"
        ]
    },
    {
        id: 107,
        title: "Osso Buco",
        category: "italian",
        image: "https://i.pinimg.com/1200x/c3/a5/5a/c3a55a666cb6ec888374984eefbf881d.jpg",
        description: "Braised veal shanks slow-cooked with vegetables, wine, and broth.",
        cookingTime: "2 hrs",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "4 veal shanks",
            "2 cups beef broth",
            "1 onion, carrot, celery",
            "1 cup white wine",
            "2 tbsp olive oil, herbs"
        ],
        instructions: [
            "Sear veal shanks in oil",
            "Sauté vegetables, add wine and reduce",
            "Add broth and shanks, simmer 1.5 hrs until tender",
            "Serve with gremolata or risotto"
        ]
    },
    {
        id: 108,
        title: "Tiramisu",
        category: "italian",
        image: "https://i.pinimg.com/736x/0e/c2/89/0ec289492947872976c5c52215280faa.jpg",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        cookingTime: "50 mins + chilling",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "200g ladyfingers",
            "250g mascarpone",
            "3 eggs, separated",
            "1/2 cup sugar",
            "1 cup brewed coffee",
            "Cocoa powder for dusting"
        ],
        instructions: [
            "Whisk egg yolks with sugar, fold in mascarpone",
            "Beat egg whites until stiff and fold into mixture",
            "Dip ladyfingers in coffee and layer with cream",
            "Chill 4 hrs and dust with cocoa before serving"
        ]
    },
    {
        id: 109,
        title: "Cheese Quesadilla",
        category: "mexican",
        image: "https://i.pinimg.com/736x/60/7e/49/607e49e0f263b67a54f164477cbe3f92.jpg",
        description: "Toasted tortilla filled with melted cheese and veggies.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 large tortillas",
            "1 cup shredded cheese",
            "1/2 cup bell peppers, sliced",
            "1 tbsp oil"
        ],
        instructions: [
            "Heat tortilla in pan with oil",
            "Add cheese and vegetables, fold and cook until cheese melts",
            "Slice and serve with salsa"
        ]
    },
    {
        id: 110,
        title: "Guacamole",
        category: "mexican",
        image: "https://i.pinimg.com/736x/6d/bf/d5/6dbfd5c501d29eabff2c7ab6523d34f6.jpg",
        description: "Creamy avocado dip with lime, onion, and cilantro.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 ripe avocados",
            "1 lime, juiced",
            "1/4 cup chopped onion",
            "2 tbsp chopped cilantro",
            "Salt, pepper"
        ],
        instructions: [
            "Mash avocados with lime juice",
            "Mix in onion, cilantro, salt, and pepper",
            "Serve immediately with chips or tacos"
        ]
    },
    {
        id: 111,
        title: "Chicken Tacos",
        category: "mexican",
        image: "https://i.pinimg.com/1200x/c5/5d/2c/c55d2c0316e347143a34d4d6a684ee1b.jpg",
        description: "Soft tacos filled with spiced chicken and fresh toppings.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "4 small tortillas",
            "200g chicken, cooked and shredded",
            "1/2 cup lettuce, chopped",
            "1/4 cup salsa",
            "1/4 cup shredded cheese"
        ],
        instructions: [
            "Warm tortillas in a pan",
            "Fill with chicken, lettuce, salsa, and cheese",
            "Fold and serve"
        ]
    },
    {
        id: 112,
        title: "Beef Enchiladas",
        category: "mexican",
        image: "https://i.pinimg.com/736x/88/83/05/888305aa64cd6dcdc6fd59cf7ff591d1.jpg",
        description: "Tortillas filled with seasoned beef, rolled, and baked with sauce and cheese.",
        cookingTime: "40 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "4 tortillas",
            "200g ground beef",
            "1/2 cup shredded cheese",
            "1/2 cup enchilada sauce",
            "1/2 onion, chopped"
        ],
        instructions: [
            "Cook beef with onion and spices",
            "Fill tortillas with beef, roll, and place in baking dish",
            "Pour sauce over and sprinkle cheese",
            "Bake 15-20 mins, serve hot"
        ]
    },
    {
        id: 113,
        title: "Chicken Fajitas",
        category: "mexican",
        image: "https://i.pinimg.com/736x/b0/3a/80/b03a80a090d5dc5ad4338c05b318435a.jpg",
        description: "Sautéed chicken strips with bell peppers and onions, served with tortillas.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g chicken breast, sliced",
            "1/2 cup bell peppers, sliced",
            "1/2 cup onions, sliced",
            "2 tbsp olive oil",
            "Tortillas, salsa, sour cream"
        ],
        instructions: [
            "Sauté chicken in olive oil until cooked",
            "Add peppers and onions, cook 5-7 mins",
            "Serve with warm tortillas, salsa, and sour cream"
        ]
    },
    {
        id: 114,
        title: "Chili con Carne",
        category: "mexican",
        image: "https://i.pinimg.com/1200x/60/d2/c2/60d2c2de7361f3506b47fbcff44b01a5.jpg",
        description: "Spicy stew with ground beef, beans, tomatoes, and chili.",
        cookingTime: "45 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g ground beef",
            "1/2 cup kidney beans",
            "1 cup diced tomatoes",
            "1/2 onion, chopped",
            "1 tsp chili powder",
            "2 tbsp oil, salt, pepper"
        ],
        instructions: [
            "Sauté onion in oil, add beef and cook until browned",
            "Add tomatoes, beans, chili powder, and simmer 20 mins",
            "Serve hot with rice or tortilla chips"
        ]
    },
    {
        id: 115,
        title: "Mole Poblano Chicken",
        category: "mexican",
        image: "https://i.pinimg.com/1200x/ff/60/cd/ff60cd792bd2ce676dd042dd56c309f6.jpg",
        description: "Chicken cooked in a rich, complex Mexican mole sauce with chocolate and spices.",
        cookingTime: "1 hr 30 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "500g chicken pieces",
            "2 tbsp mole paste",
            "1 cup chicken broth",
            "1 tbsp cocoa powder",
            "1 onion, garlic, spices"
        ],
        instructions: [
            "Sear chicken pieces until golden",
            "Prepare mole sauce with paste, cocoa, onion, garlic, and broth",
            "Simmer chicken in sauce 45-60 mins",
            "Serve hot with rice"
        ]
    },
    {
        id: 116,
        title: "Tamales",
        category: "mexican",
        image: "https://i.pinimg.com/1200x/27/ae/78/27ae7835de54e98e73d77ffed37ab04c.jpg",
        description: "Steamed corn dough filled with meat or cheese wrapped in corn husks.",
        cookingTime: "2 hrs",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "2 cups masa harina",
            "1 cup chicken broth",
            "200g cooked shredded chicken",
            "Corn husks",
            "Spices, oil, salt"
        ],
        instructions: [
            "Soak corn husks in water",
            "Mix masa harina with broth and oil to form dough",
            "Spread dough on husks, add filling, fold and wrap",
            "Steam 1-1.5 hrs and serve"
        ]
    },
    {
        id: 117,
        title: "Chiles en Nogada",
        category: "mexican",
        image: "https://i.pinimg.com/736x/64/68/7f/64687fa27c5da3fb765ceb9389df49ed.jpg",
        description: "Stuffed poblano peppers with picadillo, topped with walnut cream and pomegranate seeds.",
        cookingTime: "2 hrs",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "4 poblano peppers",
            "200g ground meat",
            "1/2 cup walnuts",
            "1/2 cup cream",
            "1/4 cup pomegranate seeds",
            "Spices, onion, garlic"
        ],
        instructions: [
            "Roast and peel peppers",
            "Cook ground meat with spices and onions",
            "Stuff peppers with filling",
            "Prepare walnut cream and pour over peppers",
            "Garnish with pomegranate seeds and serve"
        ]
    },
    {
        id: 118,
        title: "Garlic Butter Shrimp",
        category: "seafood",
        image: "https://i.pinimg.com/736x/59/40/8b/59408be12585eb5f7f0a4672091f6244.jpg",
        description: "Quick shrimp sautéed in garlic and butter, perfect for weeknight dinners.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "200g shrimp, peeled",
            "2 tbsp butter",
            "3 cloves garlic, minced",
            "Salt, pepper, parsley"
        ],
        instructions: [
            "Melt butter in a pan, sauté garlic 1 min",
            "Add shrimp, cook 3-4 mins until pink",
            "Season with salt, pepper, garnish with parsley, serve"
        ]
    },
    {
        id: 119,
        title: "Grilled Salmon",
        category: "seafood",
        image: "https://i.pinimg.com/1200x/54/ac/1b/54ac1b7af58d23fd12b2edbf3370eb8c.jpg",
        description: "Simple grilled salmon with lemon and herbs.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 salmon fillets",
            "1 tbsp olive oil",
            "1 lemon",
            "Salt, pepper, thyme"
        ],
        instructions: [
            "Brush salmon with olive oil, season with salt, pepper, and thyme",
            "Grill 5-6 mins per side",
            "Serve with lemon wedges"
        ]
    },
    {
        id: 120,
        title: "Tuna Salad",
        category: "seafood",
        image: "https://i.pinimg.com/736x/ef/d2/ad/efd2ad3755fee749279b035727698486.jpg",
        description: "Fresh tuna mixed with vegetables and light dressing.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 can tuna",
            "1/2 cup cucumber, diced",
            "1/2 cup tomatoes, diced",
            "1 tbsp olive oil",
            "1 tsp lemon juice, salt, pepper"
        ],
        instructions: [
            "Drain tuna and mix with vegetables",
            "Add olive oil, lemon juice, salt, and pepper",
            "Toss and serve chilled"
        ]
    },
    {
        id: 121,
        title: "Shrimp Scampi Pasta",
        category: "seafood",
        image: "https://i.pinimg.com/736x/d8/e7/f3/d8e7f3f5148c08048f3641e8e643cd52.jpg",
        description: "Shrimp sautéed in garlic, butter, and white wine with pasta.",
        cookingTime: "30 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g shrimp, peeled",
            "150g spaghetti",
            "2 tbsp butter",
            "3 cloves garlic, minced",
            "1/4 cup white wine",
            "Salt, pepper, parsley"
        ],
        instructions: [
            "Cook spaghetti, reserve some pasta water",
            "Sauté garlic in butter, add shrimp, cook 3-4 mins",
            "Add white wine, simmer 2 mins",
            "Toss shrimp with pasta, adjust with pasta water, serve"
        ]
    },
    {
        id: 122,
        title: "Baked Lemon Garlic Fish",
        category: "seafood",
        image: "https://i.pinimg.com/736x/31/ba/de/31bade8337bbe05ab5b8be98261c0015.jpg",
        description: "White fish fillets baked with lemon, garlic, and herbs.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 fish fillets (cod or tilapia)",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 lemon, sliced",
            "Salt, pepper, thyme"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Place fish on baking tray, drizzle olive oil, add garlic and lemon",
            "Season with salt, pepper, thyme",
            "Bake 20-25 mins until cooked through"
        ]
    },
    {
        id: 123,
        title: "Crab Cakes",
        category: "seafood",
        image: "https://i.pinimg.com/736x/b9/ef/c0/b9efc0326ada1daa632e8800ae984137.jpg",
        description: "Golden fried crab cakes with a crispy exterior and tender interior.",
        cookingTime: "40 mins",
        servings: "4",
        difficulty: "Medium",
        ingredients: [
            "200g crab meat",
            "1/2 cup breadcrumbs",
            "1 egg",
            "2 tbsp mayonnaise",
            "1 tsp mustard",
            "Salt, pepper, parsley, oil for frying"
        ],
        instructions: [
            "Mix crab, egg, mayo, mustard, and parsley",
            "Form into cakes, coat with breadcrumbs",
            "Pan-fry until golden, serve hot"
        ]
    },
    {
        id: 124,
        title: "Seafood Paella",
        category: "seafood",
        image: "https://i.pinimg.com/736x/3a/f7/d3/3af7d3e9caf656aec16406584255c2d7.jpg",
        description: "Spanish-style rice with a mix of seafood and saffron.",
        cookingTime: "1 hr 15 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "1 cup Arborio rice",
            "200g shrimp",
            "100g mussels",
            "100g squid",
            "1 onion, 1 bell pepper, garlic",
            "2 cups seafood stock",
            "1 tsp saffron, olive oil, salt, pepper"
        ],
        instructions: [
            "Sauté onion, bell pepper, and garlic in olive oil",
            "Add rice and toast 2 mins",
            "Add seafood stock and saffron, simmer 15 mins",
            "Add seafood, cook until rice is tender and seafood is done, serve"
        ]
    },
    {
        id: 125,
        title: "Lobster Thermidor",
        category: "seafood",
        image: "https://i.pinimg.com/736x/0b/7e/44/0b7e4407e6dd33be4f36f749d2ee206b.jpg",
        description: "Classic French dish with lobster meat in creamy mustard sauce, baked in shell.",
        cookingTime: "1 hr 30 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "2 lobsters",
            "1/4 cup cream",
            "1 tbsp mustard",
            "2 tbsp butter",
            "1 tbsp Parmesan cheese",
            "Salt, pepper, herbs"
        ],
        instructions: [
            "Boil lobsters, remove meat, chop and mix with cream, mustard, and butter",
            "Stuff shells with mixture, sprinkle Parmesan",
            "Bake 10-15 mins until golden, serve"
        ]
    },
    {
        id: 126,
        title: "Cioppino",
        category: "seafood",
        image: "https://i.pinimg.com/1200x/53/41/c0/5341c0bdeee63f8a1c9b90be49a32070.jpg",
        description: "Italian-American seafood stew with tomatoes, wine, and assorted seafood.",
        cookingTime: "1 hr 20 mins",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "200g shrimp, 200g fish, 100g mussels",
            "1 onion, 2 cloves garlic",
            "1 cup tomato puree",
            "1/2 cup white wine",
            "2 cups fish stock",
            "Olive oil, herbs, salt, pepper"
        ],
        instructions: [
            "Sauté onion and garlic in olive oil",
            "Add tomato puree and wine, simmer 10 mins",
            "Add stock and seafood, cook 10-15 mins until seafood is done",
            "Season and serve hot with bread"
        ]
    },
    {
        id: 127,
        title: "Veg Sandwich",
        category: "street food",
        image: "https://i.pinimg.com/736x/f7/b7/60/f7b7607564817c4a91ff5576078a71c6.jpg",
        description: "Quick and easy sandwich with fresh vegetables and chutney.",
        cookingTime: "10 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "4 slices bread",
            "1/2 cup cucumber, sliced",
            "1/2 cup tomato, sliced",
            "2 tbsp chutney",
            "Butter, salt, pepper"
        ],
        instructions: [
            "Toast bread lightly",
            "Spread butter and chutney on slices",
            "Add vegetables, season with salt and pepper",
            "Assemble and serve"
        ]
    },
    {
        id: 128,
        title: "Pav Bhaji",
        category: "street food",
        image: "https://i.pinimg.com/1200x/9f/61/b5/9f61b5dff080cc8f1795ecb8c326a363.jpg",
        description: "Indian street-style spiced vegetable mash served with buttered buns.",
        cookingTime: "20 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "1 cup mixed vegetables, boiled",
            "1 onion, chopped",
            "2 tbsp butter",
            "1 tbsp pav bhaji masala",
            "2 pav buns"
        ],
        instructions: [
            "Sauté onion in butter, add vegetables and masala",
            "Mash well and cook 5-7 mins",
            "Serve with buttered pav buns"
        ]
    },
    {
        id: 129,
        title: "Corn on the Cob",
        category: "street food",
        image: "https://i.pinimg.com/736x/8b/57/92/8b5792140f31e6b2772051c5a9ce884c.jpg",
        description: "Boiled corn seasoned with butter, salt, and chili powder.",
        cookingTime: "15 mins",
        servings: "2",
        difficulty: "Easy",
        ingredients: [
            "2 corn cobs",
            "2 tbsp butter",
            "Salt, chili powder, lemon juice"
        ],
        instructions: [
            "Boil corn until tender",
            "Brush with butter, sprinkle salt, chili, and lemon",
            "Serve hot"
        ]
    },
    {
        id: 130,
        title: "Chole Bhature",
        category: "street food",
        image: "https://i.pinimg.com/736x/d6/60/25/d660255e0ac13e20bc3c674ee3d11ac4.jpg",
        description: "Spicy chickpea curry served with deep-fried bread.",
        cookingTime: "40 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "1 cup chickpeas, soaked",
            "1 onion, chopped",
            "2 tomatoes, pureed",
            "1 tsp ginger-garlic paste",
            "2 bhature (fried bread)",
            "Spices: cumin, coriander, garam masala"
        ],
        instructions: [
            "Cook chickpeas until soft",
            "Sauté onion, add ginger-garlic, tomato puree and spices",
            "Add chickpeas and simmer 10 mins",
            "Serve with bhature"
        ]
    },
    {
        id: 131,
        title: "Vada Pav",
        category: "street food",
        image: "https://i.pinimg.com/736x/b3/ee/52/b3ee52265f0bfcbcd0d52ab4a906dc8e.jpg",
        description: "Indian potato fritter sandwiched in a bun with chutneys.",
        cookingTime: "25 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "2 pav buns",
            "2 boiled potatoes, mashed",
            "1/2 cup gram flour",
            "Spices: turmeric, chili powder, salt",
            "Oil for frying"
        ],
        instructions: [
            "Mix mashed potatoes with spices and form balls",
            "Coat with gram flour batter and deep fry",
            "Serve inside buns with chutney"
        ]
    },
    {
        id: 132,
        title: "Paneer Tikka Skewers",
        category: "street food",
        image: "https://i.pinimg.com/1200x/03/ef/9f/03ef9ff28d11675fa4a5166f946b3e3b.jpg",
        description: "Grilled marinated paneer cubes with vegetables on skewers.",
        cookingTime: "35 mins",
        servings: "2",
        difficulty: "Medium",
        ingredients: [
            "200g paneer, cubed",
            "1/2 cup bell peppers, cubed",
            "1/2 cup yogurt",
            "1 tsp ginger-garlic paste",
            "Spices: garam masala, chili powder, salt"
        ],
        instructions: [
            "Marinate paneer and vegetables in yogurt and spices 15 mins",
            "Thread on skewers and grill 10-12 mins",
            "Serve hot with chutney"
        ]
    },
    {
        id: 133,
        title: "Pani Puri with Flavored Water",
        category: "street food",
        image: "https://i.pinimg.com/736x/f1/93/c9/f193c9d9dbc42c7e2dc479eaf6e34948.jpg",
        description: "Crispy puris filled with spiced potato and chickpea mixture, served with tangy water.",
        cookingTime: "1 hr",
        servings: "4",
        difficulty: "Hard",
        ingredients: [
            "20 puris",
            "2 boiled potatoes, mashed",
            "1/2 cup boiled chickpeas",
            "Spices: cumin, chili, salt",
            "Flavored water: tamarind, mint, spices"
        ],
        instructions: [
            "Prepare potato-chickpea filling with spices",
            "Mix flavored water",
            "Fill puris with mixture, dip in water, serve immediately"
        ]
    },
    {
        id: 134,
        title: "Kathi Rolls",
        category: "street food",
        image: "https://i.pinimg.com/736x/68/5c/14/685c14c823f361e2daf0f5ec7848f136.jpg",
        description: "Indian-style wrap with marinated meat or paneer, vegetables, and sauces.",
        cookingTime: "1 hr",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "2 parathas",
            "200g marinated chicken or paneer",
            "1/2 cup onions, bell peppers",
            "Spices, oil, chutney"
        ],
        instructions: [
            "Cook marinated chicken/paneer with vegetables",
            "Place mixture on paratha, roll tightly",
            "Serve hot with sauce or chutney"
        ]
    },
    {
        id: 135,
        title: "Chili Cheese Corn",
        category: "street food",
        image: "https://i.pinimg.com/736x/ee/4b/8d/ee4b8d41da6ec7e04d10cf6ddc91420c.jpg",
        description: "Sweet corn sautéed with butter, chili, and topped with cheese and herbs.",
        cookingTime: "50 mins",
        servings: "2",
        difficulty: "Hard",
        ingredients: [
            "2 cups corn kernels",
            "2 tbsp butter",
            "1 tsp chili flakes",
            "1/2 cup grated cheese",
            "Salt, herbs"
        ],
        instructions: [
            "Sauté corn in butter, add chili and salt",
            "Top with cheese and herbs",
            "Cover and cook until cheese melts, serve hot"
        ]
    }
];

// Global Variables
let currentUser = null;
let wishlist = [];
let currentCategory = 'all';
let filteredRecipes = [...recipes];
let currentDifficulty = '';
let currentTimeFilter = '';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipesGrid = document.getElementById('recipesGrid');
const wishlistGrid = document.getElementById('wishlistGrid');
const categoryCards = document.querySelectorAll('.category-card');
const recipeModal = document.getElementById('recipeModal');
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const difficultyFilter = document.getElementById('difficultyFilter');
const timeFilter = document.getElementById('timeFilter');

// Initialize App
document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
    renderRecipes();
    setupEventListeners();
    updateAuthUI();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Category filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });

    // Modal functionality
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Auth functionality
    loginBtn.addEventListener('click', () => showAuthModal('login'));
    signupBtn.addEventListener('click', () => showAuthModal('signup'));
    logoutBtn.addEventListener('click', handleLogout);

    // Auth form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);

    // Auth tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tab = this.dataset.tab;
            switchAuthTab(tab);
        });
    });

    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);

    // Filter functionality
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', handleDifficultyFilter);
    }
    if (timeFilter) {
        timeFilter.addEventListener('change', handleTimeFilter);
    }

    // Close modals when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Search Functionality
function handleSearch() {
    applyAllFilters();
}

// Filter Functions
function handleDifficultyFilter() {
    currentDifficulty = difficultyFilter.value;
    applyAllFilters();
}

function handleTimeFilter() {
    currentTimeFilter = timeFilter.value;
    applyAllFilters();
}

function applyAllFilters() {
    let filtered = [...recipes];

    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm !== '') {
        filtered = filtered.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(searchTerm)
            )
        );
    }

    // Apply category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(recipe =>
            recipe.category === currentCategory
        );
    }

    // Apply difficulty filter
    if (currentDifficulty !== '') {
        filtered = filtered.filter(recipe =>
            recipe.difficulty === currentDifficulty
        );
    }

    // Apply time filter
    if (currentTimeFilter !== '') {
        filtered = filtered.filter(recipe => {
            const time = recipe.cookingTime.toLowerCase();
            if (currentTimeFilter === 'quick') {
                return time.includes('mins') && parseInt(time) <= 30;
            } else if (currentTimeFilter === 'medium') {
                return (time.includes('mins') && parseInt(time) > 30 && parseInt(time) <= 60) ||
                    (time.includes('hour') && !time.includes('hours'));
            } else if (currentTimeFilter === 'long') {
                return time.includes('hours') || (time.includes('hour') && time.includes('mins'));
            }
            return true;
        });
    }

    filteredRecipes = filtered;
    renderRecipes();
}

// Category Filtering
function filterByCategory(category) {
    currentCategory = category;

    // Update active category card
    categoryCards.forEach(card => {
        card.classList.remove('active');
        if (card.dataset.category === category) {
            card.classList.add('active');
        }
    });

    // Apply all filters
    applyAllFilters();
}

// Render Recipes
function renderRecipes() {
    if (filteredRecipes.length === 0) {
        recipesGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--primary-gold); margin-bottom: 1rem;"></i>
                <h3>No recipes found</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
        return;
    }

    recipesGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card" data-aos="fade-up" data-aos-delay="${Math.random() * 200}">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.cookingTime}</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings}</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
                <div class="recipe-actions">
                    <button class="btn btn-primary" onclick="openRecipeModal(${recipe.id})">
                        View Recipe
                    </button>
                    <button class="wishlist-btn ${isInWishlist(recipe.id) ? 'active' : ''}" 
                            onclick="toggleWishlist(${recipe.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Recipe Modal
function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    // Populate modal content
    document.getElementById('modalRecipeImage').src = recipe.image;
    document.getElementById('modalRecipeTitle').textContent = recipe.title;
    document.getElementById('modalCookingTime').textContent = recipe.cookingTime;
    document.getElementById('modalServings').textContent = recipe.servings;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalRecipeDescription').textContent = recipe.description;

    // Ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = recipe.ingredients.map(ingredient =>
        `<li>${ingredient}</li>`
    ).join('');

    // Instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = recipe.instructions.map(instruction =>
        `<li>${instruction}</li>`
    ).join('');

    // Wishlist button
    const addBtn = document.getElementById('addToWishlist');
    const removeBtn = document.getElementById('removeFromWishlist');

    if (isInWishlist(recipeId)) {
        addBtn.style.display = 'none';
        removeBtn.style.display = 'inline-flex';
    } else {
        addBtn.style.display = 'inline-flex';
        removeBtn.style.display = 'none';
    }

    // Update button event listeners
    addBtn.onclick = () => {
        toggleWishlist(recipeId);
        addBtn.style.display = 'none';
        removeBtn.style.display = 'inline-flex';
    };

    removeBtn.onclick = () => {
        toggleWishlist(recipeId);
        addBtn.style.display = 'inline-flex';
        removeBtn.style.display = 'none';
    };

    recipeModal.style.display = 'block';
}

// Wishlist Functionality
function toggleWishlist(recipeId) {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    const index = wishlist.indexOf(recipeId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(recipeId);
    }

    saveWishlist();
    renderRecipes();
    renderWishlist();
}

function isInWishlist(recipeId) {
    return wishlist.includes(recipeId);
}

function renderWishlist() {
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div class="empty-wishlist" data-aos="fade-up">
                <i class="fas fa-heart"></i>
                <p>Your wishlist is empty. Add some recipes to get started!</p>
            </div>
        `;
        return;
    }

    const wishlistRecipes = recipes.filter(recipe => wishlist.includes(recipe.id));
    wishlistGrid.innerHTML = wishlistRecipes.map(recipe => `
        <div class="recipe-card" data-aos="fade-up" data-aos-delay="${Math.random() * 200}">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.cookingTime}</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings}</span>
                    <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                </div>
                <div class="recipe-actions">
                    <button class="btn btn-primary" onclick="openRecipeModal(${recipe.id})">
                        View Recipe
                    </button>
                    <button class="wishlist-btn active" onclick="toggleWishlist(${recipe.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Authentication Functions
function showAuthModal(tab) {
    authModal.style.display = 'block';
    switchAuthTab(tab);
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        authModal.style.display = 'none';
        showNotification('Welcome back!', 'success');
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find(u => u.email === email)) {
        showNotification('Email already exists', 'error');
        return;
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    updateAuthUI();
    authModal.style.display = 'none';
    showNotification('Account created successfully!', 'success');
}

function handleLogout() {
    currentUser = null;
    wishlist = [];
    localStorage.removeItem('currentUser');
    localStorage.removeItem('wishlist');
    updateAuthUI();
    renderRecipes();
    renderWishlist();
    showNotification('Logged out successfully', 'success');
}

function updateAuthUI() {
    if (currentUser) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-flex';
    } else {
        loginBtn.style.display = 'inline-flex';
        signupBtn.style.display = 'inline-flex';
        logoutBtn.style.display = 'none';
    }
}

// Local Storage Functions
function loadUserData() {
    const savedUser = localStorage.getItem('currentUser');
    const savedWishlist = localStorage.getItem('wishlist');

    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }

    if (savedWishlist && currentUser) {
        wishlist = JSON.parse(savedWishlist);
    }
}

function saveWishlist() {
    if (currentUser) {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}

// Mobile Menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add notification styles (bottom-center)
    notification.style.cssText = `
        position: fixed;
        left: 50%;
        bottom: 24px;
        background: ${type === 'success' ? 'var(--primary-gold)' : type === 'error' ? 'var(--rich-burgundy)' : 'var(--royal-blue)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-medium);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translate(-50%, 150%);
        transition: transform 0.3s ease;
        max-width: 90vw;
        text-align: center;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translate(-50%, 0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translate(-50%, 150%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize wishlist rendering when user is logged in
if (currentUser) {
    renderWishlist();
}
