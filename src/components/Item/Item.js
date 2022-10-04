import "./Item.css"

const Item = ({notice}) => {
    return(
        <div className="card">
            <div className="titleCard"><h3>{notice.title}</h3></div>
            <div className="subTitle"><h5>{notice.subtitle}</h5></div>
                <div className="divImgCard"><img className="imgCard" src={notice.img}></img> </div>
                <div className="divBtnVer"><a href="#" className="btnVer">Ver más</a></div>
        </div>
    )
}

export default Item;