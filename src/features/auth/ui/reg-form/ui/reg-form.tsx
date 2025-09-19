import { RegFormUI } from './reg-form-ui.tsx'
import { useRegForm } from '../model/use-reg-form.ts'

export const RegForm = () => {
  const form = useRegForm()

  return <RegFormUI {...form} onSubmit={form.submitForm} />
}
