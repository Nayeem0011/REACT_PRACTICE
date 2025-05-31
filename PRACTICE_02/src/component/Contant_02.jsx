// import "./Style.css"

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

function contant_02() {
  return (
    <>
      <h1 className="names">Todo App</h1>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      {/* <div className="card"> 
        <h3 className="cardTitle">Call Family</h3>
        <p className="cardDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis.</p>
        <p className="cardFooter">{dataName + " / " + monthName + " / " + currentYear}</p>
      </div> */}
    </>
  )
}

export default contant_02;
