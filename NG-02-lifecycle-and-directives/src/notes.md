## Lifecycle Methods

### ngOnInit

## Directives

### @if
- Built in flow control syntax in Angular
- Used to conditionally render an element
- @if(condition) {...}
- You can also add an else if, or else statement
- @else if (condition) {...}
- @else {...}
- the condition can be either a class property, or returned from a method

### @for
- Used to iteratively render content of a block for each item in a collection
- @for(item of items; track item.name) {...}
- Renders its content in response to changes in a collection
- The value of track determines a key used to associate array items with the views in the DOM
- Lets Angular execute a minimal set of DOM operations
- It's required
- Can use @empty {...} when there are no items

### [ngClass]
- Used to apply a class to an HTML element, usually conditional
- <some-element [ngClass]="{'first': boolCondition, 'second': otherBoolCondition, 'third': differentCondition}">...</some-element>
- <some-element [ngClass]="{'class1 class2 class3' : fourthCondition}">...</some-element>

### [ngStyle]
- Can be used to dynamically, conditionally (or both) add inline styling
- <some-element [ngStyle]="{'max-height': calculatedMaxHeight}">...</some-element>
