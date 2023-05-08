# angular-datagrid

The only issue I faced was during setting up the project from angular-seed which was at angular 12 and was throwing incompatiblity error which current cli. Finally upgraded the angular-seed project to angular 16 and worked on it.

## Libraries used

# Angular material 
- Even though @ fiserv we use propriatry libs, angular material was the last lib I worked with and was very comfortable with it. Even if it meant to iron out the design element which were different than material's opinionated design. 

- It has great documentation which helped me getting up to speed with setting with the grid with filtering and sorting example.

# Select Controls
-  its not exactly styled as in the images, because I used `ng-select` library which was very close in terms of look and feel and how it allowed interaction to the design provided.

# some fun challenging tasks.

change detection strategy = onPush // for better performance and also to prevent ExpressionChangedAfterItHasBeenCheckedError console errors.

which required change detection to be invoked manually for disabling the refresh icon animation. (which is set to run for at least 2 seconds to show the animation even if the api call takes milliseconds to refresh).


The next challenge was to create the unique filters from the dataset itself. 
- with some js array and sets playtime, I was able to figure that out. 

I chose not to use service for http API call.
- for getting the data setting up services is second nature. But since it was literally one get call, I decided to keep the class within the component file. It didn't even need to be a class, could just have been a function but having at least some separation is something I always practice. 


Creating dynamic filter predicate for different filters and synchronising it to work with pills was very enjoyable and took most of the time as I had restructure the component methods a bit. 

## Fav tools used
- JSON to TS to create Country model, where we can copy json on clipboard and that vs code extension can generate interface for the json. 
- vs code debugger for chrome - for debugging.
- Quokka.js for js playground - working off js array manipulation and logic building.