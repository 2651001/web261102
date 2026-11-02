// //document.write("외부 스크립트 방법");

// console.log ("여기 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다");

// let dan = 3;

// console.log("** 엄청나다 구구단 3단!**");
// for(let i=1; i <=9 ; i++){
//     console.log(`${dan}x${i}=${dan*i}`)
// }

// if (dan === '3'){
//      console.log("3단이 맞습니다.");
// } else{
//     console.log("틀렸습니다.");
// }

// let arr = [80, 70, 90, 60];
// console.log(arr);
// console.log(arr[2]);

// let stdScore = {
//     korean : 80,
//     english : 70,
//     math :90,
//     science :60
// };

// console.log(stdScore);
// console.timeLog(stdScore.math);
// stdScore.name = "홍길동";
// console.log(stdScore);


// script.js: 내 영화 평점 통계(콘솔판)
// 작성자 : 강동현(2651001)

// script.js: 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)

const titles = [
    "킹덤 오브 헤븐", 
    "패션 오브 크라이스트", 
    "나니아 연대기: 사자, 마녀 그리고 옷장", 
    "반지의 제왕: 반지 원정대", 
    "몬티 파이튼의 성배"
];

const ratings = [7.09, 7.53, 7.14, 8.44, 7.80];
const years = [2005, 2004, 2005, 2001, 1975];

let sum = 0;
let count = 0; // 4단계: 8점 이상 개수 변수[cite: 4]

let max = ratings[0];
let maxIndex = 0; // 3단계[cite: 4]

// 반복문: 합계 누적, 최고 평점 찾기, 8점 이상 개수 세기, 등급 라벨 출력[cite: 4, 5]
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i]; // 1단계: 합계 누적[cite: 4]

    // 3단계: 최고 평점 영화 찾기[cite: 4]
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    // 4단계: 8점 이상 영화 개수 세기[cite: 4]
    if (ratings[i] >= 8) {
        count++;
    }

    // 5단계: 등급 라벨 부여 (if, else if, else)
    let label = "";
    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    // 5단계: 영화 5줄 상세 정보 출력[cite: 5]
    console.log(titles[i] + " (" + years[i] + "): " + ratings[i] + " " + label);
}

// 1단계 결과 출력[cite: 4]
console.log("합계:", sum);

// 2단계: 평균 구하기 및 출력[cite: 5]
const average = sum / ratings.length;
console.log("평균:", average);

// 3단계: 최고 평점 영화 출력[cite: 4, 5]
console.log("최고:", titles[maxIndex], max);

// 4단계: 8점 이상 개수 출력[cite: 4, 5]
console.log("8점 이상:", count + "편");

// 6단계: 요약 한 줄 alert 창 (백틱 기호 사용 확인)[cite: 5]
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 \${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);