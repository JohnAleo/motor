import camp1 from "../assets/camping-place/camp1.jpg"
import camp2 from "../assets/camping-place/camp2.jpg"
import camp3chi from "../assets/camping-place/camp3chi.jpg"
import camp4 from "../assets/camping-place/camp4.jpg"
import camp5 from "../assets/camping-place/camp5.jpg"
import camp6 from "../assets/camping-place/camp6.jpg"
import camp7 from "../assets/camping-place/camp7.jpg"
import camp8 from "../assets/camping-place/camp8.jpg"
import camp9 from "../assets/camping-place/camp9.jpg"
import camp101 from "../assets/camping-place/camp101.jpg"
import camp111 from "../assets/camping-place/camp111.jpg"
import camp12chi from "../assets/camping-place/camp12chi.jpg"

export const camping = {
    maindata: [
      {
        id: 1,
        campsite: {
          photo: `${camp1}`,
          name: "CAMPSITE-1",
          location: "중랑캠핑숲",
          type: "르노마스터",
          logo:"Campsite1.com",
          from:'9:00 am',
          to:'11:00 pm',
          company: "다온티앤티",
          rate: 4.5,
          Explanation:
            "Easy camping is good 150,000 won per weekend It's not very clean, but I'm satisfied with it.It's nice to be close to the city center"
          ,
          map:{
            latitude:37.5965188,
            longitude:127.1007454,
          },   
        }, 
       
      },
      {
        id: 2,
        campsite: {
          photo: `${camp2}`,
          name: "CAMPSITE-2",
          location: "Seoul,Mapo-gu,상암동",
          type: "르노마스터",
          logo:"Campsite2.com",
          from:'9:20 am',
          to:'11:30 pm',
          company: "다온티앤티",
          rate: 4.3,
          Explanation:
            "A pleasant enough experience. Most amenities are purchasable at the store inside the camp grounds. Coal fire BBQs are available for hire for a very decent price.Toilets tend to be well looked after and cleaning water is readily available throughout the grounds."
          ,
          map:{
            latitude:37.5715723,
            longitude:126.8728063,
          },
        },
      },
      {
        id: 3,
        campsite: {
          photo: `${camp3chi}`,
          name: "CAMPSITE-3",
          location: "Nanji Camp Ground",
          type: "르노마스터",
          logo:"Campsite3.com",
          from:'10:00 am',
          to:'12:00 pm',
          company: "다온티앤티",
          rate: 4.1,
          Explanation:
            "The best campground near Seoul, considering location, cost, environment, facilities.  only small trouble will be traffic + parking mostly on weekends daytime."
          ,
          map:{
            latitude:37.56897,
            longitude:126.88,
          },
        },
      },
      {
        id: 4,
        campsite: {
          photo: `${camp4}`,
          name: "CAMPSITE-4",
          location: "강동그린웨이 가족캠핑장",
          type: "르노마스터",
          logo:"Campsite4.com",
          from:'9:30 am',
          to:'11:30 pm',
          company: "다온티앤티",
          rate: 3.5,
          Explanation:
            "Nice eats, great drinks, wonderful vibes. What more do you need when you are having a barbecue party with your buddies! Nothing but those meats and some nice drinks! That's it!!"
          ,
          map:{ 
            latitude:37.537848,
            longitude:127.1548599,
          },
        },
      },
      {
        id: 5,
        campsite: {
          photo: `${camp5}`,
          name: "CAMPSITE-5",
          location: "초안산 캠핑장",
          type: "포터",
          logo:"Campsite5.com",
          from:'8:00 am',
          to:'10:00 pm',
          company: "다온티앤티",
          rate: 4.5,
          Explanation:
            "If you do not have your own camping equipment, then this if the place for you. Everything you might need for camping can be rented and there is a well stocked camping grocery store. City buses reach the site too. "
          ,
          map:{
            latitude:37.6349575,
            longitude:127.0517796,
          },
        },
      },
      {
        id: 6,
        campsite: {
          photo: `${camp6}`,
          name: "CAMPSITE-6",
          location: "뽀로로파크 일산킨텍스점",
          type: "포터",
          logo:"Campsite6.com",
          from:'10:00 am',
          to:'11:40 pm',
          company: "다온티앤티",
          rate: 4.7,
          Explanation:
            "Definitely a good place to go for a gathering. Enjoy drinks and BBQ by the Han river. Better to buy the ingredients outside than at the store located there as it may get pricey."
          ,
          map:{
            latitude:37.6669453,
            longitude:126.7475805
          },
        },
      },
      {
        id: 7,
        campsite: {
          photo: `${camp7}`,
          name: "CAMPSITE-7",
          location: "양주산성로737번길",
          type: "포터",
          logo:"Campsite7.com",
          from:'10:00 am',
          to:'11:00 pm',
          company: "다온티앤티",
          rate: 4.2,
          Explanation:
            "It was my second visit. Campsite was clean and affordable. Camps of different sizes are available. You can get additional facilities too by paying additional money. It's a good place for gathering and BBQ."
          ,
          map:{
            latitude:37.78667,
            longitude:126.97589,
          },
        },
      },
      {
        id: 8,
        campsite: {
          photo: `${camp8}`,
          name: "CAMPSITE-8",
          location: "왕송못서길",
          type: "봉고",
          logo:"Campsite8.com",
          from:'9:30 am',
          to:'11:00 pm',
          company: "제일모빌",
          rate: 4.2,
          Explanation:
            "It is well equipped for auto camping. It's close to public transportation, so it's great for backpacking. The auto camping area had space between sites so it wasn't too noisy."
          ,
          map:{
            latitude:37.306487318251854,
            longitude:126.94387723719873,
          },
        },
    },
    {
        id: 9,
        campsite: {
          photo: `${camp9}`,
          name: "CAMPSITE-9",
          location: "워커힐 캠핑 인 더 시티",
          type: "르노마스터",
          logo:"Campsite9.com",
          from:'11:00 am',
          to:'11:00 pm',
          company: "다온티앤티",
          rate: 4.5,
          Explanation:
            "It is a well-maintained camping site that is easily accessible from Seoul and has all the basic facilities necessary for camping. Nearby is Choansan Sports Park, which includes soccer fields, tennis courts, and badminton courts, and Tuktak Children's Playground, Generation Empathy Park, and Wildflower Fragrance Garden are also nearby."
          ,
          map:{
            latitude:37.566,
            longitude:126.9784,
          },
          
        },
      },
      {
        id: 10,
        campsite: {
          photo: `${camp101}`,
          name: "CAMPSITE-10",
          location: "가산낚시터",
          type: "르노마스터",
          logo:"Campsite10.com",
          from:'9:30 am',
          to:'10:00 pm',
          date: "22년 03월",
          company: "다온티앤티",
          rate: 4.5,
          Explanation:
            "There is a camping site in the city center, so it is convenient to use. Just prepare the food and all equipment can be rented or purchased at the concession stand.It's okay."
          ,
          map:{
            latitude:37.83533,
            longitude:127.20361,
          },
          
        },
      },
      {
        id: 11,
        campsite: {
          photo: `${camp111}`,
          name: "CAMPSITE-11",
          location: "Nami Island",
          type: "르노마스터",
          logo:"Campsite11.com",
          from:'9:00 am',
          to:'11:00 pm',
          date: "22년 03월",
          company: "다온티앤티",
          rate: 4.5,
          Explanation:
            "First of all, it's close to downtown Seoul, convenient for transportation, and since it just opened, all the facilities are clean and well-maintained, which is great."
          ,
          map:{
            latitude:37.7764762,
            longitude:127.6618129,
          },
          
        },
      },
      {
        id: 12,
        campsite: {
          photo: `${camp12chi}`,
          name: "CAMPSITE-12",
          location: "난지 한강공원",
          type: "르노마스터",
          logo:"Campsite12.com",
          from:'9:30 am',
          to:'11:00 pm',
          date: "22년 03월",
          company: "다온티앤티",
          rate: 4.5,
          Explanation:
            "A camping site close to the city center. I was able to spend quiet time with my family in nature. You can park in a designated area, pitch a tent, set up a table and chairs, and have a barbecue and eat."
          ,
          map:{
            latitude:37.55438,
            longitude:126.90926,
          },
          
        },
      }
],};
