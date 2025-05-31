
const date = new Date();
const dataName = date.getDate();
// const monthName = date.toLocaleString('default', { month: 'long' });
const monthName = date.getMonth();
const currentYear = date.getFullYear();


{/* In Line Style Css */}
const headingStyle = {
    backgroundColor : 'blue',
    textAlign : 'center',
    color : 'white',
    padding : '20px'
}

function Contant() {
  return (
    <>
      {/* <h1>Todo App</h1>
      <h3>Call Family</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis.</p>
      <p>{dataName + " / " + monthName + " / " + currentYear}</p>
      */}
     

     {/* In Line Style Css */}
      <h1 style={{color : 'red', fontSize : '40px'}}>Todo App</h1>
      <h1 style={headingStyle}>Todo App</h1>
      <h3>Call Family</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis.</p>
      <p>{dataName + " / " + monthName + " / " + currentYear}</p>
    </>
  );
}

export default Contant;


