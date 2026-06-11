import { useState } from "react";

type CreateTodoModalProps = {
    onClose: () => void;
    onSave: (title: string, description: string) => void;
};

export default function CreateTodoModal({
                                            onClose,
                                            onSave,
                                        }: CreateTodoModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-2xl bg-slate-800 p-6 text-white shadow-xl">
                <h2 className="mb-4 text-xl font-semibold">
                    Create todo
                </h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full rounded-xl bg-slate-900 p-3 outline-none"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full rounded-xl bg-slate-900 p-3 outline-none"
                        rows={4}
                    />
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-xl bg-slate-700 px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onSave(title, description)}
                        className="rounded-xl bg-violet-600 px-4 py-2"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}