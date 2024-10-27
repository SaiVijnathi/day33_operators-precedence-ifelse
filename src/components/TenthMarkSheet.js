import React, { useEffect, useRef } from 'react';

function TenthMarkSheet() {

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef= useRef();
  let hinInputRef= useRef();
  let engInputRef= useRef();
  let matInputRef= useRef();
  let sciInputRef= useRef();
  let socInputRef= useRef();
  let resultParaRef= useRef();
  const formRef = useRef();
  let telResultSpanRef= useRef();
  let hinResultSpanRef= useRef();
  let engResultSpanRef= useRef();
  let matResultSpanRef= useRef();
  let sciResultSpanRef= useRef();
  let socResultSpanRef= useRef();

  useEffect(()=>{
    console.log("Tenth MarkSheet component loaded");
  },[]);

  return (
    <div>
    <form ref={formRef}>
    <h2>Tenth Marks Sheet</h2>

    <div>
    <label>First Name</label>
    <input ref={firstNameInputRef} onFocus={()=>{
      firstNameInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      firstNameInputRef.current.style.backgroundColor="bisque";
    }}
    onBlur={()=>{
      firstNameInputRef.current.style.backgroundColor="";
    }}></input>
    <span></span>
    </div>


    <div>
    <label>Last Name</label>
    <input ref={lastNameInputRef} onFocus={()=>{
      lastNameInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      lastNameInputRef.current.style.backgroundColor="bisque";
    }}
    onBlur={()=>{
      lastNameInputRef.current.style.backgroundColor="";
    }}></input>
    <span></span>
    </div>

    <div>
    <label>Telugu</label>
    <input ref={telInputRef} onFocus={()=>{
      telInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      let marks = Number(telInputRef.current.value);
      if(marks>=35){
        telResultSpanRef.current.innerHTML="Pass";
      }else{
        telResultSpanRef.current.innerHTML="Fail";
      }
      telResultSpanRef.current.style.backgroundColor= marks>=35?"green":"red";
      if(marks>=100){
        alert("Invalid. (Marks cannot be greater than 100.)");
        telInputRef.current.value = "";
      }
    }}
    onBlur={()=>{
      telInputRef.current.style.backgroundColor="";
    }}
    ></input>
    <span ref={telResultSpanRef}></span>
    </div>


    <div>
    <label>Hindi</label>
    <input ref={hinInputRef} onFocus={()=>{
      hinInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
        let marks = Number(hinInputRef.current.value);
      if(marks>=35){
        hinResultSpanRef.current.innerHTML="Pass";
      }else{
        hinResultSpanRef.current.innerHTML="Fail";
      }
      hinResultSpanRef.current.style.backgroundColor= marks>=35?"green":"red";
      if(marks>=100){
        alert("Invalid. (Marks cannot be greater than 100.)");
        hinInputRef.current.value = "";
      }
    }}
    onBlur={()=>{
      hinInputRef.current.style.backgroundColor="";
    }}></input>
    <span ref={hinResultSpanRef}></span>
    </div>


    <div>
    <label>English</label>
    <input ref={engInputRef} onFocus={()=>{
      engInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      let marks = Number(engInputRef.current.value);
      if(marks>=35){
        engResultSpanRef.current.innerHTML="Pass";
      }else{
        engResultSpanRef.current.innerHTML="Fail";
      }
      engResultSpanRef.current.style.backgroundColor= marks>=35?"green":"red";
      if(marks>=100){
        alert("Invalid. (Marks cannot be greater than 100.)");
        engInputRef.current.value = "";
      }
    }}
    onBlur={()=>{
      engInputRef.current.style.backgroundColor="";
    }}></input>
    <span ref={engResultSpanRef}></span>
    </div>


    <div>
    <label>Maths</label>
    <input ref={matInputRef} onFocus={()=>{
      matInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      let marks = Number(matInputRef.current.value);
      if(marks>=35){
        matResultSpanRef.current.innerHTML="Pass";
      }else{
        matResultSpanRef.current.innerHTML="Fail";
      }
      matResultSpanRef.current.style.backgroundColor= marks>=35?"green":"red";
      if(marks>=100){
        alert("Invalid. (Marks cannot be greater than 100.)");
        matInputRef.current.value = "";
      }}}
    onBlur={()=>{
      matInputRef.current.style.backgroundColor="";
    }}></input>
    <span ref={matResultSpanRef}></span>
    </div>


    <div>
    <label>Science</label>
    <input ref={sciInputRef} onFocus={()=>{
      sciInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      let marks = Number(sciInputRef.current.value);
      if(marks>=35){
        sciResultSpanRef.current.innerHTML="Pass";
      }else{
        sciResultSpanRef.current.innerHTML="Fail";
      }
      sciResultSpanRef.current.style.backgroundColor= marks>=35?"green":"red";
      if(marks>=100){
        alert("Invalid. (Marks cannot be greater than 100.)");
        sciInputRef.current.value = "";
      }    }}
    onBlur={()=>{
      sciInputRef.current.style.backgroundColor="";
    }}></input>
    <span ref={sciResultSpanRef}></span>
    </div>


    <div>
    <label>Social</label>
    <input ref={socInputRef} onFocus={()=>{
      socInputRef.current.style.backgroundColor="pink";
    }}
    onChange={()=>{
      let marks = Number(socInputRef.current.value);
      if(marks>=35){
        socResultSpanRef.current.innerHTML="Pass";
      }else{
        socResultSpanRef.current.innerHTML="Fail";
      }
      socResultSpanRef.current.style.backgroundColor= marks>=35?"green":"red";
      if(marks>=100){
        alert("Invalid. (Marks cannot be greater than 100.)");
        socInputRef.current.value = "";
      }   }}
    onBlur={()=>{
      socInputRef.current.style.backgroundColor="";
    }}></input>
    <span ref={socResultSpanRef}></span>
    </div>


    <div>
      <button type="button" className='button1' onClick={()=>{

        let firstName= firstNameInputRef.current.value;
        let lastName= lastNameInputRef.current.value;
        let telMarks= Number(telInputRef.current.value);
        let hinMarks= Number(hinInputRef.current.value);
        let engMarks= Number(engInputRef.current.value);
        let matMarks= Number(matInputRef.current.value);
        let sciMarks= Number(sciInputRef.current.value);
        let socMarks= Number(socInputRef.current.value);

        let totalMarks= telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks;

        let perc= (totalMarks/600)*100;

        resultParaRef.current.innerHTML = `${firstName} ${lastName} got total marks of ${totalMarks} with percentage ${perc.toFixed(2)}%.`;

      }}>Calculate Result</button>
    </div>


    <div>
      <button type="button" className='button2' onMouseMove={()=>{
            formRef.current.style.backgroundColor = "lightgreen";
        }}>onMouseMove</button>
    </div>


    <div>
    <p ref={resultParaRef}></p>
    </div>
    </form>
    </div>
  )
}

export default TenthMarkSheet;