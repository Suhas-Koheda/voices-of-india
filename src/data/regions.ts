import type { Region } from "@/types/region";

export const regions: Region[] = [
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    tagline: "Temples, coastline, and Kuchipudi",
    description:
      "Andhra Pradesh stretches from the Eastern Ghats to the Bay of Bengal. It is a land of ancient temples, fiery cuisine, and a coastline longer than most countries.",
    language: "Telugu",
    languageFamily: "Dravidian",
    capital: "Amaravati",
    cities: [
      { name: "Visakhapatnam", description: "Port city on the Bay of Bengal, known for its submarine museum and beaches" },
      { name: "Vijayawada", description: "Commercial hub on the Krishna River, gateway to Buddhist sites" },
      { name: "Tirupati", description: "Home to the world's most visited pilgrimage site" },
      { name: "Guntur", description: "Famous for its chilli trade and Andhra's spiciest food" },
    ],
    geography:
      "A long coastal state along the Bay of Bengal, bordered by the Eastern Ghats. The Godavari and Krishna rivers carve fertile deltas through the landscape.",
    history:
      "Successive kingdoms — Satavahanas, Vijayanagara, Qutb Shahis, Mughals, and the British — shaped this land. Kuchipudi dance originated in Krishna district.",
    food: [
      { name: "Gongura Pachadi", description: "Sorrel leaf chutney — the defining taste of Andhra cuisine" },
      { name: "Pesarattu", description: "Green moong dal dosa, a coastal breakfast staple" },
      { name: "Pulihora", description: "Tamarind rice — served at every temple and festival" },
    ],
    landmarks: [
      { name: "Tirumala Venkateswara Temple", description: "The richest and most visited temple in the world, perched at 853m" },
      { name: "Amaravati Stupa", description: "Buddhist monument dating to 2nd century BCE" },
      { name: "Lepakshi", description: "Village with a hanging pillar and Vijayanagara-era murals" },
      { name: "Araku Valley", description: "Hill station in the Eastern Ghats, known for coffee plantations" },
    ],
    traditions:
      "Kuchipudi dance, Sankranti celebrations, Harivillu puppet theatre, and the legendary Andhra hospitality of feeding guests until they can eat no more.",
    phrases: [
      { id: "ap-1", text: "ఏం చేస్తున్నావ్?", transliteration: "Eam cestunnav?", meaning: "What are you doing?" },
      { id: "ap-2", text: "ఎలా ఉన్నావ్?", transliteration: "Ela unnava?", meaning: "How are you?" },
      { id: "ap-3", text: "చాలా బాగుంది", transliteration: "Chala bagundi", meaning: "It's very good" },
      { id: "ap-4", text: "ధన్యవాదాలు", transliteration: "Dhanyavadalu", meaning: "Thank you" },
    ],
    expressions: [
      { id: "ap-expr-1", text: "అబ్బాయి!", meaning: "Wow!", context: "Expressing surprise or admiration" },
      { id: "ap-expr-2", text: "ఏం కావాలి?", meaning: "What do you want?", context: "Directly asking someone's need" },
    ],
    songs: [
      { id: "ap-song-1", title: "Tyagaraja Kritis", description: "Classical Carnatic compositions by saint Tyagaraja in Telugu devotional tradition." },
      { id: "ap-song-2", title: "Lambadi Folk Songs", description: "Traditional songs of the Lambadi community celebrating harvest and love." },
    ],
    relatedSlugs: ["telangana", "karnataka", "tamil-nadu"],
  },
  {
    id: "telangana",
    name: "Telangana",
    slug: "telangana",
    tagline: "Deccani flavour, Nizam heritage, tech capital",
    description:
      "Telangana is where Mughal courts met Dravidian soil. Hyderabad's biryani, Charminar, and pearl trade define a culture of refinement and reinvention.",
    language: "Telugu",
    languageFamily: "Dravidian",
    capital: "Hyderabad",
    cities: [
      { name: "Hyderabad", description: "City of pearls and biryani, India's pharma and IT capital" },
      { name: "Warangal", description: "Ancient capital of the Kakatiya dynasty" },
      { name: "Karimnagar", description: "Silver city known for its filigree work" },
      { name: "Nizamabad", description: "Fort town on the Godavari, known for turmeric trade" },
    ],
    geography:
      "The Deccan plateau, semi-arid with red soil. The Krishna and Godavari rivers flow through rocky terrain.",
    history:
      "The Qutb Shahi dynasty founded Hyderabad in 1591. The Nizams ruled for centuries, making it one of the richest courts in the world. Telangana achieved separate statehood in 2014.",
    food: [
      { name: "Hyderabadi Biryani", description: "Kachchi dum biryani — raw meat and rice slow-cooked together" },
      { name: "Haleem", description: "Slow-cooked wheat and meat stew, a Ramadan specialty" },
      { name: "Double Ka Meetha", description: "Bread pudding soaked in saffron milk — a Mughal-era dessert" },
    ],
    landmarks: [
      { name: "Charminar", description: "Four-minareted mosque built in 1591, the icon of Hyderabad" },
      { name: "Golconda Fort", description: "Acoustic marvel and former diamond trading centre" },
      { name: "Qutb Shahi Tombs", description: "Tombs of the seven Qutb Shahi rulers" },
      { name: "Ramoji Film City", description: "The world's largest film studio complex" },
    ],
    traditions:
      "Bonalu festival honouring Goddess Mahakali, Bathukamma flower festival, Deccani Urdu poetry mushairas, Hyderabad's Irani chai culture, and pearl shopping in the old city.",
    phrases: [
      { id: "ts-1", text: "ఎలా ఉన్నావ్ రా?", transliteration: "Ela unnava ra?", meaning: "How are you, buddy?" },
      { id: "ts-2", text: "నాకు అర్థం కాలేదు", transliteration: "Naku artham kaledu", meaning: "I don't understand" },
      { id: "ts-3", text: "హైదరాబాద్ చాలా అందంగా ఉంది", transliteration: "Hyderabad chala andanga undi", meaning: "Hyderabad is beautiful" },
    ],
    expressions: [
      { id: "ts-expr-1", text: "ఖాయిల్లు!", meaning: "Absolutely!", context: "Enthusiastic confirmation" },
      { id: "ts-expr-2", text: "చెప్పితే చాలు!", meaning: "Just say it!", context: "Asking someone to be direct" },
    ],
    songs: [
      { id: "ts-song-1", title: "Bonalu Festival Songs", description: "Devotional songs during Bonalu honouring Goddess Mahakali." },
      { id: "ts-song-2", title: "Deccani Folk Songs", description: "Songs blending Telugu and Urdu influences from the Deccan." },
    ],
    relatedSlugs: ["andhra-pradesh", "maharashtra", "karnataka"],
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    tagline: "Two thousand years of continuous civilisation",
    description:
      "Tamil Nadu is where Indian cinema, Carnatic music, and temple architecture reached their highest forms. Its coastline is dotted with ancient port cities that traded with Rome before most of Europe had cities.",
    language: "Tamil",
    languageFamily: "Dravidian",
    capital: "Chennai",
    cities: [
      { name: "Chennai", description: "India's capital of Carnatic music, classical dance, and Tamil cinema" },
      { name: "Madurai", description: "One of the oldest continuously inhabited cities" },
      { name: "Coimbatore", description: "Manchester of South India, gateway to Nilgiri hill stations" },
      { name: "Tiruchirappalli", description: "Rockfort city with a fortress carved from a single rock" },
    ],
    geography:
      "A coastal plain flanked by the Western and Eastern Ghats. The Nilgiri hills meet Kerala's mountains. The Cauvery delta is the rice bowl of the south.",
    history:
      "The Sangam period produced some of the world's oldest secular literature. Chola, Chera, and Pandya dynasties ruled for millennia. The Chola navy was the first to cross the Bay of Bengal.",
    food: [
      { name: "Dosa & Idli", description: "Fermented rice and lentil batter — the everyday breakfast" },
      { name: "Chettinad Chicken", description: "Fiery curry from the Nattukottai Chettiar community" },
      { name: "Rasam", description: "Tamarind-pepper soup, drunk as medicine and comfort food" },
    ],
    landmarks: [
      { name: "Meenakshi Temple", description: "14 gopurams covered in 33,000 sculptures in Madurai" },
      { name: "Brihadisvara Temple", description: "11th-century Chola masterpiece in Thanjavur" },
      { name: "Shore Temple", description: "8th-century Pallava rock-cut temple at Mahabalipuram" },
      { name: "Nilgiri Mountain Railway", description: "UNESCO heritage toy train climbing through tea estates" },
    ],
    traditions:
      "Bharatanatyam dance, Pongal harvest festival, Carnatic music season, kolam floor art drawn every morning, and Jallikattu bull-taming.",
    phrases: [
      { id: "tn-1", text: "எப்படி இருக்கீங்க?", transliteration: "Eppadi irukkinga?", meaning: "How are you?" },
      { id: "tn-2", text: "நன்றி", transliteration: "Nandri", meaning: "Thank you" },
      { id: "tn-3", text: "ரொம்ப நல்லா இருக்கு", transliteration: "Romba nalla irukku", meaning: "It's very good" },
    ],
    expressions: [
      { id: "tn-expr-1", text: "சூப்பர்!", meaning: "Super!", context: "Common expression of admiration" },
      { id: "tn-expr-2", text: "ஐயோ!", meaning: "Oh my!", context: "Expressing surprise" },
    ],
    songs: [
      { id: "tn-song-1", title: "Carnatic Music Tradition", description: "The heartland of Carnatic music with timeless kritis." },
      { id: "tn-song-2", title: "Gaana Songs of Chennai", description: "Street folk music from North Chennai expressing everyday life." },
    ],
    relatedSlugs: ["kerala", "karnataka", "andhra-pradesh"],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    slug: "karnataka",
    tagline: "From Hampi's ruins to Bengaluru's tech parks",
    description:
      "Karnataka is a state of contrasts — ancient Hampi boulders sit alongside Bengaluru's startup culture. Its coastline, coffee plantations, and Jain pilgrimage sites make it deeply diverse.",
    language: "Kannada",
    languageFamily: "Dravidian",
    capital: "Bengaluru",
    cities: [
      { name: "Bengaluru", description: "India's Silicon Valley, craft beer capital, and garden city" },
      { name: "Mysuru", description: "City of palaces, Dasara celebrations, and Mysore silk" },
      { name: "Hubballi", description: "Commercial hub of North Karnataka" },
      { name: "Mangaluru", description: "Coastal port city, gateway to stunning beaches" },
    ],
    geography:
      "Three distinct zones: the coastal Konkan strip, the mountainous Malenadu Western Ghats, and the dry Deccan plateau.",
    history:
      "The Vijayanagara Empire built Hampi into one of the world's largest cities. The Chalukyas, Hoysalas, and Wodeyars each left architectural masterpieces.",
    food: [
      { name: "Bisi Bele Bath", description: "Hot lentil rice — Karnataka's answer to khichdi" },
      { name: "Mysore Pak", description: "Ghee-rich sweet from Mysore, now a national favourite" },
      { name: "Neer Dosa", description: "Delicate rice crepes from the Mangalore coast" },
    ],
    landmarks: [
      { name: "Hampi", description: "UNESCO World Heritage ruins of Vijayanagara across boulder-strewn landscape" },
      { name: "Mysore Palace", description: "Indo-Saracenic marvel illuminated with 97,000 bulbs every Sunday" },
      { name: "Coorg", description: "Scotland of India — coffee estates and misty hills" },
      { name: "Belur & Halebidu", description: "Hoysala temples with stone carvings that look like lace" },
    ],
    traditions:
      "Yakshagana night-long folk theatre, Dasara celebrations in Mysuru, Kolata stick dance, Hampi Utsav music festival, and Coorg's coffee culture.",
    phrases: [
      { id: "ka-1", text: "ಹೇಗಿದ್ದೀರಿ?", transliteration: "Hegiddiri?", meaning: "How are you?" },
      { id: "ka-2", text: "ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ", transliteration: "Nanage arthavaguttilla", meaning: "I don't understand" },
      { id: "ka-3", text: "ಧನ್ಯವಾದ", transliteration: "Dhanyavada", meaning: "Thank you" },
    ],
    expressions: [
      { id: "ka-expr-1", text: "ಅಯ್ಯೋ!", meaning: "Oh no!", context: "Expressing dismay" },
      { id: "ka-expr-2", text: "ಸೂಪರ್ ಆಗಿದೆ!", meaning: "It's super!", context: "Expressing enthusiasm" },
    ],
    songs: [
      { id: "ka-song-1", title: "Yakshagana", description: "Traditional folk theatre combining dance, music, and dialogue." },
      { id: "ka-song-2", title: "Kolata Folk Songs", description: "Songs accompanying the traditional stick dance." },
    ],
    relatedSlugs: ["tamil-nadu", "andhra-pradesh", "kerala"],
  },
  {
    id: "kerala",
    name: "Kerala",
    slug: "kerala",
    tagline: "God's Own Country — backwaters, spices, and Kathakali",
    description:
      "Kerala is a narrow strip between the Western Ghats and the Arabian Sea. Its backwaters, Ayurveda, spice trade history, and literary culture make it unlike anywhere else in India.",
    language: "Malayalam",
    languageFamily: "Dravidian",
    capital: "Thiruvananthapuram",
    cities: [
      { name: "Thiruvananthapuram", description: "Capital city, home to Padmanabhaswamy Temple with hidden treasures" },
      { name: "Kochi", description: "Queen of the Arabian Sea — Chinese fishing nets, colonial quarters, art biennale" },
      { name: "Kozhikode", description: "City of spices, where Vasco da Gama first landed in India" },
      { name: "Thrissur", description: "Cultural capital, home to the spectacular Thrissur Pooram festival" },
    ],
    geography:
      "A 580km coastline along the Arabian Sea, backed by the Western Ghats. The backwaters — a network of 900km of lakes, canals, and lagoons — form a unique ecosystem.",
    history:
      "Kerala's spice trade attracted Romans, Arabs, Chinese, and Europeans for millennia. It was one of the world's first regions to have a written constitution. The state has India's highest literacy rate.",
    food: [
      { name: "Appam & Stew", description: "Lacy rice pancakes with coconut milk stew — the classic Kerala breakfast" },
      { name: "Karimeen Pollichathu", description: "Pearl spot fish wrapped in banana leaf and pan-fried" },
      { name: "Sadya", description: "Banana-leaf feast with 26+ dishes served during Onam" },
    ],
    landmarks: [
      { name: "Alleppey Backwaters", description: "Houseboat cruise through Kerala's famous waterways" },
      { name: "Fort Kochi", description: "450-year-old colonial quarter with Portuguese, Dutch, and Jewish heritage" },
      { name: "Munnar", description: "Hill station surrounded by endless tea estates at 1,600m" },
      { name: "Bekal Fort", description: "17th-century fort on a headland overlooking the Arabian Sea" },
    ],
    traditions:
      "Kathakali dance-drama, Onam harvest festival with Pookalam flower carpets, snake boat races (Vallam Kali), Theyyam ritual performances, and Ayurvedic wellness traditions.",
    phrases: [
      { id: "kl-1", text: "സുഖമാണോ?", transliteration: "Sukhamano?", meaning: "Are you well?" },
      { id: "kl-2", text: "എനിക്ക് മനസ്സിലായില്ല", transliteration: "Enikku manassilayilla", meaning: "I don't understand" },
      { id: "kl-3", text: "നന്ദി", transliteration: "Nandi", meaning: "Thank you" },
    ],
    expressions: [
      { id: "kl-expr-1", text: "അപ്പൊ!", meaning: "Then! So!", context: "Conversational filler to continue a story" },
      { id: "kl-expr-2", text: "മാർക്ക് സാർ!", meaning: "Amazing!", context: "Enthusiastic approval" },
    ],
    songs: [
      { id: "kl-song-1", title: "Mappila Pattu", description: "Muslim folk songs blending Malayalam with Arabic and Tamil influences." },
      { id: "kl-song-2", title: "Margam Kali Songs", description: "Ancient songs of the Syrian Christian community." },
    ],
    relatedSlugs: ["karnataka", "tamil-nadu"],
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    slug: "maharashtra",
    tagline: "Bollywood, forts, and the Marathi spirit",
    description:
      "Maharashtra is a powerhouse of culture and commerce. From the literary legacy of Tukaram to Bollywood and the rhythms of Lavani dance, it's a state of many voices and many terrains.",
    language: "Marathi",
    languageFamily: "Indo-Aryan",
    capital: "Mumbai",
    cities: [
      { name: "Mumbai", description: "City of dreams — Bollywood, street food, and the Gateway of India" },
      { name: "Pune", description: "Oxford of the East, cultural capital of the Marathas" },
      { name: "Nagpur", description: "Orange city and geographic centre of India" },
      { name: "Nashik", description: "Wine capital of India and Kumbh Mela city" },
    ],
    geography:
      "Western coast along the Arabian Sea, rising to the Western Ghats (Sahyadri), then flattening into the Deccan plateau. The Sahyadri forts line the mountain passes.",
    history:
      "Shivaji Maharaj built a maritime empire from the Sahyadri forts in the 17th century. The Maratha Empire became the largest Indian power before British rule. Pune was the centre of the freedom movement.",
    food: [
      { name: "Vada Pav", description: "Mumbai's burger — spiced potato fritter in a bun with chutneys" },
      { name: "Misal Pav", description: "Spicy sprouted moth bean curry with bread — Pune's breakfast of choice" },
      { name: "Modak", description: "Sweet dumpling — Ganpati's favourite offering" },
    ],
    landmarks: [
      { name: "Gateway of India", description: "1924 arch on the Mumbai waterfront, built for King George V's visit" },
      { name: "Ajanta & Ellora Caves", description: "UNESCO cave temples and monasteries spanning 2,000 years" },
      { name: "Shaniwar Wada", description: "18th-century fortification of the Peshwa rulers in Pune" },
      { name: "Lonar Crater", description: "52,000-year-old meteorite crater with a saline lake" },
    ],
    traditions:
      "Ganesh Chaturthi — Maharashtra's most spectacular public celebration with massive processions. Lavani dance, Tamasha folk theatre, Powada ballads of Maratha heroes, and Ganesh Visarjan immersion ceremonies.",
    phrases: [
      { id: "mh-1", text: "कसं आहे तू?", transliteration: "Kasam ahe tu?", meaning: "How are you?" },
      { id: "mh-2", text: "मला समजत नाही", transliteration: "Mala samajat nahi", meaning: "I don't understand" },
      { id: "mh-3", text: "धन्यवाद", transliteration: "Dhanyavad", meaning: "Thank you" },
      { id: "mh-4", text: "हे खूप छान आहे", transliteration: "He khup chhan ahe", meaning: "This is very nice" },
    ],
    expressions: [
      { id: "mh-expr-1", text: "काय बातमी आहे!", meaning: "What's the news!", context: "Greeting someone enthusiastically" },
      { id: "mh-expr-2", text: "अरे बाळा!", meaning: "Oh friend!", context: "Affectionate way to address someone" },
    ],
    songs: [
      { id: "mh-song-1", title: "Lavani Songs", description: "Energetic folk songs accompanying Lavani dance." },
      { id: "mh-song-2", title: "Abhangas of Sant Tukaram", description: "Devotional poetry by the 17th-century saint." },
    ],
    relatedSlugs: ["gujarat", "rajasthan", "telangana"],
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    slug: "west-bengal",
    tagline: "Where Rabindranath Tagore's India was born",
    description:
      "West Bengal's cultural identity runs deep — from Tagore's Nobel Prize-winning literature to the intellectual traditions of Kolkata. Bengali is one of India's most poetic languages.",
    language: "Bengali",
    languageFamily: "Indo-Aryan",
    capital: "Kolkata",
    cities: [
      { name: "Kolkata", description: "City of Joy — trams, bookstores, and India's cultural capital" },
      { name: "Darjeeling", description: "Hill station with tea estates and views of Kanchenjunga" },
      { name: "Siliguri", description: "Gateway to the Northeast, where four countries meet" },
      { name: "Howrah", description: "Twin city of Kolkata, home to the iconic Howrah Bridge" },
    ],
    geography:
      "From the Himalayan foothills in the north to the Sundarbans mangrove delta in the south. The Ganges splits into a vast delta before entering the Bay of Bengal.",
    history:
      "Kolkata was the capital of British India until 1911. It produced Nobel laureates Rabindranath Tagore and Amartya Sen. The Bengali Renaissance of the 19th century transformed Indian literature, science, and politics.",
    food: [
      { name: "Rosogolla", description: "Syrupy cheese balls — the sweet Bengalis argue about most" },
      { name: "Fish Curry", description: "Hilsa in mustard sauce — the quintessential Bengali meal" },
      { name: "Puchka", description: "Bengal's version of pani puri, but crunchier and spicier" },
    ],
    landmarks: [
      { name: "Victoria Memorial", description: "White marble palace-museum in Kolkata, a Raj-era masterpiece" },
      { name: "Howrah Bridge", description: "Cantilever bridge over the Ganges — no pillars, all engineering" },
      { name: "Sundarbans", description: "World's largest mangrove forest, home to the Royal Bengal Tiger" },
      { name: "Darjeeling Himalayan Railway", description: "The toy train, a UNESCO heritage site" },
    ],
    traditions:
      "Durga Puja — a five-day festival transforming Kolkata into an open-air art gallery. Baul mystical music, Rabindra Sangeet songs, Bengali cinema, and the intellectual adda culture of coffee houses.",
    phrases: [
      { id: "wb-1", text: "আপনি কেমন আছেন?", transliteration: "Apni kemon achen?", meaning: "How are you?" },
      { id: "wb-2", text: "ধন্যবাদ", transliteration: "Dhanyabad", meaning: "Thank you" },
      { id: "wb-3", text: "এটা খুব ভালো", transliteration: "Eta khub bhalo", meaning: "This is very good" },
    ],
    expressions: [
      { id: "wb-expr-1", text: "কী সুন্দর!", meaning: "How beautiful!", context: "Expressing admiration" },
      { id: "wb-expr-2", text: "বাহ্!", meaning: "Wow!", context: "Expressing wonder or approval" },
    ],
    songs: [
      { id: "wb-song-1", title: "Rabindra Sangeet", description: "Songs by Tagore forming an entire genre celebrating love and humanity." },
      { id: "wb-song-2", title: "Baul Songs", description: "Mystical folk songs of wandering minstrels blending Sufi and Hindu traditions." },
    ],
    relatedSlugs: ["punjab"],
  },
  {
    id: "punjab",
    name: "Punjab",
    slug: "punjab",
    tagline: "The land of five rivers and bhangra beats",
    description:
      "Punjab's voice is bold, joyful, and musical. Bhangra beats, warm hospitality, and the Gurmukhi script define a culture of resilience and celebration.",
    language: "Punjabi",
    languageFamily: "Indo-Aryan",
    capital: "Chandigarh",
    cities: [
      { name: "Amritsar", description: "Home to the Golden Temple — spiritual heart of Sikhism" },
      { name: "Ludhiana", description: "Industrial powerhouse and India's Manchester of the North" },
      { name: "Jalandhar", description: "Sports goods capital and cultural hub of Doaba" },
      { name: "Patiala", description: "Royal city known for pegs of whisky and Patiala salwar" },
    ],
    geography:
      "The fertile Indo-Gangetic plain, watered by five rivers (Sutlej, Beas, Ravi, Chenab, Jhelum). Flat, green, and agricultural — India's breadbasket.",
    history:
      "Punjab was the gateway to India for every invasion — Gandharans, Mughals, Sikhs, British. The Sikh Empire under Maharaja Ranjit Singh was the last major Indian power before British conquest.",
    food: [
      { name: "Makki di Roti & Sarson da Saag", description: "Cornbread with mustard greens — Punjab's winter soul food" },
      { name: "Butter Chicken", description: "Creamy tomato curry invented in a Moti Mahal kitchen in Delhi" },
      { name: "Amritsari Kulcha", description: "Stuffed bread baked in a tandoor, served with chole" },
    ],
    landmarks: [
      { name: "Golden Temple", description: "Holiest Sikh shrine, its gold dome reflected in the sacred pool" },
      { name: "Wagah Border", description: "India-Pakistan border ceremony — daily flag-lowering spectacle" },
      { name: "Jallianwala Bagh", description: "1919 massacre site — a narrow passage that changed Indian history" },
      { name: "Pinjore Gardens", description: "Mughal-style terraced gardens built by Fidai Khan" },
    ],
    traditions:
      "Bhangra and Giddha dance, Lohri bonfire festival, Vaisakhi harvest celebration, Langar community kitchen at the Golden Temple feeding 100,000 daily, and the tradition of Pelte Raho (keep going).",
    phrases: [
      { id: "pb-1", text: "ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?", transliteration: "Tusi kinwe ho?", meaning: "How are you?" },
      { id: "pb-2", text: "ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਉਂਦੀ", transliteration: "Mainu samajh nahi aundi", meaning: "I don't understand" },
      { id: "pb-3", text: "ਤੁਹਾਡਾ ਧੰਨਵਾਦ", transliteration: "Tuhada dhannvad", meaning: "Thank you" },
      { id: "pb-4", text: "ਜੀ ਆਇਆਂ ਨੂੰ", transliteration: "Ji aayan nu", meaning: "Welcome" },
    ],
    expressions: [
      { id: "pb-expr-1", text: "ਬੱਸ!", meaning: "Enough! That's it!", context: "Expressing completion or satisfaction" },
      { id: "pb-expr-2", text: "ਕਿੱਥੇ ਹੋ ਜੀ?", meaning: "Where are you?", context: "Calling out to someone" },
    ],
    songs: [
      { id: "pb-song-1", title: "Bhangra Music", description: "Energetic folk music with the dhol drum celebrating harvest and festivity." },
      { id: "pb-song-2", title: "Sufi Qawwali", description: "Devotional Sufi music at shrines blending Punjabi poetry with ecstatic expression." },
    ],
    relatedSlugs: ["rajasthan", "west-bengal"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    slug: "rajasthan",
    tagline: "Land of Kings — forts, deserts, and folk music",
    description:
      "Rajasthan is a tapestry of forts, deserts, and vibrant folk traditions. Rajasthani languages carry the valor and poetry of a royal past that still lives in its palaces and festivals.",
    language: "Rajasthani",
    languageFamily: "Indo-Aryan",
    capital: "Jaipur",
    cities: [
      { name: "Jaipur", description: "The Pink City — Jantar Mantar, Hawa Mahal, and gem trade" },
      { name: "Jodhpur", description: "The Blue City — Mehrangarh Fort towering over indigo houses" },
      { name: "Udaipur", description: "City of Lakes — the most romantic city in India" },
      { name: "Jaisalmer", description: "The Golden City rising from the Thar Desert" },
    ],
    geography:
      "The Thar Desert in the west, the Aravalli hills running northeast to southwest. The Mewar region is green and hilly, while Marwar is arid and sandy.",
    history:
      "Rajput clans built massive hill forts and ruled independent kingdoms for centuries. Mewar's Maharana Pratap resisted the Mughals. The palaces of Jaipur, Udaipur, and Jodhpur are living museums.",
    food: [
      { name: "Dal Baati Churma", description: "Baked wheat balls with lentils — Rajasthani soldier food turned delicacy" },
      { name: "Gatte ki Sabzi", description: "Gram flour dumplings in spiced yoghurt gravy" },
      { name: "Ker Sangri", description: "Desert beans and berries — the taste of survival in the Thar" },
    ],
    landmarks: [
      { name: "Amber Fort", description: "Hilltop palace-fortress with Sheesh Mahal mirror hall" },
      { name: "Mehrangarh Fort", description: "One of India's largest forts, rising 125m above Jodhpur" },
      { name: "City Palace, Udaipur", description: "Lakeside palace complex still partly occupied by the Mewar royal family" },
      { name: "Sam Sand Dunes", description: "Thar Desert sunset camel rides near Jaisalmer" },
    ],
    traditions:
      "Ghoomar and Kalbeliya dance (UNESCO heritage), Pushkar Camel Fair, Desert Festival of Jaisalmer, puppet theatre (Kathputli), block printing, and blue pottery.",
    phrases: [
      { id: "rj-1", text: "पधारो सा!", transliteration: "Padharo sa!", meaning: "Please come! (welcome)" },
      { id: "rj-2", text: "केम छो?", transliteration: "Kem cho?", meaning: "How are you?" },
      { id: "rj-3", text: "धन्यवाद", transliteration: "Dhanyavad", meaning: "Thank you" },
    ],
    expressions: [
      { id: "rj-expr-1", text: "पधारो सा!", meaning: "Please come!", context: "Traditional Rajasthani welcome" },
      { id: "rj-expr-2", text: "क्या बात है!", meaning: "Wonderful!", context: "Expressing admiration" },
    ],
    songs: [
      { id: "rj-song-1", title: "Manganiyar Folk Music", description: "Hereditary musicians performing soulful ballads with the kamaicha." },
      { id: "rj-song-2", title: "Ghoomar Dance Songs", description: "Songs accompanying the iconic spinning dance celebrating womanhood." },
    ],
    relatedSlugs: ["punjab", "gujarat", "maharashtra"],
  },
  {
    id: "gujarat",
    name: "Gujarat",
    slug: "gujarat",
    tagline: "Garba rhythms, Gandhi's ashram, and the Rann of Kutch",
    description:
      "Gujarat's voice reflects a culture of enterprise and devotion — from the echoing garba rhythms of Navratri to the serene ashrams of Sabarmati. A land of entrepreneurs and artists.",
    language: "Gujarati",
    languageFamily: "Indo-Aryan",
    capital: "Gandhinagar",
    cities: [
      { name: "Ahmedabad", description: "India's first UNESCO Heritage City — pol houses and Sabarmati Ashram" },
      { name: "Surat", description: "Diamond capital of the world and textile hub" },
      { name: "Vadodara", description: "Cultural capital with the magnificent Laxmi Vilas Palace" },
      { name: "Rajkot", description: "Saurashtra's commercial centre, Gandhi's childhood home" },
    ],
    geography:
      "The Kutch desert in the northwest, the Saurashtra peninsula, and the fertile plains of central Gujarat. The Rann of Kutch is the world's largest salt desert.",
    history:
      "Gujarat was a maritime trading powerhouse for millennia — Lothal had one of the world's earliest dockyards. Mahatma Gandhi launched the independence movement from Sabarmati Ashram in Ahmedabad.",
    food: [
      { name: "Dhokla", description: "Steamed fermented gram flour cake — Gujarat's signature snack" },
      { name: "Thepla", description: "Methi-spiced flatbread that travels well — Gujarati travellers' staple" },
      { name: "Undhiyu", description: "Mixed vegetable casserole cooked underground — Surat's winter specialty" },
    ],
    landmarks: [
      { name: "Sabarmati Ashram", description: "Gandhi's home and headquarters of the Indian independence movement" },
      { name: "Rann of Kutch", description: "Vast white salt desert that turns into a cultural festival ground in winter" },
      { name: "Somnath Temple", description: "One of the 12 Jyotirlingas — rebuilt 17 times, never defeated" },
      { name: "Adalaj Stepwell", description: "Five-storey intricately carved stepwell from 1498" },
    ],
    traditions:
      "Nine nights of Garba and Dandiya Raas dancing during Navratri, Kutch Rann Utsav handicraft festival, Patola silk weaving, Ajrakh block printing, and Gujarati steppwell heritage.",
    phrases: [
      { id: "gj-1", text: "તમે કેમ છો?", transliteration: "Tame kem cho?", meaning: "How are you?" },
      { id: "gj-2", text: "મને સમજાયું નથી", transliteration: "Mane samjayu nathi", meaning: "I don't understand" },
      { id: "gj-3", text: "આભાર", transliteration: "Aabhar", meaning: "Thank you" },
    ],
    expressions: [
      { id: "gj-expr-1", text: "વાહ!", meaning: "Wow!", context: "Expressing admiration" },
      { id: "gj-expr-2", text: "મજા આવી!", meaning: "That was fun!", context: "After an enjoyable experience" },
    ],
    songs: [
      { id: "gj-song-1", title: "Garba Songs", description: "Devotional songs accompanying the Garba circle dance during Navratri." },
      { id: "gj-song-2", title: "Bhajans of Mahatma Gandhi", description: "Traditional devotional songs from Gandhi's ashram movement." },
    ],
    relatedSlugs: ["rajasthan", "maharashtra"],
  },
];
