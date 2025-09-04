import React from 'react'

function Signup() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ name, email, password });
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg flex flex-col justify-center items-center p-10 mx-auto">
        <h2 className="text-gray-900 text-2xl mb-4 font-semibold title-font">Signup</h2>
        <p className="leading-relaxed mb-6 text-gray-600 text-center">Post-ironic portland shabby chic echo park, banjo fashion axe</p>

        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" required onChange={e => setName(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" required onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600 mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out" required minLength={8} onChange={e => setPassword(e.target.value)} />
          </div>

          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full" type='submit'>Register</button>
        </form>
        <p className="text-xs text-gray-500 mt-5 text-center">Already have an account? <a href="/login" className="text-indigo-500">Login</a></p>
      </div>
    </section>
  )
}

export default Signup