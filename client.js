// const sendResult = () =>{
//     let coordinator = document.getElementById('coordinator');
//     let idx = coordinator.selectedIndex;
//     let val  = coordinator.options[idx].text;
//     let str = '';
    
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://192.168.10.129:3000");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onload = () => { // 状態が変化すると関数が呼び出されます。
        
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             // リクエストの終了。ここの処理を実行します。
//             console.log(JSON.parse(xhr.responseText));
//         } else {
//             console.log(`Error: ${xhr.status}`);
//         }
        
//     }
//     const body = JSON.stringify({
//         title: "Hello World",
//         body: val,
//         userId: 900,
//       });
//     xhr.send(body);

//     return false;
// }

const fetchForm = document.querySelector('.fetchForm');
const btn = document.querySelector('.btn');
const url = "https://192.168.128.44:3000";

const postFetch = () => {
    // let formData = new FormData(fetchForm);
    // for (let value of formData.entries()) {
    //     console.log(value);
    // }
    let coordinator = document.getElementById('coordinator');
    let idx = coordinator.selectedIndex;
    let val  = coordinator.options[idx].text;
    fetch(url, {
        method: 'POST',
        // body: formData
        body: val
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        } 
        console.log('ok!');
        return response.json();
    }).then((data)  => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
        alert(error);
    });
};

btn.addEventListener('click', postFetch, false);