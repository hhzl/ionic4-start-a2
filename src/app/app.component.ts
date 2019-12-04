import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loadData();
    });
  }


  loadData() {
    // make data available in localStorage
    // cf. https://github.com/hhzl/LearnWords2/blob/master/src/LWdb.js
    var dbObject = {items: [
   {
      "_id":18,
      "word":"fish",
      "translate":"der Fisch",
      "tags":"animal",
      "picture":"fish.jpg",
      "audio":"En-uk-fish.ogg.mp3"
   },
   {
      "_id":5,
      "word":"butterfly",
      "translate":"der Schmetterling",
      "tags":"animal",
      "picture":"butterfly.jpg",
      "audio":"En-uk-a_butterfly.ogg.mp3"
   },
   {
      "_id":8,
      "word":"cat",
      "translate":"die Katze",
      "tags":"animal",
      "picture":"cat.jpg",
      "audio":"En-uk-a_cat.ogg.mp3"
   },
   {
      "_id":12,
      "word":"dog",
      "translate":"der Hund",
      "tags":"animal",
      "picture":"dog.jpg",
      "audio":"En-uk-a_dog.ogg.mp3"
   },
   {
      "_id":20,
      "word":"grasshopper",
      "translate":"die Heuschrecke",
      "tags":"animal",
      "picture":"grasshopper.jpg",
      "audio":"En-uk-grasshopper.ogg.mp3"
   },
   {
      "_id":35,
      "word":"sheep",
      "translate":"das Schaf", 
      "tags":"animal",
      "picture":"sheep.jpg",
      "audio":"En-uk-a_sheep.ogg.mp3"
   }
]};


   localStorage.setItem('ionic4-start-a2-data',JSON.stringify(dbObject));
 
   if (!localStorage.getItem('ionic4-start-a2-indexOfSelectedItem')) {
   localStorage.setItem('ionic4-start-a2-indexOfSelectedItem','0');}


  }
 

}
