'use strict';

var imgDirectory = 'img-directory';

function getImage(name) {
  this.name = name;
  this.numDisplayed = 0;
  this.numClicked = 0;
}

var imgFileList = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg' ];

  var imgList = [];//starts as an empty array
  for (var i = 0; i < imgFileList.length; i++) {
    var myImage = new getImage(imgFileList[i], 'img-directory');
    console.log(myImage);
    imgList.push(myImage);
  }//this function runs until imgList has all 20 images pushed into it and there are 20 elements in the array imagFileList


  var totalNumClicked = 0;

  var b1 = document.getElementById('b1');
  function addClickEvent1() {
    totalNumClicked++;
    imgList[curThree.theImages[0]].numClicked++;
    if (totalNumClicked < 26) {
    displayImages()
  } else {
    alert ('you have run out of clicks ~ (You may only click on images a total of 25 times.)');
    }
  }
  b1.addEventListener('click', addClickEvent1);

var b2 = document.getElementById('b2');
  function addClickEvent2() {
    totalNumClicked++;
    imgList[curThree.theImages[1]].numClicked++;
    if (totalNumClicked < 26) {
    displayImages()
  } else {
    alert ('you have run out of clicks ~ (You may only click on images a total of 25 times.)');
    }
  }
  b2.addEventListener('click', addClickEvent2);

  var b3 = document.getElementById('b3');
  function addClickEvent3() {
    totalNumClicked++;
    imgList[curThree.theImages[2]].numClicked++;
    if (totalNumClicked < 26) {
    displayImages()
  } else {
    alert ('you have run out of clicks ~ (You may only click on images a total of 25 times.)');
    }
  }
  b3.addEventListener('click', addClickEvent3);


  var lastImages = [];
  console.log(lastImages);

  function testIsIn(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == obj)
    return true;
  }
  return false;
  }



  function selectThree (imgFileList, lastImages) {
    this.theImages = [];
    var x = 0;
    var n = imgFileList.length;
    while(this.theImages.length < 3) {
      x = Math.random();
      var i = Math.floor(n * x);
      var testImage = imgFileList[i];
      if (!testIsIn(lastImages, i) && !testIsIn(this.theImages, i)) {
        this.theImages.push(i);
      }
    }
  };

  function displayImages()
  {
    curThree = new selectThree(imgFileList, lastImages);

    for (var k = 0; k < 3; k++) {
      console.log(curThree.theImages[k]);
      imgList[curThree.theImages[k]].numDisplayed++;
    };
    //Need to put these  images on the  website
    //Then need to wait for the user to click on an image
    lastImages = curThree.theImages;

    // var optionOneImage = imgFileList[myThree.theImages[0]];
    var imgPath1 = ('img-directory/' + imgFileList[curThree.theImages[0]]);
    document.getElementById('b1').src = imgPath1;
    var imgPath2 = ('img-directory/' + imgFileList[curThree.theImages[1]]);
    document.getElementById('b2').src = imgPath2;
    var imgPath3 = ('img-directory/' + imgFileList[curThree.theImages[2]]);
    document.getElementById('b3').src = imgPath3;

    console.log('num clicked ' + totalNumClicked);

  }

var curThree = []
displayImages();
