import HttpService from './HttpService';
import UtilService from './UtilService';

let tempUsers = [
    {
      "_id": "5d28e21dfc608e7edc4d7573",
      "name": {
        "first": "Riggs",
        "last": "Terry"
      },
      "password": 100,
      "isAdmin": true,
      "gender": "man",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1982,
      "description": "Nostrud est amet dolore ad nisi commodo aliqua tempor mollit. Aliqua velit aliquip sint ipsum do incididunt enim tempor adipisicing. Ex laborum culpa commodo in officia excepteur est laboris.",
      "registered": "Tuesday, January 12, 2016 5:48 AM",
      "lastConnected": "Wednesday, December 6, 2017 8:58 AM",
      "destination": {
        "lat": "-22.341384",
        "lng": "-162.873802"
      },
      "residance": {
        "city": "Jerusalem",
        "country": "Jordan"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Lowery Irwin",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Nichols Leonard",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Saunders Combs",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d9c8bc295a16f9408",
      "name": {
        "first": "Contreras",
        "last": "Macdonald"
      },
      "password": 101,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1956,
      "description": "Exercitation deserunt dolore voluptate adipisicing adipisicing non. Labore sunt cillum ex aute fugiat ullamco ad. Et officia qui magna aute. Fugiat irure anim mollit fugiat mollit ad exercitation laboris eu consequat quis pariatur eu ad.",
      "registered": "Saturday, January 16, 2016 11:31 AM",
      "lastConnected": "Sunday, July 2, 2017 10:44 PM",
      "destination": {
        "lat": "87.043912",
        "lng": "173.104508"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Germany"
      },
      "travelType": "trek",
      "likes": [
        {
          "id": 0,
          "name": "Mayer Schroeder",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Santana Trujillo",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Higgins Blackwell",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21da76d32cbb94c5967",
      "name": {
        "first": "Myrna",
        "last": "Woods"
      },
      "password": 102,
      "isAdmin": true,
      "gender": "man",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1984,
      "description": "Reprehenderit voluptate ea ea culpa ullamco elit qui reprehenderit nulla. Consequat voluptate id culpa Lorem dolor mollit ut veniam cillum officia do voluptate aliqua officia. Sunt est aliquip id cupidatat aliquip.",
      "registered": "Tuesday, November 25, 2014 10:45 AM",
      "lastConnected": "Sunday, November 6, 2016 8:57 PM",
      "destination": {
        "lat": "-5.028308",
        "lng": "-156.903527"
      },
      "residance": {
        "city": "Afula",
        "country": "Germany"
      },
      "travelType": "hike",
      "likes": [
        {
          "id": 0,
          "name": "Vonda Harris",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Laura Rosales",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Lynette Wynn",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d5f2077c2b768facb",
      "name": {
        "first": "Dionne",
        "last": "Watkins"
      },
      "password": 103,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1948,
      "description": "Ut anim culpa magna adipisicing. Cillum reprehenderit deserunt amet eu eu. Ipsum consequat ad ad nisi occaecat. Lorem fugiat enim id eiusmod consectetur occaecat non ullamco. Ullamco dolore eu elit consectetur id irure enim excepteur eu anim magna velit ut quis. Adipisicing consequat in officia sint nulla est culpa magna nulla sunt commodo mollit tempor.",
      "registered": "Thursday, May 1, 2014 1:14 PM",
      "lastConnected": "Friday, October 9, 2015 1:19 AM",
      "destination": {
        "lat": "-0.960827",
        "lng": "-117.673232"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Jordan"
      },
      "travelType": "light",
      "likes": [
        {
          "id": 0,
          "name": "Tisha Lowe",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "April Day",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Knapp Long",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21dc9bebf31ac3341ff",
      "name": {
        "first": "Kim",
        "last": "Hoover"
      },
      "password": 104,
      "isAdmin": false,
      "gender": "woman",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1964,
      "description": "Nulla commodo dolore ex amet irure anim quis. Minim nulla dolor nisi do in consectetur amet pariatur esse. Nulla in ea et incididunt aute ad cupidatat aliqua deserunt.",
      "registered": "Tuesday, October 6, 2015 11:31 AM",
      "lastConnected": "Saturday, May 30, 2015 6:15 PM",
      "destination": {
        "lat": "-36.403475",
        "lng": "-51.092046"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "USA"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Lorie Mcdaniel",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Lenore Meyers",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Rachel Figueroa",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d3f365857189281b6",
      "name": {
        "first": "Mclaughlin",
        "last": "Hays"
      },
      "password": 105,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1949,
      "description": "Aliqua duis dolore veniam exercitation esse et Lorem. Quis eiusmod incididunt eiusmod quis excepteur nostrud elit deserunt consectetur dolor. Aliqua exercitation ullamco occaecat nulla excepteur laborum. Magna voluptate esse ad nisi laborum quis commodo nostrud est. Ea voluptate nostrud ea qui commodo nostrud aliqua. Culpa non deserunt culpa adipisicing aliqua mollit quis nulla. Culpa nulla mollit esse qui nulla nisi tempor reprehenderit in minim ipsum amet et.",
      "registered": "Friday, May 13, 2016 1:39 PM",
      "lastConnected": "Saturday, December 17, 2016 10:37 PM",
      "destination": {
        "lat": "-60.448494",
        "lng": "1.230388"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Germany"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Ewing Pickett",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Blanche Savage",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Wise Wilson",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d91263f28cc8426c6",
      "name": {
        "first": "Collier",
        "last": "Dunlap"
      },
      "password": 106,
      "isAdmin": false,
      "gender": "man",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1952,
      "description": "Officia cillum aliqua aliquip magna. Qui occaecat ut minim velit. Non non consectetur veniam Lorem tempor sint laboris magna culpa laborum eiusmod cillum laboris. Lorem cupidatat sint aute eu. Cillum eiusmod laboris anim aute duis. Qui id ex mollit qui.",
      "registered": "Monday, November 28, 2016 12:33 AM",
      "lastConnected": "Tuesday, December 25, 2018 3:40 PM",
      "destination": {
        "lat": "-88.562646",
        "lng": "177.32316"
      },
      "residance": {
        "city": "Jerusalem",
        "country": "Jordan"
      },
      "travelType": "hike",
      "likes": [
        {
          "id": 0,
          "name": "Dickson Cox",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Whitaker Yang",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Patty Roman",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d9ddcdf81b167fd2e",
      "name": {
        "first": "Lucy",
        "last": "Sargent"
      },
      "password": 107,
      "isAdmin": false,
      "gender": "man",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1981,
      "description": "Eiusmod enim occaecat voluptate id deserunt amet Lorem occaecat qui ea reprehenderit labore eu. Eu culpa pariatur in ullamco cupidatat. Duis anim aute sit est exercitation laborum magna irure ipsum labore. Ea nulla sint ut sint dolor duis nostrud pariatur exercitation aliqua.",
      "registered": "Saturday, February 15, 2014 10:37 AM",
      "lastConnected": "Sunday, April 16, 2017 5:53 AM",
      "destination": {
        "lat": "44.000449",
        "lng": "82.369113"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Jordan"
      },
      "travelType": "trek",
      "likes": [
        {
          "id": 0,
          "name": "Pamela Gilbert",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Warren Mclaughlin",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Ferguson Mcfarland",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21df52a86e9ed4433d0",
      "name": {
        "first": "Cash",
        "last": "Snider"
      },
      "password": 108,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1949,
      "description": "Occaecat laboris sint esse commodo nostrud esse consectetur commodo ipsum voluptate mollit. Elit in eiusmod nostrud laborum ut deserunt amet consectetur culpa qui sint voluptate cillum. Incididunt Lorem ex veniam consequat excepteur pariatur dolor id cupidatat aliquip.",
      "registered": "Tuesday, April 19, 2016 4:56 AM",
      "lastConnected": "Friday, May 11, 2018 1:41 PM",
      "destination": {
        "lat": "-74.441585",
        "lng": "-127.594043"
      },
      "residance": {
        "city": "Afula",
        "country": "USA"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Robbie Rowe",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Peterson Johns",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Mccarty Conway",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21da59fa6bf718197dd",
      "name": {
        "first": "Macdonald",
        "last": "Medina"
      },
      "password": 109,
      "isAdmin": false,
      "gender": "woman",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1988,
      "description": "Ad non officia do laborum nulla velit nulla ex sint tempor eu cillum esse. Veniam consectetur eu sit cupidatat consectetur ut irure aliqua non id quis eiusmod ullamco ut. Pariatur aute occaecat elit elit consectetur. Consequat aliqua non ipsum aliquip aute fugiat nulla sint. Enim sunt aliqua esse ullamco do.",
      "registered": "Thursday, October 19, 2017 4:31 PM",
      "lastConnected": "Friday, February 12, 2016 8:39 AM",
      "destination": {
        "lat": "-10.764633",
        "lng": "17.974298"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Jordan"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Annie Kirby",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Tonia Mooney",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Salinas Fischer",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d23f13c8dfab8f4a7",
      "name": {
        "first": "Vicky",
        "last": "Hopkins"
      },
      "password": 110,
      "isAdmin": true,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1993,
      "description": "Labore ipsum eiusmod et incididunt proident aliquip ullamco nulla nisi Lorem Lorem. Esse do ex cupidatat anim ullamco eiusmod anim ut exercitation. Reprehenderit laboris esse officia est in quis ex veniam cillum elit sit.",
      "registered": "Friday, May 1, 2015 6:11 PM",
      "lastConnected": "Sunday, January 26, 2014 2:23 PM",
      "destination": {
        "lat": "58.973793",
        "lng": "-26.203229"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "USA"
      },
      "travelType": "trek",
      "likes": [
        {
          "id": 0,
          "name": "Guthrie Rojas",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Rhonda Fields",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Baird Barron",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21de5d141ebb0936279",
      "name": {
        "first": "Lucile",
        "last": "Tran"
      },
      "password": 111,
      "isAdmin": true,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1967,
      "description": "Tempor amet mollit ut amet ullamco fugiat tempor fugiat labore. Voluptate incididunt nulla eu eiusmod dolore. Ipsum excepteur voluptate id veniam aliqua labore duis. Ex quis officia ex ipsum ullamco ullamco deserunt.",
      "registered": "Tuesday, March 18, 2014 4:05 AM",
      "lastConnected": "Thursday, September 21, 2017 1:13 AM",
      "destination": {
        "lat": "-9.947827",
        "lng": "-93.750099"
      },
      "residance": {
        "city": "Afula",
        "country": "Jordan"
      },
      "travelType": "light",
      "likes": [
        {
          "id": 0,
          "name": "Billie Fry",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Salazar Leach",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Rosalie Daniels",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d658171696ff5ffe2",
      "name": {
        "first": "Sandra",
        "last": "Sykes"
      },
      "password": 112,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1962,
      "description": "Sit nisi elit laborum laboris deserunt. Velit ad duis excepteur id proident consectetur consectetur in do nisi ad. Cupidatat consequat eiusmod occaecat nisi deserunt nisi sint.",
      "registered": "Thursday, February 16, 2017 6:45 AM",
      "lastConnected": "Saturday, September 22, 2018 6:33 AM",
      "destination": {
        "lat": "5.676326",
        "lng": "87.115657"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Germany"
      },
      "travelType": "sightseeing",
      "likes": [
        {
          "id": 0,
          "name": "Blake Foley",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Tate Barker",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Odessa Marsh",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d70cd2826c6bdaaa0",
      "name": {
        "first": "Genevieve",
        "last": "Gates"
      },
      "password": 113,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1979,
      "description": "Irure laborum non aliqua fugiat labore aute nostrud nulla sunt nulla commodo deserunt. Qui quis esse fugiat ex excepteur ipsum ullamco. Laborum nisi minim labore aliquip laborum consectetur sunt Lorem.",
      "registered": "Wednesday, March 26, 2014 2:02 AM",
      "lastConnected": "Friday, January 9, 2015 9:16 PM",
      "destination": {
        "lat": "-2.665418",
        "lng": "-6.919856"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "USA"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Durham House",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Abbott Carney",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Matilda Gamble",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d98fc82940d4637f9",
      "name": {
        "first": "Cassandra",
        "last": "Burgess"
      },
      "password": 114,
      "isAdmin": true,
      "gender": "woman",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1991,
      "description": "Eiusmod veniam enim occaecat ut dolore culpa deserunt quis dolor dolore commodo consequat in anim. Consectetur ad laboris labore do ullamco. Commodo proident consectetur veniam incididunt. Ea qui nostrud veniam id nisi sit aute aute. Incididunt consequat voluptate voluptate in dolore.",
      "registered": "Monday, January 1, 2018 8:27 AM",
      "lastConnected": "Friday, December 8, 2017 11:43 AM",
      "destination": {
        "lat": "11.484134",
        "lng": "101.83446"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Germany"
      },
      "travelType": "trek",
      "likes": [
        {
          "id": 0,
          "name": "Haynes Lamb",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Debbie Mcclain",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Inez Atkinson",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d8fee702966a4e4c5",
      "name": {
        "first": "Powers",
        "last": "Hahn"
      },
      "password": 115,
      "isAdmin": false,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1953,
      "description": "Ea voluptate Lorem incididunt velit duis occaecat fugiat magna enim eiusmod velit. Enim qui duis ut voluptate laborum velit. Minim elit esse aliquip mollit elit dolore tempor anim. Quis sunt minim nisi do magna. Dolore quis nostrud magna qui ex quis eiusmod dolore Lorem. Irure commodo aute voluptate voluptate Lorem culpa. Reprehenderit quis ut eiusmod sit est aliquip laboris reprehenderit nulla.",
      "registered": "Wednesday, March 6, 2019 5:46 AM",
      "lastConnected": "Sunday, September 11, 2016 2:20 PM",
      "destination": {
        "lat": "-60.177004",
        "lng": "143.435642"
      },
      "residance": {
        "city": "Afula",
        "country": "Germany"
      },
      "travelType": "trek",
      "likes": [
        {
          "id": 0,
          "name": "Craig Bradshaw",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Christa Gregory",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Flossie Barton",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d599c707a97d05e9a",
      "name": {
        "first": "Frazier",
        "last": "Ford"
      },
      "password": 116,
      "isAdmin": false,
      "gender": "man",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1950,
      "description": "Excepteur velit id consectetur ipsum enim nulla pariatur quis ullamco enim amet eiusmod. Elit enim minim commodo minim est. Dolor anim occaecat anim irure anim voluptate ad sunt id. Tempor sint labore voluptate consequat dolore ullamco ea consequat sit voluptate tempor est.",
      "registered": "Tuesday, September 1, 2015 5:53 AM",
      "lastConnected": "Wednesday, April 22, 2015 3:33 AM",
      "destination": {
        "lat": "-9.206683",
        "lng": "101.613088"
      },
      "residance": {
        "city": "Jerusalem",
        "country": "Germany"
      },
      "travelType": "climb",
      "likes": [
        {
          "id": 0,
          "name": "Kinney Holden",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Desiree Glenn",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Weeks Calderon",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d665627887fb02c70",
      "name": {
        "first": "Lancaster",
        "last": "Mathews"
      },
      "password": 117,
      "isAdmin": true,
      "gender": "other",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1973,
      "description": "Dolore exercitation adipisicing ea nisi ea ea quis id id fugiat officia. Dolore pariatur veniam exercitation magna occaecat sit tempor. Do irure ut et cupidatat id sunt mollit incididunt qui est deserunt nulla cupidatat ad.",
      "registered": "Monday, February 12, 2018 4:47 PM",
      "lastConnected": "Sunday, November 19, 2017 2:34 AM",
      "destination": {
        "lat": "6.042502",
        "lng": "-158.852919"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "USA"
      },
      "travelType": "trek",
      "likes": [
        {
          "id": 0,
          "name": "Briggs Roth",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Lacy Kerr",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Ernestine Mendez",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d452950811c5b1f65",
      "name": {
        "first": "Ayers",
        "last": "Macias"
      },
      "password": 118,
      "isAdmin": true,
      "gender": "man",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1959,
      "description": "Et fugiat duis laborum ea deserunt adipisicing amet laboris dolore proident veniam non. Est cupidatat pariatur anim sit in laboris voluptate proident proident excepteur pariatur enim officia duis. Cupidatat officia ea mollit consectetur labore.",
      "registered": "Wednesday, November 22, 2017 11:23 PM",
      "lastConnected": "Sunday, March 25, 2018 1:36 AM",
      "destination": {
        "lat": "-27.272483",
        "lng": "-10.656894"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Jordan"
      },
      "travelType": "sightseeing",
      "likes": [
        {
          "id": 0,
          "name": "Brooke Gaines",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Gwen Lang",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Roth Cherry",
          "picture": "http://placehold.it/32x32"
        }
      ]
    },
    {
      "_id": "5d28e21d711f3640b24e3968",
      "name": {
        "first": "Young",
        "last": "West"
      },
      "password": 119,
      "isAdmin": true,
      "gender": "woman",
      "profileImg": "http://placehold.it/32x32",
      "galleryImgs": [
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        },
        {
          "picture": "http://placehold.it/32x32"
        }
      ],
      "birthDate": 1988,
      "description": "Sit est aute consectetur elit qui id. Magna id consequat minim excepteur eiusmod voluptate laboris adipisicing mollit nostrud consequat do cillum. Cillum cupidatat fugiat adipisicing mollit ut. In tempor esse pariatur non qui excepteur laborum. Nostrud irure cillum eu ad ex cupidatat nostrud ea qui ea id culpa. Labore magna irure officia enim irure. Nostrud pariatur ipsum ut tempor in proident ipsum consequat eu reprehenderit incididunt.",
      "registered": "Friday, February 27, 2015 5:36 PM",
      "lastConnected": "Tuesday, March 29, 2016 11:30 PM",
      "destination": {
        "lat": "-73.701088",
        "lng": "61.841484"
      },
      "residance": {
        "city": "Tel Aviv",
        "country": "Jordan"
      },
      "travelType": "light",
      "likes": [
        {
          "id": 0,
          "name": "Carey Gilliam",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 1,
          "name": "Heath James",
          "picture": "http://placehold.it/32x32"
        },
        {
          "id": 2,
          "name": "Bates Greer",
          "picture": "http://placehold.it/32x32"
        }
      ]
    }
  ];

let loggedUser = null;

var USERS_DB = []

export default {
    query,
    getById,
    add,
    update,
    remove,
    login,
    logout,
    getLoggedUser,
}

function query() {
<<<<<<< HEAD
    // return HttpService.ajax('user/');
    return Promise.resolve(tempUsers);
}

function getById(userId) {
    // return HttpService.ajax(`user/${userId}`);
    return Promise.resolve(tempUsers.find(user => user._id === userId));
}

function add(user) {
    // return HttpService.ajax('user','post',user);
    return new Promise((resolve, reject) => {
        user._id = UtilService.makeId();
        tempUsers.push(user);
        resolve(user);
    })
}

function update(updatedUser) {
    // return HttpService.ajax(`user/${user._id}`,'put',user);
    return new Promise((resolve, reject) => {
        const idx = tempUsers.findIndex(user => user._id === updatedUser._id);
        tempUsers.splice(idx, 1, updatedUser);
        resolve(updatedUser);
    })
}

function remove(userId) {
    // return HttpService.ajax(`user/${userId}`, 'delete');
    return new Promise((resolve, reject) => {
        const idx = tempUsers.findIndex(user => user._id === userId);
        tempUsers.splice(idx, 1);
        resolve(userId);
    })
}

function login(email) {
    return HttpService.ajax(`user/login`,'post',{email});
    
=======
    // return HttpService.ajax('user/'); //for real backend DB
    return Promise.resolve(USERS_DB);
}

function getById(userId) {
    // return HttpService.ajax(`user/${userId}`); //for real backend DB
    var user = USERS_DB.find(user => user._id = userId)
    if (user) return Promise.resolve(user)
    else return Promise.resolve('unknown user')
}

function add(user) {
    // return HttpService.ajax('user', 'post', user); //for real backend DB
    user._id = _makeId()
    USERS_DB.unshift(user)
    return Promise.resolve(user)
}

function update(user) {
    // return HttpService.ajax(`user/${user._id}`, 'put', user);   //for real backend DB
    var userIdx = USERS_DB.find(currUser => currUser._id = user._id)
    USERS_DB.splice(userIdx, 1, user)
    return Promise.resolve(user)
}

function remove(userId) {
    // return HttpService.ajax(`user/${userId}`, 'delete'); //for real backend DB
    var userIdx = USERS_DB.findIndex(user => user._id === userId);
    USERS_DB.splice(userIdx, 1)
    return Promise.resolve();
}

function login(email) {
    return HttpService.ajax(`user/login`, 'post', { email });
>>>>>>> users
}

function logout() {
    return HttpService.ajax('user/logout', 'post');
}

function getLoggedUser() {
    return HttpService.ajax('user/logged');
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

USERS_DB = [{
        "_id": "5d275b31d4e499ccc0a640ae",
        "firstName": "Terri",
        "lastName": "Holman",
        "password": 100,
        "isAdmin": true,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1969,
        "description": "Ad quis dolor deserunt sit sint incididunt sit minim occaecat. Incididunt id in dolore ut laboris fugiat commodo fugiat ea labore dolor cupidatat. Minim incididunt proident ea proident minim labore ad Lorem consequat Lorem eiusmod anim tempor incididunt. Tempor tempor sunt labore pariatur enim reprehenderit. Magna anim ipsum duis laborum eu magna aliquip ut.",
        "registered": "Saturday, October 7, 2017 8:28 PM",
        "lastConnected": "Thursday, February 1, 2018 2:09 AM",
        "currLocation": {
            "lat": "-82.87981",
            "lng": "1.444387"
        },
        "residance": {
            "city": "Afula",
            "country": "Jordan"
        },
        "travelType": "sightseeing",
        "likes": [{
                "id": 0,
                "name": "Walters Hanson",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Petersen Ayala",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Anna Miranda",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31ecb5892e51080078",
        "firstName": "Coleen",
        "lastName": "May",
        "password": 101,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1949,
        "description": "Officia excepteur pariatur aliqua ea laborum occaecat. Ullamco et ullamco magna pariatur magna laboris incididunt. Labore consequat cupidatat cupidatat dolore incididunt sunt culpa Lorem. Reprehenderit do mollit in minim qui aute esse ad est. Commodo irure commodo velit qui ad est. Amet enim consectetur in laboris nostrud cupidatat deserunt ad do cupidatat qui occaecat. Magna ut exercitation est laborum voluptate fugiat in cupidatat veniam sint amet.",
        "registered": "Tuesday, October 28, 2014 3:20 AM",
        "lastConnected": "Saturday, October 29, 2016 10:14 PM",
        "currLocation": {
            "lat": "41.159176",
            "lng": "-179.119603"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Germany"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Shelia Burch",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rodriquez Wynn",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Booth Tyler",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b314e7a112026d04fff",
        "firstName": "Kirkland",
        "lastName": "Dennis",
        "password": 102,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1997,
        "description": "Esse commodo esse dolore Lorem id commodo amet. Veniam ullamco nostrud consequat aute consequat dolore deserunt excepteur sit minim sunt. Deserunt pariatur excepteur ad consequat labore ad amet sint et qui in voluptate. Reprehenderit incididunt ad laborum officia ut sunt pariatur sit anim pariatur nostrud incididunt dolore. Id adipisicing reprehenderit ad voluptate reprehenderit officia labore ullamco fugiat. Adipisicing aliquip nostrud cillum culpa veniam anim labore incididunt esse sit. Lorem ipsum non labore amet eu ipsum mollit reprehenderit dolore ad ipsum esse.",
        "registered": "Sunday, October 26, 2014 1:17 AM",
        "lastConnected": "Saturday, November 29, 2014 1:18 PM",
        "currLocation": {
            "lat": "-21.712615",
            "lng": "-53.815966"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Jordan"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "Woodard Le",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Burch Emerson",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Laura Washington",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31d2b37e10656e0aad",
        "firstName": "Rosa",
        "lastName": "Carson",
        "password": 103,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1951,
        "description": "Id eu id quis excepteur. Dolor culpa commodo aute enim dolor. Anim exercitation incididunt irure dolor consequat.",
        "registered": "Tuesday, December 15, 2015 10:53 PM",
        "lastConnected": "Wednesday, March 28, 2018 8:17 PM",
        "currLocation": {
            "lat": "60.406621",
            "lng": "87.27735"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Jeanne Madden",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Glover Hernandez",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Hazel Dejesus",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31593dc9d780525154",
        "firstName": "Foreman",
        "lastName": "Owens",
        "password": 104,
        "isAdmin": false,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1994,
        "description": "Eu sunt elit velit irure. Voluptate consequat non anim labore exercitation cillum sint nisi exercitation sit duis Lorem laboris officia. Fugiat amet enim labore incididunt nostrud et nulla dolor deserunt sit esse veniam. Exercitation consectetur proident laborum ad ut commodo exercitation deserunt tempor do ullamco. Reprehenderit id ex nisi est ut. Dolore occaecat fugiat fugiat voluptate occaecat. Eiusmod aute dolore fugiat adipisicing quis sunt labore fugiat dolor proident in.",
        "registered": "Wednesday, October 26, 2016 11:51 AM",
        "lastConnected": "Monday, June 20, 2016 6:15 AM",
        "currLocation": {
            "lat": "21.016425",
            "lng": "-15.452766"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Germany"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "Sadie Hendricks",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Hogan Merrill",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Randolph Cummings",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b318aede3733f684ee9",
        "firstName": "Kerry",
        "lastName": "Rice",
        "password": 105,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1971,
        "description": "Culpa aliquip anim commodo cupidatat consequat cillum qui ea laborum. Ea id reprehenderit sunt nulla. Voluptate consequat consectetur non excepteur reprehenderit. Dolor elit adipisicing incididunt nostrud enim quis officia deserunt cupidatat. Elit ipsum aliquip occaecat quis incididunt consectetur laboris. Incididunt cillum amet elit proident duis nostrud laboris consequat. Culpa ut aliquip sit officia velit.",
        "registered": "Wednesday, May 10, 2017 9:10 PM",
        "lastConnected": "Friday, February 22, 2019 3:59 PM",
        "currLocation": {
            "lat": "-86.041923",
            "lng": "-168.561944"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Jordan"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "English Levy",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Margo Mayer",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Bolton Petersen",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b316ae16808f304dafb",
        "firstName": "Hutchinson",
        "lastName": "Salazar",
        "password": 106,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1950,
        "description": "Exercitation consequat aliqua Lorem elit aliqua dolor. Consectetur laboris dolore voluptate tempor aliqua ipsum ut tempor dolor ipsum sint aliqua. Duis do velit nisi reprehenderit qui nulla. Dolor ullamco irure ut quis eiusmod fugiat irure veniam eu consequat cupidatat ea. Sint in elit culpa amet incididunt enim irure minim cillum nisi ex laboris enim. Consequat aute aliquip aute mollit occaecat do exercitation consectetur commodo amet culpa exercitation.",
        "registered": "Wednesday, June 7, 2017 2:59 AM",
        "lastConnected": "Saturday, July 30, 2016 9:42 AM",
        "currLocation": {
            "lat": "47.958245",
            "lng": "20.774728"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "Germany"
        },
        "travelType": "hike",
        "likes": [{
                "id": 0,
                "name": "Edith Bowers",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Cruz Montgomery",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Delores Reese",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31c4baae607ae2670a",
        "firstName": "Chelsea",
        "lastName": "Burt",
        "password": 107,
        "isAdmin": false,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1959,
        "description": "Ea nostrud pariatur excepteur Lorem velit nisi velit nostrud. Ex ullamco enim eu aute tempor ipsum aliquip exercitation eu deserunt incididunt. Anim dolore tempor adipisicing nostrud. Magna incididunt aliqua ex enim duis velit sunt.",
        "registered": "Wednesday, September 5, 2018 5:56 AM",
        "lastConnected": "Sunday, May 29, 2016 9:49 PM",
        "currLocation": {
            "lat": "87.142238",
            "lng": "-84.202729"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "USA"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Lang Berg",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Roberson Ramsey",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Greta Cantrell",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31c8086ebf1a554038",
        "firstName": "Louisa",
        "lastName": "Frank",
        "password": 108,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1990,
        "description": "Cillum deserunt eiusmod sit qui sunt aliquip laboris fugiat do pariatur aliqua velit voluptate culpa. Lorem ipsum mollit ut amet enim quis laboris commodo do deserunt deserunt laboris pariatur. Adipisicing reprehenderit Lorem minim et nostrud sunt sunt voluptate. Nulla ad aliquip veniam veniam culpa voluptate tempor nostrud non veniam anim tempor.",
        "registered": "Wednesday, August 27, 2014 1:19 AM",
        "lastConnected": "Tuesday, September 1, 2015 12:59 AM",
        "currLocation": {
            "lat": "-0.729066",
            "lng": "134.747028"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Germany"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Bernadette Adkins",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Snyder Bullock",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Spence Bush",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b314d04c7e7d6e3d577",
        "firstName": "Hopper",
        "lastName": "Ray",
        "password": 109,
        "isAdmin": false,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1958,
        "description": "Dolore excepteur occaecat dolor sint anim aliquip aliqua. Veniam magna sint in qui anim fugiat. Ut in pariatur nostrud eu do veniam.",
        "registered": "Tuesday, July 3, 2018 8:06 PM",
        "lastConnected": "Friday, October 13, 2017 9:10 AM",
        "currLocation": {
            "lat": "-46.224534",
            "lng": "-25.761862"
        },
        "residance": {
            "city": "Afula",
            "country": "Germany"
        },
        "travelType": "sightseeing",
        "likes": [{
                "id": 0,
                "name": "Moreno Kirk",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rivera Barrera",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Frank Dominguez",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31ef0a3692a5c4e326",
        "firstName": "Angelita",
        "lastName": "Wade",
        "password": 110,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1982,
        "description": "Labore irure sit adipisicing incididunt nostrud. Nostrud consectetur eiusmod Lorem duis mollit. Reprehenderit adipisicing veniam exercitation reprehenderit eu. Deserunt incididunt eiusmod occaecat quis non nisi eu officia do duis qui. In exercitation reprehenderit culpa deserunt amet officia cupidatat commodo ipsum nisi.",
        "registered": "Thursday, February 13, 2014 10:12 AM",
        "lastConnected": "Monday, August 10, 2015 10:12 PM",
        "currLocation": {
            "lat": "-79.354338",
            "lng": "-142.764549"
        },
        "residance": {
            "city": "Afula",
            "country": "Germany"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Lenore Moses",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Tammie Dunn",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Sheila Kramer",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31e4d9a4b2481d9eb7",
        "firstName": "Millie",
        "lastName": "Cook",
        "password": 111,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1996,
        "description": "Et irure nostrud est ad aute nostrud. Commodo labore incididunt aliqua eiusmod ea sint veniam in qui. Nulla proident aute eu non quis id. Dolore laboris ad tempor cupidatat ex excepteur eu anim non et exercitation anim. Nisi dolore consequat culpa consectetur nisi. Aliqua ullamco consectetur laboris ullamco dolor deserunt est nulla tempor fugiat occaecat culpa.",
        "registered": "Saturday, July 15, 2017 1:57 AM",
        "lastConnected": "Sunday, April 14, 2019 8:23 AM",
        "currLocation": {
            "lat": "-63.150171",
            "lng": "-88.647828"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Germany"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Shaffer Bryan",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Bertha Murray",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Angela Carter",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b317c56b7529aa424af",
        "firstName": "Josefina",
        "lastName": "Lamb",
        "password": 112,
        "isAdmin": true,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1986,
        "description": "Exercitation consectetur duis aliqua dolore nisi do. Et non nisi elit est mollit aliqua ea pariatur duis ea tempor. Labore magna aliqua officia ea fugiat pariatur reprehenderit aliquip laborum. Aliquip esse aute commodo consectetur proident laboris culpa excepteur fugiat adipisicing ullamco.",
        "registered": "Thursday, January 29, 2015 5:34 PM",
        "lastConnected": "Saturday, July 18, 2015 7:16 PM",
        "currLocation": {
            "lat": "51.635352",
            "lng": "38.008617"
        },
        "residance": {
            "city": "Afula",
            "country": "Germany"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Mable Franklin",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Mays Padilla",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Bentley Haynes",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b316eb6a466304ba125",
        "firstName": "Jody",
        "lastName": "Gamble",
        "password": 113,
        "isAdmin": true,
        "gender": "woman",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1982,
        "description": "Ullamco duis minim commodo tempor adipisicing. Eu tempor est quis adipisicing. Elit est cupidatat aliquip consequat aliquip nostrud labore velit fugiat tempor Lorem. Ex labore ut minim non aute do enim veniam qui consectetur veniam cupidatat. Eu commodo enim officia magna sunt commodo in occaecat. Sit nisi velit ex aute fugiat veniam et eu nisi. Ad ex ipsum laborum ipsum nostrud amet.",
        "registered": "Tuesday, March 29, 2016 10:39 AM",
        "lastConnected": "Wednesday, October 5, 2016 4:50 AM",
        "currLocation": {
            "lat": "-71.15199",
            "lng": "-76.179622"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Coffey Holland",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Lena Beach",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Clarice Hobbs",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31195881a9271fcc4a",
        "firstName": "Cornelia",
        "lastName": "Rollins",
        "password": 114,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1974,
        "description": "Nulla fugiat est ullamco excepteur ullamco. Cillum dolore nisi aute commodo cupidatat cillum. Dolor minim ex incididunt voluptate dolor adipisicing qui esse. Irure nostrud cillum esse nostrud nisi laboris commodo nulla id consectetur voluptate sunt sunt mollit. Eu aute ut sint nisi reprehenderit sunt voluptate.",
        "registered": "Tuesday, January 28, 2014 4:14 PM",
        "lastConnected": "Monday, October 22, 2018 2:25 AM",
        "currLocation": {
            "lat": "13.667191",
            "lng": "107.339088"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "USA"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Laverne Alvarado",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Greer Stout",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Cote Leon",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31b351402c8adc074b",
        "firstName": "Wynn",
        "lastName": "Silva",
        "password": 115,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1962,
        "description": "Mollit irure reprehenderit irure in ullamco pariatur ea. Exercitation ipsum ullamco fugiat et eiusmod aute et qui minim veniam. Sunt sit anim nostrud tempor dolore esse cupidatat adipisicing irure.",
        "registered": "Tuesday, August 12, 2014 7:16 PM",
        "lastConnected": "Tuesday, March 31, 2015 11:12 PM",
        "currLocation": {
            "lat": "-70.760602",
            "lng": "22.393379"
        },
        "residance": {
            "city": "Afula",
            "country": "Jordan"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Rutledge Allison",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Wilson Tran",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Freida York",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b3119bbc0ca47616e45",
        "firstName": "Atkinson",
        "lastName": "Heath",
        "password": 116,
        "isAdmin": false,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1963,
        "description": "Laboris exercitation ipsum proident voluptate culpa nulla eiusmod exercitation. Eiusmod adipisicing sint eu aute aute aliqua nulla exercitation veniam dolor. Veniam non ipsum pariatur do eiusmod voluptate ea sunt officia eiusmod reprehenderit aliquip dolore. Ea velit amet consequat ipsum ad reprehenderit consectetur aute. Ullamco anim mollit sint dolor nostrud excepteur.",
        "registered": "Tuesday, July 19, 2016 9:15 AM",
        "lastConnected": "Thursday, July 31, 2014 3:05 AM",
        "currLocation": {
            "lat": "77.394741",
            "lng": "35.367446"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "climb",
        "likes": [{
                "id": 0,
                "name": "Dunlap Haley",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Horn Guerra",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Lauren Burke",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b313a49c0fe4976b6c4",
        "firstName": "Fulton",
        "lastName": "Cooke",
        "password": 117,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1987,
        "description": "Irure nisi tempor ad sint fugiat dolor esse do incididunt consequat nisi veniam proident. Nostrud aliqua magna minim occaecat non quis. Proident ullamco adipisicing esse aute nisi cupidatat deserunt cupidatat labore enim mollit. Incididunt laborum exercitation ipsum aliquip veniam minim cillum culpa mollit mollit. Commodo elit labore eiusmod ullamco nisi ea sint. Duis excepteur cupidatat qui anim voluptate fugiat minim ipsum minim. Quis magna exercitation dolore qui reprehenderit labore tempor esse voluptate proident qui ipsum aliquip.",
        "registered": "Sunday, July 16, 2017 9:58 PM",
        "lastConnected": "Sunday, September 9, 2018 5:13 PM",
        "currLocation": {
            "lat": "-75.143522",
            "lng": "28.232239"
        },
        "residance": {
            "city": "Jerusalem",
            "country": "USA"
        },
        "travelType": "light",
        "likes": [{
                "id": 0,
                "name": "Pam Frazier",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rhodes Kennedy",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Pat Cash",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b3102b105eabad65a52",
        "firstName": "Kelly",
        "lastName": "Walls",
        "password": 118,
        "isAdmin": true,
        "gender": "other",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1958,
        "description": "Aliqua culpa reprehenderit laboris elit sunt sit ullamco excepteur. Exercitation Lorem et proident duis ad nulla eu laboris ex pariatur cillum nulla est. Ex sit ea ad occaecat magna ex magna laborum. Adipisicing dolor laboris velit ut et ea in ullamco exercitation cillum dolor consectetur dolore dolor. Ullamco occaecat nulla velit ea duis id sit. Culpa elit do anim deserunt occaecat deserunt consectetur dolore. Ad occaecat elit et nostrud duis exercitation consectetur.",
        "registered": "Tuesday, March 4, 2014 11:47 AM",
        "lastConnected": "Sunday, January 25, 2015 8:25 PM",
        "currLocation": {
            "lat": "20.047226",
            "lng": "-48.37448"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "trek",
        "likes": [{
                "id": 0,
                "name": "Holly Reyes",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Welch Rosales",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Casey Cohen",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    },
    {
        "_id": "5d275b31f6539a25a0cd8c59",
        "firstName": "Sanders",
        "lastName": "Romero",
        "password": 119,
        "isAdmin": false,
        "gender": "man",
        "profileImg": "http://placehold.it/32x32",
        "galleryImgs": [{
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            },
            {
                "picture": "http://placehold.it/32x32"
            }
        ],
        "birthDate": 1987,
        "description": "Aute enim nulla non nostrud. Qui adipisicing exercitation in consequat duis veniam est. Elit commodo aute dolor ex occaecat duis ea voluptate irure. Mollit consectetur Lorem nostrud in.",
        "registered": "Monday, March 26, 2018 8:34 PM",
        "lastConnected": "Friday, May 12, 2017 3:32 AM",
        "currLocation": {
            "lat": "3.051895",
            "lng": "-107.56389"
        },
        "residance": {
            "city": "Tel Aviv",
            "country": "Jordan"
        },
        "travelType": "sightseeing",
        "likes": [{
                "id": 0,
                "name": "Richard Morse",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 1,
                "name": "Rush Conrad",
                "picture": "http://placehold.it/32x32"
            },
            {
                "id": 2,
                "name": "Daniel Tillman",
                "picture": "http://placehold.it/32x32"
            }
        ],
        "trips": [{
                "id": 1000
            },
            {
                "id": 1001
            },
            {
                "id": 1002
            }
        ]
    }
]