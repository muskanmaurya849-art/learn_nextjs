export default function DynamicRoute({ params }) {
  const { data } = params

  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h2>Pathname: /route/{data}</h2>
      <h2>Dynamic Parameter: {data}</h2>
    </div>
  )
}
