import { useEffect, useRef, useState } from 'react';

function Test() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [font, setFont] = useState(1)
const ref=useRef(null)

  const handleFont = () => {
    setFont((prev)=>prev+1)

  }

  const decresefont = () => {
    setFont(font - 1)
  }

  function increase(){
    // if(ref.current) return;



    ref.current=setInterval(()=>{
      setFont((prev)=>prev+1)
    },100)
  }
  function stopIncreasing(){
    clearInterval(ref.current)
    ref.current=null;
  }
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length < 3) {
      alert('Name is required');
      setName('');
    } else if (!email.includes('@')) {
      alert('Enter a valid email');
      setEmail('');
    } else if (password.length < 5) {
      alert('Password must be at least 5 characters');
      setPassword('');
    } else {
      alert(`Submitted:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);

      // ✅ Store in localStorage (correct place)
      let existing = JSON.parse(localStorage.getItem('users'))
      const newUser = { name, email, password };

      existing = newUser;
      localStorage.setItem('users', JSON.stringify(existing));

      // Reset form
      setName('');
      setEmail('');
      setPassword('');
    }
  }
  function getdata() {
    const existing = JSON.parse(localStorage.getItem('users'));

    if (existing) {

      setEmail(existing.email)
      setName(existing.name)
      setPassword(existing.password)
    }
  }
  useEffect(() => {
    getdata()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <br />
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="button" onClick={togglePassword}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
        <br />
        <button type="submit">Submit</button>



      </form>

      <button 
      
      onMouseDown={increase}
      onMouseLeave={stopIncreasing}

      >
        

        increase</button>
      <button onClick={decresefont}>decresde</button>
      <p style={{ fontSize: font+"px" }}>Lorem ipsum sit amet consectetur adipisicing elit. Iusto eligendi asperiores fuga ducimus excepturi voluptas est possimus vero optio dolores debitis doloribus cupiditate quos, ipsam necessitatibus harum explicabo mollitia beatae.
      </p>
      <p >{font}</p>
    </div>
  );
}

export default Test;
