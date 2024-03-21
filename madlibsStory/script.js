
let story=document.querySelector(".demo").innerText;
//console.log(story)

let words=new Set()
let start=-1
let first='['
let last=']'

for(var i=0;i<=story.length;i++){
    if(story[i]==first){
        start=i
    }
    if (story[i]==last && start!=-1){
        word=story.slice(start,i+1)
        words.add(word)
        start=-1

    }
}

console.log(words)

function generate(){
    var a=document.getElementById('Place').value;
    var b=document.getElementById('Adjective').value;
    var c=document.getElementById('Name').value;
    var d=document.getElementById('Noun').value;
    var e=document.getElementById('Verb').value;
    var f=document.getElementById('PluralNoun').value;
    var g=document.getElementById('Creature').value;
    var h=document.getElementById('BodyPart').value;
    var i=document.getElementById('Emotion').value;
    

    let answers={
        '[Place]':a,
        '[Adjective]':b,
        '[Name]':c,
        '[Noun]':d,
        '[Verb]':e,
        '[Plural Noun]':f,
        '[Creature]':g,
        '[Body Part]':h,
        '[Emotion]':i
    }
    console.log(answers)

    return fillingStory(story,answers)
}


function fillingStory(story,inputs){
    let filledstory=story;
    for(let i in inputs){
        filledstory=filledstory.replaceAll(i,inputs[i]);
    }

    console.log(filledstory)

    const output=document.getElementById('remo');

    output.innerText=filledstory;
}






