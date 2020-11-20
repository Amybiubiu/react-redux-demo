import React, {useRef} from 'react'

const AddTodo = ({onAddClicked}) => {
    const inputEl = useRef(null);
    const handleClick = () => {
        onAddClicked(inputEl.current.value);
        inputEl.current.value = '';
    }
    return(
        <div style={{marginTop: '100px'}}>
            <input type='text' ref={inputEl} />
            <button onClick={handleClick} style={{color: 'pink'}}>
              Add
            </button>
        </div>
    )
}
export default AddTodo

