import { Controller } from 'react-hook-form'
import styles from './reg-form.module.scss'
import type { FormMethods, RegisterFormData } from '../model/types.ts'

interface RegisterFormProps extends FormMethods {
  onSubmit: (data: RegisterFormData) => void
}

export const RegFormUI = ({
  control,
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onSubmit,
}: RegisterFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.register}>Регистрация</h3>

      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <label>Имя пользователя</label>
          <input
            {...register('username')}
            type="text"
            placeholder="Введите имя пользователя"
            disabled={isSubmitting}
          />
          {errors?.username && (
            <p className={styles.error}>{errors.username.message}</p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label>Электронная почта</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Введите email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label>Мобильный телефон</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Введите телефон"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label>Пароль</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="Введите пароль"
                disabled={isSubmitting}
              />
            )}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  )
}
