export type UserResponse = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    name: string
    lastName: string
}

export type User = {
    email: string
    password: string
    name?: string
    lastName?: string
}