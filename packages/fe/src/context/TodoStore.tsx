import create from 'zustand'
import { persist } from 'zustand/middleware'

export type TodoItem = {
  id: string
  title: string
  description: string
  duedate: string
  importance: number
  completed: boolean
}

interface TodoStore {
  savedTheme: string
  changeTheme: () => void
  todos: TodoItem[]
  addTodo: (todo: TodoItem) => void
  completeTodo: (id: string) => void
  removeTodo: (id: string) => void
  clearCurrentTodo: () => void
  clearFinishedTodo: () => void
}

const initialState = {
  savedTheme: 'light',
  todos: [
    {
      id: '2',
      title: 'Add your first todo',
      description: "You can add a new todo using the '+' at the right bottom.",
      duedate: '2022-5-15',
      importance: 5,
      completed: false
    },
    {
      id: '1',
      title: 'Finished todo',
      description: 'Your finished todo is stored here and you can re-use them.',
      duedate: '2022-5-12',
      importance: 3,
      completed: true
    }
  ] as TodoItem[]
}

export const useStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      addTodo: (todo: TodoItem) => {
        set((state) => ({
          todos: [...state.todos, todo]
        }))
      },
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id)
        }))
      },
      completeTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? ({ ...todo, completed: !todo.completed } as TodoItem) : todo
          )
        }))
      },
      clearCurrentTodo: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.completed === true)
        }))
      },
      clearFinishedTodo: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.completed === false)
        }))
      },
      changeTheme: () => {
        set((state) => ({
          savedTheme: state.savedTheme === 'light' ? 'dark' : 'light'
        }))
      }
    }),
    {
      name: 'todolist'
    }
  )
)
