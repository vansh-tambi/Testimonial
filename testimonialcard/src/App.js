import reviews from './data';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonial</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testimonial reviews ={reviews}/>
      </div>
    </div>
  );
}

export default App;
