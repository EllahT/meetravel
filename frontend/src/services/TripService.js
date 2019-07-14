import HttpService from "./HttpService";

export default {
  query,
  getById,
  add,
  update,
  remove
};

var trips = _generateTrips()

function query() {
  return Promise.resolve(trips);
}

function getById(tripId) {
  const trip = trips.find(trip => trip.id === tripId);
  return Promise.resolve(trip);
}

function add(trip) {
  trips.unshift(trip);
}

function update(trip, idx) {
  trips.splice(idx, 1, trip);
}

function remove(idx) {
  trips.splice(idx, 1);
}

function _generateTrips() {
  return [
    {
      id: 1,
      name: "sed",
      type: "",
      startDate: "7/22/2018",
      endDate: "8/5/2018",
      budget: "276",
      city: "Yartsevo",
      country: "Russia",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 2,
      name: "ut massa quis",
      type: "",
      startDate: "7/27/2018",
      endDate: "8/19/2018",
      budget: "2914",
      
      city: "Balfour",
      country: "South Africa",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 3,
      name: "in libero ut massa",
      type: "",
      startDate: "7/28/2018",
      endDate: "8/28/2018",
      budget: "923",
      
      city: "Haarlem",
      country: "Netherlands",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 4,
      name: "dolor sit amet",
      type: "",
      startDate: "7/29/2018",
      endDate: "8/13/2018",
      budget: "378",
      
      city: "Āshkhāneh",
      country: "Iran",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 5,
      name: "a pede",
      type: "",
      startDate: "7/28/2018",
      endDate: "8/20/2018",
      budget: "561",
      
      city: "Malaruhatan",
      country: "Philippines",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 6,
      name: "primis in faucibus orci luctus",
      type: "",
      startDate: "7/30/2018",
      endDate: "8/10/2018",
      budget: "80",
      
      city: "Akaki",
      country: "Cyprus",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 7,
      name: "nam dui proin leo odio",
      type: "",
      startDate: "7/14/2018",
      endDate: "7/30/2018",
      budget: "948",
      
      city: "Krasni Okny",
      country: "Ukraine",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 8,
      name: "ante ipsum",
      type: "",
      startDate: "7/19/2018",
      endDate: "7/20/2018",
      budget: "116",
      
      city: "Abovyan",
      country: "Armenia",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 9,
      name: "leo",
      type: "",
      startDate: "7/19/2018",
      endDate: "8/13/2018",
      budget: "111",
      
      city: "Kegeyli Shahar",
      country: "Uzbekistan",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 10,
      name: "nullam molestie nibh in",
      type: "",
      startDate: "7/25/2018",
      endDate: "7/28/2018",
      budget: "76",
      
      city: "Tarub",
      country: "Indonesia",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 11,
      name: "nulla ultrices aliquet maecenas leo",
      type: "",
      startDate: "7/14/2018",
      endDate: "7/27/2018",
      budget: "47",
      
      city: "Acolla",
      country: "Peru",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 12,
      name: "massa tempor convallis",
      type: "",
      startDate: "7/28/2018",
      endDate: "8/12/2018",
      budget: "763",
      
      city: "Leigao",
      country: "China",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 13,
      name: "tempus sit amet sem fusce",
      type: "",
      startDate: "7/14/2018",
      endDate: "7/24/2018",
      budget: "346",
      
      city: "Ziyuan",
      country: "China",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 14,
      name: "tortor duis mattis egestas",
      type: "",
      startDate: "7/30/2018",
      endDate: "8/10/2018",
      budget: "399",
      
      city: "Laylay",
      country: "Philippines",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 15,
      name: "neque aenean",
      type: "",
      startDate: "7/17/2018",
      endDate: "7/29/2018",
      budget: "200",
      
      city: "Ljusdal",
      country: "Sweden",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 16,
      name: "consequat varius integer ac leo",
      type: "",
      startDate: "7/29/2018",
      endDate: "8/18/2018",
      budget: "720",
      
      city: "Yylanly",
      country: "Turkmenistan",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 17,
      name: "lacus morbi sem mauris",
      type: "",
      startDate: "7/20/2018",
      endDate: "8/2/2018",
      budget: "386",
      
      city: "Sala",
      country: "Sweden",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 18,
      name: "lorem",
      type: "",
      startDate: "7/17/2018",
      endDate: "7/28/2018",
      budget: "777",
      
      city: "Tuburan",
      country: "Philippines",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 19,
      name: "ac lobortis vel dapibus",
      type: "",
      startDate: "7/24/2018",
      endDate: "8/18/2018",
      budget: "617",
      
      city: "Faranah",
      country: "Guinea",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    },
    {
      id: 20,
      name: "vivamus tortor duis mattis",
      type: "",
      startDate: "7/12/2018",
      endDate: "7/20/2018",
      budget: "9058",
      
      city: "Besuki Dua",
      country: "Indonesia",
      docs: [{}, {}, {}, {}, {}],
      imgUrl: 'https://wallpapercave.com/wp/wp2481303.jpg',
      adminsId: []
    }
  ]
}

// function query() {
//     return HttpService.ajax('trip/');
// }

// function getById(tripId) {
//     return HttpService.ajax(`trip/${tripId}`);
// }

// function add(trip) {
//     return HttpService.ajax('trip','post',trip);
// }

// function update(trip) {
//     return HttpService.ajax(`trip/${trip._id}`,'put',trip);
// }

// function remove(tripId) {
//     return HttpService.ajax(`trip/${tripId}`, 'delete');
// }
