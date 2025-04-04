# Mainstack Frontend Assessment

A modern React application for managing financial transactions and revenue tracking.

## Screenshots

|                                                   |                                                   |
| :-----------------------------------------------: | :-----------------------------------------------: |
| ![Screenshot 1](https://i.imgur.com/IzXJA07.jpeg) | ![Screenshot 2](https://i.imgur.com/RZ7J23u.jpeg) |

## 🚀 Features

- **Transaction Management**

  - View all transactions
  - Filter transactions by:
    - Date range
    - Transaction type
    - Transaction status
  - Export transaction lists
  - Real-time transaction updates

- **Revenue Analytics**

  - Total revenue tracking
  - Wallet balance monitoring
  - Transaction statistics
  - Visual data representation

- **User Experience**
  - Responsive design
  - Intuitive filtering interface
  - Clean and modern UI
  - Real-time updates

## 🛠 Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Testing**: Jest & React Testing Library
- **UI Components**: Shadcn/ui
- **Date Handling**: date-fns
- **Icons**: Lucide React

## 🏗 Project Structure

```markdown
src/
├── components/
│ ├── dashboard/
│ │ ├── BalanceCard.tsx
│ │ ├── TransactionFilter.tsx
│ │ ├── TransactionItem.tsx
│ │ ├── TransactionList.tsx
│ │ └── NoTransactions.tsx
│ ├── layout/
│ └── ui/
├── hooks/
│ └── useQueries.ts
├── lib/
│ └── utils.ts
├── pages/
│ └── Revenue.tsx
└── tests/
└── components/
```

## 🚦 Getting Started

1. **Clone the repository** - git clone <https://github.com/yourusername/mainstack-frontend>

2. **Install dependencies** - npm install

3. **Run development server** - npm run dev

4. **Run tests** - npm test

## 🧪 Testing

The project includes comprehensive testing:

- Component tests
- Hook tests
- Utility function tests
- Integration tests

Run tests with coverage:

```bash
npm test -- --coverage
```

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop
- Tablet
- Mobile devices

## 🔄 State Management

- React Query for server state
- Local state with React hooks
- Efficient caching and data updates

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom components from Shadcn/ui
- Consistent theming and design system

## 🔍 Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Husky for pre-commit hooks

## 📦 Build and Deploy

Build the project:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Initial work - [Oyero Habibulah](https://github.com/oyerohabib/)
