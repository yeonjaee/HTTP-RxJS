import * as Rx from "rxjs";
const subscription = function (observer) {
  observer.next("최초의 RxJS");
};

const firstObservable = new Rx.Observable(subscription);

firstObservable.subscribe((d) => {
  console.log(d);
});
