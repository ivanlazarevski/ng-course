## Angular Services

Angular services are classes that can be injected anywhere in the application.
They provide modularity, reusability and easy maintenance.

### Features
- Only a single instance of a service is created for the entire application lifecycle
- This means that whichever classes or components inject a service, they get access to the same service
- Same variables with the same values etc
- Services are provided in Angular components through a system called dependency injection
- const getMoviesService = inject(GetMoviesService);
- Any number of classes and components can use the same service
- Great for encapsulating state and logic
- Easier to test because they're separate from the views

### Common use cases
- Data access, aka fetching data from a server
- Business logic, aka implementing core application logic away from components
- Utility functions, reusable helper functions for common stuff like validation, formatting and calculations
- State management, managing the state of the application, in conjunction with either RXJS, and/or signals.
- As of now, signals are preferred 9/10 times
