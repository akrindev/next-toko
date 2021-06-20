
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCategories } from "../action/product";

const Categories = ({ item }) => {
  return (
    <Link key={item.name} href={ `/category/${item.name}` }>
      <a className='flex items-center justify-center px-4 py-1 rounded-lg bg-purple-100 hover:bg-purple-600 hover:text-white'>{item.name}</a>
    </Link>
  );
};

export default function Category() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getAllCategories();

      setCategories(data)
    }

    fetchCategories()
  }, [])

  return (
    <div id='categories' className="mt-5 my-10">
      <div className='flex flex-wrap space-x-2 space-y-2'>
        {categories && categories.map(item => <Categories item={item} key={item.name} />)}
      </div>
    </div>
  );
}
