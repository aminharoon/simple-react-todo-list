# React Todo App

A clean and interactive todo list application built with React and Tailwind CSS. Manage your daily tasks with ease using this feature-rich todo tracker.

## 📸 Preview

![Todo App Preview](./preview.png)
_Add a screenshot of your app here_

## ✨ Features

- ✅ **Add Todos** - Create new tasks quickly
- ✏️ **Edit Todos** - Inline editing with save functionality
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- ☑️ **Mark Complete** - Check off completed tasks with strike-through effect
- 💾 **Local Storage** - Automatic data persistence across sessions
- 🎨 **Modern UI** - Clean design with Tailwind CSS
- 📱 **Responsive** - Works seamlessly on all devices
- 🔄 **Real-time Updates** - Instant UI updates for all actions

## 🚀 Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Styling and design
- **Vite** - Build tool and development server
- **LocalStorage API** - Data persistence
- **Remix Icon** - Icons

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Todo
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. **Adding a Todo**: Type your task in the input field and click "Add" or press Enter
2. **Editing a Todo**: Click the edit icon (✏️) next to any todo, modify the text, and click save (💾)
3. **Completing a Todo**: Check the checkbox to mark a task as complete (adds strike-through)
4. **Deleting a Todo**: Click the delete icon (❌) to remove a task
5. **Data Persistence**: All your todos are automatically saved to local storage

## 📁 Project Structure

```
Todo/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx          # Main application component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles with Tailwind
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Local Storage Integration

Your todos are automatically saved to browser's local storage, ensuring your tasks persist even after closing the browser.

### Inline Editing

Click the edit button to enable inline editing mode. The input field appears directly in place, making it quick and intuitive to update tasks.

### Visual Feedback

- Completed tasks show with a strike-through and lighter color
- Smooth transitions for state changes
- Total todo count displayed at the top

## 📝 To-Do (Future Enhancements)

- [ ] Add task categories/tags
- [ ] Implement filtering (All, Active, Completed)
- [ ] Add due dates and reminders
- [ ] Dark/Light theme toggle
- [ ] Export/Import todos
- [ ] Search functionality
- [ ] Priority levels for tasks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Note**: To add a screenshot preview:

1. Run your app with `npm run dev`
2. Take a screenshot of the application
3. Save it as `preview.png` in the root directory
4. Or update the image path in this README if you use a different filename
