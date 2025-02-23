function solution(maps) {
  /**
     * 무인도 여행 
     * 메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보고 있습니다. 지도에는 바다와 무인도들에 대한 정보가 표시돼 있습니다. 지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태이며, 격자의 각 칸에는 'X' 또는 1에서 9 사이의 자연수가 적혀있습니다. 지도의 'X'는 바다를 나타내며, 숫자는 무인도를 나타냅니다. 이때, 상, 하, 좌, 우로 연결되는 땅들은 하나의 무인도를 이룹니다. 지도의 각 칸에 적힌 숫자는 식량을 나타내는데, 상, 하, 좌, 우로 연결되는 칸에 적힌 숫자를 모두 합한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타냅니다. 어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 합니다.
       지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return 하는 solution 함수를 완성해주세요. 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return 해주세요.
     */

  //! 섬을 탐색할때 bfs(너비 우선 탐색)로 연결된 모든 섬을 돌고 나와야 빠지지 않고 셀 수 있음

  const rows = maps.length;
  const cols = maps[0].length;

  // 방문 체크 배열
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // 이동 방향 (상, 하, 좌, 우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // BFS 함수
  const bfs = (x, y) => {
    const queue = [[x, y]];

    visited[x][y] = true;
    let totalFood = parseInt(maps[x][y]);

    while (queue.length > 0) {
      console.log(queue);
      const [cx, cy] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        // 지도 범위 안에 있고, 방문하지 않았으며, 숫자가 적힌 칸일 경우
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          totalFood += parseInt(maps[nx][ny]);
          queue.push([nx, ny]);
        }
      }
    }

    return totalFood;
  };

  // 결과 저장
  const days = [];

  // 지도를 탐색하면서 무인도 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 숫자가 적힌 칸이면서 아직 방문하지 않은 경우
      if (maps[i][j] !== "X" && !visited[i][j]) {
        days.push(bfs(i, j));
      }
    }
  }

  // 오름차순 정렬
  days.sort((a, b) => a - b);

  // 무인도가 없다면 -1 반환
  return days.length > 0 ? days : [-1];
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
solution(["XXX", "XXX", "XXX"]);
solution(["X591X", "11X5X", "X231X", "1XXX1"]);
solution(["X5XX5X", "111111", "XXXXXX", "111111"]);
