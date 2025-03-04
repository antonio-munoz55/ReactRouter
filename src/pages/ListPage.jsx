import { useGifts } from "../context/GiftContext";
import { Link } from "react-router-dom";

function ListPage() {
    const { gifts } = useGifts();

    if (gifts.length === 0) {
        return <h2 className="text-center mt-10 text-xl">No pending gifts.</h2>;
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Recipient List</h2>
            <ul className="space-y-2">
                {gifts.map((gift) => (
                    <li key={gift.id}>
                        <Link
                            to={`/details/${gift.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            {gift.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPage;
