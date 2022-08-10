// let counter = 0
// document.getElementById('btnClick')
//     .addEventListener(
//         'click',
//         () => alert(`clicked ${++counter} times`)
//     )
import { from, fromEvent, of, scan } from "rxjs";
fromEvent(document.getElementById('btnClick'), 'click')
    .pipe(
        scan(
            (counter) => counter + 1,
            0
        )
    )
    .subscribe(() => alert(`clicked ${++counter} times`))


const numbers = [1, 2, 3, 4,]
const events = [
    {
        obj: document.createElement('button'),
        eventName: 'click'
    },
    {
        obj: document.createElement('button'),
        eventName: 'click'
    }
]
of(numbers)
// of(events).forEach(o => fromEvent(o.obj, o.eventName))
events.forEach(
    o => fromEvent(o.obj, o.eventName)
)