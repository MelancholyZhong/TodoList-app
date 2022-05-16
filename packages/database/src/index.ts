import { DBSchema, openDB } from 'idb'

import { createDBAccess } from './util'

export type TodoItem = {
  id: string
  title: string
  description: string
  duedate: string
  importance: number
  completed:boolean
}

export interface TodoDBSchema extends DBSchema {
  item: {
    key: TodoItem['id']
    value: TodoItem
  }
}

const dbAccess = createDBAccess<TodoDBSchema>(
  () => openDB('todo-db', 1, {
    upgrade (database) {
      database.createObjectStore('item', {
        keyPath: 'key'
      })
    }
  }))

dbAccess()



export const ItemDB = {
  create: async (...args: any[]) => {
    console.log('excessss');
    const db = await openDB('todo-db',1);
    db.add('item',args[0]);
    db.close();
  },
  query: async (...args: any[]) => {
    console.log('excessss');
    const db = await openDB('todo-db',1);
    db.add('item',args[0]);
    db.close();
  },
  update: (...args: any[]) => {},
  delete: (...args: any[]) => {}
}
