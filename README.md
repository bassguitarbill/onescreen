## MICEOLATION
###Ludum Dare 31 - Entire Game on One Screen

Miceolation is a puzzle game that takes place in a grid of rooms.
In keeping with the theme, chunks of the grid are used for each puzzle, but the entire grid is visible at all times.
These rooms contain mice! Your job is to get it so that no mouse shares a room with another mouse.
You need to miceolate them.

*Room Types*
- Normal room. Available for mice to live in.
- Clean(?) room. If any mice are in a clean room, the puzzle is not solved.
- Dark room. Not used in the current puzzle. Inaccessible.

*Corridor Types*
- Hall. Mice can travel unimpeded through halls.
- Door. Players can control doors by opening and closing them.
- Funnel. Mice can only go one way through a funnel.

*Actions*
- Scare. All mice in the scared room retreat to the furthest accessible room. If it's a tie, player chooses.
- Snare. All mice with access to the current room arrive.
- Split. Mice divide evenly between accessible rooms. Remainder also stay in the current room.

Preliminary whiteboard testing shows that this game is fun, and not trivial, when played on small boards. Whether that holds up for a larger board remains to be seen.


