import { useState } from 'react'
export interface formFuncInput {
  updateType: string
  value: string
}

type updateFormFunc = (Input: formFuncInput) => void

interface Props {
  labelTitle: string | undefined
  labelStyle: string | ''
  type: string | ''
  containerStyle: string | ''
  defaultValue: string | undefined
  placeholder: string | ''
  updateFormValue: updateFormFunc
  updateType: string
}

function InputText (props: Props) {
  const { labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType } = props
  const [value, setValue] = useState(defaultValue)

  const updateInputValue = (val: string) => {
    setValue(val)
    updateFormValue({ updateType, value: val })
  }

  return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={`label-text text-base-content ${labelStyle}`}>{labelTitle}</span>
            </label>
            <input type={(type.length > 0) ? type : 'text'} value={value} placeholder={(placeholder.length > 0) ? placeholder : ''} onChange={(e) => { updateInputValue(e.target.value) }}className="input  input-bordered w-full " />
        </div>
  )
}

export default InputText
