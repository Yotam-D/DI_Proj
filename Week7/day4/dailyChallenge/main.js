// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video{
  constructor(title, uploader, time){
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch(){
    let timeInhours = new Date(this.time * 1000).toISOString().substr(11, 8);
    console.log(`${this.uploader} watched all ${timeInhours} hours of ${this.title}!`);
  }
}

// Instantiate a new Video instance and call the watch() method.
let im2 = new Video('impossible mission 2', 'Tom cruise', 4253)
im2.watch();

// Instantiate a second Video instance with different values.
let mib = new Video('Men In Black', 'Will Smith', 5100)

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
let videosArr = [
  {title: `Disaster Movie`, uploader:`Guy melo`,  time:3714},
  {title: `Kod Adi K.O.Z.`, uploader:`Mr smither`,  time:2995},
  {title: `Manos: The Hands of Fate`, uploader:`April Oneal`,  time:6159},
  {title: `Saving Christmas`, uploader:`donatelo`,  time:1432},
  {title: `Birdemic: Shock and Terror`, uploader:`Whomever`,  time:9541},
]

// Bonus: Loop through the array to instantiate those instances.
let videosInsArr = videosArr.map(obj => {
  let newIns = new Video(obj.title, obj.uploader, obj.time);
  return newIns;
})
console.log(videosInsArr);
