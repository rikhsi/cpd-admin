import { InputType } from '@typings';

export function toggleEye(type: InputType): string {
  return type === 'password' ? '@tui.eye' : '@tui.eye-off';
}

export function togglePassword(type: InputType): InputType {
  return type === 'password' ? 'text' : 'password';
}
