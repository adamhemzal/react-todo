import { ChangeEvent, useState } from "react"

export type InputProps = {
  onInputChange: (value: string) => void;
}

const Input = ({ onInputChange }: InputProps): JSX.Element => {
  const [value, setValue] = useState<string>("")

  return(
    <input type="text" value={value} onChange={(e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setValue(target.value)
      onInputChange(target.value)
    }}/>
  )
}
export default Input;