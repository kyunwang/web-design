# Simple news app (Quick prototype)
A simple news app prototype using NewsApi for minor class Web Design. 
With as goal to implement atleast three principles from this [article][article]

**Notes**
- *This is a prototype to implement a few design principles and does not have the goal to be production ready*
- *It is currently made for smaller screens*

# Table of Content
- [Getting started](#getting-started)
- [The Principles](#the-principles)
- [Current design](#current-design)
	- [Zero state](#zero-state)
	- [Progressive disclosure](#progressive-disclose)
	- [Primary action](#primary-action)
	- [Visual hierarchy](#visual-hierarchy)
- [To Do](#to-do)

# Getting started
Here is how to get started:
1. Download or clone the repo `git clone https://github.com/kyunwang/web-design.git`
2. Run `npm install` or `yarn`
3. Do a `npm start`
4. Go to [localhost:3200](localhost:3200) and you are ready to go.
	- Go to [localhost:3200/intro](localhost:3200/intro) for the form

# The Principles
- Strong visual hierarchies work best
- Progressive disclosure
- A crucial moment: the zero state
- One primary action per screen

# Current design
This is the design from before the development
![current_design](current_design.png)

## Zero state
The first screen is a simple zero state for when the user has no articles yet bookmarked.
This page will remind you that there is yet to be a article to be bookmarked.

## Progressive disclosure
The form has been divided in single actions, for good or bad, to let the user focus on the action.

## Primary action
There is only one primary action per page e.g. the form pages each have only one primary function, namely to enter information (one field).

## Visual hierarchy
The most important have their own highlights e.g.:
The input screens have their large input selections, active step number and the small next/prev button with a highlight color.
On the newslist and bookmarkslist the image is really prominent and the title of the article. The header title ('Technology') is also given importantce as it is the type of articles shown.


# To Do
- [ ] Link the intro screen choices to the server
- [ ] Fix the snapping in the country selection screen
- [ ] Move the seperate *intro screens* to one with fixed scrolling per selection
- [ ] The overview of the form selection is missing


[article]: http://bokardo.com/principles-of-user-interface-design/