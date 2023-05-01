async create(data: InputData, file: File, files?: File[], userId?): Promise<ExecutionResult<any>> {
    return this.graphql
      .mutate(
        gql`
          mutation create($data: InputData!, $file: Upload!, $files: [Upload!], $userId: ID) {
            createEpisode(data: $data, file: $file, files: $files, userId: $userId) {
              id
              summary
              order
              status
            }
          }
        `,
        {
          data,
          file,
          files,
          userId
        }
      )
      .pipe(
        map((result) => {
          result.data = result.data.create;
          return result;
        })
      )
      .toPromise();
  }

/**
* 위 코드에서 pipe() 를 사용하는 이유:
* map() 연산자를 사용하여 GraphQL API의 응답을 변환하고 반환하는 데 사용됩니다.
* GraphQL API는 대개 data 속성에 응답 데이터를 포함하는 JSON 객체를 반환합니다.
* 그러나 이 코드에서는 GraphQL API가 반환한 JSON 객체의 data 속성에 직접 접근하는 대신 map() 연산자를 사용하여 create 필드의 값만 반환하고 있습니다.
* 이렇게 함으로써, create 필드의 값만을 반환하도록 GraphQL API 스키마를 변경할 경우,
* 클라이언트 측 코드의 변경이 최소화됩니다. 따라서 코드 유지 보수 및 확장성 측면에서 이점을 가져올 수 있습니다.
*/


// 그렇다면 pipe() 를 사용하지 않아도 되는거 아닐까?
// 굳이 pipe()를 사용하지 않고도 결과를 처리할 수 있습니다.
// pipe() 함수는 옵저버블(Observable) 객체에 대해 연속적인 연산자 호출을 가능하게 해주는 함수형 프로그래밍의 기능 중 하나입니다.
// 따라서, toPromise() 메서드 호출 이후에 map() 연산자를 사용하여도 동일한 결과를 얻을 수 있습니다.

async create(data: InputData, file: File, files?: File[], userId?): Promise<ExecutionResult<any>> {
    return this.graphql
      .mutate(
        gql`
          mutation create($data: InputData!, $file: Upload!, $files: [Upload!], $userId: ID) {
            createEpisode(data: $data, file: $file, files: $files, userId: $userId) {
              id
              summary
              order
              status
            }
          }
        `,
        {
          data,
          file,
          files,
          userId
        }
      )
      .toPromise();
  }

// 그러나, pipe()를 사용하면 코드의 확장성과 가독성을 향상시킬 수 있습니다.
// 만약, 예를 들어, GraphQL API가 반환하는 데이터의 형태가 변경된다면,
// pipe()를 사용하면 map() 연산자만 수정하면 됩니다.
// 이와 반대로 toPromise() 이후에 map() 연산자를 사용하면 모든 코드에서 result.data.create를 찾아서 수정해야 합니다.
// 따라서, pipe()를 사용하면 코드의 유지보수성이 향상되고, 코드의 확장성이 높아집니다.
