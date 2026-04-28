import { useState } from 'react'

const ADMIN_PASSWORD = 'toni2026'

export default function AdminLogin({ onLogin }) {
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pass === ADMIN_PASSWORD) {
      onLogin(true)
    } else {
      setError(true)
      setPass('')
    }
  }

  return (
    <div className="min-h-screen bg-[#1e1f29] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="font-mono text-sm mb-2">
            <span className="text-purple">from</span>
            <span className="text-cyan ml-1">toni</span>
            <span className="text-purple ml-1">import</span>
            <span className="text-green ml-1">admin</span>
          </div>
          <h1 className="text-lg font-mono text-foreground font-bold">Admin Dashboard</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface/40 border border-[#44475a]/30 rounded-xl p-6">
          <label className="block text-xs font-mono text-comment mb-2">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => { setPass(e.target.value); setError(false) }}
            autoFocus
            className="w-full bg-[#282a36] border border-[#44475a] rounded-lg px-4 py-2.5 text-sm
              text-foreground outline-none focus:border-purple focus:shadow-[0_0_10px_rgba(189,147,249,0.2)]
              transition-all duration-300 font-mono"
          />
          {error && (
            <p className="text-red text-xs font-mono mt-2">Invalid password</p>
          )}
          <button
            type="submit"
            className="w-full mt-4 py-2.5 rounded-lg font-mono text-sm font-bold bg-purple text-[#282a36]
              hover:shadow-[0_0_20px_rgba(189,147,249,0.4)] transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
