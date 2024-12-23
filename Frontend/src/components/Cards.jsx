import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-4 p-3">
      <div className="card bg-base-100 w-92 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1728812082~exp=1728815682~hmac=84637ffcadd8fdc429b5562aa9b2e2de4cece8001e1db1968daf88e25114530f&w=740"
            alt={item.title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center justify-between">
            {item.title}
            <div className="badge badge-secondary py-5">Best Seller</div>
          </h2>
          <p className="text-gray-600">Read Everyday and learn something new in every day</p>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">${item.price}</div>
            <button className="cursor-pointer px-4 py-2 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
