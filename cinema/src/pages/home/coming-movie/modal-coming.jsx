import React from "react";
import ReactPlayer from "react-player";

function ModalComing(props) {
    const{movie} = props;
  return (
    <div class="modal modal_trailer fade" id={`coming${movie.maPhim}`}>
      <div class="modal-dialog dialog_trailer">
        <div class="modal-content content_trailer">
          {/* <!-- Modal body --> */}
          <div class="modal-body">
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              // url={movie.trailer}
            />
          </div>

          {/* <!-- Modal footer --> */}
          <div class="modal-footer footer_trailer">
            <a data-dismiss="modal">+</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComing;
