const TrendingItem = ({src,title,value}) => {
  return (
    <div className="trending-item">
      <div className="left">
        <img src={src} alt="icon" className="icon" />
      </div>
      <div className="right">
        <div className="title">{title}</div>
        <div className="value">{value}</div>
      </div>
    </div>
  )
}

export default TrendingItem
