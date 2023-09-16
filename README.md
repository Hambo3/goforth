# Go Forth and Conquer

A game for js13k 2023  
Take charge of Puppy who must find help for his owner who has become trapped. Find help and guide them back to Tony, your owner.
Look out for big mean dogs who prowl the woods.

## Gameplay
WAD Arrows Gamepad to move
SPACE to throw rock

### General
Fight your way across the levels to defeat the ruler of each kingdom. Collect their crown to conquer the kingdom and rank up your nobility. 
Game ends when you achieve King of all you survey.

### Gameplay variations.

#### Go Forth
Fight your way as far as you can to get the furthest distance. You still canquer kingdoms and defeat bosses but will get a distance of land conquered score. On game over you restart.

#### Conquer
Conquer kingdoms and rank up your nobility to become King. On death you will restart on that kingdom. Escape to quit to menu.

## Why
I wanted a game that would 'write itself'. In that I didnt want to write lots of game logic, I just wanted to set some rules and parameters and the game would work within that.
I always loved 2d physics games and using a physics engine would possibly help me achieve this do to its chaotic nature.
So I wrote this, get from A to B in a physics world and let the environment provide the difficulty.
That was the aim and I think I achieved that. The game changed direction many times during development but I'm happy with how it turned out.
Its chaotic and sometimes impossible but thats part somewhat how its meant to be. I added a new mode in the end 'Conquer' mode where you can restart on the current level and eventually get to the end and become King.

## Development
* Visual studio code using my own game library modules.
* Modified implementation of Xem's Mini 2D physics - https://xem.github.io/codegolf/mini2Dphysics.html
* ZzFX - Zuper Zmall Zound Zynth - Micro Edition
* ZzFXMicro - Zuper Zmall Zound Zynth - v1.1.2
* Minified and packed using Xem's js13k-pack - https://xem.github.io/js13k-pack/
  
