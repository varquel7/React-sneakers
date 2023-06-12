
// import './App.css';

function App() {
  return (
    <div className="wrapper">
  <header>
   <div className="headerLeft">
   <img className="logo" src="https://i.shgcdn.com/3af2fa79-00f3-4413-ab35-baae00253dd2/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="logo"/>
    <div>
      <h3>React sneakers</h3>
      <p>Магазин лучших кроссовок</p>
    </div>
   </div>
    <ul className="d-flex">
      <li>
        <img width={20} height={20} src="data:image/png;base64,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" alt="cart"/>
        <span>1205сом</span>
      </li>
      <li>
        <img width={20} height={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYhRYXrrS3OGaE4hCHZCQh99kuca9aBHCg&usqp=CAU/" alt="user"/>
      </li>
    </ul>
  </header>
  <div className="content"></div>
  <h1>Все кроссовки</h1>
  ...
    </div>
  );
}

export default App;