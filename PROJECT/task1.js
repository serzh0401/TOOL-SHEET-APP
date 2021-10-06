let ust = document.getElementById('ust');
let ustnote = document.getElementById('ustnote');
let ustNoteInput = document.getElementById('a');
let forma = document.getElementById('forma');
let xy = document.getElementById('xy')
let inputs = xy.querySelectorAll('input[type="radio"]');
let z = document.getElementById('z')
let zinputs = z.querySelectorAll('input[type="radio"]');
let xypos = document.getElementById('xypos');
let posZ = document.getElementById('posz');
let select = document.getElementById('select');
let prog = document.getElementById('prog');
let proglist = document.getElementById("prlist");  
let toolTable = document.getElementsByTagName('table')
console.log(toolTable)
let list = document.getElementById('toollist')
let listItem = document.getElementById('listtitle');
let listComp = document.getElementById('listComp');
let ulList = document.getElementById('ullist')
    
let button = document.querySelector('but');

//let butPDF = ElemPDF.getElementsByTagName('button');

console.log(typeof(ustNoteInput.value))

anotherz.style.display = 'none';
			  let radioAnotherZ = document.getElementById('65')
			  console.log(radioAnotherZ)
			  
			 radioAnotherZ.addEventListener('change', function() {
				if(radioAnotherZ.checked){
					anotherz.style.display = 'inline';
				}else{
					anotherz.style.display = 'none';
				}
				
				
			 })
       anotherxy.style.display = 'none';
       let radioAnotherXY = document.getElementById('60')
			  console.log(radioAnotherZ)
			  
			 radioAnotherXY.addEventListener('change', function() {
				if(radioAnotherXY.checked){
					anotherxy.style.display = 'inline';
				}else{
					anotherxy.style.display = 'none';
				}
				
				
			 })

forma.onsubmit = function(event) {
    event.preventDefault()
    ust.innerHTML = "Setup " + select.value;
    if(ustNoteInput.value!== ''){
      ustnote.innerHTML = "(" + ustNoteInput.value + ")"
    }else{
      ustnote.innerHTML = ''
    }
       
    for (let input of inputs) {
		if (input.checked) {
      let chekxy = input.value
      if(chekxy =='60'){
        let anotherxy = document.getElementById('anotherxy')
                console.log(anotherxy.value)
                xypos.innerHTML ="XY" + anotherxy.value ;
      }else{
        xypos.innerHTML = input.value;
      }
			
		}
	}
  for (let zinput of zinputs) {
		if (zinput.checked) {
			//console.log(111)
            let chek = zinput.value
            console.log(chek)
            if(chek=='63'){
                let v = document.getElementById('v')
                console.log(v.value)
                posZ.innerHTML ="Z -" + v.value + "mm from top surface of the part";
            }
            else if(chek=='64'){
              let n = document.getElementById('n')
                console.log(n.value)
                posZ.innerHTML ="Z -" + n.value + "from bottom surface of the part";
            }else if(chek=='65'){
              let anotherz = document.getElementById('anotherz')
              
                console.log(anotherz.value)
                posZ.innerHTML ="Z " + anotherz.value ;
            }
            else{
              posZ.innerHTML = zinput.value;
              anotherz.style.display = 'none';
            }
            
			
		}
	}
  //proglist.appendChild(ul)
  let clone = ul.cloneNode(true);
  //clone.style.color = 'red'
  
  proglist.appendChild(clone);
  let cloneButtons = proglist.getElementsByClassName('del');
  //cloneButtons.style.display = none

  
  //let list = document.getElementById('toollist')
  //let tableClone = toolTable.cloneNode(true)
  //list.appendChild(tableClone)
  //list.appendChild(table);

  
  

    
}


let pr = document.getElementById('pr')
let but = document.getElementById('btns')
let inputsProgs = pr.querySelectorAll('input[type="radio"]');
let arr1 = [];
but.onclick = function(event) {   
      
  event.preventDefault()
      for (let inputsProg of inputsProgs) {
        if (inputsProg.checked) {
          
                let chekProg = inputsProg.value
                
                if(chekProg=='rastochka'){
                  let rastInfo = document.getElementById('rastochkatext')
                  let rastProg = document.getElementById('rastochkaprog')                    
                  console.log('rast')
                  arr1.push('%' + rastProg.value + '  borring hole(s) diametr ' + rastInfo.value +'mm')

                   
                }
               else if(chekProg=='frezerovka'){
                let freztInfo = document.getElementById('frezerovkatext')
                let freztProg = document.getElementById('frezerovkaprog')   
                  console.log('frez')
                  arr1.push('%' + freztProg.value + '  finish milling demention ' + freztInfo.value +'mm') 
                 
              }
              else if(chekProg=='another'){
                let anothertInfo = document.getElementById('anothertext')
                let anotherProg = document.getElementById('anotherprog')    
                console.log('anot')
                arr1.push('%' + anotherProg.value + '  ' + anothertInfo.value ) 
               
            }
      }
    }
    let li = document.createElement('li');
      li.innerHTML = arr1[arr1.length -1];
      let butt = document.createElement('button')
      butt.className = 'del'
      butt.innerHTML = 'delete'
      li.appendChild(butt)
      ul.appendChild(li)  
         
      
  };
   console.log(arr1)
