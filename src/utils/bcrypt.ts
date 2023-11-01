import { genSaltSync, hashSync, compareSync } from 'bcryptjs'

export const hashPassword = (paintext: string): string => {
  const salt = genSaltSync(12)
  return hashSync(paintext, salt)
}

export const verifyPassword = (paintext: string, txtVal: string): boolean =>
  compareSync(paintext, txtVal)
