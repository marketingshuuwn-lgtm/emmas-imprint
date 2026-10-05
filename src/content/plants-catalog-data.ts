export interface ImageCredit { source: string; author: string; license: string; licenseUrl?: string; }
export interface CatalogPlant { id: number; type: "indoor" | "outdoor"; typeLabel: "داخلي" | "خارجي"; name: string; scientificOrAlt?: string; alsoOutdoor?: boolean; aliases?: string[]; image?: string; imageCredit?: ImageCredit; }

// Illustrative catalog entries, not live stock or verified commercial cultivars.
export const allPlantsCatalog: CatalogPlant[] = [
  {
    "id": 1,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بوتس ذهبي Pothos",
    "image": "/images/plant-pothos.jpg"
  },
  {
    "id": 2,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "سانسيفيريا / جلد النمر",
    "image": "/images/plant-sansevieria.jpg"
  },
  {
    "id": 3,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "الزاميا ZZ",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Zamioculcas_zamiifolia_1.jpg/330px-Zamioculcas_zamiifolia_1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Zamioculcas_zamiifolia_1.jpg",
      "author": "User:WeFt",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 4,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيلوديندرون القلب",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Philodendron_scandens_subsp_oxycardium2.jpg/330px-Philodendron_scandens_subsp_oxycardium2.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Philodendron_scandens_subsp_oxycardium2.jpg",
      "author": "KENPEI",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 5,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "سبايدر بلانت / نبات العنكبوت",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Chlorophytum_comosum%2C_flores.jpg/960px-Chlorophytum_comosum%2C_flores.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Chlorophytum_comosum,_flores.jpg",
      "author": "Juan Carlos Fonseca Mata",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 6,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "مونستيرا",
    "image": "/images/plant-monstera.jpg"
  },
  {
    "id": 7,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "دراسينا",
    "image": "/images/plant-dracaena.jpg"
  },
  {
    "id": 8,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيكس بنجامينا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/960px-Ficus_benjamina2.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Ficus_benjamina2.jpg",
      "author": "KENPEI",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    "alsoOutdoor": true,
    "aliases": [
      "فيكس بنجامينا"
    ]
  },
  {
    "id": 9,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "شفليرا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Schefflera_arboricola%2C_vrugte%2C_a%2C_Pretoria.jpg/330px-Schefflera_arboricola%2C_vrugte%2C_a%2C_Pretoria.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Schefflera_arboricola,_vrugte,_a,_Pretoria.jpg",
      "author": "JMK",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 10,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "أنثوريوم",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/AnthuriumAndraenum.jpg/330px-AnthuriumAndraenum.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:AnthuriumAndraenum.jpg",
      "author": "Taken by Fanghong",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5"
    }
  },
  {
    "id": 11,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "أجلاونيما",
    "image": "/images/plant-aglaonema.jpg"
  },
  {
    "id": 12,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بامبو الحظ",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Dracaena_sanderiana_2.jpg/330px-Dracaena_sanderiana_2.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Dracaena_sanderiana_2.jpg",
      "author": "Cataleirxs",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 13,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيلوديندرون برازيـل"
  },
  {
    "id": 14,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بوتس نيون"
  },
  {
    "id": 15,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بوتس إنجوي"
  },
  {
    "id": 16,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بوتس ماربل كوين"
  },
  {
    "id": 17,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيكس مطاط / Rubber Plant",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Ficus_elastica_leaves_02.JPG/330px-Ficus_elastica_leaves_02.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Ficus_elastica_leaves_02.JPG",
      "author": "B.navez",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 18,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "دراسينا ماسنجانا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Dracaena_fragrans_%282%29.jpg/330px-Dracaena_fragrans_%282%29.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Dracaena_fragrans_(2).jpg",
      "author": "rojypala",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "id": 19,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "دراسينا ليمون لايم",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Dracaena_%27Lemon_Lime%27_1.jpg/960px-Dracaena_%27Lemon_Lime%27_1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Dracaena_%27Lemon_Lime%27_1.jpg",
      "author": "Mokkie",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 20,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "دراسينا كومباكتا"
  },
  {
    "id": 21,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "كالاتيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/CalatheaMakoyana.jpg/330px-CalatheaMakoyana.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:CalatheaMakoyana.jpg",
      "author": "Chhe (talk)",
      "license": "Public domain"
    }
  },
  {
    "id": 22,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "مارانتا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Maranta_leuconeura3.jpg/330px-Maranta_leuconeura3.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Maranta_leuconeura3.jpg",
      "author": "Kurt Stüber [1]",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 23,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "كروتون",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Colpfl05.jpg/330px-Colpfl05.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Colpfl05.jpg",
      "author": "Louise Wolff --darina 23:22, 6 May 2005 (UTC)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    },
    "alsoOutdoor": true,
    "aliases": [
      "كروتون خارجي"
    ]
  },
  {
    "id": 24,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "ببروميا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Peperomia_argyreia.jpg/330px-Peperomia_argyreia.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Peperomia_argyreia.jpg",
      "author": "James Steakley",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 25,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "ديفنباخيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Starr_061212-2331_Dieffenbachia_seguine.jpg/330px-Starr_061212-2331_Dieffenbachia_seguine.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Starr_061212-2331_Dieffenbachia_seguine.jpg",
      "author": "Forest & Kim Starr",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 26,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "ألوكاسيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Alocasia_x_amazonica_a1.jpg/330px-Alocasia_x_amazonica_a1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Alocasia_x_amazonica_a1.jpg",
      "author": "Jerzy Opioła",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 27,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "كورديلين",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Cordyline_fruticosa_%2820262433874%29.jpg/330px-Cordyline_fruticosa_%2820262433874%29.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Cordyline_fruticosa_(20262433874).jpg",
      "author": "Dick Culbert from Gibsons, B.C., Canada",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "id": 28,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيتونيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Acanthaceae_leaf.jpg/330px-Acanthaceae_leaf.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Acanthaceae_leaf.jpg",
      "author": "No machine-readable author provided. NathanBeach assumed (based on copyright claims).",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 29,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "أوركيد فالاينوبسيس"
  },
  {
    "id": 30,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بنفسج إفريقي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Saintpaulia_ionantha.jpg/330px-Saintpaulia_ionantha.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Saintpaulia_ionantha.jpg",
      "author": "RobertoMM",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 31,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بيليا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Pilea_peperomioides_Chinese_money_plant.jpg/330px-Pilea_peperomioides_Chinese_money_plant.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Pilea_peperomioides_Chinese_money_plant.jpg",
      "author": "Husky",
      "license": "CC0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en"
    }
  },
  {
    "id": 32,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "كالانشو",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Kalanchoe_blossfeldiana_3.jpg/330px-Kalanchoe_blossfeldiana_3.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Kalanchoe_blossfeldiana_3.jpg",
      "author": "বাক্যবাগীশ",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 33,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "هويا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/NKN-2007-06-13_114250_Hoya_Carnosa_%28Yvan_Leduc_author_for_Wikipedia%29.jpg/330px-NKN-2007-06-13_114250_Hoya_Carnosa_%28Yvan_Leduc_author_for_Wikipedia%29.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:NKN-2007-06-13_114250_Hoya_Carnosa_(Yvan_Leduc_author_for_Wikipedia).jpg",
      "author": "Yvan leduc",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 34,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "صبار الألوفيرا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/330px-Aloe_vera_flower_inset.png",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Aloe_vera_flower_inset.png",
      "author": "Collage by en:User:MidgleyDJ, original images from Wikimedia commons (Image:Aloe_vera_offsets.jpg and Image:Aloe_vera_C.jpg)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "alsoOutdoor": true,
    "aliases": [
      "ألوفيرا"
    ]
  },
  {
    "id": 35,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "صبار داخلي صغير",
    "image": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
    "imageCredit": {
      "source": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
      "license": "المصدر",
      "author": ""
    }
  },
  {
    "id": 36,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "هاورثيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Haworthia_cymbiformis_1.jpg/330px-Haworthia_cymbiformis_1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Haworthia_cymbiformis_1.jpg",
      "author": "Stan Shebs",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "aliases": [
      "هاروثيا"
    ]
  },
  {
    "id": 37,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "إيشيفيريا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Echeveria_elegans_-_1.jpg/330px-Echeveria_elegans_-_1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Echeveria_elegans_-_1.jpg",
      "author": "Eria Wei",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 38,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "سيدوم",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Sedum_acre_single_-_Niitv%C3%A4lja.jpg/330px-Sedum_acre_single_-_Niitv%C3%A4lja.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Sedum_acre_single_-_Niitv%C3%A4lja.jpg",
      "author": "Ivar Leidus",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 39,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "كالاتيا روزوبيكتا (نبات الصلاة)",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Goeppertia_roseopicta.jpg/330px-Goeppertia_roseopicta.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Goeppertia_roseopicta.jpg",
      "author": "Kathy Richardson",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "id": 40,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "نخلة الأريكا",
    "image": "/images/plant-areca.jpg"
  },
  {
    "id": 41,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "نخلة شاميدوريا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Chamaedorea_elegans_Mart.JPG/330px-Chamaedorea_elegans_Mart.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Chamaedorea_elegans_Mart.JPG",
      "author": "Bachelot Pierre J-P",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 42,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "يوكا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Yucca_gigantea_-_Jard%C3%ADn_Bot%C3%A1nico_Canario_Viera_y_Clavijo_-_Gran_Canaria.jpg/330px-Yucca_gigantea_-_Jard%C3%ADn_Bot%C3%A1nico_Canario_Viera_y_Clavijo_-_Gran_Canaria.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Yucca_gigantea_-_Jard%C3%ADn_Bot%C3%A1nico_Canario_Viera_y_Clavijo_-_Gran_Canaria.jpg",
      "author": "H. Zell",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 43,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "بيوكارنيا / ذيل الحصان",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Beaucarnea_recurvata%2C_Ocampo%2C_Tamaulipas%2C_Mexico_1.jpg/330px-Beaucarnea_recurvata%2C_Ocampo%2C_Tamaulipas%2C_Mexico_1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Beaucarnea_recurvata,_Ocampo,_Tamaulipas,_Mexico_1.jpg",
      "author": "juancruzado",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 44,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "نخلة كينتيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Howea_forsteriana_Lord_Howe_Island.jpg/330px-Howea_forsteriana_Lord_Howe_Island.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Howea_forsteriana_Lord_Howe_Island.jpg",
      "author": "Black Diamond Images",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "id": 45,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيكس ليراتا",
    "image": "/images/plant-ficus.jpg"
  },
  {
    "id": 46,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "فيكس ميكروكاربا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Ficus_microcarpa_-_La_Gomera_01.jpg/330px-Ficus_microcarpa_-_La_Gomera_01.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Ficus_microcarpa_-_La_Gomera_01.jpg",
      "author": "H. Zell",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "aliases": [
      "فيكس ميكروكاربا بونساي"
    ]
  },
  {
    "id": 47,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "سينجونيوم",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Zingiber_malaysianum.jpg/330px-Zingiber_malaysianum.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Zingiber_malaysianum.jpg",
      "author": "Raul654",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 48,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "سكندابسوس / بوتس فضي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Scindapsus_pictus_01.jpg/330px-Scindapsus_pictus_01.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Scindapsus_pictus_01.jpg",
      "author": "Kor!An (Корзун Андрей)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 49,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "ريكس بيجونيا"
  },
  {
    "id": 50,
    "type": "indoor",
    "typeLabel": "داخلي",
    "name": "نبات القفص الصدري / Monstera Adansonii",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Monstera_adansonii_79319231.jpg/330px-Monstera_adansonii_79319231.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Monstera_adansonii_79319231.jpg",
      "author": "Aitor",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "id": 1,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "جهنمية",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Starr_030418-0061_Bougainvillea_spectabilis.jpg/330px-Starr_030418-0061_Bougainvillea_spectabilis.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Starr_030418-0061_Bougainvillea_spectabilis.jpg",
      "author": "Forest & Kim Starr",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 2,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "ياسمين هندي / بلوميريا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Plumeria_alba2709449426.jpg/330px-Plumeria_alba2709449426.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Plumeria_alba2709449426.jpg",
      "author": "Doug from Troutville, VA, USA",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "id": 3,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "واشنطونيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Washingtonia_filifera.jpg/330px-Washingtonia_filifera.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Washingtonia_filifera.jpg",
      "author": "Jim Harper",
      "license": "CC BY-SA 1.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/1.0"
    }
  },
  {
    "id": 4,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "سدر",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Ziziphus-areva-israel.jpg/330px-Ziziphus-areva-israel.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Ziziphus-areva-israel.jpg",
      "author": "Dov Grobgeld",
      "license": "Public domain"
    }
  },
  {
    "id": 5,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "زيتون",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Olea_europaea_cuspidata-africana_Cape_Town.JPG/330px-Olea_europaea_cuspidata-africana_Cape_Town.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Olea_europaea_cuspidata-africana_Cape_Town.JPG",
      "author": "Abu Shawka",
      "license": "Public domain"
    }
  },
  {
    "id": 6,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "ليمون",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/330px-P1030323.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:P1030323.JPG",
      "author": "Elena Chochkova",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 8,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "نيم",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Neem_Tree_in_Rajasthan%2C_India.jpg/330px-Neem_Tree_in_Rajasthan%2C_India.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Neem_Tree_in_Rajasthan,_India.jpg",
      "author": "TheSlumPanda",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 9,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "غاف",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Prosopis_cineraria_-_Khejri.jpg/330px-Prosopis_cineraria_-_Khejri.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Prosopis_cineraria_-_Khejri.jpg",
      "author": "LRBurdak",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "aliases": [
      "غاف مسكيت"
    ]
  },
  {
    "id": 10,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "أكاسيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Macro_view_of_thorn_and_leaves_of_a_Babul_tree_%28Vachellia_nilotica%29_from_Rajasthan%2C_India.jpg/330px-Macro_view_of_thorn_and_leaves_of_a_Babul_tree_%28Vachellia_nilotica%29_from_Rajasthan%2C_India.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Macro_view_of_thorn_and_leaves_of_a_Babul_tree_(Vachellia_nilotica)_from_Rajasthan,_India.jpg",
      "author": "TheSlumPanda",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 11,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "تيكوما صفراء",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Ip%C3%AA-de-jardim_%28do_tupi_%27yp%C3%A9%29%2C_Tecoma_stans%2C_em_Bag%C3%A9-RS%2C_Brasil.jpg/330px-Ip%C3%AA-de-jardim_%28do_tupi_%27yp%C3%A9%29%2C_Tecoma_stans%2C_em_Bag%C3%A9-RS%2C_Brasil.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Ip%C3%AA-de-jardim_(do_tupi_%27yp%C3%A9),_Tecoma_stans,_em_Bag%C3%A9-RS,_Brasil.jpg",
      "author": "Gabriel Collares",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "id": 12,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "لانتانا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/LantanaFlowerLeaves.jpg/330px-LantanaFlowerLeaves.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:LantanaFlowerLeaves.jpg",
      "author": "Alvesgaspar",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 13,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "كف مريم / فيتكس",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Vitex_agnus-castus_1.JPG/330px-Vitex_agnus-castus_1.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Vitex_agnus-castus_1.JPG",
      "author": "Cillas",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 14,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "دفلة",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Nerium_oleander_flowers_leaves.jpg/330px-Nerium_oleander_flowers_leaves.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Nerium_oleander_flowers_leaves.jpg",
      "author": "Alvesgaspar",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5"
    }
  },
  {
    "id": 15,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "ياسمين بلدي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Jasminum_grandiflorum_%28Oleaceae%29.jpg/330px-Jasminum_grandiflorum_%28Oleaceae%29.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Jasminum_grandiflorum_(Oleaceae).jpg",
      "author": "Juan Carlos Fonseca Mata",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 16,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "ياسمين زفر",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Volkameria_inermis_308123521.jpg/330px-Volkameria_inermis_308123521.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Volkameria_inermis_308123521.jpg",
      "author": "Alex Abair",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "id": 17,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "فل بلدي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Arabian_jasmin%2C_Tunisia_2010.jpg/330px-Arabian_jasmin%2C_Tunisia_2010.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Arabian_jasmin,_Tunisia_2010.jpg",
      "author": "Habib M'henni",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 18,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "فل جيزاني"
  },
  {
    "id": 19,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "هبسكس",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Hibiscus_Brilliant.jpg/330px-Hibiscus_Brilliant.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Hibiscus_Brilliant.jpg",
      "author": "Andy / Andrew Fogg from near Cambridge, UK",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "id": 20,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "كنا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Cinnamon-bellied_flowerpiercer_%28Diglossa_baritula%29_male_on_Indian_shot_%28Canna_indica%29_Finca_El_Pilar.jpg/330px-Cinnamon-bellied_flowerpiercer_%28Diglossa_baritula%29_male_on_Indian_shot_%28Canna_indica%29_Finca_El_Pilar.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Cinnamon-bellied_flowerpiercer_(Diglossa_baritula)_male_on_Indian_shot_(Canna_indica)_Finca_El_Pilar.jpg",
      "author": "Charles J. Sharp",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 21,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "بفتة",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Vinca_%28Catharanthus_roseus%29_cultivada_em_Bag%C3%A9%2C_RS%2C_Brasil_-_55231652268.jpg/330px-Vinca_%28Catharanthus_roseus%29_cultivada_em_Bag%C3%A9%2C_RS%2C_Brasil_-_55231652268.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Vinca_(Catharanthus_roseus)_cultivada_em_Bag%C3%A9,_RS,_Brasil_-_55231652268.jpg",
      "author": "O Tupinólogo",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "id": 23,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "روهو",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Tradescantia_spathacea_%28_Moses-in-the-cradle_%29.jpg/330px-Tradescantia_spathacea_%28_Moses-in-the-cradle_%29.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Tradescantia_spathacea_(_Moses-in-the-cradle_).jpg",
      "author": "Stephanie cheks",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 24,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "أكاليفا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Acalypha_Flamengueira2.JPG/330px-Acalypha_Flamengueira2.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Acalypha_Flamengueira2.JPG",
      "author": "Antoniocarlosbrasil",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 25,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "جتروفا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Jatropha_interregima.JPG/330px-Jatropha_interregima.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Jatropha_interregima.JPG",
      "author": "Oeropium",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 26,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "كريسيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Starr_010820-0009_Carissa_macrocarpa.jpg/330px-Starr_010820-0009_Carissa_macrocarpa.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Starr_010820-0009_Carissa_macrocarpa.jpg",
      "author": "Forest & Kim Starr",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 27,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "تيكوماريا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Tecoma_capensis_2922.jpg/330px-Tecoma_capensis_2922.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Tecoma_capensis_2922.jpg",
      "author": "Vengolis",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 28,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "دادونيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Dodonaea_viscosa_%28Hopbush%29_W2_IMG_1899.jpg/330px-Dodonaea_viscosa_%28Hopbush%29_W2_IMG_1899.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Dodonaea_viscosa_(Hopbush)_W2_IMG_1899.jpg",
      "author": "J.M.Garg",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 29,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "بزروميا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Conocarpus_erectus_Key_Largo.jpg/330px-Conocarpus_erectus_Key_Largo.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Conocarpus_erectus_Key_Largo.jpg",
      "author": "Mason Brock (Masebrock)",
      "license": "Public domain"
    }
  },
  {
    "id": 30,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "جاكرندا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Jacarand%C3%A1-mimoso_%28do_tupi_%C3%AEakarand%C3%A1%29_-_54942878507_02.jpg/330px-Jacarand%C3%A1-mimoso_%28do_tupi_%C3%AEakarand%C3%A1%29_-_54942878507_02.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Jacarand%C3%A1-mimoso_(do_tupi_%C3%AEakarand%C3%A1)_-_54942878507_02.jpg",
      "author": "O Tupinólogo",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "id": 31,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "بونسيانا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Royal_Poinciana.jpg/330px-Royal_Poinciana.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Royal_Poinciana.jpg",
      "author": "Averette",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 32,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "لبخ",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Starr_080531-4752_Albizia_lebbeck.jpg/330px-Starr_080531-4752_Albizia_lebbeck.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Starr_080531-4752_Albizia_lebbeck.jpg",
      "author": "Forest & Kim Starr",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 33,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "كورديا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Scarlet_cordia.jpg/330px-Scarlet_cordia.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Scarlet_cordia.jpg",
      "author": "SKsiddhartthan",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 34,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "أكاسيا جلوكا"
  },
  {
    "id": 35,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "باركنسونيا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/ParkinsoniaAculeata.jpg/330px-ParkinsoniaAculeata.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:ParkinsoniaAculeata.jpg",
      "author": "Neelix",
      "license": "Public domain"
    }
  },
  {
    "id": 36,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "فرشاة الزجاج",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Melaleuca_viminalis.jpg/330px-Melaleuca_viminalis.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Melaleuca_viminalis.jpg",
      "author": "Geoff Fox",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    "id": 37,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "تمر هندي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Tamarindus_indica_pods.JPG/330px-Tamarindus_indica_pods.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Tamarindus_indica_pods.JPG",
      "author": "B.navez",
      "license": "CC BY 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.5"
    }
  },
  {
    "id": 38,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "رمان"
  },
  {
    "id": 39,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "توت",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Rosales_-_Morus_alba_-_3.jpg/330px-Rosales_-_Morus_alba_-_3.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Rosales_-_Morus_alba_-_3.jpg",
      "author": "Emőke Dénes",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "id": 40,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "برتقال",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/OrangeBloss_wb.jpg/330px-OrangeBloss_wb.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:OrangeBloss_wb.jpg",
      "author": "Ellen Levy Finch (Elf)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 41,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "يوسفي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Citrus_reticulata_April_2013_Nordbaden.JPG/330px-Citrus_reticulata_April_2013_Nordbaden.JPG",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Citrus_reticulata_April_2013_Nordbaden.JPG",
      "author": "4028mdk09",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 42,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "تين",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Ficus_carica_L%2C_1771.jpg/330px-Ficus_carica_L%2C_1771.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Ficus_carica_L,_1771.jpg",
      "author": "Trew, C.J",
      "license": "Public domain"
    }
  },
  {
    "id": 43,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "مورينجا",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/DrumstickFlower.jpg/330px-DrumstickFlower.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:DrumstickFlower.jpg",
      "author": "Venkatx5",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 44,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "أراك",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Peelo_10.jpg/330px-Peelo_10.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Peelo_10.jpg",
      "author": "Mehdi.sq",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 45,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "أثل",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Tamaris3.jpg/330px-Tamaris3.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Tamaris3.jpg",
      "author": "Anthere",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "id": 46,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "طلح / سمر",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Vachellia_%28ex_Acacia%29_tortilis.jpg/330px-Vachellia_%28ex_Acacia%29_tortilis.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Vachellia_(ex_Acacia)_tortilis.jpg",
      "author": "Robur.q",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 47,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "أجاف أمريكي (صبار أمريكي)",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Agave_July_2011-1.jpg/330px-Agave_July_2011-1.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Agave_July_2011-1.jpg",
      "author": "Alvesgaspar",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "id": 49,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "صبار عمودي",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Cereus_repandus_in_Aruba_-_on_the_way_back_from_Altovista_chapel_%282896840490%29.jpg/330px-Cereus_repandus_in_Aruba_-_on_the_way_back_from_Altovista_chapel_%282896840490%29.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Cereus_repandus_in_Aruba_-_on_the_way_back_from_Altovista_chapel_(2896840490).jpg",
      "author": "Serge Melki from Indianapolis, USA",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "id": 50,
    "type": "outdoor",
    "typeLabel": "خارجي",
    "name": "نخيل عربي / نخيل تمر",
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Dates005.jpg/330px-Dates005.jpg",
    "imageCredit": {
      "source": "https://commons.wikimedia.org/wiki/File:Dates005.jpg",
      "author": "Nepenthes",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  }
];

export const indoorPlants = allPlantsCatalog.filter(p => p.type === "indoor");
export const outdoorPlants = allPlantsCatalog.filter(p => p.type === "outdoor" || p.alsoOutdoor);