let ul = document.getElementById('ul');
console.log(ul)



let readers = document.getElementsByClassName('del');

document.body.addEventListener('click', e => {
  if (e.target.classList.contains('del')) {
    e.target.parentElement.remove();}
})
console.log(readers)



var imgPreview = document.querySelector('.img-preview img');
 
var loadImg = function(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
 
    reader.onload = function(e) {
      imgPreview.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}
 
document.querySelector('#img').onchange = function() {
  loadImg(this);
}


//tool list

function readFile(object) {
  event.preventDefault()
  var file = object.files[0]
  var reader = new FileReader()
  reader.onload = function() {
    document.getElementById('out').innerHTML = reader.result
    var response =document.getElementById("out").innerHTML;
    //response.style.display = "none"
//tool list
let twoSizeArr = [];
let arr = response.split('(');
          let arrTool = [];
                      
          for(k=0;k<arr.length;k++){
              if(arr[k].indexOf('TOOL') == 0){
                  arrTool.push(arr[k].substr(0 ,arr[k].indexOf(')') ))
              }
          }
          console.log(arrTool)
          localStorage.setItem('1', arrTool);


          let arrZ = [];
          let korrekt = [];
          let pos = response.split('T');
          console.log(pos);
          for(g=0;g<pos.length;g++){
              if(pos[g].indexOf('M06') == -1){
                  delete pos[g];
                 // pos.splice(this.g, this.g);
              }
          }
          for(g=0;g<pos.length;g++){
            if(pos[g] !== undefined){
               korrekt.push(pos[g]) 
            }
            //else if(pos[g] !== undefined && pos[g].indexOf('G41') == -1){
            //  korrekt.push('-')
          //  }
        }
        console.log(korrekt)
        let toolList = [];
        for(m=0;m<korrekt.length;m++){
          toolList.push('TOOL ' +(korrekt[m].substr(0 ,korrekt[m].indexOf('M') )))
        }
        twoSizeArr.push(toolList)
        let korRes = [];
        for(m=0;m<korrekt.length;m++){
          if(korrekt[m].indexOf('G41') !== -1 || korrekt[m].indexOf('G42') !== -1 ){
          korRes.push('compensation - wear')
          }
          else{
            korRes.push('-')
          }
        }
        twoSizeArr.push(korRes);
        localStorage.setItem('2', korRes);

        let z = [];
        for(d=0;d<korrekt.length;d++){
          let zet = korrekt[d].split('Z');

          z.push(zet)
          zet = []
          continue;
        }
        console.log(z);
        let zRes=[];
        let a = [];
        for(e=0;e<z.length;e++){
         for(c=0;c<z[e].length;c++){
          zRes.push(Number(z[e][c].substr(0 ,z[e][c].indexOf('.') )))
          
          
          continue;
         }
         a.push(zRes);
         zRes=[];
         continue
          
        }
       console.log(a);
       for(q=0;q<a.length;q++){
        a[q].sort(function (a, b) {
           return a - b;
       });        

      }
      let zResalt = [];
      for(q=0;q<a.length;q++){
        zResalt.push(a[q][1] - 1)
      }
      twoSizeArr.push(zResalt)
      console.log(twoSizeArr)
      localStorage.setItem('3', zResalt);
      
      var table = document.createElement("table");
      console.log(table)
      function fillTable(table , twoSizeArr){
        for(w=0;w<twoSizeArr.length;w ++){
          let td = document.createElement('td');

          for(r=0;r<twoSizeArr[w].length;r++){
            let tr = document.createElement('tr');
            tr.innerHTML = twoSizeArr[w][r]
            td.appendChild(tr)
          }
          table.appendChild(td);
        }
        let div = document.getElementById('out')
        console.log(div)
        list.appendChild(table);

        
  i = 0;
  while (i < arrTool.length ) {
  li = document.createElement('li');
  li.innerHTML = arrTool[i];
  ulList.appendChild(li);
  i++;

  
  listItem.innerHTML = 'Tool table (compensation for diameter<br> and minimum tool length(mm))'

  
  //listComp.innerHTML = 'The presence of compensation for diameter<br> and minimum tool length(mm)'
  }
      }
      fillTable(table , twoSizeArr)

  }
  
   reader.readAsText(file)
   response=''
 
}

function generatePDF(){
  const ElemPDF = document.getElementById('pdf');
  
  document.body.style.background = 'white';
  html2pdf()
  .from(ElemPDF)
  .save();
  //let butPDF = ElemPDF.querySelectorAll('.del');
  //console.log(butPDF)
  //butPDF.style.color = 'white'

  for (let el of ElemPDF.querySelectorAll('.del')) el.style.visibility = 'hidden';


  

  
}
