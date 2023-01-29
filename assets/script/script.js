
    let div = document.createElement("div")
    div.className = "test ";
    
    
   


    let ulFirst = document.createElement("ul");
    ulFirst.className = "first";
    div.append(ulFirst);

    ulFirst.style.lineHeight = "15px"
    ulFirst.style.padding ="0";

    let liFirst = document.createElement("li");
    liFirst.id = "firstdata";
    ulFirst.append(liFirst);

    let liSecond = document.createElement("li");
    liSecond.id = "second-data";
    ulFirst.append(liSecond);

    liFirst.style.listStyleType= "none"
    liFirst.style.padding = "5px";

    liSecond.style.listStyleType= "none";
    liSecond.style.padding= "5px";

    let iEyes = document.createElement("i");
    iEyes.className= "fa-regular fa-eye";
    liFirst.append(iEyes);
    liFirst.append("Preview");

    // ??????? hover
    // liFirst.onmousemove = function(){
        
    //     liFirst.style.backgroundColor = `gray`;
    // }

    let iArrow = document.createElement("i");
    iArrow.className= "fa-solid fa-arrows-up-down-left-right";
    liSecond.append(iArrow);
    liSecond.append("Open with");

    iEyes.style.margin = "0 10px 0 0";
    iArrow.style.margin = "0 10px 0 0";

    let hrFirst = document.createElement("hr");
    div.append(hrFirst);

    hrFirst.style.margin = "8px";

     // second-section

//ul-second
    let ulSecond = document.createElement("ul");
    ulSecond.className = "second";
    div.append(ulSecond);

    ulSecond.style.padding ="0";
    ulSecond.style.lineHeight = "15px"
//li-first
    let liFirstSecond = document.createElement("li");
    liFirstSecond.id = "first-ofSecond-data";
    ulSecond.append(liFirstSecond);
//i-first
    let iUserAdd = document.createElement("i");
    iUserAdd.className= "fa-solid fa-user-plus";
    liFirstSecond.append(iUserAdd);
    liFirstSecond.append("Share");
//li-second
    let liSecondOfSecond = document.createElement("li");
    liSecondOfSecond.id = "second-ofSecond-data";
    ulSecond.append(liSecondOfSecond);
//i-second
    let iUrl = document.createElement("i");
    iUrl.className= "fa-solid fa-link";
    liSecondOfSecond.append(iUrl);
    liSecondOfSecond.append("Get link");

    liFirstSecond.style.listStyleType= "none";
    liFirstSecond.style.padding= "5px";

    liSecondOfSecond.style.listStyleType= "none";
    liSecondOfSecond.style.padding= "5px";

    iUserAdd.style.margin = "0 10px 0 0";
    iUrl.style.margin = "0 10px 0 0";

    let lithirdSecond = document.createElement("li");
    lithirdSecond.id = "third-ofSecond-data";
    ulSecond.append(lithirdSecond);

    let iAdd = document.createElement("i");
    iAdd.className= "fa-solid fa-plus";
    lithirdSecond.append(iAdd);
    lithirdSecond.append("Add to workspace");

    lithirdSecond.style.listStyleType= "none";
    iAdd.style.margin = "0 10px 0 0";
    lithirdSecond.style.padding= "5px";


    let liforthSecond = document.createElement("li");
    liforthSecond.id = "fourth-ofSecond-data";
    ulSecond.append(liforthSecond);

    let iFolder = document.createElement("i");
    iFolder.className= "fa-regular fa-folder";
    liforthSecond.append(iFolder);
    liforthSecond.append("Show file location");

    liforthSecond.style.listStyleType= "none";
    liforthSecond.style.padding= "5px";
    iFolder.style.margin = "0 10px 0 0";

    let lifiveSecond = document.createElement("li");
    lifiveSecond.id = "fiveth-ofSecond-data";
    ulSecond.append(lifiveSecond);

    let iDrive = document.createElement("i");
    iDrive.className= "fa-brands fa-google-drive";
    lifiveSecond.append(iDrive);
    lifiveSecond.append("Add shortcut to drive");

    lifiveSecond.style.listStyleType= "none";
    lifiveSecond.style.padding= "5px";
    iDrive.style.margin = "0 10px 0 0";

