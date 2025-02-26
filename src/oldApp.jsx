import Hello from './assets/Hello.jsx';
import Contact from './assets/Contact.jsx';
import Counter from './assets/Counter.jsx';
function App() {
  const helloData = [
    { name: 'Sirawat' , message: 'Hi there' },
    { name: 'Tom' , message: 'Hello..'}
  ];

  return(
    <div className='App'>
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key = {index} name = {data.name} message = {data.message}/>
      ))}
      <Contact email ="Sirawat@gmail.com" phone = "0945123756" />
    </div>
  );
}

export default App
