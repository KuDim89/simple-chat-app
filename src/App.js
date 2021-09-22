import './App.css';
import Header from "./components/Header";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <nav className='nav'>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className='content'>
        <img className='content-header' src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkOdUDfgnkJ6pg25hxZboJY9V62vC8FB92g&usqp=CAU" alt=""/>
          +desc
        </div>
        <div>My posts</div>
        <div>New posts</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
}

export default App;
