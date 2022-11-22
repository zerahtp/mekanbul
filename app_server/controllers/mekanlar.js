var express = require('express');
var router = express.Router();

//anasayfa ismi sabit kalması için const yapılır

const anaSayfa = function(req, res, next) {
  res.render('anasayfa',
    {
      "baslik": 'Zehra Hatipoğlu',
      "sayfaBaslik": {
        "siteAd": "MekanBul",
        "slogan": "Civardaki Mekanları Kesfet!"
      },
      "mekanlar": [
        {
          "ad": "Zera Cafe",
          "puan": "5",
          "adres": "IYAS karşısı",
          "imkanlar": ["Waffle", "Muffin", "Pankek"],
          "mesafe": "100km"
        },
        {
          "ad": "Starbucks",
          "puan": "40",
          "adres": "SDÜ Batı Kampüsü",
          "imkanlar": ["Kahve", "Cheesecake"],
          "mesafe": "50m"
        }

      ]

    });
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekanbilgisi',
    {
      "baslik": 'Mekan Bilgisi',
      "mekanBaslik": "Zera Cafe",
      "mekanDetay": {
        "ad": "Zera Cafe",
        "puan": "5",
        "adres": "IYAS karşısı",
        "saatler": [
          {
            "gunler": "Pazartesi - Cuma",
            "acilis": "08:00-23:00",
            "kapali": "false"
          },
          {
            "gunler": "Cumartesi - Pazar",
            "acilis": "09:00-01:00",
            "kapali": "false"
          }

        ],
        "imkanlar": ["Waffle", "Muffin", "Pankek"],
        "koordinat": {
          "enlem": "37.7",
          "boylam": "30.5"
        },
        "yorumlar": [
          {
            "yorumYapan": "Zehra Hatipoğlu",
            "yorumMetni": "Her şey mükemmel",
            "tarih": "21 Ekim 2022",
            "puan": "5"
          },
          {
            "yorumYapan": "Zeynep Hatipoğlu",
            "yorumMetni": "çalışanlar inanılmaz tatlı",
            "tarih": "21 Ekim 2022",
            "puan": "5"
          }
        ]
      }
    });
}

const yorumEkle = function(req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports = {
  anaSayfa, mekanBilgisi, yorumEkle
}

  
 