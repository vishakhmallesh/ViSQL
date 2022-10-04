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

Click [here](https://tinyurl.com/before-optimization) to see performance score.

### After Optimisation

Click [here](https://tinyurl.com/after-optimization) to see performance score.

#### Optimizations

* Lazy loading with React.lazy() and React.Suspense.
* Minification of CSS and JS files.
* Asset optimization provided by Netlify
* Optimisations for other lighthouse categories.

## Features Update for Upcoming Commit

* Customised right-click.
* Add a new tab and close them. 
* Importing feature. 
* Collaboration features.
* Phone Compatability and resize window with dragging.
* Automatic formatting and code suggestions.
* View table contents.
* Table relationship. 
