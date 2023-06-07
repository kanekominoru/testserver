let myChart = null;
let myButton = document.getElementById('send');

// スコア表示(加算)
function selectScore (val, score_elem, max_score, max_select) {

    score_nizyu=0;
    score_maru=0;

    if (max_score === 10){
        score_nizyu=10;
        score_maru=5;
    }
    else if (max_select === 2) {
        score_maru=5;
    }
    else {
        score_nizyu=5;
        score_maru=3;
    }

    if (val === "◎") {
        score_elem.innerHTML=score_nizyu;
    }
    else if (val === "○") {
        score_elem.innerHTML=score_maru;
    }
    else if (val === "×") {
        score_elem.innerHTML=0;
    }
    else {
        score_elem.innerHTML=0;
    }
}

// スコア表示(減点)
function minusScore (val, score_elem, min_score, max_select) {
    score_batsu=0;
    score_sankaku=0;

    if (min_score === -10){
        if (max_select === 2) {
            score_batsu=-10;
        }
        else if (max_select === 3) {
            score_batsu=-10;
            score_sankaku=-5;
        }
    }
    else if (min_score === -5) {
        if (max_select === 2) {
            score_batsu=-5;
        }
        else if (max_select === 3) {
            score_batsu=-5;
            score_sankaku=-3;
        }
    }

    if (val === "×") {
        score_elem.innerHTML=score_batsu;
    }
    else if (val === "△") {
        score_elem.innerHTML=score_sankaku;
    }
    else {
        score_elem.innerHTML=0;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    drawChart();
});

