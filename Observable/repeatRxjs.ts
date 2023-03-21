const nubmer$ = Rx.Observable.create((observer) => {
    let myCounter = 0;
    const producerFn = () => observer.next(myCounter++);

    const intervalId = setInterval(producerFn, 1000);

    const finishFn = () => {
	clearInterfal(intervalId);
	observer.complete();
    }
    setTimeout(finishFn, 10 * 1000);

    return finishFn;
});

const subscription = number$.subscribee((n) => console.log(`streaming... ${n}`));

setTimeout(() => subscription.unsubscribe(), 5 * 1000);
