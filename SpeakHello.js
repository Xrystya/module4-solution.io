

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.

const helloSpeaker = {
	speakWord: 'Hello',	
};

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());

