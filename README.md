# HTTP-RxJS

## RxJS Study

jQuery와 같은 라이브러리는 Ajax로 서버와 통신하기 위해서 브라우저에서 제공하는 API인 XMLHttpRequest 를 사용한다.
그러나, 이를 직접 사용하는 것은 상당히 불편하고 브라우저마다 호출 방식도 달라서 까다롭기 때문에 XMLHttpRequest 객체를 직접 만들기보다는 라이브러리를 사용한다.


앵귤러 또한 Ajax HTTP 통신을 할 수 있는 기능을 제공하고, 비동기 로직을 효과적으로 다루기 위하여 앵귤러가 선택한 기술은 RxJS 이다.

### 왜 RxJS인가?
- 질문의 핵심은 "비동기 코드를 어떻게 처리하는 것이 좋은 가?" 라는 질문과 맞닿아 있다.
  - 비동기, 이벤트 기반의 코드를 효율적으로 작성하기 위함이다.
  - 특히 UI가 있는 웹 애플리케이션은 기본적으로 비동기적이고 이벤트 기반의 로직이 필수적이다.

### RxJS 원리
- RxJS 원리는 Observable, Observer, Subscription 의 관계로 설명할 수 있다.
- 세 가지 개념 중 핵심은 Observable 이다. 말 그대로 관찰할 수 있는 대상. 관찰할 대상은 Observable 안에서 발생하는 데이터.
  - 따라서, Observable 은 일련의 데이터를 발생시키는 원천이라고 생각해도 된다.
  - 데이터를 Observable 로 만드는 이유는 데이터에 관심 있는 주체에게 데이터를 전달하기 위함이다. Observable 에서 발생하는 데이터를 관찰하는 주체를 RxJS에서는 Observer 라고 한다. 
  - Observer 은 단지 next, error, complete 라는 세 종류의 메서드를 가진 객체다.
  - 옵저버블은 subscribe 메서드를 가지고 있으며, 이 메서드를 통해 옵저버를 등록한다.
  - 옵저버블에 옵저버를 등록하면 옵저버블이 전달하는 데이터를 전달받을 수 있다.
  - 옵저버가 데이터를 구독하기 시작할 때 옵저버블은 Subscription 을 반환한다.
  - 옵저버블은 데이터 소스가 될 여러 대상을 인자로 받아 Observable 로 반환하는 다양한 메서드를 가지고 있다.

- [Simple User check application](./contacts-manager)