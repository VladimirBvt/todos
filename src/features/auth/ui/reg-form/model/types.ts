import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

export interface RegisterFormData {
  username: string
  email: string
  phone: string
  password: string
}

export interface FormMethods {
  control: Control<RegisterFormData>
  register: UseFormRegister<RegisterFormData>
  handleSubmit: UseFormHandleSubmit<RegisterFormData>
  errors: FieldErrors<RegisterFormData>
  isSubmitting: boolean
}
