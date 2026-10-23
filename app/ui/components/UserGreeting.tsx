
export default function UserGreeting() {
  const customerName = "Mohit"
  const totalSessions = 0
  return (
    <div className="my-6">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {`Hello ${customerName}`}
      </h1>
      <p className="ml-1 mt-1 text-sm tracking-wide text-gray-500">
        {
          totalSessions > 0 ? `You've had ${totalSessions} practice sessions`
          : 
          "Nothing practiced today and that's okay."
        }
      </p>
    </div>
  )
}