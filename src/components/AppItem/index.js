import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl} = details

  return (
    <li className="app-item" key={appId}>
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
