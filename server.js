const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const hairType = {
    '4c': {
        'about' : '4c hair type has the tightest curl pattern of all the curly hair types. Strands are formed in tight, springy, ringlets. 4c hair tends to clump more at the ends and is even more prone to shrinkage than 4b hair.',
        'hairCareTips' : ['Mosturize before styling', 'condition', 'wash and condition in sections'],
        'recommendedProducts' : ['Camille Rose Naturals Sweet Ginger Cleansing Rinse', 'Messen EZ Detangling Brush', 'Mielle Organiscs Rosemary Mint Scalp & Hair Strengthening Oil', 'Mielle Organics Pomegranate & Honey Leave-in', 'Uncle Funky\'s daughter curly magic', 'Kinky curly knot today detangler'] ,
        'image' : 'https://i.pinimg.com/736x/f5/19/4f/f5194fd3cfaacdc9c3e09a064ee31828.jpg'
    },
    '4b': {
        'about' : '4b hair is easily distinguished by its zigzag pattern. Unlike 4a or 4c, 4b has tight “Z” shaped strands with little definition in curl shape. Often, 4b hair is fluffy and can be soft or coarse depending on hair texture.' ,
        'hairCareTips' : ['Moisturize', 'Condition', 'finger-Comb', 'style'],
        'recommendedProducts' : ['Mielle Moisture RX Hawaiian Ginger Moisturizing Hair Butter', 'Messen EZ Detangling Brush', 'Soultanicals Knot Sauce Coil Detangler', 'Mielle Organics Avocado Hair Milk', 'Fresh Honey Nectar Deep Conditioning Treatment', 'The doux mousse def texture foam'] ,
        'image' : 'https://cdn2.stylecraze.com/wp-content/uploads/2018/02/All-You-Need-To-Know-About-4b-Hair.jpg'
    },
    '4a': {
        'about' : 'Type 4a hair has a dense, kinky curly texture with lots of volume to spare. The size of each curl is about as wide as a crochet needle. The coily texture has more of an S pattern than other type 4s, which is why it experiences much less shrinkage when going from wet to dry.',
        'hairCareTips' : ['Moisturize Regularly', 'Use Sulfate-Free Shampoo', 'Keep Your Scalp Healthy', 'Minimize Your Heat Usage', 'Be Careful With Hairstyles That Add Tension', 'Handle Your Hair With TLC', 'Sleep On a Satin Pillowcase'],
        'recommendedProducts' : ['Carol\'s Daughter Hair Milk Original Leave-In Moisturizer', 'Tgin Green Tea Super Moist Leave In Conditioner', 'Pattern Jojoba Oil Hair Serum', 'Kinky Curly Original Curling Custard', 'Camille Rose Algae Renew Deep Conditioner', 'As I Am Restore & Repair Jamaican Black Castor Oil CoWash'],
        'image' : 'https://blackhairtribe.com/wp-content/uploads/2019/02/type-4a-hair.jpg'
    },
    '3c': {
        'about' : '3C hair is made up of well-defined, tight corkscrews or coils with lots of strands densely packed together. Their circumference is the size of a pencil or straw. 3C curls have a fine to medium texture. This curl type is prone to dryness, tangles, and lack of curl definition.',
        'hairCareTips' : ['Wash and condition thoroughly.', ' Deep-condition.', 'use a curl cream', 'apply a curl refresher', 'Use sulfate-free shampoo', 'Low manipulation styles'],
        'recommendedProducts' : ['DevaCurl Melt Into Moisture Matcha Green Tea Butter Conditioning Mask', 'Kinder Curls Super Curls Styler', 'Camille Rose Aloe Whipped Butter Gel'],
        'image' : 'https://img-s.yoybuy.com/images/I/71thXf89fFL.jpg'
    },
    '3b': {
        'about' : 'Within the category of type 3 hair, 3b curls are a collection of bouncy ringlets. The circumference of each swirl is roughly that of a Sharpie marker. Because your curl type straddles the happy medium between 3a and 3c hair, you may also have some loose spirals and springy corkscrews in your locks.',
        'hairCareTips' : ['Layer products to build and retain moisture', 'Avoid heat as much as possible', 'Opt for lightweight leave-in products to avoid weighing hair down', 'Create (and follow) a comprehensive plan for daily care and protection'],
        'recommendedProducts' : ['Strictly Curls Curl Envy Perfect Curl Cream', 'PATTERN Curl Gel', 'BLACK VANILLA MOISTURE & SHINE HYDRATING CONDITIONER', 'HAIR MILK ORIGINAL LEAVE-IN MOISTURIZER'],
        'image' : 'https://p.favim.com/orig/2019/01/03/wig-baddie-curly-hair-Favim.com-6719879.jpg'
    },
    '3a': {
        'about' : 'Type 3a hair is characterized by well-defined spiral curls that are typically the size of a piece of sidewalk chalk. Although the circumference of 3a curls is wider than that of 3b and 3c hair, it can be difficult to tell the three curl types apart.', 
        'hairCareTips' : ['Find the Wash Technique That Works for You', 'Master Second-Day (And Even Third-Day) Curls', 'Prioritize Lightweight Hydration Out of the Shower', ' Confirm your porosity', ' Detangle from tip to root', ' Quench your thirsty curls.', ],
        'recommendedProducts' : ['Exotic Sulfate-free Biotin Shampoo, The Hair Doctor','Pink Collapsible Diffuser, Rizos Curls', 'Miracle Shake Leave In Detangler Spray, Kaleidoscope', '100% Pure Cold Pressed Organic Argan Oil, Pura D\'or\'s'],
        'image' : 'https://www.byrdie.com/thmb/AxqYP5MtzChB60emtCcjEnO7ULI=/700x840/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__237348__curl-type-237348-1539116427121-main.700x0c-a7dc8882937746a7b5ae1be3b4cea90c.jpg'
    },
    'other': 'wavy or curly'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:hairTypes', (request, response) => {
    const naturalhair = request.params.hairTypes.toLowerCase()
    if(hairType[naturalhair]) {
        response.json(hairType[naturalhair])
    }
    else {
        response.json(hairType['other'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running')
})