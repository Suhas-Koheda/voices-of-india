import type { Region } from "@/types/region";

export const regions: Region[] = [
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    language: "Telugu",
    languageFamily: "Dravidian",
    description:
      "Known as the 'Kohinoor of India', Andhra Pradesh is renowned for its rich cultural heritage, classical Kuchipudi dance, and the vibrant Telugu language spoken by over 80 million people.",
    capital: "Amaravati",
    cities: ["Visakhapatnam", "Vijayawada", "Tirupati", "Guntur"],
    phrases: [
      {
        id: "ap-1",
        text: "ఏం చేస్తున్నావ్?",
        transliteration: "Ēṁ cēstunnāv?",
        meaning: "What are you doing?",
      },
      {
        id: "ap-2",
        text: "ఎలా ఉన్నావ్?",
        transliteration: "Elā unnāv?",
        meaning: "How are you?",
      },
      {
        id: "ap-3",
        text: "నాకు సహాయం కావాలి",
        transliteration: "Nāku sahāyaṁ kāvāli",
        meaning: "I need help",
      },
      {
        id: "ap-4",
        text: "చాలా బాగుంది",
        transliteration: "Cālā bāgundi",
        meaning: "It's very good",
      },
      {
        id: "ap-5",
        text: "ధన్యవాదాలు",
        transliteration: "Dhanyavādālu",
        meaning: "Thank you",
      },
    ],
    expressions: [
      {
        id: "ap-expr-1",
        text: "అబ్బాయి!",
        meaning: "Wow! / Amazing!",
        context: "Expressing surprise or admiration",
      },
      {
        id: "ap-expr-2",
        text: "చెప్పు రా!",
        meaning: "Tell me, buddy!",
        context: "Casual way to ask a friend something",
      },
      {
        id: "ap-expr-3",
        text: "ఏం కావాలి?",
        meaning: "What do you want?",
        context: "Directly asking someone's need",
      },
    ],
    songs: [
      {
        id: "ap-song-1",
        title: "Tyagaraja Kritis",
        description:
          "Classical Carnatic compositions by saint Tyagaraja, deeply rooted in Telugu devotional tradition.",
      },
      {
        id: "ap-song-2",
        title: "Lambadi Folk Songs",
        description:
          "Traditional songs of the Lambadi community celebrating harvest, love, and nature.",
      },
    ],
    culturalNotes: [
      {
        id: "ap-cn-1",
        title: "Kuchipudi Dance",
        content:
          "Kuchipudi is a classical dance form originating from Andhra Pradesh, known for its graceful movements and expressive storytelling through gesture and expression.",
      },
      {
        id: "ap-cn-2",
        title: "Tirupati Pilgrimage",
        content:
          "The Tirumala Venkateswara Temple in Tirupati is one of the most visited religious sites in the world, attracting millions of devotees annually.",
      },
    ],
    relatedSlugs: ["telangana", "karnataka", "tamil-nadu"],
  },
  {
    id: "telangana",
    name: "Telangana",
    slug: "telangana",
    language: "Telugu",
    languageFamily: "Dravidian",
    description:
      "Telangana, carved out of Andhra Pradesh in 2014, carries a distinctive Deccani flavor of Telugu infused with Urdu influences, reflecting centuries of Qutb Shahi and Nizam rule.",
    capital: "Hyderabad",
    cities: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"],
    phrases: [
      {
        id: "ts-1",
        text: "ఎలా ఉన్నావ్ రా?",
        transliteration: "Elā unnāv rā?",
        meaning: "How are you, buddy?",
      },
      {
        id: "ts-2",
        text: "నాకు అర్థం కాలేదు",
        transliteration: "Nāku arthaṁ kālēdu",
        meaning: "I don't understand",
      },
      {
        id: "ts-3",
        text: "హైదరాబాద్ చాలా అందంగా ఉంది",
        transliteration: "Hyderābād cālā andaṅgā undi",
        meaning: "Hyderabad is very beautiful",
      },
      {
        id: "ts-4",
        text: "బిర్యానీ చాలా బాగుంది",
        transliteration: "Biryānī cālā bāgundi",
        meaning: "The biryani is very good",
      },
    ],
    expressions: [
      {
        id: "ts-expr-1",
        text: "ఖాయిల్లు!",
        meaning: "Absolutely!",
        context: "Confirming something enthusiastically",
      },
      {
        id: "ts-expr-2",
        text: "చెప్పితే చాలు!",
        meaning: "Just say it!",
        context: "Asking someone to be direct",
      },
    ],
    songs: [
      {
        id: "ts-song-1",
        title: "Bonalu Festival Songs",
        description:
          "Devotional songs sung during the Bonalu festival honoring Goddess Mahakali.",
      },
      {
        id: "ts-song-2",
        title: "Deccani Folk Songs",
        description:
          "Traditional songs blending Telugu and Urdu influences from the Deccan region.",
      },
    ],
    culturalNotes: [
      {
        id: "ts-cn-1",
        title: "Hyderabad Biryani",
        content:
          "Hyderabadi biryani is a world-famous rice dish with Mughal origins, known for its aromatic spices and slow-cooking dum method.",
      },
      {
        id: "ts-cn-2",
        title: "Golconda Fort Heritage",
        content:
          "The historic Golconda Fort was once the seat of the Qutb Shahi dynasty and is famous for its acoustic architecture and diamond trade legacy.",
      },
    ],
    relatedSlugs: ["andhra-pradesh", "maharashtra", "karnataka"],
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    language: "Tamil",
    languageFamily: "Dravidian",
    description:
      "Tamil Nadu is home to one of the longest-surviving classical languages in the world. With ancient temples, Bharatanatyam dance, and a thriving film industry, it blends tradition with modernity.",
    capital: "Chennai",
    cities: ["Chennai", "Madurai", "Coimbatore", "Tiruchirappalli"],
    phrases: [
      {
        id: "tn-1",
        text: "எப்படி இருக்கீங்க?",
        transliteration: "Eppaḍi irukkīṅga?",
        meaning: "How are you? (formal)",
      },
      {
        id: "tn-2",
        text: "நன்றி",
        transliteration: "Naṉṟi",
        meaning: "Thank you",
      },
      {
        id: "tn-3",
        text: "உங்களுக்கு என்ன வேணும்?",
        transliteration: "Uṅkaḷukku eṉṉa vēṇum?",
        meaning: "What do you need?",
      },
      {
        id: "tn-4",
        text: "ரொம்ப நல்லா இருக்கு",
        transliteration: "Romba nallā irukku",
        meaning: "It's very good",
      },
      {
        id: "tn-5",
        text: "புரியல",
        transliteration: "Puriyala",
        meaning: "I don't understand",
      },
    ],
    expressions: [
      {
        id: "tn-expr-1",
        text: "ஐயோ!",
        meaning: "Oh my!",
        context: "Expressing surprise or mild distress",
      },
      {
        id: "tn-expr-2",
        text: "சூப்பர்!",
        meaning: "Super!",
        context: "Expressing admiration, commonly used in daily speech",
      },
      {
        id: "tn-expr-3",
        text: "மாப்பிள்ளை!",
        meaning: "Great!/Fantastic!",
        context: "Enthusiastic approval",
      },
    ],
    songs: [
      {
        id: "tn-song-1",
        title: "Carnatic Music Tradition",
        description:
          "Tamil Nadu is the heartland of Carnatic music, with composers like Muthuswami Dikshitar creating timeless kritis.",
      },
      {
        id: "tn-song-2",
        title: "Gaana Songs of Chennai",
        description:
          "Street-level folk music from North Chennai expressing everyday life, love, and social commentary.",
      },
    ],
    culturalNotes: [
      {
        id: "tn-cn-1",
        title: "Bharatanatyam",
        content:
          "Bharatanatyam is one of the oldest classical dance forms in India, originating in Tamil Nadu's temple traditions, known for its precise footwork and expressive storytelling.",
      },
      {
        id: "tn-cn-2",
        title: "Madurai Meenakshi Temple",
        content:
          "The Meenakshi Amman Temple in Madurai is an architectural marvel with 14 colorful gopurams (gateway towers) and is a major pilgrimage site.",
      },
    ],
    relatedSlugs: ["kerala", "karnataka", "andhra-pradesh"],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    slug: "karnataka",
    language: "Kannada",
    languageFamily: "Dravidian",
    description:
      "Karnataka bridges ancient Hampi ruins with Bengaluru's tech parks. Kannada, a classical language, carries a literary tradition spanning centuries and a vibrant folk music culture.",
    capital: "Bengaluru",
    cities: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru"],
    phrases: [
      {
        id: "ka-1",
        text: "ಹೇಗಿದ್ದೀರಿ?",
        transliteration: "Hēgiddīri?",
        meaning: "How are you? (formal)",
      },
      {
        id: "ka-2",
        text: "ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ",
        transliteration: "Nanage arthavāguttilla",
        meaning: "I don't understand",
      },
      {
        id: "ka-3",
        text: "ಧನ್ಯವಾದ",
        transliteration: "Dhanyavāda",
        meaning: "Thank you",
      },
      {
        id: "ka-4",
        text: "ಇದು ಚೆನ್ನಾಗಿದೆ",
        transliteration: "Idu chennāgide",
        meaning: "This is good",
      },
    ],
    expressions: [
      {
        id: "ka-expr-1",
        text: "ಅಯ್ಯೋ!",
        meaning: "Oh no!",
        context: "Expressing dismay or surprise",
      },
      {
        id: "ka-expr-2",
        text: "ಸೂಪರ್ ಆಗಿದೆ!",
        meaning: "It's super!",
        context: "Expressing enthusiasm about something",
      },
    ],
    songs: [
      {
        id: "ka-song-1",
        title: "Yakshagana",
        description:
          "A traditional folk theatre form of Karnataka combining dance, music, and dialogue, performed across coastal Karnataka.",
      },
      {
        id: "ka-song-2",
        title: "Kolata Folk Songs",
        description:
          "Songs accompanying Kolata, a traditional stick dance performed during festivals and celebrations.",
      },
    ],
    culturalNotes: [
      {
        id: "ka-cn-1",
        title: "Mysore Palace",
        content:
          "The Mysore Palace is one of India's most visited monuments, renowned for its Indo-Saracenic architecture and the grand Dasara celebrations.",
      },
      {
        id: "ka-cn-2",
        title: "Hampi Heritage",
        content:
          "Hampi, a UNESCO World Heritage Site, was the capital of the Vijayanagara Empire and features stunning ruins of temples and palaces.",
      },
    ],
    relatedSlugs: ["tamil-nadu", "andhra-pradesh", "kerala"],
  },
  {
    id: "kerala",
    name: "Kerala",
    slug: "kerala",
    language: "Malayalam",
    languageFamily: "Dravidian",
    description:
      "Known as 'God's Own Country', Kerala is famous for its backwaters, Ayurveda, and Kathakali dance. Malayalam, with its flowing script, is one of India's most expressive languages.",
    capital: "Thiruvananthapuram",
    cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    phrases: [
      {
        id: "kl-1",
        text: "സുഖമാണോ?",
        transliteration: "Sukhamāṇō?",
        meaning: "Are you well?",
      },
      {
        id: "kl-2",
        text: "എനിക്ക് മനസ്സിലായില്ല",
        transliteration: "Enikku manassilāyilla",
        meaning: "I don't understand",
      },
      {
        id: "kl-3",
        text: "നന്ദി",
        transliteration: "Nandi",
        meaning: "Thank you",
      },
      {
        id: "kl-4",
        text: "ഇത് നല്ലതാണ്",
        transliteration: "Ithu nallatāṇu",
        meaning: "This is good",
      },
    ],
    expressions: [
      {
        id: "kl-expr-1",
        text: "അപ്പൊ!",
        meaning: "Then! / So!",
        context: "Conversational filler to continue a story",
      },
      {
        id: "kl-expr-2",
        text: "മാർക്ക് സാർ!",
        meaning: "Amazing, sir!",
        context: "Enthusiastic expression of approval",
      },
    ],
    songs: [
      {
        id: "kl-song-1",
        title: "Mappila Pattu",
        description:
          "Traditional Muslim folk songs of Kerala blending Malayalam with Arabic and Tamil influences, often about love and devotion.",
      },
      {
        id: "kl-song-2",
        title: "Margam Kali Songs",
        description:
          "Ancient songs of the Syrian Christian community accompanying the Margam Kali dance form.",
      },
    ],
    culturalNotes: [
      {
        id: "kl-cn-1",
        title: "Kathakali",
        content:
          "Kathakali is a classical dance-drama known for its elaborate costumes, colorful face paint, and expressive storytelling through gesture and eye movements.",
      },
      {
        id: "kl-cn-2",
        title: "Onam Festival",
        content:
          "Onam is Kerala's harvest festival celebrated with flower carpets (Pookalam), boat races, and the traditional Onam Sadya feast.",
      },
    ],
    relatedSlugs: ["karnataka", "tamil-nadu"],
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    slug: "maharashtra",
    language: "Marathi",
    languageFamily: "Indo-Aryan",
    description:
      "Maharashtra is a powerhouse of culture and commerce. From the literary legacy of Tukaram and Dnyaneshwar to Bollywood and the rhythms of Lavani dance, it's a state of many voices.",
    capital: "Mumbai",
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    phrases: [
      {
        id: "mh-1",
        text: "कसं आहे तू?",
        transliteration: "Kasaṁ āhe tū?",
        meaning: "How are you?",
      },
      {
        id: "mh-2",
        text: "मला समजत नाही",
        transliteration: "Malā samajat nāhī",
        meaning: "I don't understand",
      },
      {
        id: "mh-3",
        text: "धन्यवाद",
        transliteration: "Dhanyavād",
        meaning: "Thank you",
      },
      {
        id: "mh-4",
        text: "हे खूप छान आहे",
        transliteration: "He khūp chān āhe",
        meaning: "This is very nice",
      },
      {
        id: "mh-5",
        text: "माझं नाव प्रशांत आहे",
        transliteration: "Mājhaṁ nāv Praśānt āhe",
        meaning: "My name is Prashant",
      },
    ],
    expressions: [
      {
        id: "mh-expr-1",
        text: "काय बातमी आहे!",
        meaning: "What's the news!",
        context: "Greeting someone enthusiastically",
      },
      {
        id: "mh-expr-2",
        text: "छान म्हणजे!",
        meaning: "That's great!",
        context: "Expressing approval",
      },
      {
        id: "mh-expr-3",
        text: "अरे बाळा!",
        meaning: "Oh friend!",
        context: "Affectionate way to address someone",
      },
    ],
    songs: [
      {
        id: "mh-song-1",
        title: "Lavani Songs",
        description:
          "Energetic folk songs accompanying Lavani, a traditional dance form known for its powerful rhythm and expression.",
      },
      {
        id: "mh-song-2",
        title: "Abhangas of Sant Tukaram",
        description:
          "Devotional poetry-songs by the 17th-century saint Tukaram, foundational to Marathi literary and musical tradition.",
      },
    ],
    culturalNotes: [
      {
        id: "mh-cn-1",
        title: "Ganesh Chaturthi",
        content:
          "The grand 10-day festival celebrating Lord Ganesha is Maharashtra's most spectacular public celebration, with massive processions and immersion ceremonies.",
      },
      {
        id: "mh-cn-2",
        title: "Marathi Theatre Tradition",
        content:
          "Maharashtra has one of India's richest theatre traditions, from tamasha folk performances to modern plays that have shaped Indian performing arts.",
      },
    ],
    relatedSlugs: ["gujarat", "rajasthan", "telangana"],
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    slug: "west-bengal",
    language: "Bengali",
    languageFamily: "Indo-Aryan",
    description:
      "West Bengal's cultural identity runs deep — from Rabindranath Tagore's Nobel Prize-winning literature to the intellectual traditions of Kolkata. Bengali is one of India's most poetic languages.",
    capital: "Kolkata",
    cities: ["Kolkata", "Darjeeling", "Siliguri", "Howrah"],
    phrases: [
      {
        id: "wb-1",
        text: "আপনি কেমন আছেন?",
        transliteration: "Āpani kēman āchēn?",
        meaning: "How are you? (formal)",
      },
      {
        id: "wb-2",
        text: "আমাকে বুঝতে পারছি না",
        transliteration: "Āmākē bujhate pārchi nā",
        meaning: "I can't understand",
      },
      {
        id: "wb-3",
        text: "ধন্যবাদ",
        transliteration: "Dhanyabād",
        meaning: "Thank you",
      },
      {
        id: "wb-4",
        text: "এটা খুব ভালো",
        transliteration: "Ēṭā khub bhālō",
        meaning: "This is very good",
      },
    ],
    expressions: [
      {
        id: "wb-expr-1",
        text: "কী সুন্দর!",
        meaning: "How beautiful!",
        context: "Expressing admiration",
      },
      {
        id: "wb-expr-2",
        text: "বাহ্!",
        meaning: "Wow!",
        context: "Expressing wonder or approval",
      },
      {
        id: "wb-expr-3",
        text: "যা হোক!",
        meaning: "Whatever happens!",
        context: "Accepting a situation philosophically",
      },
    ],
    songs: [
      {
        id: "wb-song-1",
        title: "Rabindra Sangeet",
        description:
          "Songs composed by Nobel laureate Rabindranath Tagore, forming an entire genre of Bengali music celebrating love, nature, and humanity.",
      },
      {
        id: "wb-song-2",
        title: "Baul Songs",
        description:
          "Mystical folk songs of the Baul wandering minstrels, blending Sufi, Buddhist, and Hindu spiritual traditions.",
      },
    ],
    culturalNotes: [
      {
        id: "wb-cn-1",
        title: "Durga Puja",
        content:
          "Durga Puja is Bengal's grandest festival — a five-day celebration transforming Kolkata into an open-air art gallery with elaborate pandals and cultural performances.",
      },
      {
        id: "wb-cn-2",
        title: "Kolkata's Intellectual Heritage",
        content:
          "Kolkata has produced more Nobel laureates and literary figures than any other Indian city, earning its reputation as the cultural capital of India.",
      },
    ],
    relatedSlugs: ["punjab"],
  },
  {
    id: "punjab",
    name: "Punjab",
    slug: "punjab",
    language: "Punjabi",
    languageFamily: "Indo-Aryan",
    description:
      "Punjab's voice is bold, joyful, and musical. Bhangra beats, warm hospitality, and the Gurmukhi script define a culture of resilience and celebration.",
    capital: "Chandigarh",
    cities: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala"],
    phrases: [
      {
        id: "pb-1",
        text: "ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?",
        transliteration: "Tusīṁ kivēṁ ho?",
        meaning: "How are you?",
      },
      {
        id: "pb-2",
        text: "ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਉਂਦੀ",
        transliteration: "Mainū samajh nahīṁ āundī",
        meaning: "I don't understand",
      },
      {
        id: "pb-3",
        text: "ਤੁਹਾਡਾ ਧੰਨਵਾਦ",
        transliteration: "Tuhāḍā dhannavād",
        meaning: "Thank you",
      },
      {
        id: "pb-4",
        text: "ਬਹੁਤ ਵਧੀਆ ਹੈ",
        transliteration: "Bahut vadhīā hai",
        meaning: "It's very good",
      },
      {
        id: "pb-5",
        text: "ਜੀ ਆਇਆਂ ਨੂੰ",
        transliteration: "Jī āiāṁ nūṁ",
        meaning: "Welcome",
      },
    ],
    expressions: [
      {
        id: "pb-expr-1",
        text: "ਬੱਸ!",
        meaning: "Enough! / That's it!",
        context: "Expressing completion or satisfaction",
      },
      {
        id: "pb-expr-2",
        text: "ਕਿੱਥੇ ਹੋ ਜੀ?",
        meaning: "Where are you?",
        context: "Calling out to someone",
      },
    ],
    songs: [
      {
        id: "pb-song-1",
        title: "Bhangra Music",
        description:
          "Energetic folk music and dance tradition of Punjab, characterized by the dhol drum and vibrant rhythms celebrating harvest and festivity.",
      },
      {
        id: "pb-song-2",
        title: "Sufi Qawwali of Punjab",
        description:
          "Devotional Sufi music tradition at shrines like Hazrat Nizamuddin, blending Punjabi poetry with ecstatic musical expression.",
      },
    ],
    culturalNotes: [
      {
        id: "pb-cn-1",
        title: "Golden Temple",
        content:
          "The Harmandir Sahib (Golden Temple) in Amritsar is the holiest shrine of Sikhism, its golden dome reflected in the sacred pool surrounded by devotees of all faiths.",
      },
      {
        id: "pb-cn-2",
        title: "Baisakhi Festival",
        content:
          "Baisakhi marks the Punjabi New Year and the harvest season, celebrated with bhangra dancing, fairs, and community feasts.",
      },
    ],
    relatedSlugs: ["rajasthan", "west-bengal", "haryana"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    slug: "rajasthan",
    language: "Rajasthani",
    languageFamily: "Indo-Aryan",
    description:
      "Rajasthan, the Land of Kings, is a tapestry of forts, deserts, and vibrant folk traditions. Rajasthani languages carry the valor and poetry of a royal past.",
    capital: "Jaipur",
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    phrases: [
      {
        id: "rj-1",
        text: "केम छो?",
        transliteration: "Kem cho?",
        meaning: "How are you?",
      },
      {
        id: "rj-2",
        text: "म्हारो नाम राम छे",
        transliteration: "Mhāro nām Rām chhe",
        meaning: "My name is Ram",
      },
      {
        id: "rj-3",
        text: "धन्यवाद",
        transliteration: "Dhanyavād",
        meaning: "Thank you",
      },
      {
        id: "rj-4",
        text: "यो बहुत बढ़िया छे",
        transliteration: "Yo bahut baḍhiyā chhe",
        meaning: "This is very good",
      },
    ],
    expressions: [
      {
        id: "rj-expr-1",
        text: "पधारो सा!",
        meaning: "Please come!",
        context: "Traditional Rajasthani welcome",
      },
      {
        id: "rj-expr-2",
        text: "क्या बात है!",
        meaning: "Wonderful!",
        context: "Expressing admiration",
      },
    ],
    songs: [
      {
        id: "rj-song-1",
        title: "Manganiyar Folk Music",
        description:
          "Hereditary musicians of Rajasthan performing soulful ballads with the kamaicha and morchang, preserving centuries of oral history.",
      },
      {
        id: "rj-song-2",
        title: "Ghoomar Dance Songs",
        description:
          "Songs accompanying Ghoomar, the iconic spinning dance of Rajasthan celebrating womanhood and the monsoon.",
      },
    ],
    culturalNotes: [
      {
        id: "rj-cn-1",
        title: "Desert Festival of Jaisalmer",
        content:
          "The annual Desert Festival transforms the golden city of Jaisalmer into a vibrant showcase of Rajasthani folk art, camel races, and traditional music.",
      },
      {
        id: "rj-cn-2",
        title: "Blue City of Jodhpur",
        content:
          "Jodhpur's old city is famously painted in indigo blue, originally to signify Brahmin households and now defining the city's distinctive character.",
      },
    ],
    relatedSlugs: ["punjab", "gujarat", "maharashtra"],
  },
  {
    id: "gujarat",
    name: "Gujarat",
    slug: "gujarat",
    language: "Gujarati",
    languageFamily: "Indo-Aryan",
    description:
      "Gujarat's voice reflects a culture of enterprise and devotion — from the echoing garba rhythms of Navratri to the serene ashrams of Sabarmati. Gujarati is a language of literature and commerce.",
    capital: "Gandhinagar",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    phrases: [
      {
        id: "gj-1",
        text: "તમે કેમ છો?",
        transliteration: "Tamē kem cho?",
        meaning: "How are you?",
      },
      {
        id: "gj-2",
        text: "મને સમજાયું નથી",
        transliteration: "Manē samjāyũ nathī",
        meaning: "I don't understand",
      },
      {
        id: "gj-3",
        text: "આભાર",
        transliteration: "Ābhār",
        meaning: "Thank you",
      },
      {
        id: "gj-4",
        text: "આ ખૂબ સરસ છે",
        transliteration: "Ā khūb saras chhe",
        meaning: "This is very nice",
      },
    ],
    expressions: [
      {
        id: "gj-expr-1",
        text: "વાહ!",
        meaning: "Wow!",
        context: "Expressing admiration",
      },
      {
        id: "gj-expr-2",
        text: "મજા આવી!",
        meaning: "That was fun!",
        context: "After an enjoyable experience",
      },
    ],
    songs: [
      {
        id: "gj-song-1",
        title: "Garba Songs",
        description:
          "Devotional songs accompanying the Garba circle dance during Navratri, celebrating the divine feminine with rhythmic clapping and spinning.",
      },
      {
        id: "gj-song-2",
        title: "Bhajans of Mahatma Gandhi",
        description:
          "Traditional devotional songs that accompanied Mahatma Gandhi's freedom movement, sung at ashrams across Gujarat.",
      },
    ],
    culturalNotes: [
      {
        id: "gj-cn-1",
        title: "Navratri Garba",
        content:
          "Gujarat's Navratri celebration is legendary — nine nights of Garba and Dandiya Raas dancing that brings entire cities together in joyful community celebration.",
      },
      {
        id: "gj-cn-2",
        title: "Rann of Kutch",
        content:
          "The White Rann of Kutch is a vast salt desert that transforms into a cultural wonderland during the Rann Utsav festival, showcasing Gujarati arts and crafts.",
      },
    ],
    relatedSlugs: ["rajasthan", "maharashtra", "madhya-pradesh"],
  },
];
