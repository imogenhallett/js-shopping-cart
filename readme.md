## General design
The page has been coded mobile first.  

It is fully responsive and displays accurately from 320px.

I have purposefully duplicated the slight asymmetry in the design.  The white-space to the right hand-side of the nav 
bar is intentionally less than the white space to the left-hand side when viewed on resolutions greater than 768px.

I have used a combination of display block/table/flex and floats to demonstrate familiarity with numerous design solutions.  
In production I would generally adopt a more consistent approach to determining page layout.

768px was chosen as the breakpoint because iPads display at 768*1024px.

## Shopping cart persistence
I used localStorage to persist the shopping cart contents between page refreshes.  
I am aware this does not work in Safari (hence the try/catch blocks).  
A better solution would be to use indexedDB (or a backend API) for this, I could also have stored the data in cookies 
but cookies have a ~4kb max size.

## jQuery
I have included jQuery to demonstrate familiarity with the library (see ratings.js).

## Installation
I used gulp to compile the sass, I have included my gulpfile and package.json, to run my development environment, 
run the following commands in the project root:
 
```bash
    npm install
    gulp watch
```