// Function for Real Operation
const realOperation = (): void => {
  console.log('Performing a real operation.')
}

// Using optional chaining with a function
const operation: (() => void) | undefined = realOperation

// Safe execution using optional chaining
operation?.()
