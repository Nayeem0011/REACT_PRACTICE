

const date = new Date();
const dataName = date.getDate();
// const monthName = date.toLocaleString('default', { month: 'long' });
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card() {
  return <div className="card"> 
           <h3 className="cardTitle">Call Family</h3>
           <p className="cardDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis.</p>
           <p className="cardFooter">{dataName + " / " + monthName + " / " + currentYear}</p>
        </div>
}


function Contant() {
  return (
    <>
      <h1 className="names">Todo App</h1>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default Contant;
