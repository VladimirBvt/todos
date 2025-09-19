import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { RegisterFormData } from './types'
import { registerSchema } from './schema'

export const useRegForm = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  })

  const submitForm = async (data: RegisterFormData) => {
    try {
      // Здесь будет вызов API
      console.log({ data })
      reset()
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return {
    control,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitForm,
  }
}
