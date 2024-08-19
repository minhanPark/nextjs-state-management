# NEXTJS STATEMENT MANNAGEMENT

1. 글로벌 상태 저장을 하지 마라
   앱라우터는 비동기 렌더링이 가능하므로 단일 서버가 한번에 두 개 이상의 요청을 처리할 수 있다는 의미다.
   서로 다른 두 요청에서 데이터가 동시에 처리될 가능성이 생기고 이로 인해 한 고객이 다른 고객의 요청에서 반환되어야 할 데이터를 받을 수 있다.

2. RSC(react server component)에 스토어 데이터가 표시되지 않아야 한다

3. RSC는 변경 불가능한 데이터를 표시하고 클라이언트 컴포넌트는 변경 가능한 데이터를 표시합니다.

## 참고자료

1. [pronextjs.dev](https://www.pronextjs.dev/tutorials/state-management)
2. [tkdodo.eu](https://tkdodo.eu/blog/zustand-and-react-context)
3. [zustand-docs](https://zustand.docs.pmnd.rs/getting-started/introduction)
