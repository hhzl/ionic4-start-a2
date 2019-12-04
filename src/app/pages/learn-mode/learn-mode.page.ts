import { Component, OnInit } from '@angular/core';

declare var LWutils: any;


@Component({
  selector: 'app-learn-mode',
  templateUrl: './learn-mode.page.html',
  styleUrls: ['./learn-mode.page.scss'],
})
export class LearnModePage implements OnInit {

  storageKey : string = 'ionic4-start-a2-data';
  dbObject : any;

  storageKeyOfIndex : string = 'ionic4-start-a2-indexOfSelectedItem';
  i : any;


  word: string = 'fish'; 
  translate : string = 'der Fisch';
  numberOfItemsInDB : 0; 
  itemImageUrlPath: string = 'assets/data/pictures/';
  itemImageFileName : string = 'fish.jpg'; 
  itemAudioFileName : string = 'En-uk-fish.ogg.mp3';

  constructor() { }

  ngOnInit() {
      this.dbObject = JSON.parse(localStorage.getItem(this.storageKey));
      this.i = JSON.parse(localStorage.getItem(this.storageKeyOfIndex));
      // initialisation from this.dbObject.items[this.i]
      this.numberOfItemsInDB = this.dbObject.items.length; 
      this.setItem(this.i);

  }


  setItem(i) {
              this.word = this.dbObject.items[this.i].word;
              this.translate = this.dbObject.items[this.i].translate;
              this.itemImageFileName = this.dbObject.items[this.i].picture;
	      this.itemAudioFileName = this.dbObject.items[this.i].audio;
       localStorage.setItem('ionic4-start-a2-indexOfSelectedItem',JSON.stringify(this.i)); 
  }



  nextItem() {
       if (this.i==this.numberOfItemsInDB -1) {this.i = -1}; 
              this.i = this.i + 1; 
              this.setItem(this.i);
  }

  listen() 
  {
    // var theWord = document.getElementById('theWord');
    // theWord.classList.add("listen");

    //doesn't work with ionic live-reload https://github.com/ionic-team/ionic-cli/issues/287
    var hasPlayed = LWutils.playAudio("assets/data/audio/"+this.itemAudioFileName);

    hasPlayed.addEventListener("ended", function() {
      // var myButton = document.getElementById(clickedWord);
      // var theWord = document.getElementById('theWord');
      // if(myButton !== null)
      // {
      //   myButton.classList.remove("listen");
      //   theWord.classList.remove("listen");
      // }
      console.log('sound played!');
    });
  }



}