//move to gray

    let lisixSecond = document.createElement("li");
    lisixSecond.id = "sixth-ofSecond-data";
    ulSecond.append(lisixSecond);

    lisixSecond.style.color = "gray";


    let iMove = document.createElement("i");
    iMove.className="fa-solid fa-folder-minus";
    lisixSecond.append(iMove);
    lisixSecond.append("Move to");

    lisixSecond.style.listStyleType= "none";
    lisixSecond.style.padding= "5px";
    iMove.style.margin = "0 10px 0 0";

    let lisevenSecond = document.createElement("li");
    lisevenSecond.id = "seventh-ofSecond-data";
    ulSecond.append(lisevenSecond);

    let iStar = document.createElement("i");
    iStar.className="fa-regular fa-star";
    lisevenSecond.append(iStar);
    lisevenSecond.append("Add to stared");

    lisevenSecond.style.listStyleType= "none";
    lisevenSecond.style.padding= "5px";
    iStar.style.margin = "0 10px 0 0";

    let lieightSecond = document.createElement("li");
    lieightSecond.id = "eighth-ofSecond-data";
    ulSecond.append(lieightSecond);

//rename gray

    let iPencel = document.createElement("i");
    iPencel.className= "fa-solid fa-pencil";
    lieightSecond.append(iPencel);
    lieightSecond.append("Rename");

    lieightSecond.style.color = "gray";
    

    lieightSecond.style.listStyleType= "none";
    lieightSecond.style.padding= "5px";
    iPencel.style.margin = "0 10px 0 0";

    let hrSecond = document.createElement("hr");
    div.append(hrSecond);

    hrFirst.style.margin = "8px";

    //third-section

    let ulThird = document.createElement("ul");
    ulThird.className = "third";
    div.append(ulThird);

    ulThird.style.padding ="0";
    ulThird.style.lineHeight = "15px"
    ulThird.style.lineHeight = "15px"

    let lifirstthird = document.createElement("li");
    lifirstthird.id = "first-ofThird-data";
    ulThird.append(lifirstthird);

    let iCc = document.createElement("i");
    iCc.className= "fa-solid fa-closed-captioning";
    lifirstthird.append(iCc);
    lifirstthird.append("View caption tracks");

    lifirstthird.style.listStyleType= "none";
    lifirstthird.style.padding= "5px";
    iCc.style.margin = "0 10px 0 0";

//watch gray
    let liSecondthird = document.createElement("li");
    liSecondthird.id = "second-ofThird-data";
    ulThird.append(liSecondthird);

    liSecondthird.style.color = "gray";


    let iWatch = document.createElement("i");
    iWatch.className= "fa-solid fa-clock-rotate-left";
    liSecondthird.append(iWatch);
    liSecondthird.append("Manage versions");

    liSecondthird.style.listStyleType= "none";
    liSecondthird.style.padding= "5px";
    iWatch.style.margin = "0 10px 0 0";

//copy

    let lithirdofthird = document.createElement("li");
    lithirdofthird.id = "third-ofThird-data";
    ulThird.append(lithirdofthird);

    let iCopy = document.createElement("i");
    iCopy.className= "fa-regular fa-copy";
    lithirdofthird.append(iCopy);
    lithirdofthird.append("Make a copy");

    lithirdofthird.style.listStyleType= "none";
    lithirdofthird.style.padding= "5px";
    iCopy.style.margin = "0 10px 0 0";

    //circle

    let liforththird = document.createElement("li");
    liforththird.id = "fourth-ofThird-data";
    ulThird.append(liforththird);

    let iCircle = document.createElement("i");
    iCircle.className= "fa-solid fa-circle-exclamation";
    liforththird.append(iCircle);
    liforththird.append("Report abuse");

    liforththird.style.listStyleType= "none";
    liforththird.style.padding= "5px";
    iCircle.style.margin = "0 10px 0 0";

