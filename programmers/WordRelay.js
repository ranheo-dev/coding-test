function solution(n, words) {
  let beforeWord = "";
  let beforeWords = [];
  let location = 0;
  for (const index in words) {
    // 한글자인 단어는 return
    if (words[index].length === 1) {
      location = words.lastIndexOf(words[index]);
      return;
    }

    // 마지막 글자로 시작 안하면 return
    const lastAlphabet = beforeWord.slice(-1);
    if (lastAlphabet) {
      if (words[index][0] !== lastAlphabet) {
        location = words.lastIndexOf(words[index]);
        break;
      }
    }

    // 동일한 단어가 있는지, 어느 위치인지 찾기
    const filteredWords = beforeWords.filter((word) => word === words[index]);
    if (filteredWords.length > 0) {
      location = words.lastIndexOf(words[index]);
      break;
    }

    beforeWord = words[index];
    beforeWords.push(words[index]);
  }

  // 먼저 탈락하는 사람 번호
  const people = (location + 1) % n;
  // 몇번째에 탈락하는지
  const round = Math.ceil((location + 1) / n);

  // 동일한 단어가 없으면 [0,0]
  if (location === 0) {
    return [0, 0];
  }

  if (people === 0) {
    return [n, round];
  } else {
    return [people, round];
  }
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);
solution(5, [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
]);
solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
solution(3, ["abc", "cbd", "ddd", "ddd", "dbc", "cbd"]);
