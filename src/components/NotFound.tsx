import React from "react";
import "../styles/NotFound.css";

function NotFound() {
    return (
        <div className="NotFoundView">
            <p className="Top">NotFound 404</p>
            <p className="Bottom">
                웹 페이지를 <br/>
                표시할 수 없습니다.
            </p>
        </div>
    );
}

export default NotFound;