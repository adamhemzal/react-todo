import { ReactNode, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
  input {
    margin-right: 0.75rem;
  }
`;

export type TodoItemProps = {
  children: ReactNode;
  completed: boolean;
}

const TodoItem = ({ children, completed }: TodoItemProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(completed);

  const handleChange = () => {
    setChecked(!checked);
  }
  return(
    <div>
      <Label>
        <input 
          type="checkbox" 
          name="todo"
          checked={checked}
          onChange={handleChange} 
        />
        {children}
      </Label>
    </div>
  )
}

export default TodoItem;