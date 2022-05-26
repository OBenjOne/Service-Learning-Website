let text = "starting text";
let list=["decorate",
    "fortunate",
    "stop",
    "reign",
    "basin",
    'few',
    'apparatus',
    'embarrassed',
    'jewel',
    'poised',
    'realize',
    'horrible',
    'bless',
    'remain',
    'magnificent',
    'report',
    'determined',
    'omniscient',
    'sail',
    'blush',
    'skillful',
    'edge',
    'snail',
    'smiling',
    'hospital'];/*a list of randomly generated words*/
let newList = [] /*sort the list*/
for (let i=0;i<list.length;i++){
    let done = false;
    let index = 0;
    while (done != true){
        if ((index >= newList.length) || (list[i]<newList[index])){ 
            /* is the index at end of list or is the value greater than the one at current index?*/
            newList.splice(index,0,list[i]);
            done=true;
        }
        index=index+1;
    }
}
list=newList;
for (let i=0;i<list.length;i++){
    createElements(list[i])
}
function getInput(){
    text=document.getElementById("search").value;

    //document.getElementById("text").innerText=text;
    Search()
}

function findMatchingWords(string){
    newList = []
    for (let i=0; i<list.length; i++){
        if (list[i].includes(string)){
            newList.push(list[i])
        }
    }
    return newList
}

function Search(){
    const element = document.getElementById("results");
    element.innerHTML=''
    newList=findMatchingWords(text)
    for (let i=0;i<newList.length;i++){
        createElements(newList[i])
    }
}

function removeAll(){

}

function createElements(string){
    const para = document.createElement("p");
    const node = document.createTextNode(string);
    para.appendChild(node);
    const element = document.getElementById("results");
    element.appendChild(para);
}