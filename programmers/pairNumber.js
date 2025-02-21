function solution(X, Y) {
  /**
     * 숫자 짝꿍
     * 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
        예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
        두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
     */

  // ! 숫자 비교시 발생되는 시간복잡도 고려할것 (for, includes, replace 등)
  var answer = "";

  const XList = X.split("");
  const YList = Y.split("");
  let commonNumber = "";
  const numberList = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  // 한자리 숫자 배열을 돌면서 공통으로 들어있는 최소 갯수 확인
  // 높은 수부터 시작해서 정렬이 필요 없게 하기
  // 배열로 넣지 않고 문자로 합쳐서 불필요한 연산 없애기
  for (const number of numberList) {
    const filterX = XList.filter((v) => v === number);
    const filterY = YList.filter((v) => v === number);
    commonNumber +=
      filterX.length < filterY.length ? filterX.join("") : filterY.join("");
  }

  // 공통 숫자 없을때
  if (commonNumber === "") return "-1";

  // 0으로만 구성되어 있을 때
  if (parseInt(commonNumber) === 0) return "0";

  return commonNumber;
}
