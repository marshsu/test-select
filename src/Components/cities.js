import _ from "lodash";

const enAreaContinent = [
  {
    continent: "Asia|||A01",
    countrys: [
      {
        country: "Japan|||A01-003",
        citys: [
          "Tokyo|||A01-003-00001",
          "Okinawa|||A01-003-00013",
          "Kyoto|||A01-003-00003",
          "Osaka|||A01-003-00002",
          "Sapporo|||A01-003-00004",
          "Hokkaido|||A01-003-00005",
          "Kanagawa|||A01-003-00007",
          "Nagoya|||A01-003-00027",
          "Fukuoka|||A01-003-00040",
          "Hiroshima|||A01-003-00011",
          "Shizuoka|||A01-003-00009",
          "Kobe|||A01-003-00028",
          "Nara|||A01-003-00006",
          "Tochigi|||A01-003-00012",
          "kyushu|||A01-003-00047",
          "Kagojima|||A01-003-00046",
          "Miyazaki|||A01-003-00045",
          "Kumamoto|||A01-003-00044",
          "Mie|||A01-003-00008",
          "All city|||A01-003-99999",
          "Toyama|||A01-003-00014",
          "Aichi|||A01-003-00026",
          "Akita|||A01-003-00031",
          "Aomori|||A01-003-00030",
          "Chiba|||A01-003-00039",
          "Ehime|||A01-003-00049",
          "Fukui|||A01-003-00034",
          "Fukushima|||A01-003-00037",
          "Gifu|||A01-003-00015",
          "Gunma|||A01-003-00016",
          "Hyogo|||A01-003-00022",
          "Ibaraki|||A01-003-00020",
          "Ishikawa|||A01-003-00033",
          "Kagawa|||A01-003-00038",
          "Kochi|||A01-003-00023",
          "Miyagi|||A01-003-00032",
          "Nagano|||A01-003-00017",
          "Nagasaki|||A01-003-00041",
          "Niigata|||A01-003-00021",
          "Oita|||A01-003-00018",
          "Okayama|||A01-003-00035",
          "Saga|||A01-003-00051",
          "Shiga|||A01-003-00025",
          "Tokushima|||A01-003-00024",
          "Wakayama|||A01-003-00036",
          "Yamagata|||A01-003-00043",
          "Yamanashi|||A01-003-00010",
          "Tottori|||A01-003-00050"
        ]
      },
      {
        country: "Korea|||A01-004",
        citys: [
          "Chungbuk|||A01-004-00009",
          "Chungnam|||A01-004-00010",
          "Gangwon|||A01-004-00003",
          "Gimpo|||A01-004-00014",
          "Gyeongbuk|||A01-004-00011",
          "Gyeonggi|||A01-004-00007",
          "Gyeongju|||A01-004-00005",
          "Gyeongnam|||A01-004-00006",
          "Incheon|||A01-004-00015",
          "Jeju|||A01-004-00012",
          "Jeonbuk|||A01-004-00008",
          "Jeonju|||A01-004-00016",
          "Jeonnam|||A01-004-00004",
          "Seoul|||A01-004-00001",
          "Suwon|||A01-004-00013",
          "Busan|||A01-004-00002",
          "All city|||A01-004-99999",
          "Daegu|||A01-004-00019",
          "Jinhae-gu|||A01-004-00018"
        ]
      },
      {
        country: "Taiwan|||A01-001",
        citys: [
          "Keelung|||A01-001-00026",
          "Taipei|||A01-001-00001",
          "Tainan|||A01-001-00003",
          "New Taipei City|||A01-001-00006",
          "Taoyuan|||A01-001-00008",
          "Hsinchu|||A01-001-00009",
          "Miaoli|||A01-001-00010",
          "Taichung|||A01-001-00002",
          "Changhua|||A01-001-00011",
          "Nantou|||A01-001-00012",
          "Yunlin|||A01-001-00013",
          "Chiayi|||A01-001-00014",
          "Kaohsiung|||A01-001-00004",
          "Pingtung|||A01-001-00015",
          "Kenting|||A01-001-00016",
          "Yilan|||A01-001-00017",
          "Hualien|||A01-001-00005",
          "Taitung|||A01-001-00018",
          "Penghu|||A01-001-00019",
          "Orchid Island|||A01-001-00022",
          "Green Island|||A01-001-00023",
          "All city|||A01-001-99999"
        ]
      },
      {
        country: "Thailand|||A01-010",
        citys: [
          "Bangkok|||A01-010-00001",
          "Pattaya|||A01-010-00007",
          "Chiang Mai|||A01-010-00003",
          "Hua Hin|||A01-010-00008",
          "Chiang Rai|||A01-010-00004",
          "Phuket|||A01-010-00002",
          "Koh Samui|||A01-010-00005",
          "Krabi|||A01-010-00006",
          "Khao Lak|||A01-010-00013",
          "Koh Chang|||A01-010-00009",
          "All city|||A01-010-99999",
          "Kanchanaburi|||A01-010-00012",
          "Koh Lanta|||A01-010-00018",
          "Rayong|||A01-010-00014"
        ]
      },
      {
        country: "Malaysia|||A01-009",
        citys: [
          "Sabah-Kota Kinabalu|||A01-009-00005",
          "Kuala  Lumpur|||A01-009-00004",
          "Kuching|||A01-009-00003",
          "Langkawi|||A01-009-00002",
          "Penang|||A01-009-00001",
          "Johor Baru|||A01-009-00008",
          "All city|||A01-009-99999",
          "Sabah- Tawau and Semporna|||A01-009-00014",
          "Sabah-Sandakan|||A01-009-00009",
          "Ipoh|||A01-009-00011",
          "Kuantan|||A01-009-00012",
          "Melaka|||A01-009-00010",
          "Miri|||A01-009-00016"
        ]
      },
      {
        country: "Singapore|||A01-013",
        citys: ["Singapore|||A01-013-00001", "All city|||A01-013-99999"]
      },
      {
        country: "Hong Kong and Macau|||A01-005",
        citys: [
          "Hong Kong|||A01-005-00001",
          "Macau|||A01-005-00002",
          "All city|||A01-005-99999"
        ]
      },
      {
        country: "China|||A01-002",
        citys: [
          "Beijing|||A01-002-00001",
          "Hangzhou|||A01-002-00002",
          "Chengdu|||A01-002-00003",
          "Guangzhou|||A01-002-00004",
          "Guilin|||A01-002-00005",
          "Shanghai|||A01-002-00008",
          "Xian|||A01-002-00009",
          "All city|||A01-002-99999",
          "Guangdong|||A01-002-00051",
          "Nanjing|||A01-002-00022",
          "Suzhou|||A01-002-00023",
          "Tibet|||A01-002-00039",
          "Sichuan|||A01-002-00047"
        ]
      },
      {
        country: "Vietnam|||A01-011",
        citys: [
          "Ho Chi Minh City|||A01-011-00002",
          "Hanoi|||A01-011-00001",
          "Ha Long Bay|||A01-011-00004",
          "Sapa|||A01-011-00005",
          "Hoi An|||A01-011-00006",
          "All city|||A01-011-99999",
          "Da Lat|||A01-011-00010",
          "Da Nang|||A01-011-00007",
          "Hue|||A01-011-00008",
          "Mũi Né|||A01-011-00012",
          "Nha Trang|||A01-011-00009",
          "Phu Quoc|||A01-011-00011"
        ]
      },
      {
        country: "Indonesia|||A01-012",
        citys: [
          "Bali|||A01-012-00001",
          "Ubud|||A01-012-00002",
          "Yogyakarta|||A01-012-00005",
          "All city|||A01-012-99999"
        ]
      },
      {
        country: "Philippines|||A01-008",
        citys: [
          "Boracay|||A01-008-00003",
          "Cebu|||A01-008-00002",
          "Palawan|||A01-008-00006",
          "Manila|||A01-008-00001",
          "All city|||A01-008-99999",
          "Bohol|||A01-008-00009",
          "Dumaguete|||A01-008-00008",
          "Oslob|||A01-008-00010"
        ]
      },
      {
        country: "Cambodia|||A01-014",
        citys: [
          "Angkor Wat|||A01-014-00001",
          "Siem Reap|||A01-014-00003",
          "Phnom Penh|||A01-014-00002",
          "Sihanoukville|||A01-014-00005",
          "All city|||A01-014-99999"
        ]
      },
      {
        country: "Laos|||A01-006",
        citys: [
          "Luang Prabang|||A01-006-00002",
          "Vang Vieng|||A01-006-00003",
          "Vientiane|||A01-006-00001",
          "All city|||A01-006-99999"
        ]
      },
      {
        country: "Myanmar|||A01-007",
        citys: [
          "Yangon|||A01-007-00001",
          "All city|||A01-007-99999",
          "Bagan|||A01-007-00006",
          "Mandalay|||A01-007-00003",
          "Nyaung Shwe|||A01-007-00004",
          "Taunggyi|||A01-007-00005"
        ]
      },
      {
        country: "India|||A01-015",
        citys: ["All city|||A01-015-99999"]
      },
      {
        country: "Bhutan|||A01-017",
        citys: ["Bhutan|||A01-017-00001"]
      },
      {
        country: "Nepal|||A01-018",
        citys: ["Kathmandu|||A01-018-00003"]
      },
      {
        country: "Oman|||A01-020",
        citys: ["Muscat|||A01-020-00001"]
      },
      {
        country: "UnitedArabEmirates|||A01-019",
        citys: ["Abu Dhabi|||A01-019-00002"]
      }
    ]
  },
  {
    continent: "Europe|||A03",
    countrys: [
      {
        country: "Albania|||A03-030",
        citys: ["Tirana|||A03-030-00001"]
      },
      {
        country: "Bulgaria|||A03-029",
        citys: ["Plovdiv|||A03-029-00001", "Sofia|||A03-029-00002"]
      },
      {
        country: "France|||A03-013",
        citys: [
          "Beaune|||A03-013-00008",
          "Bordeaux|||A03-013-00009",
          "Caen|||A03-013-00010",
          "Dijon|||A03-013-00013",
          "Lourdes|||A03-013-00018",
          "Lyon|||A03-013-00019",
          "Marseille|||A03-013-00002",
          "Nimes|||A03-013-00022",
          "Paris|||A03-013-00001",
          "Reims|||A03-013-00023",
          "Strasbourg|||A03-013-00026",
          "Toulouse|||A03-013-00027",
          "Nice|||A03-013-00003",
          "All city|||A03-013-99999",
          "Aix-en-Provence|||A03-013-00006",
          "Avignon|||A03-013-00005"
        ]
      },
      {
        country: "Georgia|||A03-037",
        citys: ["Tbilisi|||A03-037-00001"]
      },
      {
        country: "Latvia|||A03-036",
        citys: ["Riga|||A03-036-00001"]
      },
      {
        country: "Romania|||A03-033",
        citys: ["Bucharest|||A03-033-00001", "Cluj-Napoca|||A03-033-00002"]
      },
      {
        country: "Serbia|||A03-031",
        citys: ["Belgrade|||A03-031-00001"]
      },
      {
        country: "Slovenija|||A03-035",
        citys: ["Ljubljana|||A03-035-00001"]
      },
      {
        country: "United Kingdom|||A03-009",
        citys: [
          "Edinburgh|||A03-009-00005",
          "Gibraltar|||A03-009-00012",
          "Glasgow|||A03-009-00006",
          "Inverness|||A03-009-00007",
          "Lake District|||A03-009-00004",
          "Leeds|||A03-009-00008",
          "London|||A03-009-00001",
          "Stratford-upon-Avon|||A03-009-00013",
          "Oxford|||A03-009-00002",
          "Liverpool|||A03-009-00003",
          "All city|||A03-009-99999"
        ]
      },
      {
        country: "Italy|||A03-012",
        citys: [
          "Assisi|||A03-012-00008",
          "Catania|||A03-012-00009",
          "Genoa|||A03-012-00010",
          "Lucca|||A03-012-00011",
          "Naples|||A03-012-00013",
          "Pisa|||A03-012-00014",
          "Pompeii|||A03-012-00012",
          "Rome|||A03-012-00001",
          "San Gimignano|||A03-012-00015",
          "Siena|||A03-012-00017",
          "Florence|||A03-012-00002",
          "Venice|||A03-012-00003",
          "All city|||A03-012-99999",
          "Milan|||A03-012-00006",
          "Verona|||A03-012-00007"
        ]
      },
      {
        country: "Germany|||A03-004",
        citys: [
          "Berlin|||A03-004-00001",
          "Bonn|||A03-004-00014",
          "Düsseldorf|||A03-004-00016",
          "Erfurt|||A03-004-00017",
          "Frasdorf|||A03-004-00013",
          "Heidelberg|||A03-004-00019",
          "Leipzig|||A03-004-00020",
          "Meissen|||A03-004-00021",
          "Munich|||A03-004-00005",
          "Nuremberg|||A03-004-00022",
          "Potsdam|||A03-004-00023",
          "Rostock|||A03-004-00024",
          "Rüdesheim am Rhein|||A03-004-00025",
          "Frankfurt|||A03-004-00002",
          "Cologne|||A03-004-00003",
          "Hamburg|||A03-004-00004",
          "All city|||A03-004-99999",
          "Bamberg|||A03-004-00011",
          "Bremen|||A03-004-00010",
          "Dresden|||A03-004-00007",
          "Mannheim|||A03-004-00012",
          "Stuttgart|||A03-004-00009"
        ]
      },
      {
        country: "Czech Republic|||A03-010",
        citys: [
          "Prague|||A03-010-00001",
          "All city|||A03-010-99999",
          "Brno|||A03-010-00004",
          "Olomouc|||A03-010-00003"
        ]
      },
      {
        country: "Portugal|||A03-023",
        citys: [
          "Albufeira|||A03-023-00003",
          "Funchal|||A03-023-00005",
          "Lisbon|||A03-023-00001",
          "Olhao|||A03-023-00004",
          "Porto|||A03-023-00002",
          "All city|||A03-023-99999"
        ]
      },
      {
        country: "Spain|||A03-014",
        citys: [
          "Adeje|||A03-014-00016",
          "Bilbao|||A03-014-00023",
          "Cordoba|||A03-014-00020",
          "Fuerteventura|||A03-014-00019",
          "Granada|||A03-014-00018",
          "Madrid|||A03-014-00002",
          "Mallorca|||A03-014-00010",
          "Seville|||A03-014-00012",
          "Tarragona|||A03-014-00013",
          "Tenerife|||A03-014-00014",
          "Barcelona|||A03-014-00001",
          "All city|||A03-014-99999",
          "Gran Canaria|||A03-014-00008",
          "ibiza|||A03-014-00005",
          "Malaga|||A03-014-00004",
          "San Sebastian|||A03-014-00007",
          "Valencia|||A03-014-00006"
        ]
      },
      {
        country: "The Netherlands|||A03-011",
        citys: ["Amsterdam|||A03-011-00001", "All city|||A03-011-99999"]
      },
      {
        country: "Turkey|||A03-008",
        citys: [
          "Alanya|||A03-008-00012",
          "Avanos|||A03-008-00013",
          "Istanbul|||A03-008-00001",
          "Ankara|||A03-008-00002",
          "Antalya|||A03-008-00003",
          "Bodrum|||A03-008-00004",
          "Cappadocia|||A03-008-00005",
          "Izmir|||A03-008-00006",
          "Marmaris|||A03-008-00008",
          "All city|||A03-008-99999",
          "Pamukkale|||A03-008-00010"
        ]
      },
      {
        country: "Austria|||A03-005",
        citys: [
          "Vienna|||A03-005-00001",
          "Insbruck|||A03-005-00002",
          "salzburg|||A03-005-00003",
          "All city|||A03-005-99999",
          "Hallstatt|||A03-005-00005"
        ]
      },
      {
        country: "Poland|||A03-025",
        citys: [
          "Szczecin|||A03-025-00003",
          "Warsaw|||A03-025-00001",
          "Krakow|||A03-025-00002",
          "All city|||A03-025-99999"
        ]
      },
      {
        country: "Ireland|||A03-021",
        citys: [
          "Cobh|||A03-021-00008",
          "Cork|||A03-021-00007",
          "Dublin|||A03-021-00001",
          "Killarney|||A03-021-00002",
          "All city|||A03-021-99999",
          "Galway|||A03-021-00005"
        ]
      },
      {
        country: "Hungary|||A03-007",
        citys: ["Budapest|||A03-007-00001", "All city|||A03-007-99999"]
      },
      {
        country: "Croatia|||A03-006",
        citys: [
          "Dalmatia|||A03-006-00004",
          "Trogir|||A03-006-00008",
          "Zadar|||A03-006-00006",
          "Split|||A03-006-00002",
          "Dubrovnik|||A03-006-00003",
          "All city|||A03-006-99999"
        ]
      },
      {
        country: "Lithuania|||A03-003",
        citys: ["Vilnius|||A03-003-00001", "All city|||A03-003-99999"]
      },
      {
        country: "Estonia|||A03-002",
        citys: ["Tallinn|||A03-002-00001", "All city|||A03-002-99999"]
      },
      {
        country: "Belgium|||A03-015",
        citys: [
          "Brussels|||A03-015-00001",
          "Cardiff|||A03-015-00003",
          "All city|||A03-015-99999"
        ]
      },
      {
        country: "Denmark|||A03-016",
        citys: ["Copenhagen|||A03-016-00001", "All city|||A03-016-99999"]
      },
      {
        country: "Finland|||A03-017",
        citys: [
          "Helsinki|||A03-017-00001",
          "All city|||A03-017-99999",
          "Rovaniemi|||A03-017-00002"
        ]
      },
      {
        country: "Greece|||A03-018",
        citys: [
          "Heraklion|||A03-018-00009",
          "Kos Island|||A03-018-00012",
          "Meteora|||A03-018-00011",
          "All city|||A03-018-99999",
          "Athens|||A03-018-00001",
          "Crete|||A03-018-00005",
          "Mykonos|||A03-018-00007",
          "Santorini|||A03-018-00003",
          "Peloponnesian|||A03-018-00004",
          "Rhodes|||A03-018-00006"
        ]
      },
      {
        country: "Iceland|||A03-020",
        citys: [
          "Husavik|||A03-020-00003",
          "Reykjavik|||A03-020-00002",
          "Vatnajokull National Park|||A03-020-00004",
          "All city|||A03-020-99999"
        ]
      },
      {
        country: "Malta|||A03-027",
        citys: [
          "George Town|||A03-027-00003",
          "Mdina|||A03-027-00004",
          "Valletta|||A03-027-00001",
          "All city|||A03-027-99999"
        ]
      },
      {
        country: "Monaco|||A03-026",
        citys: ["Monaco|||A03-026-00001", "All city|||A03-026-99999"]
      },
      {
        country: "Norway|||A03-024",
        citys: [
          "Oslo|||A03-024-00001",
          "All city|||A03-024-99999",
          "Tromso|||A03-024-00003"
        ]
      },
      {
        country: "Russia|||A03-001",
        citys: [
          "Moscow|||A03-001-00001",
          "Saint Petersburg|||A03-001-00002",
          "All city|||A03-001-99999"
        ]
      },
      {
        country: "Sweden|||A03-022",
        citys: [
          "Stockholm|||A03-022-00001",
          "All city|||A03-022-99999",
          "Abisko|||A03-022-00003"
        ]
      },
      {
        country: "Switzerland|||A03-019",
        citys: [
          "Geneva|||A03-019-00002",
          "Interlaken|||A03-019-00005",
          "Zurich|||A03-019-00001",
          "All city|||A03-019-99999"
        ]
      },
      {
        country: "Ukraine|||A03-028",
        citys: ["Odessa|||A03-028-00002", "Kyiv|||A03-028-00001"]
      }
    ]
  },
  {
    continent: "North America|||A05",
    countrys: [
      {
        country: "Bahamas|||A05-004",
        citys: [
          "Freeport|||A05-004-00003",
          "Nassau|||A05-004-00002",
          "Rose Island|||A05-004-00001"
        ]
      },
      {
        country: "Cuba|||A05-005",
        citys: ["Varadero|||A05-005-00002"]
      },
      {
        country: "United States|||A05-001",
        citys: [
          "Alaska|||A05-001-00032",
          "Arizona|||A05-001-00047",
          "Charleston|||A05-001-00034",
          "Charlotte Amalie|||A05-001-00045",
          "Colorado Springs|||A05-001-00035",
          "Detroit|||A05-001-00036",
          "Fort Lauderdale|||A05-001-00037",
          "Fort Myers|||A05-001-00038",
          "Honolu|||A05-001-00029",
          "Key West|||A05-001-00039",
          "Maui|||A05-001-00027",
          "Nashville|||A05-001-00040",
          "New York City|||A05-001-00001",
          "Palm Springs|||A05-001-00043",
          "Paso Robles|||A05-001-00044",
          "Portland|||A05-001-00041",
          "Sedona|||A05-001-00030",
          "West Palm Beach|||A05-001-00042",
          "Boston|||A05-001-00002",
          "Denver|||A05-001-00022",
          "Houston|||A05-001-00020",
          "New Orleans|||A05-001-00016",
          "Orlando|||A05-001-00003",
          "Philadelphia|||A05-001-00019",
          "Savannah|||A05-001-00023",
          "St Augustine|||A05-001-00015",
          "Wyoming|||A05-001-00014",
          "Miami|||A05-001-00004",
          "Washington D.C.|||A05-001-00005",
          "Las Vegas|||A05-001-00006",
          "Los Angeles|||A05-001-00007",
          "San Francisco|||A05-001-00008",
          "Chicago|||A05-001-00009",
          "San Diego|||A05-001-00010",
          "Hawaii|||A05-001-00011",
          "Seattle|||A05-001-00012",
          "Salt Lake City|||A05-001-00021",
          "All city|||A05-001-99999"
        ]
      },
      {
        country: "Mexico|||A05-003",
        citys: [
          "Cabo San Lucas|||A05-003-00005",
          "Chichen Itza|||A05-003-00006",
          "Cozumel|||A05-003-00007",
          "Mérida|||A05-003-00009",
          "Playa del Carmen|||A05-003-00010",
          "Puebla|||A05-003-00011",
          "Puerto Vallarta|||A05-003-00013",
          "San Cristóbal de las Casas|||A05-003-00012",
          "Mexico City|||A05-003-00002",
          "Los Cabos|||A05-003-00003",
          "Cancun|||A05-003-00004",
          "All city|||A05-003-99999"
        ]
      },
      {
        country: "Canada|||A05-002",
        citys: [
          "Vancouver|||A05-002-00001",
          "Toronto|||A05-002-00002",
          "Yellowknife|||A05-002-00004",
          "All city|||A05-002-99999",
          "Niagara Falls|||A05-002-00009",
          "Victoria|||A05-002-00006",
          "Quebec|||A05-002-00005"
        ]
      }
    ]
  },
  {
    continent: "Central America|||A09",
    countrys: [
      {
        country: "Costa Rica|||A09-005",
        citys: [
          "Guanacaste|||A09-005-00001",
          "La Fortuna|||A09-005-00002",
          "Monteverde|||A09-005-00003"
        ]
      },
      {
        country: "Dominican Republic|||A09-003",
        citys: ["Punta Cana|||A09-003-00002", "Santo Domingo|||A09-003-00001"]
      },
      {
        country: "Panama|||A09-004",
        citys: ["Panama City|||A09-004-00001"]
      },
      {
        country: "Puerto Rico|||A09-002",
        citys: ["Ponce|||A09-002-00002", "San Juan|||A09-002-00001"]
      }
    ]
  },
  {
    continent: "South America|||A04",
    countrys: [
      {
        country: "Aruba|||A04-009",
        citys: ["Aruba|||A04-009-00001"]
      },
      {
        country: "Brazil|||A04-001",
        citys: [
          "Manaus|||A04-001-00003",
          "Rio de Janeiro|||A04-001-00006",
          "Iguazu|||A04-001-00002"
        ]
      },
      {
        country: "Argentina|||A04-005",
        citys: [
          "Buenos Aires|||A04-005-00001",
          "El Calafate|||A04-005-00002",
          "Mendoza|||A04-005-00003",
          "Puerto Iguazu|||A04-005-00004"
        ]
      },
      {
        country: "Chile|||A04-002",
        citys: ["All city|||A04-002-99999", "Easter Island|||A04-002-00004"]
      },
      {
        country: "Colombia|||A04-003",
        citys: ["Bogotá|||A04-003-00001"]
      },
      {
        country: "Peru|||A04-008",
        citys: ["Cusco|||A04-008-00002", "Lima|||A04-008-00003"]
      }
    ]
  },
  {
    continent: "Oceania|||A06",
    countrys: [
      {
        country: "Australia|||A06-001",
        citys: [
          "All city|||A06-001-99999",
          "Gold Coast|||A06-001-00007",
          "Cairns|||A06-001-00005",
          "Canberra|||A06-001-00004",
          "Tasmania|||A06-001-00010",
          "Uluru|||A06-001-00011",
          "Perth|||A06-001-00003",
          "Brisbane|||A06-001-00008",
          "Adelaide|||A06-001-00009",
          "Melbourne|||A06-001-00001",
          "Alice Springs|||A06-001-00015",
          "Broome|||A06-001-00013",
          "Darwin|||A06-001-00012",
          "Sydney|||A06-001-00002",
          "Whitsundays|||A06-001-00014"
        ]
      },
      {
        country: "New Zealand|||A06-002",
        citys: [
          "Queenstown|||A06-002-00001",
          "Auckland|||A06-002-00002",
          "Christchurch|||A06-002-00005",
          "South Island|||A06-002-00006",
          "North Island|||A06-002-00007",
          "All city|||A06-002-99999"
        ]
      },
      {
        country: "Guam|||A06-003",
        citys: ["Guam|||A06-003-00001"]
      }
    ]
  },
  {
    continent: "Africa|||A08",
    countrys: [
      {
        country: "Egypt|||A08-001",
        citys: [
          "Aswan|||A08-001-00003",
          "Cairo|||A08-001-00001",
          "Dahab|||A08-001-00004",
          "El Gouna|||A08-001-00005",
          "Giza|||A08-001-00006",
          "Luxor|||A08-001-00007",
          "Marsa Alam|||A08-001-00009",
          "Safaga|||A08-001-00011",
          "Sharm El-Shaikh|||A08-001-00010",
          "Hurghada|||A08-001-00002"
        ]
      },
      {
        country: "Kenya|||A08-005",
        citys: ["Mombasa|||A08-005-00002", "Nairobi|||A08-005-00001"]
      },
      {
        country: "Mauritius|||A08-004",
        citys: [
          "Black River|||A08-004-00001",
          "Mauritius|||A08-004-00003",
          "Port Louis|||A08-004-00002"
        ]
      },
      {
        country: "Zimbabwe|||A08-006",
        citys: ["Matabeleland North|||A08-006-00001"]
      },
      {
        country: "Morocco|||A08-002",
        citys: ["Marrakesh|||A08-002-00003"]
      },
      {
        country: "South Africa|||A08-003",
        citys: [
          "Durban|||A08-003-00003",
          "Johannesburg|||A08-003-00002",
          "Cape Town|||A08-003-00001"
        ]
      }
    ]
  }
];

