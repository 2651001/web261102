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
let count = 0; 

let max = ratings[0];
let maxIndex = 0; 

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i]; 
    
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    
    if (ratings[i] >= 8) {
        count++;
    }

    
    let label = "";
    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    
    console.log(titles[i] + " (" + years[i] + "): " + ratings[i] + " " + label);
}


console.log("합계:", sum);


const average = sum / ratings.length;
console.log("평균:", average);


console.log("최고:", titles[maxIndex], max);


console.log("8점 이상:", count + "편");


const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);