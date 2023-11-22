export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      message: {
        Row: {
          createdAt: string
          email: string
          id: number
          isFreeRequest: boolean
          message: string
          name: string | null
        }
        Insert: {
          createdAt?: string
          email: string
          id?: number
          isFreeRequest?: boolean
          message: string
          name?: string | null
        }
        Update: {
          createdAt?: string
          email?: string
          id?: number
          isFreeRequest?: boolean
          message?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
