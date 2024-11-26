interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  discount?: number;
}

export default function ProductCard({ title, price, image, discount }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{discount}%
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-medium">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
            {discount && (
              <p className="text-sm text-gray-500 line-through">
                ${(price / (1 - discount / 100)).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
      <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}