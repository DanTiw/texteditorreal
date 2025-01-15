"use client";

import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Extension } from "@tiptap/core";
import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
} from "lucide-react";

const CustomKeyboardShortcuts = Extension.create({
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-1": () => this.editor.commands.toggleHeading({ level: 1 }),
      "Mod-2": () => this.editor.commands.toggleHeading({ level: 2 }),
      "Mod-3": () => this.editor.commands.toggleHeading({ level: 3 }),
    };
  },
});

function Toolbar({ editor }) {
  const [documentName, setDocumentName] = useState("Untitled document");
  const [isEditing, setIsEditing] = useState(false);

  if (!editor) return null;

  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center px-4 py-2 border-b border-gray-200">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
              className="px-2 py-1 border rounded w-64"
              autoFocus
            />
          ) : (
            <h1
              onClick={() => setIsEditing(true)}
              className="text-lg font-normal text-gray-700 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
            >
              {documentName}
            </h1>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-1 bg-white">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("bold") ? "bg-gray-100" : ""}`}
        >
          <Bold size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("italic") ? "bg-gray-100" : ""}`}
        >
          <Italic size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("underline") ? "bg-gray-100" : ""}`}
        >
          <Underline size={16} />
        </button>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: "left" }) ? "bg-gray-100" : ""}`}
        >
          <AlignLeft size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: "center" }) ? "bg-gray-100" : ""}`}
        >
          <AlignCenter size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive({ textAlign: "right" }) ? "bg-gray-100" : ""}`}
        >
          <AlignRight size={16} />
        </button>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("bulletList") ? "bg-gray-100" : ""}`}
        >
          <List size={16} />
        </button>
      </div>
    </div>
  );
}

function StatusBar({ editor }) {
  if (!editor) return null;

  const wordCount = editor.state.doc.textContent.split(/\s+/).length;

  return (
    <div className="flex items-center justify-end px-4 py-2 text-sm text-gray-500 border-t border-gray-200">
      <span>{wordCount} words</span>
    </div>
  );
}

export function Editor() {
  const liveblocks = useLiveblocksExtension();

  const editor = useEditor({
    extensions: [
      liveblocks,
      StarterKit.configure({ history: false }),
      Placeholder.configure({ placeholder: "Type @ to mention, or just start typing..." }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: true, allowBase64: true }),
      CustomKeyboardShortcuts,
    ],
    editorProps: {
      attributes: {
        class: "prose max-w-none focus:outline-none min-h-[calc(100vh-220px)]",
      },
    },
  });

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 mx-auto w-full max-w-[850px] bg-white shadow-lg rounded-lg p-6">
        <Toolbar editor={editor} />
        <div className="px-4 py-4">
          <EditorContent editor={editor} />
        </div>
        <StatusBar editor={editor} />
      </div>
    </div>
  );
}
