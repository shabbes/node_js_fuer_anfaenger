// utilities.mjs
export function usedFunction() {
  console.log('Diese Funktion wird verwendet.');
}

export function unusedFunction() {
  console.log('Diese Funktion wird nicht verwendet.');
}

// main.mjs
import { usedFunction } from './utilities.mjs';

usedFunction();