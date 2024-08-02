## Angular Pipes

Pipes are simple, pure functions that are use in template expressions. They accept an input value and return a transformed value.
Angular provides a bunch of built-in pipes for common data transformations, but you can also define your own pipes.

### DatePipe
- Formats a date value according to locale rules
- Can also define a custom format
- <div>{{ dateObj | date }}</div> // 'Jun 15, 2015'
- <div>{{ dateObj | date:'medium' }}</div> // 'Jun 15, 2015, 9:43:11 PM'
- <div>{{ dateObj | date:"MMM dd, yyyy 'at' hh:mm a" }}</div> // 'Jun 15, 2015 at 09:43 PM'

### UpperCasePipe
- Transforms text to all upper case

### LowerCasePipe
- Transforms text to all lowercase

### CurrencyPipe
- Transforms a number into a string with a currency symbol, following locale rules
- USD $ is default
- Can also define digits format MinIntegerDigits.MinFractionDigits-MaxFractionDigits
- Can also define whether to use symbol, or code
- <p>Price: {{ price | currency: 'EUR' : 'symbol' : '4.2-2' }}</p>

### DecimalPipe
- Transforms number to a string with a decimal point
- Like the currency, can also define digits format
- Can also define locale
- <p>{{ pi | number: '4.1-5' : 'fr' }}</p>

### PercentPipe
- Transforms number to a percentage string with a decimal point
- Can define digits format
- Can define locale
- <p>{{ rating | number: '4.1-5' : 'fr' }}</p>

### Async Pipe
- Unwraps a value from an observable. (More on this with rxjs)
