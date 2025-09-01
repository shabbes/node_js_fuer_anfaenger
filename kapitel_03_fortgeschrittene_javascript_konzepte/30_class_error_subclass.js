class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = 'ValidationError';
  }
}

try {
  throw new ValidationError('Invalid input');
} catch (error) {
  console.log(error.name); // ValidationError
  console.log(error.message); // Invalid input
}