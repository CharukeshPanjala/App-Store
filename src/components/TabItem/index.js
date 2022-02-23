import './index.css'

const TabItem = props => {
  const {details, activeTab, changeActiveId} = props
  const {tabId, displayText} = details
  let activeClass = ''
  if (activeTab === tabId) {
    activeClass = 'active'
  }
  const onClickButton = () => {
    changeActiveId(tabId)
  }
  return (
    <li className="tab-item" id={tabId}>
      <button
        type="button"
        className={`tab-name ${activeClass}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
