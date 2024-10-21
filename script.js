document.getElementById('recommenderForm').addEventListener('submit', function(event) {
event.preventDefault();
const age = document.getElementById('age').value;
const gender = document.getElementById('gender').value;
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
const foodType = document.getElementById('foodType').value;
const disease = document.getElementById('disease').value;
const allergies = document.getElementById('allergies').value;
const region = document.getElementById('region').value;
function displayInfo() {
    console.log(`Age: ${age}, Gender: ${gender}, Weight: ${weight}, Height: ${height}, Food Type: ${foodType}, Disease: ${disease}, Allergies: ${allergies}, Region: ${region}`);
}
displayInfo();
let recommendation = getDietRecommendation(region, foodType);

document.getElementById('recommendation').innerHTML = `
<h2>Your Personalized Diet Plan</h2>
<p><strong>Breakfast (7:00 AM - 8:00 AM):</strong></p>
<p>What you should eat: ${recommendation.breakfast.eat}</p>
<p>What you should avoid: ${recommendation.breakfast.avoid}</p>

<p><strong>Mid-Morning (10:00 AM - 11:00 AM):</strong></p>
<p>What you should eat: ${recommendation.midMorning.eat}</p>
<p>What you should avoid: ${recommendation.midMorning.avoid}</p>

<p><strong>Lunch (12:30 PM - 1:30 PM):</strong></p>
<p>What you should eat: ${recommendation.lunch.eat}</p>
<p>What you should avoid: ${recommendation.lunch.avoid}</p>

<p><strong>Evening Snack (4:00 PM - 5:00 PM):</strong></p>
<p>What you should eat: ${recommendation.eveningSnack.eat}</p>
<p>What you should avoid: ${recommendation.eveningSnack.avoid}</p>

<p><strong>Dinner (7:30 PM - 8:30 PM):</strong></p>
<p>What you should eat: ${recommendation.dinner.eat}</p>
<p>What you should avoid: ${recommendation.dinner.avoid}</p>
`;
document.getElementById('recommendation').style.display = 'block';
});