//download

    let lifivethird = document.createElement("li");
    lifivethird.id = "fiveth-ofThird-data";
    ulThird.append(lifivethird);

    let iDownload = document.createElement("i");
    iDownload.className= "fa-solid fa-download";
    lifivethird.append(iDownload);
    lifivethird.append("Download");

    lifivethird.style.listStyleType= "none";
    lifivethird.style.padding= "5px";
    iDownload.style.margin = "0 10px 0 0";

    let hrThird = document.createElement("hr");
    div.append(hrThird);

    hrThird.style.margin = "8px";

    //fourth section

    let ulFourth = document.createElement("ul");
    ulFourth.className = "forth";
    div.append(ulFourth);

    ulFourth.style.padding ="0";
    ulFourth.style.lineHeight = "15px"
    ulFourth.style.lineHeight = "15px"

    //trash gray

    let lifirstFourth = document.createElement("li");
    lifirstFourth.id = "first-offourth-data";
    ulFourth.append(lifirstFourth);

    lifirstFourth.style.color = "gray";

    let iTrash = document.createElement("i");
    iTrash.className= "fa-regular fa-trash-can";
    lifirstFourth.append(iTrash);
    lifirstFourth.append("Download");

    lifirstFourth.style.listStyleType= "none";
    lifirstFourth.style.padding= "5px";
    iTrash.style.margin = "0 10px 0 0";

// not helpful 
    let lisecondFourth = document.createElement("li");
    lisecondFourth.id = "second-offourth-data";
    ulFourth.append(lisecondFourth);


    let iBad = document.createElement("i");
    iBad.className= "fa-regular fa-thumbs-down";
    lisecondFourth.append(iBad);
    lisecondFourth.append("Not a helpful suggestion");

    lisecondFourth.style.listStyleType= "none";
    lisecondFourth.style.padding= "5px";
    iBad.style.margin = "0 10px 0 0";

    //second div
    let secondDiv = document.createElement("div");
    secondDiv.className = "inputDiv"
    

    let form = document.createElement("form");
    secondDiv.append(form);

    let inp = document.createElement("input");
    inp.type ="text"
    inp.setAttribute("placeholder", "write name of color")
    inp.id = "inpText" 
    form.append(inp);

    form.onsubmit = function (event) {
          event.preventDefault();     
    }

    let last;
window.oncontextmenu = function(event){

    event.preventDefault();
    last ? last.remove() : "null";
    document.body.append(div)
    div.style.width = "300px";
    div.style.height = "550px";
    // div.style.border = "1px solid black";
    div.style.backgroundColor = "white";
    div.style.boxShadow = "0px 0px 8px 2px rgba(231, 231, 231)";
    div.style.borderRadius = "10px";
    div.style.padding = "15px";
    div.style.padding = "15px";
    div.style.position = "fixed";
    div.style.top = `${event.clientY}px`;
    div.style.left = `${event.clientX}px`;
    div.style.cursor = "pointer";
    last=div;

    secondDiv.remove();
}

let box;

liFirst.onclick = function(event){
    document.body.append(secondDiv);
    secondDiv.style.width ="250px";
    secondDiv.style.height ="200px";
    secondDiv.style.backgroundColor = "white";
    secondDiv.style.boxShadow = "0px 0px 8px 2px rgba(231, 231, 231)";
    secondDiv.style.borderRadius = "10px";
    secondDiv.style.display = "flex";
    secondDiv.style.justifyContent = "center";
    secondDiv.style.alignItems = "center";
    secondDiv.style.position = "fixed";
    secondDiv.style.top = `${event.clientY}px`;
    secondDiv.style.left = `${event.clientX}px`;
    box = secondDiv; 
}
window.onclick = function(){

    last ? last.remove() : "null";

}
inp.onkeydown = function (event) {
    let color = inp.value;
    if (event.keyCode === 13) {
      document.body.style.backgroundColor = color;
      inp.value = " ";
    }
  };
