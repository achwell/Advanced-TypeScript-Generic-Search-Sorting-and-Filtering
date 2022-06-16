import IWidget from "../../interfaces/IWidget"
import Moment from "react-moment"

export function WidgetRenderer({created, description, id, isSpecialCard, rating, title, updated}: IWidget) {
    return (
        <div className="col-12 p-3">
            <div className={isSpecialCard ? "card specialCard":"card"}>
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{description}</p>
                    <p className="card-text font-italic">Rating: {rating}</p>
                </div>
                <div className="card-footer text-muted text-right">
                    <span className="float-left">#{id}</span>
                    created:&nbsp;<Moment fromNow date={created} />&nbsp;
                    updated:&nbsp;<Moment fromNow date={updated} />
                </div>
            </div>
        </div>
    )
}