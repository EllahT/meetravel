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
    
}

function logout() {
    return HttpService.ajax('user/logout','post');
}

function getLoggedUser() {
    return HttpService.ajax('user/logged');
}