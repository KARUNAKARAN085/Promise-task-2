function updatedata(emoji){
    console.log(emoji)
    const elem = document.querySelector(".row")
    const card = `
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div class="card h-100">
            <header class="header">
                <div class="card-header"><b>${emoji.name}</b></div>
            </header>
      
        <div class="card-body">
            <div class="card-text"></b> ${emoji.htmlCode}</div><br>
        </div>
    </div>`
    
    elem.insertAdjacentHTML("beforeend",card)
}

const getData = async ()=>{
    let emojiData = await fetch("https://emojihub.yurace.pro/api/all")
    .then((data)=>data.json())
    .then((data) => data)
    .catch(x=> console.warn(x));
    
    for(let i=0;i<emojiData.length;i++){
        updatedata(emojiData[i])
    }
}
getData();
