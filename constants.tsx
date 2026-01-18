
import { Product, Offer } from './types';

export const PIZZA_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Beef Lovers',
    description: 'Premium ground beef, savory steak strips, pepperoni, red onions, mushrooms, and our signature mozzarella blend.',
    prices: { small: 15000, med: 22000, large: 30000 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJL-t0bihGOHTyWWA5lhrWdyC2odxKSvvWTe8POt-RSmQAi_M7EyMdLFc3QRVwVgdlp3J0v60wX7p1EwskeM2i_sDn0N5tjYrFUesfJ-1t0BoID0dI23whA_K6HT5_SKHQQbZBmsetZkRLfXZHdHbqw8f00Y7I6Av5noq9gQV8_HIiJkRROrCZBpdvbnaAqI1EdM9tH5WhJH-euct99O643XXDUFk4O8qCIXY0Zmp351HfC2tEDTKC7YhStlD-FbY13YbpzAYOlg',
    category: 'meat',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Spicy Meatball',
    description: 'Italian meatballs, jalapeños, red chili flakes, roasted garlic, and a spicy San Marzano tomato base.',
    prices: { small: 16000, med: 24000, large: 32000 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsicxspXyQ-wM1lbyftRKiBl_RP49PFn_DPU6kZv32e6p1bbrpAdAi1Mkv_GMz5jf7qT1bDjRhIxYhaYr9Fwr6MgBlibH9SBIM-edZ1z20R6ORL28v6n_lxoVZzDJnmdHzyNLFpa43GLXCTt1wiWXMvSV2Xah5EREn1_PqNhnNnMH11yufnCTmTJdM9M1yEdrVYTzzgtn_Oy16mLtJ4Yhufn3IPLEx7wO3QnY0-w_0lEJZt2I70n5WT2ejevr4utihzi2JSqD3dQ',
    category: 'meat',
    isSpicy: true
  },
  {
    id: 'p4',
    name: 'BBQ Chicken',
    description: 'Grilled chicken breast, tangy BBQ sauce, red onions, fresh cilantro, and smoked gouda cheese.',
    prices: { small: 15000, med: 23000, large: 31000 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzRGc2MvQYMuxK8_ToowSfEyKDOY3ccGglwc4QNG2y46ob7gso6BlXtYZZvsgDFlyittRFbzK2pyAojhbQYvCNQwD42LmOqZN98WH9HzPOKmH_NSkFffp5dSxONfOvjL5TKe1CT1OCcdR3azL3-wsyAyQ3PiXCBgmUGwKnnwulg5q7MoLi8O9AvHY-g7KprFxlWlVCVN113-Cp5edYih2F2ZTaYlKGxtQ3KDdX_5LI1b16Z2jTW2Q0M_-hLTRKBtFnBeFpJD6tQg',
    category: 'chicken',
    isPopular: true
  },
  {
    id: 'sauce1',
    name: 'Garlic Sauce',
    description: 'Our house-made creamy garlic butter dip with aromatic herbs.',
    prices: { small: 2000, med: 3500, large: 5000 },
    image: 'https://images.unsplash.com/photo-1541530232473-b3286431526d?auto=format&fit=crop&q=80&w=400',
    category: 'sides'
  },
  {
    id: 'sauce2',
    name: 'Peri-Peri Sauce',
    description: 'Spicy African bird\'s eye chili sauce for a fiery kick.',
    prices: { small: 2000, med: 3500, large: 5000 },
    image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=400',
    category: 'sides',
    isSpicy: true
  },
  {
    id: 'sauce3',
    name: 'Green Sauce',
    description: 'Zesty cilantro, lime, and jalapeño herb blend.',
    prices: { small: 2000, med: 3500, large: 5000 },
    image: 'https://images.unsplash.com/photo-1470333732907-05ccc2abc0c8?auto=format&fit=crop&q=80&w=400',
    category: 'sides'
  }
];

export const SPECIAL_OFFERS: Offer[] = [
  {
    id: 'o1',
    title: 'Family Feast Bundle',
    subtitle: 'Save 20% on any 2 large pizzas',
    badge: 'Limited Time',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEYX9__3fjk-pELS38fO_lBg2qe9lfMrXNzZJlZEs6HcYRvn5DIvZj5jXBcP9dRIlrFABg1sr1c5-LSPyZ7pOUUDL8wB4jEci0UUols2_dOvdvwyMgyazmDj4T3tG1prPFOd6zmNnqISBP41scwyyo6Run8Cbo0Bd5xeqBWjkEbgv3WaIjAiC188to4tjjhsIvcMvwdarg6MGAD5Rk9oZo4N4_hTWHXEG_gKJnlDQBOMrkzarjjLQ1DAJ9-lXg_z24lrNY_D2f6Q'
  },
  {
    id: 'o2',
    title: '2-for-1 Tuesdays',
    subtitle: 'Buy one get one free on all classics',
    badge: 'Every Tuesday',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIlupwFvtHsylZIeKZOQUn1RqoVAvaFjiTf9SCwUb0nRffdToPw45gmO4WG5xrPSBLnUBEC5FERJJRQGzgcn8zF9xaKFkhUnQ_6NDwYfeUqWj8Ne4MpOKFSs2_LKmoihEG4Be6cNOMtKyQDhc_RkNIWJRwiChCvRSFLJTvguSyworaamk1BET-NvmAjs9j6paqHXtTyrgH7SYGoR0Tb6G2rj_NBOdRaD3S1NA4tI-EDcuxgz0xdY5YKeQys-ugvgDBjOXxeD_VWw'
  },
  {
    id: 'o3',
    title: 'Lunch Combo',
    subtitle: 'Small pizza + drink for only 18,000',
    badge: '11AM - 3PM',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
  }
];
