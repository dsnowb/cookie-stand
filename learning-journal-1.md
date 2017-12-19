# LEARNING JOURNAL

11 Dec 17
---
Today went well as far as the material that was presented in class. The most difficult portion of the day was the lab section, where I felt at times that I was unable to get into a rhythm because folks were coming to ask me stuff. I determined at the outset that I kind of wanted to be "that guy", the one thatothers in the class could look to for quality information and assistance, and I think I was unprepared for what that might mean as far as being able to attend to my own stuff. I believe that I am seeing a hint of the importance of the headphones rule, and the reality of what distractions can do to one's workflow. I believe that this need for contemplative concentration, and the need to guard it, will only grow in importance both now in the CF dynamic as well as in an actual development environment.

I also realized that I'm probably not a good fit for front-end, which I suspected from the outset. I'm already finding the process of creating layouts to be tedious, and would rather spend time working on the problem solving and data manipulation components.


12 Dec 17
---
I actually learned something pretty important today. The lesson came as I was looking at the stretch goals for the day's lab. One of them was to print out a different table, and I realized then that I wouldn't be able to print that out using largely existing code. I built a function that tabulated a specific array, when what I *should* have done was built a function that tabulated *any* array. Then I could have made two more specific functions - one for each table type - that both used the more generic array tabulator function. Had I known about that stretch goal from the outset (yes I should have fully read the document before doing anything) then I would have designed it that way to begin with - but that got me thinking about reality, and how undoubtedly something will be built to spec and then additional functionality will be requested later, so realistically all code should be designed with that inevitability in mind right from the outset. So I'm actually glad that I didn't read the instructions, because it taught me to #1 read the instructions and #2 build the most general purpose, extensible code possible pretty much always, because you have no idea what you will be tasked to add in the future. Good freaking lesson.

13 Dec 17
---
Well, today I think the big takeaway lesson was that I should probably not attempt to bite off more than I can chew. By which I mean I was feeling fairly ambitious on what I wanted to accomplish, but ran into a bit of unexpected trouble, was unfortunately delayed, and ended up spending pretty much all day on this up until bed time, which is definitely not what I would have preferred. Get core functionality done first - or whatever milestones you're supposed to hit - then go back and work on improvements, not the other way around!

14 Dec 17
---
Today went fairly well, though I was tired - I think from yesterday. Actually solving the problem that needed to be solved today re:form input went off without a hitch, though I am (as predicted) developing a dislike for dealing with CSS. I did run into a bug after implementing the forms such that the tables would not render properly if I gave the new stores hours outside of the hours as originally set by the pre-loaded array. Basically, I would need to go back and add array elements in the appropriate locations for every array of every object - something that I'm confident that I could do, but the code wouldn't be pretty. It would have been better to give consideration to that *before* I decided to put stuff into arrays. Basically, what will these arrays need to look like in order to accomplish anything that I might need to do with them easily and efficiently. Again, it comes down to proper planning. Good lesson.

15 Dec 17
---
First shot at working on a project involving more than one person! I enjoyed that, actually, because it showed how to use github more in the way that it's supposed to be used - as a collaborative tool. Everything went well for the first document, the index.html, but then for the style.css there were some issues, and every time I did a PR and merged my branch there was a merge conflict that was large and complicated. I'm pretty sure that I understand why that happened, though. Basically, we set things up where there were comments denoting sections of the document, and we were supposed to edit inside of those comments. Except I typed // for a comment in CSS unthinkingly, so my parter fixed the actual comment lines to be /* comment */ as they should be on her branch, then merged that back to master. I'm pretty sure that because the actual comment lines were changed (even though I changed mine to match), that messed up git's understanding of sections of the page, and thus gave me the merge conflicts that were large and strange. Learning experience! I definitely enjoyed it, though.

18 Dec 17
---
Well I think that today went pretty well - I think that I had a better idea at the outset about how I wanted to factor the functions, and how generalized I wanted to make it, what parameters to take, etc. Today seemed like talking about a few things that maybe fit into the category of 'bells and whistles' (the html5 <audio> and <video> tags), followed by attempting to put into practice what we currently know about the javascript language. I think it was kind of nice to have a bit of a break from jamming in new material, but I'm ready for tomorrow and hopefully some exciting new content.
