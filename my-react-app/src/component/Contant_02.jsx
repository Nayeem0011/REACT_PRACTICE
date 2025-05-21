// import "./Style.css"

const date = new Date();
const dataName = date.getDate();
// const monthName = date.toLocaleString('default', { month: 'long' });
const monthName = date.getMonth();
const currentYear = date.getFullYear();


function contant_02() {
  return (
    <>
      <h1>Todo App</h1>
      <h3 className="names">Call Family</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis.</p>
      <p>{dataName + " / " + monthName + " / " + currentYear}</p>
    </>
  )
}

export default contant_02;
