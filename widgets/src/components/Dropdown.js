import React,{useState, useEffect,useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) =>{

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(()=>{

    const onBodyClick = ((event) =>{
        // console.log(event.target)
        // console.log('Body click')
        if (ref.current.contains(event.target)){
          console.log(ref.current)
          return;
        }

        setOpen ( false)
        ;
      },{capture:true})


    document.body.addEventListener('click',onBodyClick);


    return () =>{
      document.body.removeEventListener('click', onBodyClick);
    }

  },[]);

  const renderedOptions = options.map((option) =>{

    if (option.value === selected.value){
      return null;

    }

    return(
      <div key = {option.value} className = 'item'
      onClick={()=>{
        // console.log('item clicked')
        onSelectedChange(option)
      }}
      >
        {option.label}
      </div>
    )

  })



// console.log(ref.current)

  return (
    <div ref = {ref} className = 'ui form'>
      <div className = 'field'>
        <label className = 'label'>{label}</label>
          <div onClick = {()=>{
            // console.log("Dropdown click")
            setOpen(!open)}
          }
          className = {`ui selection dropdown ${open? 'visible active':''}`}>
            <i className = 'dropdown icon'></i>
            <div className = 'text'>{selected.label}</div>
              <div className = {`menu  ${open ? 'visible transition':''}`}>
                {renderedOptions}
              </div>
          </div>
      </div>
    </div>

  )


} ;
export default Dropdown;
