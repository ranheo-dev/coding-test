function solution(record) {
  /**
     * 오픈채팅방
        채팅방에 누군가 들어오면 다음 메시지가 출력된다.

        "[닉네임]님이 들어왔습니다."

        채팅방에서 누군가 나가면 다음 메시지가 출력된다.

        "[닉네임]님이 나갔습니다."

        채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.

        채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
        채팅방에서 닉네임을 변경한다.
        닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

    
    */

  // ! uid별 닉네임 정리시 시간초과가 발생할 수 있으니 반복문 중복사용을 주의할것.

  // record = [ "Enter | Leave | Change uid nickname"]

  let answer = [];
  // uid별 닉네임 정리  : {uid:nickname}
  let userList = {};

  for (const message of record) {
    const status = message.split(" ")[0];
    const uid = message.split(" ")[1];
    const nickname = message.split(" ")[2];

    if (status === "Leave") continue;

    userList[`${uid}`] = nickname;
  }

  for (const message of record) {
    if (message.includes("Change")) continue;

    const status = message.split(" ")[0];
    const uid = message.split(" ")[1];
    // userList에 있는 nickname으로 변경
    const nickname = userList[`${uid}`];

    // status 에 따라 들어왔습니다 나갔습니다 메세지 출력
    answer.push(
      `${nickname}님이 ${status === "Enter" ? "들어왔습니다." : "나갔습니다."}`
    );
  }

  return answer;
}
