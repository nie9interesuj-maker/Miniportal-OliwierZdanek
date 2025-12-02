const FruitList = () => {
    const owoce = ["mandaryna", "jablko", "Gruszka", "banan", "Kiwi"];
 
    return (
      <div>
        <ul>
          {owoce.map((owoce, index) => (
            <li key={index}>{owoce}</li>
          ))}
        </ul>
      </div>
    );
  };
 
  export default FruitList;