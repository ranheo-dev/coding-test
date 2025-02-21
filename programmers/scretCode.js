function solution(s, skip, index) {
  /**
     * 둘만의 암호 
     * 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

        문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
        index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
        skip에 있는 알파벳은 제외하고 건너뜁니다.
        예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

        두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
     */

  //! index 길이가 skip을 제외한 알파벳의 길이 1배가 넘을 수도 있다는 것 고려하기

  // s = index만큼 뒤에 있는 문자열 모음
  // skip = 넘어가기
  let answer = "";

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const word = s.split("");
  const skipList = skip.split("");

  const newAlphabet = alphabet.filter((v) => !skipList.includes(v));

  for (const char of word) {
    const idx = (newAlphabet.indexOf(char) + index) % newAlphabet.length;
    const result = newAlphabet[idx];
    answer = answer + result;
  }

  return answer;
}

solution("aukks", "wbqd", 5);
solution("bcdefghijklmnopqrstuvwxyz", "a", 1);