const mapParser = list => {
  return _.reduce(
    list,
    (acc, u) => {
      let pair = _.split(u, "|||");
      acc.push({ text: pair[0], code: pair[1] });
      return acc;
    },
    []
  );
};

const listParser = list => {
  return _.reduce(
    list,
    (acc, u) => {
      let pair = _.split(u, "|||");
      acc[pair[1]] = pair[0];
      return acc;
    },
    {}
  );
};

const getCountryCode = inCode => {
  const res = inCode.split("-");
  return res.length < 2 ? undefined : `${res[0]}-${res[1]}`;
};

const getCountryCityName = (cityCode, cityText, countriesList) => {
  return `${countriesList[getCountryCode(cityCode)]} - ${cityText}`;
};

const areas = _.mapValues(enAreaContinent, "continent");
const countries = _.map(
  _.flatMap(_.mapValues(enAreaContinent, "countrys")),
  "country"
);
const cities = _.flatMap(
  _.flatMap(_.mapValues(enAreaContinent, "countrys")),
  "citys"
);

export const areasMap = mapParser(areas);
export const countriesMap = mapParser(countries);
export const citiesMap = mapParser(cities);

export const areasList = listParser(areas);
export const countriesList = listParser(countries);
export const citiesList = listParser(cities);

const countryCitiesMap = _.map(citiesMap, city => {
  return {
    value: city.code,
    label: getCountryCityName(city.code, city.text, countriesList)
  };
});
const countryCitiesList = _.reduce(
  countryCitiesMap,
  (result, value, key) => {
    result[value.value] = value.label;
    return result;
  },
  {}
);
export const countryCityUtility = {
  areasMap,
  countriesMap,
  citiesMap,
  areasList,
  countriesList,
  citiesList,
  countryCitiesMap,
  countryCitiesList
};
