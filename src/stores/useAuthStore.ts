import { defineStore } from 'pinia'
import { auth } from '@/auth.service'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import router from '@/router'

interface State {
  id: string | null
  email: string | null,
  error: unknown
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): State => {
    return {
      id: localStorage.getItem('id') || null,
      email: localStorage.getItem('email') || null,
      error: null
    }
  },
  getters: {
    userDetails(state) {
      return {
        ...state
      }
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user && user.email) {
          this.id = user.uid
          this.email = user.email
          localStorage.setItem('id', user.uid)
          localStorage.setItem('email', user.email)
          router.replace({ name: 'dashboard' })
        } else {
          this.id = null
          this.email = null
          localStorage.clear()
          if(router.currentRoute.value.path === '/dashboard') {
            router.replace({ name: 'home' })
          }          
        }
      })
    },
    async signup({ email, password }: { email: string, password: string }) {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        if (user) {
          router.replace({ name: 'dashboard' })
        }

      } catch (err) {
        this.error = err
        throw err
      }
    },
    async login({ email, password }: { email: string, password: string }) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        if (res) {
          router.replace({ name: 'dashboard' })
        }
      } catch (err) {
        this.error = err
        throw err
      }
    },
    async logout() {
      try {
        await signOut(auth)
        router.replace({ name: 'home' })
      } catch (err) {
        this.error = err
        throw err
      }
    }
  }
})
