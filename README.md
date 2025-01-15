# Real-Time Editor Boilerplate Template

This repository is a **Next.js 15** boilerplate template for a real-time collaborative text editor, built using **Liveblocks** and **TipTap**. It provides a clean, responsive, and extendable starting point for building advanced editing solutions.

## Features

- **Real-Time Collaboration**: Leverage Liveblocks for collaborative editing, enabling users to edit content simultaneously.
- **Rich Text Editing**: Built on TipTap with rich text formatting, including bold, italic, underline, headings, alignment, and lists.
- **Keyboard Shortcuts**: Customizable shortcuts for common editing commands.
- **Placeholder Support**: User-friendly placeholders for empty documents.
- **Status Bar**: Displays the word count in real-time.
- **Extensibility**: Easy to extend with additional TipTap extensions (e.g., mentions, images, links).
- **Responsive Design**: Styled with Tailwind CSS for a modern, adaptive layout.

## Prerequisites

- **Node.js** (>=16)
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository
```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project directory
cd <project-name>
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Configure Liveblocks
- Sign up for a Liveblocks account at [Liveblocks](https://liveblocks.io/).
- Create a new project in the Liveblocks dashboard.
- Copy your **Liveblocks API key**.
- Create a `.env.local` file in the project root and add your API key:

```env
NEXT_PUBLIC_LIVEBLOCKS_API_KEY=your-liveblocks-api-key
```

### 4. Run the Development Server
```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the editor.

## Project Structure

```
├── components
│   ├── Editor.tsx        # Core editor component
│   ├── Toolbar.tsx       # Toolbar for rich text formatting
│   ├── StatusBar.tsx     # Displays word count
│   └── Threads.tsx       # Placeholder for collaborative threads
├── pages
│   ├── _app.tsx          # App wrapper
│   └── index.tsx         # Main page
├── styles
│   └── globals.css       # Global styles
├── .env.local.example    # Example environment variables file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Key Dependencies

- **Next.js 15**: React-based framework for server-side rendering and static site generation.
- **Liveblocks**: Enables real-time collaborative features.
- **TipTap**: A flexible and extensible rich-text editor framework.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Lucide Icons**: Lightweight icon library for the toolbar icons.

## Customization

- **Extensions**: Add or customize TipTap extensions for features like mentions, tables, or custom keyboard shortcuts.
- **Styling**: Update the `globals.css` file or extend Tailwind's configuration for custom styling.
- **Components**: Modify or create components to extend functionality, such as saving documents, exporting to PDF, or adding integrations.

## Future Enhancements

- Add support for collaborative cursors to show other users' presence in real-time.
- Implement autosave functionality for seamless editing.
- Add authentication and document management.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉
