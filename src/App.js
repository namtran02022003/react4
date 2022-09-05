
import './App.css';

function App() {
  return (
    <div>
        <div className="header">
          <img width="100%" src="https://www.w3schools.com/w3images/photographer.jpg" />
          <div className="text-header">
            <h1 style={{fontSize: '48px', letterSpacing: '4px'}}>JANE DOE</h1>
            <h5 style={{fontSize: '24px', letterSpacing: '4px'}}>PHOTOGRAPHER</h5>
          </div>
          <div className="menu-header">
            <a className="header-a-menu" href="#">home</a>
            <a className="header-a-menu" href="#">portfolio</a>
            <a className="header-a-menu" href="#">contact</a>
          </div>
        </div>
        <div className="content-image">
          <img className="image-content-small" src="https://www.w3schools.com/w3images/ocean.jpg" />
          <img className="image-content-small" src="https://www.w3schools.com/w3images/ocean2.jpg" />
          <img className="image-content-small" src="https://www.w3schools.com/w3images/falls2.jpg" />
          <img className="image-content-small" src="https://www.w3schools.com/w3images/mountainskies.jpg" />
          <img className="image-content-small" src="https://www.w3schools.com/w3images/ocean.jpg" />
          <img className="image-content-small" src="https://www.w3schools.com/w3images/mountains2.jpg" />
        </div>
        <div style={{backgroundColor: '#f1f1f1', maxWidth: '935px'}} className="content-image">
          <div className="content-form">
            <h1 className="center">contact</h1>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
              mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
              accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
              corper. Praesent tincidunt sed tellus.
            </p>
            <label>name</label>
            <input type="text" className="input-footer" />
            <label>email</label>
            <input type="text" className="input-footer" />
            <label>message</label>
            <input type="text" className="input-footer" />
            <button className="button-footer">send</button>
            <div className="text-footer">
              tran huy tu <a href="#">nam</a> 
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
