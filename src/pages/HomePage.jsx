function HomePage() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold mb-4">
                Welcome to gift management
            </h1>
            <img
                src="/images/storeHome.png"
                alt="Gift Icon"
                className="w-32 h-32"
            />
        </div>
    );
}

export default HomePage;