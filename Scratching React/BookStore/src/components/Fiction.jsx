import fictionData from '../fiction.json'
import BookCard from './BookCard';
// console.log(fictionData)


export default function Fiction() {
  return (
    <div>
      <h1>Fiction Data</h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {

          fictionData.map((el)=><BookCard image={el.img} title={el.title} price={el.price} author={el.author} year={el.year}/>)
        }
      </div>
    </div>
  );
}
