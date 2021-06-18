import Link from "next/link";

const categoriesList = [
  { name: "Baju Koko" },
  { name: "Baju Kebaya" },
  { name: "Pashmina" },
];

const Categories = ({ item }) => {
  return (
    <Link key={item.name} href={ `/category/${item.name}` }>
      <a className='flex-1 px-4 py-1 rounded-lg bg-purple-100 hover:bg-purple-600 hover:text-white'>{item.name}</a>
    </Link>
  );
};

export default function Category() {
  return (
    <div id='categories'>
      <div className=''>
        <h1 className='text-2xl font-semibold'>Kategori</h1>
      </div>

      <div className='flex flex-row overflow-x-scroll space-x-2 my-5'>
        {categoriesList && categoriesList.map(item => <Categories item={item} key={item.name} />)}
      </div>
    </div>
  );
}
