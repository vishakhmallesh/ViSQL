# ViSQL

ViSQL is an online SQL editor with the capability of running single as well as multiple queries. 

Click [here](https://visql.netlify.app/) to try ViSQL.

### Tech Stack

* React.js
* MUI
* Monaco Editor - Monaco Editor is the code editor that powers VS Code. (the package size is enormous however, it allows many features integration that is available for VS Code)

## Features

* IDE
* Execute multiple queries and view their respective results separately with tab functionalities.
* Powered by Monaco Editor. Customize by adding plugins to make writing queries easier.
* GUI for result visualization to add additional filters, sorting, inline editing, and exporting data.
* Save queries with bookmarking feature.
* View the history of queries that have been executed. 
* View table. (even the ones with a large number of rows without breaking the browser.)
* Shows execution time. 
* Change the view mode.

## Performance

Lighthouse is used to measure performance.

### Before Optimisation

![Before Optimization](screenshots/before.png)

### After Optimisation

![After Optimization](screenshots/after.png)

#### Optimizations

* Lazy loading with React.lazy() and React.Suspense.
* Minification of CSS and JS files.
* Optimisations for other lighthouse categories.

## Features Update for Upcoming Commit

* Phone Compatability and resize window with dragging.
* Customised right-click.
* Add a new tab and close them. 
* Importing feature. 
* Collaboration features.
* Automatic formatting and code suggestions.
* View table contents.
* Table relationship. 
