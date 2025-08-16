var APP_DATA = {
  "scenes": [
    {
      "id": "0-gerbang",
      "name": "Gerbang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4280823277430912,
        "pitch": 0.07005551478063943,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 0.3673932795162731,
          "pitch": 0.09474593716816315,
          "rotation": 0,
          "target": "1-jalan-masuk-utama"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8447652567540462,
          "pitch": 0.09283111842435687,
          "title": "Pos Penjagaan",
          "text": "Text"
        },
        {
          "yaw": -1.0655446261669077,
          "pitch": -0.022499542954005136,
          "title": "Arah Palette",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-jalan-masuk-utama",
      "name": "Jalan Masuk Utama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7511924604435443,
        "pitch": 0.48466247248442507,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -1.2786822465747036,
          "pitch": 0.13561354180366614,
          "rotation": 0,
          "target": "0-gerbang"
        },
        {
          "yaw": 1.584500279863576,
          "pitch": 0.18618177937586466,
          "rotation": 0,
          "target": "2-bundaran"
        },
        {
          "yaw": -0.35918907249124743,
          "pitch": 0.1756788513027523,
          "rotation": 0,
          "target": "8-parkiran"
        },
        {
          "yaw": 0.6620315042763156,
          "pitch": 0.218357320472629,
          "rotation": 0,
          "target": "16-taman"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bundaran",
      "name": "Bundaran",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.5017387869550429,
        "pitch": 0.16086008786398054,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 2.9695228327220544,
          "pitch": -0.030511616656516694,
          "rotation": 0,
          "target": "1-jalan-masuk-utama"
        },
        {
          "yaw": -0.8603644379430992,
          "pitch": -0.0044860994282842626,
          "rotation": 0,
          "target": "3-depan-koridor"
        },
        {
          "yaw": 0.8920994615503464,
          "pitch": -0.023184321657469198,
          "rotation": 0,
          "target": "17-belakang-masjid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-depan-koridor",
      "name": "Depan Koridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.022890414529442182,
        "pitch": 0.21831011924396115,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 3.123725378061626,
          "pitch": 0.15236862216770675,
          "rotation": 0,
          "target": "2-bundaran"
        },
        {
          "yaw": -0.9674568144165221,
          "pitch": 0.222643319716612,
          "rotation": 0,
          "target": "4-koridor-asrama"
        },
        {
          "yaw": 1.1614282946113708,
          "pitch": 0.2005155672711023,
          "rotation": 0,
          "target": "9-depan-masjid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-koridor-asrama",
      "name": "Koridor Asrama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11658287527580313,
        "pitch": 0.17235009413997737,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -2.713494251860725,
          "pitch": -0.07757832173671986,
          "rotation": 0,
          "target": "3-depan-koridor"
        },
        {
          "yaw": -0.34404416057873277,
          "pitch": -0.04518120211466936,
          "rotation": 0,
          "target": "5-depan-aspuri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-depan-aspuri",
      "name": "Depan Aspuri",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.715570134102987,
        "pitch": -0.07468504079398919,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 0.061204801175254175,
          "pitch": -0.012495931779266556,
          "rotation": 0,
          "target": "4-koridor-asrama"
        },
        {
          "yaw": -2.5276518773153978,
          "pitch": 0.0005826189640796287,
          "rotation": 0,
          "target": "21-ruang-makan"
        },
        {
          "yaw": 2.4042478260751157,
          "pitch": -0.08599523959107103,
          "rotation": 0,
          "target": "22-kamar-aspuri"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6557006637263125,
          "pitch": -0.08034942957744562,
          "title": "Asrama Putri",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-depan-koperasi",
      "name": "Depan Koperasi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.611233111027502,
        "pitch": 0.11703942135108036,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 0.47484136881731587,
          "pitch": 0.16165390737290863,
          "rotation": 0,
          "target": "5-depan-aspuri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-guest-house",
      "name": "Guest House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5832608396552388,
        "pitch": 0.23554512865797506,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 1.5326491131507503,
          "pitch": -0.019099723911656596,
          "rotation": 0,
          "target": "6-depan-koperasi"
        },
        {
          "yaw": -1.8218026502850044,
          "pitch": -0.011580402542625379,
          "rotation": 0,
          "target": "8-parkiran"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-parkiran",
      "name": "Parkiran",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.17718364678206022,
        "pitch": 0.4064840891974715,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -1.3640042635467644,
          "pitch": 0.13834086185726058,
          "rotation": 0,
          "target": "7-guest-house"
        },
        {
          "yaw": 1.175892680597089,
          "pitch": 0.1455120997079149,
          "rotation": 0,
          "target": "1-jalan-masuk-utama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-depan-masjid",
      "name": "Depan Masjid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.16239781109272045,
        "pitch": -0.04308752353498768,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -1.7668515124361122,
          "pitch": 0.18491629621941286,
          "rotation": 0,
          "target": "10-gedung-sma"
        },
        {
          "yaw": -0.7462656177814253,
          "pitch": 0.1414722297535853,
          "rotation": 0,
          "target": "17-belakang-masjid"
        },
        {
          "yaw": 2.051986685446063,
          "pitch": 0.15030719454176023,
          "rotation": 0,
          "target": "18-lapangan-futsal"
        },
        {
          "yaw": -2.6960647611156414,
          "pitch": 0.21068976474671608,
          "rotation": 0,
          "target": "19-gedung-smp"
        },
        {
          "yaw": 0.19561016814013144,
          "pitch": -0.15028058629788887,
          "rotation": 0,
          "target": "20-masjid"
        },
        {
          "yaw": 1.2747262910914703,
          "pitch": 0.18058841028605066,
          "rotation": 0,
          "target": "3-depan-koridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gedung-sma",
      "name": "Gedung SMA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.09238858548931539,
        "pitch": 0.03734252039699193,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -2.5302238078260686,
          "pitch": 0.21388532911711167,
          "rotation": 0,
          "target": "11-lapangan-voli"
        },
        {
          "yaw": -1.0359756174102372,
          "pitch": 0.008003639331786161,
          "rotation": 0,
          "target": "12-lab-komputer"
        },
        {
          "yaw": -0.48382572398217505,
          "pitch": 0.07130622518502605,
          "rotation": 0,
          "target": "13-lab-kimia"
        },
        {
          "yaw": 0.5400034548981907,
          "pitch": -0.15103529614348332,
          "rotation": 0,
          "target": "14-lab-fisika"
        },
        {
          "yaw": 1.1551928548260229,
          "pitch": -0.60371200921292,
          "rotation": 0,
          "target": "15-ruang-kelas"
        },
        {
          "yaw": 2.1912267115007156,
          "pitch": 0.15242642800743234,
          "rotation": 0,
          "target": "9-depan-masjid"
        },
        {
          "yaw": -2.3021356954705112,
          "pitch": 0.13660465174829994,
          "rotation": 0,
          "target": "24-depan-perpustakaan"
        },
        {
          "yaw": 3.1020632869952145,
          "pitch": 0.13132224683907268,
          "rotation": 0,
          "target": "19-gedung-smp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-lapangan-voli",
      "name": "Lapangan Voli",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.2747174133660355,
        "pitch": 0.22681760709220633,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -3.0283001176937336,
          "pitch": 0.12692506584947516,
          "rotation": 0,
          "target": "10-gedung-sma"
        },
        {
          "yaw": -0.8889882201250163,
          "pitch": 0.20969261453696575,
          "rotation": 0,
          "target": "19-gedung-smp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lab-komputer",
      "name": "Lab Komputer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5912580649046904,
          "pitch": -0.005699273643527292,
          "rotation": 0,
          "target": "10-gedung-sma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lab-kimia",
      "name": "Lab Kimia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9722948257797945,
          "pitch": 0.22364757672879776,
          "rotation": 0,
          "target": "10-gedung-sma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-lab-fisika",
      "name": "Lab Fisika",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5372722362101072,
          "pitch": 0.2547930049372251,
          "rotation": 0,
          "target": "10-gedung-sma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ruang-kelas",
      "name": "Ruang Kelas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "16-taman",
      "name": "Taman",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.080679996153761,
          "pitch": 0.01267163433525198,
          "rotation": 0,
          "target": "8-parkiran"
        },
        {
          "yaw": 0.3538901194289359,
          "pitch": -0.009432496422242309,
          "rotation": 0,
          "target": "2-bundaran"
        },
        {
          "yaw": 1.8648171162545628,
          "pitch": -0.008671060149708865,
          "rotation": 0,
          "target": "1-jalan-masuk-utama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-belakang-masjid",
      "name": "Belakang Masjid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.45174581834333694,
          "pitch": 0.14610341077155375,
          "rotation": 0,
          "target": "10-gedung-sma"
        },
        {
          "yaw": -0.7386685186383737,
          "pitch": 0.16906705988457915,
          "rotation": 0,
          "target": "9-depan-masjid"
        },
        {
          "yaw": -2.940873679280589,
          "pitch": 0.21984678838970595,
          "rotation": 0,
          "target": "2-bundaran"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-lapangan-futsal",
      "name": "Lapangan Futsal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9807813534029233,
          "pitch": 0.10196748239147624,
          "rotation": 0,
          "target": "9-depan-masjid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-gedung-smp",
      "name": "Gedung SMP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0644504603645437,
          "pitch": 0.12123713360480792,
          "rotation": 0,
          "target": "9-depan-masjid"
        },
        {
          "yaw": 2.8634334825743366,
          "pitch": 0.07258573227675491,
          "rotation": 0,
          "target": "10-gedung-sma"
        },
        {
          "yaw": 2.534321724065288,
          "pitch": 0.11949809968935199,
          "rotation": 0,
          "target": "11-lapangan-voli"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-masjid",
      "name": "Masjid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1392126062578196,
          "pitch": 0.17989054368059598,
          "rotation": 0,
          "target": "3-depan-koridor"
        },
        {
          "yaw": -1.798973252106407,
          "pitch": 0.1913643513349399,
          "rotation": 0,
          "target": "9-depan-masjid"
        },
        {
          "yaw": 1.8197760719973681,
          "pitch": 0.195351174737036,
          "rotation": 0,
          "target": "2-bundaran"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ruang-makan",
      "name": "Ruang makan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.825923335532913,
          "pitch": 0.13354005722603546,
          "rotation": 0,
          "target": "5-depan-aspuri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-kamar-aspuri",
      "name": "Kamar Aspuri",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.9477253517976116,
        "pitch": 0.25658674302194306,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": -0.36615501571495557,
          "pitch": 0.08020103496589392,
          "rotation": 0,
          "target": "5-depan-aspuri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-perpustakaan",
      "name": "Perpustakaan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2579532230616355,
          "pitch": 0.16429545628322018,
          "rotation": 0,
          "target": "24-depan-perpustakaan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-depan-perpustakaan",
      "name": "Depan Perpustakaan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.16566089821601615,
        "pitch": 0.30060100379683163,
        "fov": 1.3874182578267722
      },
      "linkHotspots": [
        {
          "yaw": 0.28633156418684713,
          "pitch": 0.16927349353973398,
          "rotation": 0,
          "target": "23-perpustakaan"
        },
        {
          "yaw": 2.184215810259076,
          "pitch": 0.14013644959057103,
          "rotation": 0,
          "target": "10-gedung-sma"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
