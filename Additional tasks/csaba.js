var products = [
    {
        id: 10001,
        name: "Maniac Futball labda",
        category: "TM0001",
        price: 1490,
        count: 0,
        sold: 256,
        createdAt: "2018-06-01",
        updatedAt: "2018-06-04",
    },
    {
        id: 10002,
        name: "VolleyStar Röplabda, Bézs",
        category: "TM0001",
        price: 1390,
        count: 8,
        sold: 86,
        createdAt: "2018-06-01",
        updatedAt: "2018-06-04",
    },
    {
        id: 10003,
        name: "Robust Klasszikus kosárlabda",
        category: "TM0001",
        price: 1190,
        count: 50,
        sold: 180,
        createdAt: "2018-06-04",
        updatedAt: "2018-06-04",
    },
    {
        id: 10004,
        name: "Robust Kézilabda, Kék",
        category: "TM0001",
        price: 890,
        count: 0,
        sold: 41,
        createdAt: "2018-06-04",
        updatedAt: "2018-06-04",
    },
    {
        id: 10005,
        name: "Tunturi Vízliabda, Sárga",
        category: "TM0001",
        price: 1190,
        count: 5,
        sold: 39,
        createdAt: "2018-06-04",
        updatedAt: "2018-06-25",
    },
    {
        id: 10006,
        name: "Nike Ujjatlan kesztyű, Fekete",
        category: "TM0002",
        price: 2290,
        count: 0,
        sold: 52,
        createdAt: "2018-06-04",
        updatedAt: "2018-06-04",
    },
    {
        id: 10007,
        name: "Adidas Futball mez, Real Madrid",
        category: "TM0002",
        price: 19990,
        count: 0,
        sold: 486,
        createdAt: "2018-06-06",
        updatedAt: "2018-06-25",
    },
    {
        id: 10008,
        name: "Arena Úszódressz, Zöld",
        category: "TM0002",
        price: 7590,
        count: 0,
        sold: 27,
        createdAt: "2018-06-07",
        updatedAt: "2018-06-22",
    },
    {
        id: 10009,
        name: "Puma Stoplis cipő, Lila",
        category: "TM0002",
        price: 28990,
        count: 34,
        sold: 76,
        createdAt: "2018-06-08",
        updatedAt: "2018-06-08",
    },
    {
        id: 10010,
        name: "Nike Short",
        category: "TM0002",
        price: 8490,
        count: 6,
        sold: 10,
        createdAt: "2018-06-08",
        updatedAt: "2018-06-11",
    },
    {
        id: 10011,
        name: "Robust Síp",
        category: "TM0003",
        price: 290,
        count: 2,
        sold: 24,
        createdAt: "2018-06-11",
        updatedAt: "2018-06-11",
    },
    {
        id: 10012,
        name: "ProJudge Kártyakészlet",
        category: "TM0003",
        price: 1590,
        count: 1,
        sold: 84,
        createdAt: "2018-06-12",
        updatedAt: "2018-06-12",
    },
    {
        id: 10013,
        name: "ProJudge Bírói mez, Fekete",
        category: "TM0003",
        price: 11990,
        count: 0,
        sold: 35,
        createdAt: "2018-06-13",
        updatedAt: "2018-06-15",
    },
    {
        id: 10014,
        name: "ProJudge Sárga lap készlet",
        category: "TM0003",
        price: 1190,
        count: 2,
        sold: 43,
        createdAt: "2018-06-13",
        updatedAt: "2018-06-15",
    },
    {
        id: 10015,
        name: "ProJudge Piros lap készlet",
        category: "TM0003",
        price: 1190,
        count: 3,
        sold: 87,
        createdAt: "2018-06-15",
        updatedAt: "2018-06-15",
    },
    {
        id: 10016,
        name: "Robust Szurkolói flag, Barcelona",
        category: "TM0004",
        price: 2390,
        count: 4,
        sold: 30,
        createdAt: "2018-06-15",
        updatedAt: "2018-06-15",
    },
    {
        id: 10017,
        name: "Robust Szurkolói flag, Real Madrid",
        category: "TM0004",
        price: 2390,
        count: 4,
        sold: 30,
        createdAt: "2018-06-18",
        updatedAt: "2018-06-20",
    },
    {
        id: 10018,
        name: "Robust Szurkolói flag, Fradi",
        category: "TM0004",
        price: 2390,
        count: 9,
        sold: 183,
        createdAt: "2018-06-18",
        updatedAt: "2018-06-20",
    },
    {
        id: 10019,
        name: "Robust Szurkolói flag, Újpest",
        category: "TM0004",
        price: 2390,
        count: 9,
        sold: 183,
        createdAt: "2018-06-18",
        updatedAt: "2018-06-20",
    },
    {
        id: 10020,
        name: "Maybelinne Arcfesték-készlet",
        category: "TM0004",
        price: 8790,
        count: 15,
        sold: 156,
        createdAt: "2018-06-19",
        updatedAt: "2018-06-20",
    },
    {
        id: 10021,
        name: "HandballPro Wax",
        category: "TM0005",
        price: 3690,
        count: 4,
        sold: 67,
        createdAt: "2018-06-19",
        updatedAt: "2018-06-20",
    },
    {
        id: 10022,
        name: "Robust Klasszikus kosárlabda",
        category: "TM0005",
        price: 1190,
        count: 10,
        sold: 154,
        createdAt: "2018-06-19",
        updatedAt: "2018-06-20",
    },
    {
        id: 10023,
        name: "Avento Tűkészlet labdapumpához, 3 db",
        category: "TM0005",
        price: 590,
        count: 19,
        sold: 165,
        createdAt: "2018-06-20",
        updatedAt: "2018-06-20",
    },
    {
        id: 10024,
        name: "Avento Manuális pumpa",
        category: "TM0005",
        price: 2490,
        count: 7,
        sold: 99,
        createdAt: "2018-06-20",
        updatedAt: "2018-06-25",
    },
    {
        id: 10025,
        name: "Spokey Elektromos pumpa",
        category: "TM0005",
        price: 1199,
        count: 7,
        sold: 75,
        createdAt: "2018-06-20",
        updatedAt: "2018-06-25",
    }
]

// A legnépszerűbb termék

var bestseller = products[0];
for (var i in products) {
    if (bestseller.sold < products[i].sold) {
        bestseller = products[i];
    }
} console.log("A legnépszerűbb termék:\n"); console.log(bestseller);

// A legújabb termék

var newest = products[0];
for (var j in products) {
    if (products[j].createdAt > newest.createdAt) {
        newest = products[j];
    }
} console.log("A legújabb termék:\n"); console.log(newest);

// Termékek összára

var totalPrice = 0;
for (var k in products) {
    totalPrice += products[k].price;
} console.log("Termékek összára:\n"); console.log(totalPrice + " Ft");

// Termékek átlagára

var avaragePrice = 0;
for (var l in products) {
    avaragePrice += products[l].price / products.length;
} console.log("Termékek átlagára:\n"); console.log(avaragePrice.toFixed(2) + " Ft");