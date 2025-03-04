import { useState } from "react";
import { useGifts } from "../context/GiftContext";
import { useNavigate } from "react-router-dom";

function FormPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { addGift } = useGifts();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return; // Avoid adding if empty
        addGift(name, description);
        // Redirect to list after adding
        navigate("/list");
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Add New Gift</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Name of Person:</label>
                    <input
                        type="text"
                        className="w-full border rounded px-2 py-1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Sofía"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Gift Description:</label>
                    <input
                        type="text"
                        className="w-full border rounded px-2 py-1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Ex: Harry Potter t-shirt and poster"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default FormPage;
