## Project Structure
### Important folders and files

### /src
- Contains the entire app
- All the code goes here

### /assets
- public
- Usually for images, videos and such
- Can be also used for global CSS

### /styles.scss
- Main CSS file
- Stuff here affects the entire document

### angular.json
- The meta config
- Has config for building, deploying etc

### app.config.ts
- The app config file
- Global modules go here

### app.routes.ts
- Main routing file
- This is where routing is defined through routes and components
- Easy to setup lazy loading

### index.html
- The app renders here

### main.ts
- App bootstraps from here


## Components
- Components consist of a TS class, an HTML template, and a SCSS file
- TS class defines logic and behavior
- TS class has full access to the HTML
- HTML template defines the view, and the structure and content to be rendered
- The HTML uses a specific template syntax to bind data from the class and control the DOM
- The CSS file is encapsulated. It can only affect the component it belongs to.
- Components have lifecycle methods/hooks to execute code at specific points in their lifecycle
- Components communicate with each other using input/output properties, services or events

## Signals
- A signal encapsulates a value, much like a variable
- It can be called as a function, in order to listen on changes of its value
- When the signal value is changed, all listeners are informed automatically
- Angular tracks which component rely on signals
- Signals can be writable or computed
- Writable signals can be assigned new values
- Computed signals are derived from other signals, and they automatically update when the original signal changes
- Can be used in HTML and Typescript

## Data binding
### Input signals (Property binding)
- Input signals provide a way to pass data from a parent to a child
- They are reactive, meaning as soon as the input data changes, they change too
- You can define optional or required inputs
- name = input<string>(); // Goes in the child
- <app-child [name]="parentName"></app-child> // Goes in the parent template

## Output Signals (Event binding)
### DOM Events

- It's basically adding an event listener to any DOM element in angular
- It works with any DOM event like click, input, keyup etc
- Whenever the event is caught, it lets us call a method in the class
- We can provide a reference to the method as well, using the $event keyword as the method param
- <button (click)="onSave($event)">Save</button> // In the template
- onSave(event: Event) {...}

### Custom Events
- You can use output signals to emit a value from a child to a parent
- This is defined as a custom event that can be caught by the parent
- As soon as the event is caught, the parent can execute a method just like with regular events
- valueChanged = output<string>(); // Define the output in the child
- this.valueChanged.emit('Hello from child'); // Emit the value in some method
- <child-component (valueChanged)="onValueChanged($event) /> // You catch the event in the child component 

### Two-way binding
- Two-way binding represents bidirectional communication between the class and the template
- It's like a combination of property and event binding
- <input [(model)]="name"> // In the template
- name = model<string>(''); // In the class
- Isn't used too often

