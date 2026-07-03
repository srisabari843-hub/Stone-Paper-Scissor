Stone,Paper,Scissors
  A simple browser-based stone,paper,scissors game with hand-drawn "paper" aesthetic , built using plain HTML,CSS,and javaScript.

Demo 
 Open index.html in any modern browser to play,No build step,no server required.

Features
  => Classic Stone/paper/scissor gameplay against the computer.
  =>Running score tracker (wins,losses,ties)
  =>Reset button to clear scors.
  =>KeyBoard-accessible buttons with visible focus state.


File Structures
 index.hrml   #page structure and layouy
 style.css     #All styling/ink theme,animations.
 script.js    #Game logic (state,scoring,win/lose/tie)
 README.md    #this file

How it Works
   =>Game state (scores,playing) lives in script.js as plain javascript variables-no external state library.
   =>Move Comparasion is string.Choice are represented as the String 'stone','paper','scissors'.the judge() function compare these string directly.
  =>emojis are display-only.The ICONS  object maps each string choice to an emoji purely for rendering ;they play no part in win/loselogic.


Customization
  =>Colors/fonts
  =>round delay before reveal.
  =>win rules/addnew moves.
  =>emoji used for each move

Browser support
   works in any modern Browser (Chrome,firefox,safari,Edge).user Standard DOM APIs only - no polyfills required.