// 各項目用
//#region 加点項目
let elem_seiketsu = document.getElementById('select-seiketsu');
elem_seiketsu.addEventListener('change', () => {
    let idx = elem_seiketsu.selectedIndex;
    let val  = elem_seiketsu.options[idx].text;    
    let score_elem = document.getElementById('score-seiketsu');
    let max_score = 10;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_taikei = document.getElementById('select-taikei');
elem_taikei.addEventListener('change', () => {
    let idx = elem_taikei.selectedIndex;
    let val  = elem_taikei.options[idx].text;    
    let score_elem = document.getElementById('score-taikei');
    let max_score = 5;
    let max_select = 2;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});

let elem_aisatsu = document.getElementById('select-aisatsu');
elem_aisatsu.addEventListener('change', () => {
    let idx = elem_aisatsu.selectedIndex;
    let val  = elem_aisatsu.options[idx].text;    
    let score_elem = document.getElementById('score-aisatsu');
    let max_score = 5;
    let max_select = 2;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_kotobazukai = document.getElementById('select-kotobazukai');
elem_kotobazukai.addEventListener('change', () => {
    let idx = elem_kotobazukai.selectedIndex;
    let val  = elem_kotobazukai.options[idx].text;    
    let score_elem = document.getElementById('score-kotobazukai');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
});
let elem_taido = document.getElementById('select-taido');
elem_taido.addEventListener('change', () => {
    let idx = elem_taido.selectedIndex;
    let val  = elem_taido.options[idx].text;    
    let score_elem = document.getElementById('score-taido');
    let max_score = 5;
    let max_select = 2;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_seizitsu = document.getElementById('select-seizitsu');
elem_seizitsu.addEventListener('change', () => {
    let idx = elem_seizitsu.selectedIndex;
    let val  = elem_seizitsu.options[idx].text;    
    let score_elem = document.getElementById('score-seizitsu');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_rirekisho = document.getElementById('select-rirekisho');
elem_rirekisho.addEventListener('change', () => {
    let idx = elem_rirekisho.selectedIndex;
    let val  = elem_rirekisho.options[idx].text;    
    let score_elem = document.getElementById('score-rirekisho');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});

let elem_shokureki = document.getElementById('select-shokureki');
elem_shokureki.addEventListener('change', () => {
    let idx = elem_shokureki.selectedIndex;
    let val  = elem_shokureki.options[idx].text;    
    let score_elem = document.getElementById('score-shokureki');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_setsumeirikai = document.getElementById('select-setsumeirikai');
elem_setsumeirikai.addEventListener('change', () => {
    let idx = elem_setsumeirikai.selectedIndex;
    let val  = elem_setsumeirikai.options[idx].text;    
    let score_elem = document.getElementById('score-setsumeirikai');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_kaiwa = document.getElementById('select-kaiwa');
elem_kaiwa.addEventListener('change', () => {
    let idx = elem_kaiwa.selectedIndex;
    let val  = elem_kaiwa.options[idx].text;    
    let score_elem = document.getElementById('score-kaiwa');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_shakoteki = document.getElementById('select-shakoteki');
elem_shakoteki.addEventListener('change', () => {
    let idx = elem_shakoteki.selectedIndex;
    let val  = elem_shakoteki.options[idx].text;    
    let score_elem = document.getElementById('score-shakoteki');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_kyochosei = document.getElementById('select-kyochosei');
elem_kyochosei.addEventListener('change', () => {
    let idx = elem_kyochosei.selectedIndex;
    let val  = elem_kyochosei.options[idx].text;    
    let score_elem = document.getElementById('score-kyochosei');
    let max_score = 5;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});

let elem_iyoku = document.getElementById('select-iyoku');
elem_iyoku.addEventListener('change', () => {
    let idx = elem_iyoku.selectedIndex;
    let val  = elem_iyoku.options[idx].text;    
    let score_elem = document.getElementById('score-iyoku');
    let max_score = 5;
    let max_select = 2;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_keizokusei = document.getElementById('select-keizokusei');
elem_keizokusei.addEventListener('change', () => {
    let idx = elem_keizokusei.selectedIndex;
    let val  = elem_keizokusei.options[idx].text;    
    let score_elem = document.getElementById('score-keizokusei');
    let max_score = 10;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_stress = document.getElementById('select-stress');
elem_stress.addEventListener('change', () => {
    let idx = elem_stress.selectedIndex;
    let val  = elem_stress.options[idx].text;    
    let score_elem = document.getElementById('score-stress');
    let max_score = 5;
    let max_select = 2;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_keiken = document.getElementById('select-keiken');
elem_keiken.addEventListener('change', () => {
    let idx = elem_keiken.selectedIndex;
    let val  = elem_keiken.options[idx].text;    
    let score_elem = document.getElementById('score-keiken');
    let max_score = 10;
    let max_select = 3;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
let elem_gakureki = document.getElementById('select-gakureki');
elem_gakureki.addEventListener('change', () => {
    let idx = elem_gakureki.selectedIndex;
    let val  = elem_gakureki.options[idx].text;    
    let score_elem = document.getElementById('score-gakureki');
    let max_score = 5;
    let max_select = 2;
    selectScore(val, score_elem, max_score, max_select);
    drawChart();
});
// #endregion

//#region 減点項目
let elem_zikankanri = document.getElementById('select-zikankanri');
elem_zikankanri.addEventListener('change', () => {
    let idx = elem_zikankanri.selectedIndex;
    let val  = elem_zikankanri.options[idx].text;    
    let score_elem = document.getElementById('score-zikankanri');
    let min_score = -10;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_keisanmondai = document.getElementById('select-keisanmondai');
elem_keisanmondai.addEventListener('change', () => {
    let idx = elem_keisanmondai.selectedIndex;
    let val  = elem_keisanmondai.options[idx].text;    
    let score_elem = document.getElementById('score-keisanmondai');
    let min_score = -10;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});

let elem_romaji = document.getElementById('select-romaji');
elem_romaji.addEventListener('change', () => {
    let idx = elem_romaji.selectedIndex;
    let val  = elem_romaji.options[idx].text;    
    let score_elem = document.getElementById('score-romaji');
    let min_score = -10;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_yubisaki = document.getElementById('select-yubisaki');
elem_yubisaki.addEventListener('change', () => {
    let idx = elem_yubisaki.selectedIndex;
    let val  = elem_yubisaki.options[idx].text;    
    let score_elem = document.getElementById('score-yubisaki');
    let min_score = -5;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_cleanroom = document.getElementById('select-cleanroom');
elem_cleanroom.addEventListener('change', () => {
    let idx = elem_cleanroom.selectedIndex;
    let val  = elem_cleanroom.options[idx].text;    
    let score_elem = document.getElementById('score-cleanroom');
    let min_score = -5;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_kotaikinmu = document.getElementById('select-kotaikinmu');
elem_kotaikinmu.addEventListener('change', () => {
    let idx = elem_kotaikinmu.selectedIndex;
    let val  = elem_kotaikinmu.options[idx].text;    
    let score_elem = document.getElementById('score-kotaikinmu');
    let min_score = -5;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});

let elem_word = document.getElementById('select-word');
elem_word.addEventListener('change', () => {
    let idx = elem_word.selectedIndex;
    let val  = elem_word.options[idx].text;    
    let score_elem = document.getElementById('score-word');
    let min_score = -10;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_excel_sheet = document.getElementById('select-excel_sheet');
elem_excel_sheet.addEventListener('change', () => {
    let idx = elem_excel_sheet.selectedIndex;
    let val  = elem_excel_sheet.options[idx].text;    
    let score_elem = document.getElementById('score-excel_sheet');
    let min_score = -10;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_excel_function = document.getElementById('select-excel_function');
elem_excel_function.addEventListener('change', () => {
    let idx = elem_excel_function.selectedIndex;
    let val  = elem_excel_function.options[idx].text;    
    let score_elem = document.getElementById('score-excel_function');
    let min_score = -10;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_excel_graph = document.getElementById('select-excel_graph');
elem_excel_graph.addEventListener('change', () => {
    let idx = elem_excel_graph.selectedIndex;
    let val  = elem_excel_graph.options[idx].text;    
    let score_elem = document.getElementById('score-excel_graph');
    let min_score = -10;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_powerpoint = document.getElementById('select-powerpoint');
elem_powerpoint.addEventListener('change', () => {
    let idx = elem_powerpoint.selectedIndex;
    let val  = elem_powerpoint.options[idx].text;    
    let score_elem = document.getElementById('score-powerpoint');
    let min_score = -5;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_access = document.getElementById('select-access');
elem_access.addEventListener('change', () => {
    let idx = elem_access.selectedIndex;
    let val  = elem_access.options[idx].text;    
    let score_elem = document.getElementById('score-access');
    let min_score = -5;
    let max_select = 2;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});

let elem_transintoj = document.getElementById('select-transintoj');
elem_transintoj.addEventListener('change', () => {
    let idx = elem_transintoj.selectedIndex;
    let val  = elem_transintoj.options[idx].text;    
    let score_elem = document.getElementById('score-transintoj');
    let min_score = -10;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_transintof = document.getElementById('select-transintof');
elem_transintof.addEventListener('change', () => {
    let idx = elem_transintof.selectedIndex;
    let val  = elem_transintof.options[idx].text;    
    let score_elem = document.getElementById('score-transintof');
    let min_score = -10;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_toeic = document.querySelector('.input-toeic');
elem_toeic.addEventListener('change', () => {
    let score = elem_toeic.value;
    let val  = "";
    let score_elem = document.getElementById('score-toeic'); 
    let parsescore = parseInt(score);
    if (isNaN(parsescore)) {
        val  = "○";
    }
    else if (parsescore >= 850){
        val  = "○";
    }
    else if (parsescore >= 750){
        val  = "△";
    }
    else {
        val  = "×";    
    }   
    let min_score = -5;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
let elem_japanese = document.getElementById('select-japanese');
elem_japanese.addEventListener('change', () => {
    let idx = elem_japanese.selectedIndex;
    let val = elem_japanese.options[idx].text;
    if (idx === 0) {
        exit;
    }

    if (val === 'N1'){
        val = '○';
    }
    else if (val === 'N2') {
        val = '△';
    }
    else {
        val = '×';
    }

    let score_elem = document.getElementById('score-japanese');
    let min_score = -5;
    let max_select = 3;
    minusScore(val, score_elem, min_score, max_select);
    drawChart();
});
//#endregion

function drawChart() {
    let total=0;
    let totalscore_midashinami = 0;
    let totalscore_manner = 0;
    let totalscore_communication = 0;
    let totalscore_carrer = 0;
    let minusscore_zinbutsu = 0;
    let minusscore_skill = 0;
    let arrData = [0,0,0,0];

    let score_sieketsu = Number(document.getElementById('score-seiketsu').innerHTML);
    let score_taikei = Number(document.getElementById('score-taikei').innerHTML);
    totalscore_midashinami = score_sieketsu + score_taikei;

    let score_aisatsu = Number(document.getElementById('score-aisatsu').innerHTML);
    let score_kotobazukai = Number(document.getElementById('score-kotobazukai').innerHTML);
    let score_taido = Number(document.getElementById('score-taido').innerHTML);
    let score_seizitsu = Number(document.getElementById('score-seizitsu').innerHTML);
    let score_rirekisho = Number(document.getElementById('score-rirekisho').innerHTML);
    totalscore_manner = score_aisatsu + score_kotobazukai + score_taido + score_seizitsu + score_rirekisho;

    let score_shokureki = Number(document.getElementById('score-shokureki').innerHTML);
    let score_setsumeirikai = Number(document.getElementById('score-setsumeirikai').innerHTML);
    let score_kaiwa  = Number(document.getElementById('score-kaiwa').innerHTML);
    let score_shakoteki = Number(document.getElementById('score-shakoteki').innerHTML);
    let score_kyochosei = Number(document.getElementById('score-kyochosei').innerHTML);
    totalscore_communication = score_shokureki + score_setsumeirikai + score_kaiwa + score_shakoteki + score_kyochosei;

    let score_iyoku = Number(document.getElementById('score-iyoku').innerHTML);
    let score_keizokusei = Number(document.getElementById('score-keizokusei').innerHTML);
    let score_stress  = Number(document.getElementById('score-stress').innerHTML);
    let score_keiken = Number(document.getElementById('score-keiken').innerHTML);
    let score_gakureki = Number(document.getElementById('score-gakureki').innerHTML);
    totalscore_carrer = score_iyoku + score_keizokusei + score_stress + score_keiken + score_gakureki;
    arrData = [totalscore_midashinami,totalscore_manner,totalscore_communication,totalscore_carrer];

    let score_zikankanri = Number(document.getElementById('score-zikankanri').innerHTML);
    let score_keisanmondai = Number(document.getElementById('score-keisanmondai').innerHTML);
    minusscore_zinbutsu=-(score_zikankanri+score_keisanmondai);

    let score_romaji = Number(document.getElementById('score-romaji').innerHTML);
    let score_yubisaki = Number(document.getElementById('score-yubisaki').innerHTML);
    let score_cleanroom = Number(document.getElementById('score-cleanroom').innerHTML);
    let score_kotaikinmu = Number(document.getElementById('score-kotaikinmu').innerHTML);

    let score_word = Number(document.getElementById('score-word').innerHTML);
    let score_excel_sheet = Number(document.getElementById('score-excel_sheet').innerHTML);
    let score_excel_function = Number(document.getElementById('score-excel_function').innerHTML);
    let score_excel_graph = Number(document.getElementById('score-excel_graph').innerHTML);
    let score_powerpoint = Number(document.getElementById('score-powerpoint').innerHTML);
    let score_access = Number(document.getElementById('score-access').innerHTML);

    let score_transintoj = Number(document.getElementById('score-transintoj').innerHTML);
    let score_transintof = Number(document.getElementById('score-transintof').innerHTML);
    let score_toeic = Number(document.getElementById('score-toeic').innerHTML);
    let score_japanese = Number(document.getElementById('score-japanese').innerHTML);
    minusscore_skill = -(score_romaji+score_yubisaki+score_cleanroom+score_kotaikinmu
                        +score_word+score_excel_sheet+score_excel_function+score_excel_graph+score_powerpoint+score_access
                        +score_transintoj+score_transintof+score_toeic+score_japanese);

    total=totalscore_midashinami+totalscore_manner+totalscore_communication+totalscore_carrer-minusscore_zinbutsu-minusscore_skill;
    let scaling = [15, 25, 25, 35];
    let data = {
        labels: ["身だしなみ", "マナー・常識・人柄", "コミュニケーション能力", "キャリア評価"],
        datasets: [
            {
                label: "結果",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data:arrData.map(function (e, i) {
                    return e / scaling[i] * 100;
                }),
            }
        ]
    };

    let ctx = document.getElementById("myChart");
    
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
      //グラフの種類
      type: 'radar',
      //データの設定
      data: data,
      // その他設定  
      options: {
        scale: {
            min: 0,
            max: 100,
        },
      },
    });

    let rs = document.querySelector(".resultscore");
    let result_score = `人物評価:${total}点`;
    rs.innerHTML = result_score;
};

document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value=""));
        
    }
    setYear();
});

function setYear() {
    //select要素を取得
    let targets = document.querySelectorAll(`[id$='_when']`);
    //Dateオブジェクトを取得
    const date = new Date();
    //今年の年数を取得
    const year = date.getFullYear();
    //n年後の数値を代入
    const start = 2005;

    let diff = year-start;
    targets.forEach(function(element) {
        for(let i = 0; i < diff; i++){
            //option要素生成
            let option = document.createElement("option");
            //option要素のテキストを設定
            option.text = start + i;
            //option要素の値を設定
            option.value = start + i;
            //option要素をselect要素の末尾に追加
            element.appendChild(option);
        }
    });
}