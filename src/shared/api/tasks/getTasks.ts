import type { Todo } from './tasks.model.ts'

export const getTasks = () => {
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Task 1',
          done: false,
        },
        {
          id: '2',
          title: 'Task 2',
          done: false,
        },
      ])
    }, 1000)
  })
}