function getDietRecommendation(region, foodType) {
let breakfast = '';
let midMorning = '';
let lunch = '';
let evening = '';
let dinner = '';

if (region === 'indian') {
if (foodType === 'veg') {
breakfast = 'Vegetable poha or upma with fresh juice.';
midMorning = 'Fruit salad or buttermilk.';
lunch = 'Dal, roti, sabzi, and curd.';
evening = 'Nuts or a bowl of sprouts.';
dinner = 'Vegetable pulao or roti with paneer curry.';
} else {
breakfast = 'Eggs with whole grain toast and fresh juice.';
midMorning = 'Fruit smoothie or lassi.';
lunch = 'Chicken curry with rice and roti.';
evening = 'Boiled eggs or grilled chicken salad.';
dinner = 'Grilled fish or chicken with vegetables.';
}
} else if (region === 'chinese') {
if (foodType === 'veg') {
breakfast = 'Steamed buns with soy milk.';
midMorning = 'Fresh fruit or green tea.';
lunch = 'Vegetable stir-fry with tofu and rice.';
evening = 'Edamame or a small bowl of miso soup.';
dinner = 'Vegetable fried rice or noodles with tofu.';
} else {
breakfast = 'Congee with boiled eggs and pickled vegetables.';
midMorning = 'Green tea or a fruit salad.';
lunch = 'Chicken stir-fry with rice or noodles.';
evening = 'Prawn crackers or grilled fish skewers.';
dinner = 'Beef or chicken stir-fry with vegetables and rice.';
}
} else if (region === 'cuban') {
if (foodType === 'veg') {
breakfast = 'Tostones (fried plantains) with fresh juice.';
midMorning = 'Tropical fruit like papaya or mango.';
lunch = 'Black beans, rice, and yucca with a side salad.';
evening = 'Plantain chips or vegetable empanadas.';
dinner = 'Vegetable stew with rice or Cuban-style rice and beans.';
} else {
breakfast = 'Scrambled eggs with ham and Cuban toast.';
midMorning = 'Tropical fruit or Cuban coffee.';
lunch = 'Cuban sandwich with pork, ham, and cheese.';
evening = 'Grilled shrimp or chicken skewers.';
dinner = 'Roast pork with rice, beans, and plantains.';
}
} else if (region === 'brazilian') {
if (foodType === 'veg') {
breakfast = 'Acai bowl with granola and fruit.';
midMorning = 'Fresh coconut water or tropical fruits.';
lunch = 'Feijoada (black bean stew) with rice and vegetables.';
evening = 'Cheese bread (Pão de Queijo) or a smoothie.';
dinner = 'Vegetable stew with rice and beans.';
} else {
breakfast = 'Scrambled eggs with ham and pão de queijo.';
midMorning = 'Fresh tropical fruit or coconut water.';
lunch = 'Feijoada with pork and rice.';
evening = 'Grilled meat skewers or fried shrimp.';
dinner = 'Grilled beef with rice, beans, and salad.';
}
} else if (region === 'mexican') {
if (foodType === 'veg') {
breakfast = 'Chilaquiles with salsa and refried beans.';
midMorning = 'Fresh fruit with a sprinkle of chili powder.';
lunch = 'Vegetarian tacos with beans and salsa.';
evening = 'Guacamole with tortilla chips or a vegetable quesadilla.';
dinner = 'Vegetable enchiladas with rice and beans.';
} else {
breakfast = 'Huevos rancheros with chorizo and salsa.';
midMorning = 'Fruit salad or tamales with meat.';
lunch = 'Chicken or beef tacos with salsa and guacamole.';
evening = 'Grilled chicken or shrimp quesadilla.';
dinner = 'Beef fajitas with rice, beans, and tortillas.';
}
} else if (region === 'argentinian') {
if (foodType === 'veg') {
breakfast = 'Medialunas (sweet croissants) with coffee.';
midMorning = 'Fresh fruit or a small salad.';
lunch = 'Vegetarian empanadas with salad.';
evening = 'Cheese platter or grilled vegetables.';
dinner = 'Vegetable stew or pasta with a light sauce.';
} else {
breakfast = 'Scrambled eggs with medialunas and coffee.';
midMorning = 'Fresh fruit or yogurt.';
lunch = 'Beef empanadas with salad.';
evening = 'Grilled meat skewers or cheese with crackers.';
dinner = 'Grilled steak with potatoes and salad.';
}
} else if (region === 'middleEastern') {
if (foodType === 'veg') {
breakfast = 'Hummus and pita bread with fresh vegetables.';
midMorning = 'Fresh fruit or a handful of nuts.';
lunch = 'Falafel with tabbouleh and hummus.';
evening = 'Pita chips with baba ganoush or labneh.';
dinner = 'Vegetarian kebabs with couscous and salad.';
} else {
breakfast = 'Shakshuka with pita bread and olives.';
midMorning = 'Fresh fruit or nuts.';
lunch = 'Grilled chicken shawarma with tabbouleh and hummus.';
evening = 'Lamb kebabs or grilled chicken skewers.';
dinner = 'Lamb stew with couscous and vegetables.';
}
} else if (region === 'moroccan') {
if (foodType === 'veg') {
breakfast = 'Moroccan pancakes with honey and tea.';
midMorning = 'Fresh fruit or almonds.';
lunch = 'Vegetable tagine with couscous.';
evening = 'Olives with Moroccan flatbread.';
dinner = 'Vegetable couscous or lentil soup.';
} else {
breakfast = 'Eggs with Moroccan pancakes and honey.';
midMorning = 'Almonds or fresh fruit.';
lunch = 'Chicken tagine with couscous and vegetables.';
evening = 'Lamb skewers or Moroccan sausages (Merguez).';
dinner = 'Lamb tagine with couscous and vegetables.';
}
} else if (region === 'westAfrican') {
if (foodType === 'veg') {
breakfast = 'Fried plantains with beans and vegetables.';
midMorning = 'Fresh fruit or a smoothie.';
lunch = 'Jollof rice with beans and fried plantains.';
evening = 'Spicy roasted peanuts or akara (bean cakes).';
dinner = 'Vegetable stew with rice or fufu.';
} else {
breakfast = 'Eggs with fried plantains and meat.';
midMorning = 'Fruit smoothie or roasted peanuts.';
lunch = 'Jollof rice with grilled chicken or beef.';
evening = 'Grilled meat or fish skewers.';
dinner = 'Spicy chicken stew with rice or fufu.';
}
} else if (region === 'southAfrican') {
if (foodType === 'veg') {
breakfast = 'Pap (porridge) with fresh fruit.';
midMorning = 'Rooibos tea with a light snack.';
lunch = 'Vegetarian bobotie with rice and salad.';
evening = 'Biltong (vegan) or dried fruit snacks.';
dinner = 'Vegetable curry with rice or samp and beans.';
} else {
breakfast = 'Boerewors sausage with pap and eggs.';
midMorning = 'Biltong or dried meat.';
lunch = 'Bobotie with rice and salad.';
evening = 'Grilled steak or lamb chops.';
dinner = 'Braai (BBQ) meat with vegetables and potatoes.';
}
} else if (region === 'french') {
if (foodType === 'veg') {
breakfast = 'Croissant with fruit jam and coffee.';
midMorning = 'Fresh fruit or cheese.';
lunch = 'Vegetarian quiche with salad.';
evening = 'Cheese platter or baguette with butter.';
dinner = 'Ratatouille with French bread.';
} else {
breakfast = 'Omelette with ham and croissant.';
midMorning = 'Cheese or charcuterie.';
lunch = 'Chicken with ratatouille and French fries.';
evening = 'Baguette with pâté or grilled meat.';
dinner = 'Beef bourguignon with mashed potatoes.';
}
} else if (region === 'spanish') {
if (foodType === 'veg') {
breakfast = 'Churros with hot chocolate.';
midMorning = 'Fruit or Spanish tortilla.';
lunch = 'Paella with vegetables and salad.';
evening = 'Patatas bravas or olives with bread.';
dinner = 'Gazpacho or vegetable paella.';
} else {
breakfast = 'Churros with ham and eggs.';
midMorning = 'Spanish ham or cheese.';
lunch = 'Paella with seafood and salad.';
evening = 'Jamón ibérico or chorizo with bread.';
dinner = 'Seafood paella or roasted chicken.';
}
} else if (region === 'italian') {
if (foodType === 'veg') {
breakfast = 'Cappuccino with biscotti or croissant.';
midMorning = 'Fruit or small salad.';
lunch = 'Margherita pizza with salad.';
evening = 'Bruschetta with tomatoes and basil.';
dinner = 'Pasta with vegetables and olive oil.';
} else {
breakfast = 'Cappuccino with eggs and ham.';
midMorning = 'Cheese or prosciutto.';
lunch = 'Pizza with pepperoni and mozzarella.';
evening = 'Bruschetta or prosciutto with bread.';
dinner = 'Lasagna or spaghetti with meatballs.';
}
} else if (region === 'greek') {
if (foodType === 'veg') {
breakfast = 'Greek yogurt with honey and nuts.';
midMorning = 'Fresh fruit or olives.';
lunch = 'Greek salad with feta and olives.';
evening = 'Hummus with pita bread.';
dinner = 'Stuffed grape leaves with rice.';
} else {
breakfast = 'Greek yogurt with honey and bacon.';
midMorning = 'Fresh fruit or feta cheese.';
lunch = 'Souvlaki with tzatziki and pita bread.';
evening = 'Grilled lamb skewers or gyros.';
dinner = 'Moussaka or grilled fish with salad.';
}
} else if (region === 'japanese') {
if (foodType === 'veg') {
breakfast = 'Miso soup with rice and pickled vegetables.';
midMorning = 'Fresh fruit or green tea.';
lunch = 'Vegetable sushi or rice with tofu.';
evening = 'Edamame or miso soup.';
dinner = 'Tempura vegetables with rice.';
} else {
breakfast = 'Grilled fish with rice and miso soup.';
midMorning = 'Green tea or a fruit salad.';
lunch = 'Sushi with tuna or salmon.';
evening = 'Grilled chicken skewers or sashimi.';
dinner = 'Ramen with pork and eggs.';
}
} else if (region === 'korean') {
if (foodType === 'veg') {
breakfast = 'Kimchi with rice and vegetable soup.';
midMorning = 'Fruit or a rice cake.';
lunch = 'Bibimbap with vegetables and tofu.';
evening = 'Kimchi pancakes or a rice bowl.';
dinner = 'Vegetable stew with rice and kimchi.';
} else {
breakfast = 'Kimchi with eggs and grilled fish.';
midMorning = 'Rice cake or fruit.';
lunch = 'Bibimbap with beef and eggs.';
evening = 'Korean BBQ or grilled meat.';
dinner = 'Beef bulgogi with rice and kimchi.';
}
} else if (region === 'thai') {
if (foodType === 'veg') {
breakfast = 'Rice soup with tofu and vegetables.';
midMorning = 'Fresh fruit or Thai iced tea.';
lunch = 'Vegetarian pad thai with tofu and peanuts.';
evening = 'Spring rolls with sweet chili sauce.';
dinner = 'Green curry with vegetables and rice.';
} else {
breakfast = 'Chicken rice soup with herbs.';
midMorning = 'Thai iced tea or coconut water.';
lunch = 'Pad Thai with shrimp or chicken.';
evening = 'Chicken satay or spring rolls.';
dinner = 'Green curry with chicken and rice.';
}
} else if (region === 'vietnamese') {
if (foodType === 'veg') {
breakfast = 'Pho with tofu and vegetables.';
midMorning = 'Fresh fruit or coconut water.';
lunch = 'Vegetable spring rolls with peanut sauce.';
evening = 'Banh mi with tofu and vegetables.';
dinner = 'Stir-fried vegetables with rice.';
} else {
breakfast = 'Pho with beef or chicken.';
midMorning = 'Fruit or a small sandwich.';
lunch = 'Banh mi with pork or chicken.';
evening = 'Grilled shrimp or chicken skewers.';
dinner = 'Grilled pork with rice and vegetables.';
}
}

return { breakfast, midMorning, lunch, evening, dinner };
}
function getWorkoutRecommendation(region, foodType, disease, allergies) {
let workout = '';

if (disease === 'asthma') {
workout = 'Light exercises: Walking, yoga, swimming (low-intensity). Avoid running or intense cardio.';
} else if (disease === 'diabetes') {
workout = 'Moderate exercises: Brisk walking, cycling, strength training. Avoid high-intensity without proper monitoring.';
} else if (disease === 'arthritis') {
workout = 'Joint-friendly exercises: Water aerobics, cycling, yoga. Avoid high-impact exercises like running.';
} else if (disease === 'heart disease') {
workout = 'Heart-healthy exercises: Walking, low-intensity cycling, and stretching. Avoid high-intensity cardio.';
} else {
// Default workout based on region if no disease condition is provided
switch (region) {
case 'cuban':
workout = 'Dancing (salsa), walking, light strength training.';
break;
case 'brazilian':
workout = 'Capoeira, beach running, bodyweight exercises.';
break;
case 'mexican':
workout = 'Boxing, jogging, and core exercises (light to moderate).';
break;
case 'argentinian':
workout = 'Football (soccer drills), walking, bodyweight training.';
break;
case 'middle-eastern':
workout = 'Walking, light calisthenics, and yoga for flexibility.';
break;
case 'french':
workout = 'Pilates, brisk walking, and light cardio.';
break;
case 'spanish':
workout = 'Flamenco dancing, light running, and bodyweight exercises.';
break;
case 'italian':
workout = 'Cycling, walking, and bodyweight strength training.';
break;
case 'greek':
workout = 'Swimming, light running, and stretching exercises.';
break;
case 'japanese':
workout = 'Tai Chi, walking, and yoga.';
break;
case 'korean':
workout = 'Martial arts (taekwondo), jogging, and stretching.';
break;
case 'thai':
workout = 'Muay Thai (low intensity), stretching, and bodyweight exercises.';
break;
case 'vietnamese':
workout = 'Walking, cycling, and light stretching.';
break;
case 'indian': // Added Indian region
workout = 'Yoga, walking, light jogging, and bodyweight exercises. Avoid high-impact exercises if necessary.';
break;
case 'chinese': // Added Chinese region
workout = 'Tai Chi, walking, light martial arts (such as wushu), and light cardio.';
break;
default:
workout = 'Light cardio, walking, and yoga.';
break;
}
}

// Handle workout modifications based on allergies
if (allergies.includes('dust')) {
workout += ' Avoid outdoor activities on dusty days. Opt for indoor exercises like yoga, treadmill walking, or swimming in clean pools.';
}
if (allergies.includes('pollen')) {
workout += ' Stick to indoor workouts, such as yoga, stationary cycling, and light bodyweight exercises. Avoid outdoor runs.';
}
if (allergies.includes('nuts')) {
workout += ' Keep snacks nut-free. Go for post-workout energy boosters like fruits or nut-free protein bars.';
}
if (allergies.includes('lactose')) {
workout += ' Avoid dairy-based protein shakes. Opt for lactose-free alternatives like almond milk protein shakes after workouts.';
}
if (allergies.includes('gluten')) {
workout += ' Choose gluten-free post-workout meals and snacks, like quinoa bowls or gluten-free granola bars.';
}
if (allergies.includes('seafood')) {
workout += ' Stay away from seafood-based diet recommendations post-workout. Stick to land-based protein sources like chicken or plant-based alternatives.';
}
return workout;
}
