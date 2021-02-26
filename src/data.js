const data = [
  {
    name: "Drago",
    personality: "Lazy",
    catchphrase: "burrn",
    ranking: "B",
    type: "Aligator",
    image: "/media/drago.png"
  },
  {
    name: "Del",
    personality: "Cranky",
    catchphrase: "gronk",
    ranking: "C",
    type: "Aligator",
    image: "/media/del.png"
  },
  {
    name: "Gayle",
    personality: "Normal",
    catchphrase: "snacky",
    ranking: "C",
    type: "Aligator",
    image: "/media/gayle.png"
  },
  {
    name: "Alfonso",
    personality: "Lazy",
    catchphrase: "it'sa me",
    ranking: "D",
    type: "Aligator",
    image: "/media/alfonso.png"
  },
  {
    name: "Boots",
    personality: "Jock",
    catchphrase: "munchie",
    ranking: "D",
    type: "Aligator",
    image: "/media/boots.png"
  },
  {
    name: "Alli",
    personality: "Snooty",
    catchphrase: "graagh",
    ranking: "D",
    type: "Aligator",
    image: "/media/alli.png"
  },
  {
    name: "Sly",
    personality: "Jock",
    catchphrase: "hoo-rah",
    ranking: "D",
    type: "Aligator",
    image: "/media/sly.png"
  },
  {
    name: "Anabelle",
    personality: "Peppy",
    catchphrase: "snorty",
    ranking: "B",
    type: "Anteater",
    image: "/media/anabelle.png"
  },
  {
    name: "Annalisa",
    personality: "Normal",
    catchphrase: "gumdrop",
    ranking: "C",
    type: "Anteater",
    image: "/media/annalisa.png"
  },
  {
    name: "Antonio",
    personality: "Jock",
    catchphrase: "honk",
    ranking: "C",
    type: "Anteater",
    image: "/media/antonio.png"
  },
  {
    name: "Olaf",
    personality: "Smug",
    catchphrase: "whiffa",
    ranking: "C",
    type: "Anteater",
    image: "/media/olaf.png"
  },
  {
    name: "Cyrano",
    personality: "Cranky",
    catchphrase: "ah-CHOO",
    ranking: "D",
    type: "Anteater",
    image: "/media/cyrano.png"
  },
  {
    name: "Pango",
    personality: "Peppy",
    catchphrase: "snoof",
    ranking: "D",
    type: "Anteater",
    image: "/media/pango.png"
  },
  {
    name: "Snooty",
    personality: "Snooty",
    catchphrase: "sniffff",
    ranking: "D",
    type: "Anteater",
    image: "/media/snooty.png"
  },
  {
    name: "Megan",
    personality: "Normal",
    catchphrase: "hola",
    ranking: "A",
    type: "Bear",
    image: "/media/megan.png"
  },
  {
    name: "Ursula",
    personality: "Sisterly",
    catchphrase: "groomph",
    ranking: "B",
    type: "Bear",
    image: "/media/ursula.png"
  },
  {
    name: "Grizzly",
    personality: "Cranky",
    catchphrase: "grrr",
    ranking: "C",
    type: "Bear",
    image: "/media/grizzly.png"
  },
  {
    name: "Charlise",
    personality: "Sisterly",
    catchphrase: "urgh",
    ranking: "C",
    type: "Bear",
    image: "/media/charlise.png"
  },
  {
    name: "Pinky",
    personality: "Peppy",
    catchphrase: "wah",
    ranking: "C",
    type: "Bear",
    image: "/media/pinky.png"
  },
  {
    name: "Tutu",
    personality: "Peppy",
    catchphrase: "twinkles",
    ranking: "C",
    type: "Bear",
    image: "/media/tutu.png"
  },
  {
    name: "Ike",
    personality: "Cranky",
    catchphrase: "roadie",
    ranking: "D",
    type: "Bear",
    image: "/media/ike.png"
  },
  {
    name: "Groucho",
    personality: "Cranky",
    catchphrase: "grumble",
    ranking: "D",
    type: "Bear",
    image: "/media/groucho.png"
  },
  {
    name: "Curt",
    personality: "Cranky",
    catchphrase: "fuzzball",
    ranking: "D",
    type: "Bear",
    image: "/media/curt.png"
  },
  {
    name: "Beardo",
    personality: "Smug",
    catchphrase: "whiskers",
    ranking: "D",
    type: "Bear",
    image: "/media/beardo.png"
  },
  {
    name: "Chow",
    personality: "Cranky",
    catchphrase: "aiya",
    ranking: "D",
    type: "Bear",
    image: "/media/chow.png"
  },
  {
    name: "Nate",
    personality: "Lazy",
    catchphrase: "yawwwn",
    ranking: "D",
    type: "Bear",
    image: "/media/nate.png"
  },
  {
    name: "Paula",
    personality: "Sisterly",
    catchphrase: "yodelay",
    ranking: "D",
    type: "Bear",
    image: "/media/paula.png"
  },
  {
    name: "Klaus",
    personality: "Smug",
    catchphrase: "strudel",
    ranking: "D",
    type: "Bear",
    image: "/media/klaus.png"
  },
  {
    name: "Teddy",
    personality: "Jock",
    catchphrase: "grooof",
    ranking: "D",
    type: "Bear",
    image: "/media/teddy.png"
  },
  {
    name: "Jacques",
    personality: "Smug",
    catchphrase: "zut alors",
    ranking: "A",
    type: "Bird",
    image: "/media/jacques.png"
  },
  {
    name: "Lucha",
    personality: "Smug",
    catchphrase: "craw",
    ranking: "B",
    type: "Bird",
    image: "/media/lucha.png"
  },
  {
    name: "Piper",
    personality: "Peppy",
    catchphrase: "chickadee",
    ranking: "B",
    type: "Bird",
    image: "/media/piper.png"
  },
  {
    name: "Anchovy",
    personality: "Lazy",
    catchphrase: "chuurp",
    ranking: "C",
    type: "Bird",
    image: "/media/anchovy.png"
  },
  {
    name: "Jay",
    personality: "Jock",
    catchphrase: "heeeey",
    ranking: "C",
    type: "Bird",
    image: "/media/jay.png"
  },
  {
    name: "Midge",
    personality: "Normal",
    catchphrase: "tweedledee",
    ranking: "C",
    type: "Bird",
    image: "/media/midge.png"
  },
  {
    name: "Admiral",
    personality: "Cranky",
    catchphrase: "aye aye",
    ranking: "D",
    image: "/media/admiral.png"
  },
  {
    name: "Jacob",
    personality: "Lazy",
    catchphrase: "chuuurp",
    ranking: "D",
    image: "/media/jacob.png"
  },
  {
    name: "Jitters",
    personality: "Jock",
    catchphrase: "bzzert",
    ranking: "D",
    image: "/media/jitters.png"
  },
  {
    name: "Peck",
    personality: "Jock",
    catchphrase: "crunch",
    ranking: "D",
    image: "/media/peck.png"
  },
  {
    name: "Robin",
    personality: "Snooty",
    catchphrase: "la-di-da",
    ranking: "D",
    image: "/media/robin.png"
  },
  {
    name: "Sparro",
    personality: "Jock",
    catchphrase: "like whoa",
    ranking: "D",
    image: "/media/sparro.png"
  },
  {
    name: "Twiggy",
    personality: "Peppy",
    catchphrase: "cheepers",
    ranking: "D",
    image: "/media/twiggy.png"
  },
  {
    name: "Stu",
    personality: "Lazy",
    catchphrase: "moo-dude",
    ranking: "B",
    image: "/media/stu.png"
  },
  {
    name: "Rodeo",
    personality: "Lazy",
    catchphrase: "chaps",
    ranking: "C",
    image: "/media/rodeo.png"
  },
  {
    name: "Vic",
    personality: "Cranky",
    catchphrase: "cud",
    ranking: "C",
    image: "/media/vic.png"
  },
  {
    name: "Angus",
    personality: "Cranky",
    catchphrase: "macmoo",
    ranking: "D",
    image: "/media/angus.png"
  },
  {
    name: "Coach",
    personality: "Jock",
    catchphrase: "stubble",
    ranking: "D",
    image: "/media/coach.png"
  },
  {
    name: "T-Bone",
    personality: "Cranky",
    catchphrase: "moocher",
    ranking: "D",
    image: "/media/t-bone.png"
  },
  {
    name: "Ankha",
    personality: "Snooty",
    catchphrase: "me meow",
    ranking: " S",
    type: "Cat",
    image: "/media/ankha.png"
  },
  {
    name: "Raymond",
    personality: "Smug",
    catchphrase: "crisp",
    ranking: " S",
    type: "Cat",
    image: "/media/raymond.png"
  },
  {
    name: "Bob",
    personality: "Lazy",
    catchphrase: "pthhhpth",
    ranking: " S",
    type: "Cat",
    image: "/media/bob.png"
  },
  {
    name: "Felicity",
    personality: "Peppy",
    catchphrase: "mimimi",
    ranking: "A",
    type: "Cat",
    image: "/media/felicity.png"
  },
  {
    name: "Lolly",
    personality: "Normal",
    catchphrase: "bonbon",
    ranking: "A",
    type: "Cat",
    image: "/media/lolly.png"
  },
  {
    name: "Punchy",
    personality: "Lazy",
    catchphrase: "mrmpht",
    ranking: "A",
    type: "Cat",
    image: "/media/punchy.png"
  },

  {
    name: "Lucky",
    personality: "Normal",
    ranking: "A",
    type: "Dog",
    image: "/media/lucky_face.png"
  },

];

export {data};
