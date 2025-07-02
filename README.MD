# Brazilian Validator JS

A lightweight and efficient JavaScript library for validating Brazilian documents and phone numbers.

## 🇧🇷 Features

- **CPF Validation**: Validate Brazilian individual taxpayer registry (CPF)
- **CNPJ Validation**: Validate Brazilian company taxpayer registry (CNPJ)
- **Phone Validation**: Validate Brazilian phone numbers (mobile and landline)
- **Zero Dependencies**: Lightweight library with no external dependencies
- **TypeScript Support**: Full TypeScript support with type definitions
- **Browser & Node.js**: Works in both browser and Node.js environments

## 📦 Installation

```bash
# Using npm
npm install @studiovisual/brazilian-validator-js

# Using yarn
yarn add @studiovisual/brazilian-validator-js

# Using pnpm
pnpm add @studiovisual/brazilian-validator-js
```

## 🚀 Usage

### CommonJS

```javascript
const { isValidCPF, isValidCNPJ, isValidPhone } = require('@studiovisual/brazilian-validator-js');

// CPF validation
console.log(isValidCPF('123.456.789-09')); // true or false
console.log(isValidCPF(12345678909)); // accepts with or without formatting

// CNPJ validation
console.log(isValidCNPJ('11.222.333/0001-81')); // true or false
console.log(isValidCNPJ(11222333000181)); // accepts with or without formatting

// Phone validation
console.log(isValidPhone('(11) 99999-9999')); // mobile
console.log(isValidPhone('(11) 3333-4444')); // landline
console.log(isValidPhone(1133334444)); // accepts with or without formatting
```

### ES Modules

```javascript
import { isValidCPF, isValidCNPJ, isValidPhone } from '@studiovisual/brazilian-validator-js';

// CPF validation
const cpfIsValid = isValidCPF('123.456.789-09');
console.log(cpfIsValid); // true or false

// CNPJ validation
const cnpjIsValid = isValidCNPJ('11.222.333/0001-81');
console.log(cnpjIsValid); // true or false

// Phone validation
const phoneIsValid = isValidPhone('(11) 99999-9999');
console.log(phoneIsValid); // true or false
```

### TypeScript

```typescript
import { isValidCPF, isValidCNPJ, isValidPhone } from '@studiovisual/brazilian-validator-js';

const cpf: string = '123.456.789-09';
const isValid: boolean = isValidCPF(cpf);
console.log(isValid); // true or false
```

## 📖 API Reference

### `isValidCPF(value: string | number): boolean`

Validates a Brazilian CPF (Cadastro de Pessoa Física).

**Parameters:**
- `value` (string | number): The CPF to validate (with or without formatting)

**Returns:** `boolean` - `true` if valid, `false` otherwise

**Examples:**
```javascript
isValidCPF('123.456.789-09'); // formatted
isValidCPF(12345678909); // unformatted
isValidCPF('000.000.000-00'); // false (invalid sequence)
```

### `isValidCNPJ(value: string | number): boolean`

Validates a Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica).

**Parameters:**
- `value` (string | number): The CNPJ to validate (with or without formatting)

**Returns:** `boolean` - `true` if valid, `false` otherwise

**Examples:**
```javascript
isValidCNPJ('11.222.333/0001-81'); // formatted
isValidCNPJ(11222333000181); // unformatted
isValidCNPJ('00.000.000/0000-00'); // false (invalid sequence)
```

### `isValidPhone(value: string | number): boolean`

Validates Brazilian phone numbers (mobile and landline).

**Parameters:**
- `value` (string | number): The phone number to validate (with or without formatting)

**Returns:** `boolean` - `true` if valid, `false` otherwise

**Examples:**
```javascript
isValidPhone('(11) 99999-9999'); // mobile with area code
isValidPhone(11999999999); // mobile without formatting
isValidPhone('(11) 3333-4444'); // landline
isValidPhone('1133334444'); // landline without formatting
```

## 🌐 Browser Support

This library works in all modern browsers that support ES5+:

- Chrome 23+
- Firefox 21+
- Safari 6+
- IE 9+
- Edge (all versions)

## 📋 Requirements

- Node.js 10.0.0 or higher (for Node.js usage)
- No external dependencies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development

```bash
# Clone the repository
git clone https://github.com/studiovisual/brazilian-validator-js.git

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Run linting
npm run lint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Brazilian government specifications for document validation algorithms
- Community contributions and feedback

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/studiovisual/brazilian-validator-js/issues) page
2. Create a new issue if your question hasn't been answered
3. Contact the maintainers

---

Made with ❤️ for the Brazilian developer community