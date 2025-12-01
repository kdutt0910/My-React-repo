function Card({username, image}){
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative">
                <img
                    className="w-full h-64 object-cover"
                    src={image}
                    alt="Card image"
                />
                {/* gradient to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* text overlay */}
                <div className="absolute inset-0 flex items-end p-4">
                    <div className="text-white">
                        <h3 className="text-lg font-semibold">{username}</h3>
                        <p className="text-sm">Short description on the image</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;