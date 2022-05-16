# Todo List (fe-assignment)

## How To Run

### To run the webapp

```shell
 cd ./package/fe
 npm run dev
```

 And the app serves at http://localhost:1234/

### To run the test 
(in the root folder)

```shell
npm run test
```

##  Implemented:

### Basic Requirements:
Created a Todo List Webpage, and supported local storage.
- Pages (based on the URL)
    - "/"

        the main page, list all the todo items and past todo items
    - "/:id"
    
        the detail page for the todo item, the user could edit the todo or re-add the used ones
    - "/settings"
    
        the settings page, the user could change the setting like whether dark/light mode,or clear the todos from the list

Both the theme and todo items support local storage

### Extra Credits:

Added jest test for some components (TodoForm, TopBar, TodoList)

## Things to be done:

1. Actually added webpack configuration file, but the webpack renders blank page for some reason.

2. Lost all commit history due to past unsuccessful commits (unfortunately).



