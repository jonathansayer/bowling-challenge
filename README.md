
Bowling Challenge
=================

Introduction
---------
=======
![travis CI build](https://travis-ci.org/jonathansayer/bowling-challenge.svg?branch=master)

The Bowling Challenge was issued by Makers Academy in Week 5 of the course. The aim of the challenge was to build the backend logic, in JavaScript, to be used for a bowling scorecard.

Bowling Rules
---------

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

How I Tackled the Challenge
-------

To tackle this challenge I used an Object Orientated Programming approach and built a frame, game and tenth Frame "class". The first to be built was the frame. The role of the frame is to know the status of the frame (i.e strike, spare or neither) and to store the score for that spare as well as the scores of the individual rolls. The tenth frame class performs the same as the frame class whilst also allowing for an extra roll in if a strike or spare is scored. The game class stores 9 instances of frame and one of tenthFrame. The role of game is store the total score and input scores into the relevant frame as well as adding bonus scores in the event of a strike or spare.


Difficulties
-----

The biggest difficulty I had in this challenge was the figuring out the logic that goes into adding bonus points. Since the bonus points cannot be added until the next frame has been played, this involved referring to past frames.
I have also never used the Jasmine testing suite before now, so learning how to use that was a little time consuming but well worth it when it comes to testing code properly.

How to use the Program
-----

Once the repo has been cloned, a user only needs to interact with the game class. You will need to be working in an interactive javascript like the console on Chrome or node in the command line.

```
game.addScore(6);
```
This will add a score of 6 to the next available frame. There is no need to worry about moving from frame to frame. To query the score simply use:

```
game.totalCalc();
```
 and to see all the frame objects, you will need to use the following command:

 ```
 game.frame;
 ```
 and thats it.

 Of course this code was Test Driven. The suite was Jasmine as mentioned earlier. To runt the tests, simply open on the SpecRunner.html file in your preferred browser.
