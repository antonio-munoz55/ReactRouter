import { useParams, useNavigate } from "react-router-dom";
import { useGifts } from "../context/GiftContext";

function DetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getGiftById } = useGifts();

    const gift = getGiftById(id);

    if (!gift) {
        return (
            <div>
                <h2 className="text-xl font-bold mb-4">Gift not found</h2>
                <button
                    onClick={() => navigate("/list")}
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Gift Details</h2>
            <p className="mb-2">
                <strong>For:</strong> {gift.name}
            </p>
            <p className="mb-4">
                <strong>Description:</strong> {gift.description}
            </p>
            <button
                onClick={() => navigate("/list")}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
                Return
            </button>
        </div>
    );
}

export default DetailsPage;
