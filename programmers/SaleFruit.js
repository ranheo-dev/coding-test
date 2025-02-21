function solution(k, m, score) {
  /**
   * 과일장수
    한 상자에 사과를 m개씩 담아 포장합니다.
    상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
    과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.
    (사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)
    */

  let answer = 0;

  // 최상품 = k
  // 한상자 = m
  // 최하점 p : p*m = 가격

  // 높은 숫자 순으로 정렬
  const newScore = score.sort().reverse();
  let box = [];

  // 2. m개씩 묶어서 점수 만들기
  for (const index in newScore) {
    // newScore[index]
    // 사과 갯수가 모자라면 return
    if (score.lenth - index < m) {
      return answer;
    }

    if (box.length < m) {
      box.push(score[index]);
      if (box.length === m) {
        answer += score[index] * m;
        box = [];
      }
    }
  }

  return answer;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
