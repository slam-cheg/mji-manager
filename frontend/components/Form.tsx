import { useEffect, useState } from 'react';
import { validateEmail, validateFio, validatePassword } from '../utils/validation';

export interface FormInput {
  type: string;
  placeholder: string;
  id: string;
  minLength?: number;
  required?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
  preview?: boolean; // ✅ Теперь поддерживает preview
  withEditIcon?: boolean; // ✅ Теперь поддерживает иконку редактирования
}

interface FormProps {
  className?: string;
  inputs: FormInput[];
  buttonText: string;
  buttonId: string;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Form({ className, inputs, buttonText, buttonId, onSubmit }: FormProps) {
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    const isValid = inputs.every((input) => {
      if (input.id === 'login') return validateEmail(input.value);
      if (input.id === 'password') return validatePassword(input.value);
      if (input.id === 'fio') return validateFio(input.value);
      return true;
    });
    setFormDisabled(!isValid);
  }, [inputs]);

  return (
    <form className={`form ${className}`} onSubmit={onSubmit} noValidate>
      {inputs.map((input) => (
        <fieldset className="form__input-wrapper" key={input.id}>
          <input
            type={input.type}
            className={`form__input ${input.preview ? 'form__input_preview' : ''}`}
            placeholder={input.placeholder}
            id={input.id}
            minLength={input.minLength}
            required={input.required}
            value={input.value}
            onChange={(e) => input.onChange && input.onChange(e.target.value)}
            readOnly={input.preview} // ✅ Если preview = true, поле нельзя редактировать
          />
          {input.withEditIcon && <div className="form__edit-img"></div>}
          {input.errorMessage && (
            <span className="form__error form__error_hidden" id={`error-${input.id}`}>
              {input.errorMessage}
            </span>
          )}
        </fieldset>
      ))}
      {buttonText && <input className="button button_form" id={buttonId} value={buttonText} type="submit" />}
    </form>
  );
}
