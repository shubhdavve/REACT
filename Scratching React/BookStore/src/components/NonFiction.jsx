import nonFictionData from '../nonfiction.json'
import BookCard from './BookCard';

console.log(nonFictionData)

export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Book</h1>

      <div className="books-container">
        {

          nonFictionData.map((el)=><BookCard image={el.img} title={el.title} price={el.price} author={el.author} year={el.year}/>)}
      </div>
    </div>
  );
}
